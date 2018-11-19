import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render correctly', () => {
    const homeComponent = shallow(<HomePage />);
    expect(homeComponent).toMatchSnapshot();
  });
});
