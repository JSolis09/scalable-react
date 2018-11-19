import { requestLinksSucceeded, requestLinksFailed } from '../actions';
import { REQUEST_LINKS_SUCCEEDED, REQUEST_LINKS_FAILED } from '../constants';

describe('LinkListContainer actions', () => {
  it('should has a type of REQUEST_LINKS_SUCCEEDED', () => {
    const expected = {
      type: REQUEST_LINKS_SUCCEEDED,
    };
    expect(requestLinksSucceeded()).toEqual(expected);
  });
  it('should has a type of REQUEST_LINKS_FAILED', () => {
    const expected = {
      type: REQUEST_LINKS_FAILED,
    };
    expect(requestLinksFailed()).toEqual(expected);
  });
});
