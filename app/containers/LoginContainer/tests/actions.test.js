import { login } from '../actions';
import { LOGIN } from '../constants';

describe('LoginContainer actions', () => {
  describe('Login Action', () => {
    it('has a type of LOGIN', () => {
      const expected = {
        type: LOGIN,
      };
      expect(login()).toEqual(expected);
    });
  });
});
