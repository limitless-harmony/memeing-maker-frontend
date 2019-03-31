import React from 'react';
import { shallow } from 'enzyme';
import Masonry from 'components/Masonry';

describe('Testing the Masonry component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Masonry>
        <div>Anything can be here</div>
        <div>Anything can be here</div>
      </Masonry>
    );
    expect(wrapper.find('div'));
    expect(wrapper).toMatchSnapshot();
  });
});
