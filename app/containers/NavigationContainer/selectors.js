import { createSelector } from 'reselect';
import { initialState } from './reducer';
import selectLoginContainer from '../LoginContainer/selectors';

/**
 * Direct selector to the navigationContainer state domain
 */

const selectNavigationContainerDomain = state =>
  state.get('navigationContainer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by NavigationContainer
 */

const makeSelectNavigationContainer = () =>
  createSelector(
    selectNavigationContainerDomain,
    selectLoginContainer(),
    (substate, loginSubState) => Object.assign(substate.toJS(), loginSubState),
  );

export default makeSelectNavigationContainer;
export { selectNavigationContainerDomain };
