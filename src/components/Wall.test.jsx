import React from 'react';
import { shallow } from 'enzyme';
import Wall from 'components/Wall';

describe('Testing the Featured page component', () => {
  const wall = {
    name: 'Example wall',
    memes: [],
  };
  it('renders without crashing', () => {
    const wrapper = shallow(<Wall wall={wall} />);
    expect(wrapper.find('div'));
    expect(wrapper).toMatchSnapshot();
  });
});
