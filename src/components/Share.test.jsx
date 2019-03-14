import React from 'react';
import { shallow } from 'enzyme';
import Share from 'components/Share';

describe('Testing the Share component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Share />);
    expect(wrapper.find('div'));
    expect(wrapper).toMatchSnapshot();
  });
});
