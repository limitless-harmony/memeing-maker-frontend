import React from 'react';
import { shallow } from 'enzyme';
import Memes from 'components/AllMemes';

describe('Testing the Featured page component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Memes />);
    expect(wrapper.find('div'));
    expect(wrapper).toMatchSnapshot();
  });
});
