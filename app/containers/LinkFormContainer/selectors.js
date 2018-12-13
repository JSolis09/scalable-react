import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the linkFormContainer state domain
 */

const selectLinkFormContainerDomain = state =>
  state.get('linkFormContainer', initialState);

/**
 * Other specific selectors
 */
const selectRouteTopic = () => (state, props) => props.match.params.topicName;
/**
 * Default selector used by LinkFormContainer
 */

const makeSelectLinkFormContainer = () =>
  createSelector(
    selectLinkFormContainerDomain,
    selectRouteTopic(),
    (substate, topicName) => Object.assign(substate.toJS(), { topicName }),
  );

export default makeSelectLinkFormContainer;
export { selectLinkFormContainerDomain };
