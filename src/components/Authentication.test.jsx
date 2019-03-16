import React from 'react';
import { shallow } from 'enzyme';

import Authentication from 'components/Authentication';

const mockFunction = jest.fn();
describe('Testing the Authentication component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Authentication />);
    expect(wrapper).toMatchSnapshot();
  });
  it('it calls the handleLogin method when an icon is clicked', () => {
    const wrapper = shallow(<Authentication />);
    const instance = wrapper.instance();
    instance.handleLogin = mockFunction;
    instance.loginWithGoogle();
    instance.loginWithFacebook();
    instance.loginWithLinkedIn();
    expect(mockFunction).toHaveBeenCalledTimes(3);
  });
});
