import { fromJS } from 'immutable';
import navigationContainerReducer from '../reducer';

describe('navigationContainerReducer', () => {
  it('returns the initial state', () => {
    const expectedState = {
      topics: [],
    };
    const state = navigationContainerReducer(undefined, {});
    expect(state).toEqual(fromJS(expectedState));
  });
});
