import React from 'react';
import { shallow } from 'enzyme';
import LinkList from '../index';

describe('<LinkList />', () => {
  it('should render correctly', () => {
    const props = {
      links: [],
    };
    const linkComponent = shallow(<LinkList {...props} />);
    expect(linkComponent).toMatchSnapshot();
  });
});
