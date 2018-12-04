import { createSelector } from 'reselect';
import { initialState } from './reducer';
import selectNavigationContainer from '../NavigationContainer/selectors';

/**
 * Direct selector to the linkListContainer state domain
 */

const selectLinkListContainerDomain = state =>
  state.get('linkListContainer', initialState);

/**
 * Other specific selectors
 */

const selectRouteTopic = () => (state, props) => {
  return props.match.params.topicName;
};
const selectTopic = () => createSelector(
  selectNavigationContainer(),
  selectRouteTopic(),
  (navigationState, routeTopicName) => {
    const selectedTopic = navigationState.topics.find(t => t.name === routeTopicName);
    return selectedTopic || {name: ''};
  }
);
/**
 * Default selector used by LinkListContainer
 */
const makeSelectLinkListContainer = () => createSelector(
  selectLinkListContainerDomain,
  selectTopic(),
  (substate, topic) => Object.assign(substate.toJS(), {topicName: topic.name}),
);

export default makeSelectLinkListContainer;
export { selectLinkListContainerDomain };
