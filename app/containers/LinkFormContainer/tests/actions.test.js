import { addLink } from '../actions';
import { ADD_LINK } from '../constants';

describe('LinkFormContainer actions', () => {
  describe('Add Link Action', () => {
    it('has a type of ADD_LINK', () => {
      const expected = {
        type: ADD_LINK,
      };
      expect(addLink()).toEqual(expected);
    });
  });
});
