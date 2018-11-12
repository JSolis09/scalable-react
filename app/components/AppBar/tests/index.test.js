import React from 'react';
import { shallow } from 'enzyme';

import AppBar from '../index';

describe('<AppBar />', () => {
  it('should render correctly', () => {
    const appBarComponent = shallow(<AppBar />);
    expect(appBarComponent).toMatchSnapshot();
  });
});
