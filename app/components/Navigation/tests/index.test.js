import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../index';

describe('<Navigation />', () => {
  it('should render correctly', () => {
    const props = {
      topics: [],
      selectTopic: () => {},
    };
    const linkComponent = shallow(<Navigation {...props} />);
    expect(linkComponent).toMatchSnapshot();
  });
});
