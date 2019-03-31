import React from 'react';
import { shallow } from 'enzyme';
import MemeCard from 'components/MemeCard';

describe('Testing the MemeCard component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <MemeCard
        imageUrl="www.me.memememem"
        topText="A top text"
        bottomText="A bottom text"
      />
    );
    expect(wrapper.find('div'));
    expect(wrapper).toMatchSnapshot();
  });
});
