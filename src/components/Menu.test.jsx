import React from 'react';
import { shallow } from 'enzyme';

import { Menu } from 'components/Menu';

describe('Testing the Menu component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper).toMatchSnapshot();
  });
});
