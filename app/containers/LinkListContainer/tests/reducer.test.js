import { fromJS } from 'immutable';
import REQUEST_LINKS_SUCCEEDED from '../constants';
import linkListContainerReducer from '../reducer';

describe('linkListContainerReducer', () => {
  it('returns the initial state', () => {
    const expectedState = {
      links: [],
    };
    const state = linkListContainerReducer(undefined, {});
    expect(state).toEqual(fromJS(expectedState));
  });

  it('returns links when action type is REQUEST_LINKS_SUCCEEDED', () => {
    const mockLinks = [];
    const action = {
      type: REQUEST_LINKS_SUCCEEDED,
      links: mockLinks,
    };
    const expectedState = {
      links: [...mockLinks],
    };
    const state = linkListContainerReducer(undefined, action);
    expect(state).toEqual(fromJS(expectedState));
  });
});
