import { requestTopics } from '../actions';
import { REQUEST_TOPICS } from '../constants';

describe('NavigationContainer actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: REQUEST_TOPICS,
      };
      expect(requestTopics()).toEqual(expected);
    });
  });
});
