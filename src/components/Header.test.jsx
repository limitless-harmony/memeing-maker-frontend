import React from 'react';
import { shallow } from 'enzyme';

import Header from 'components/Header';

describe('Testing the Header component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header'));
    expect(wrapper).toMatchSnapshot();
  });
});
