import React from 'react';
import { shallow } from 'enzyme';
import Featured from 'pages/Featured';

describe('Testing the Featured page component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Featured />);
    expect(wrapper.find('div'));
    expect(wrapper).toMatchSnapshot();
  });
});
