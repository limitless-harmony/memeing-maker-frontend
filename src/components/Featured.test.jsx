import React from 'react';
import { shallow } from 'enzyme';
import FeaturedMemes from 'components/Featured';

describe('Testing the Featured page component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<FeaturedMemes />);
    expect(wrapper.find('div'));
    expect(wrapper).toMatchSnapshot();
  });
});
