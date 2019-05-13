import React from 'react';
import { shallow } from 'enzyme';

import { Header } from 'components/Header';
import { history } from 'store';

const mockFunction = jest.fn();
describe('Testing the Header component', () => {
  const props = {
    authenticated: false,
    history,
    location: {
      pathname: '/',
    },
    actions: {
      showModal: mockFunction,
      savePathFrom: mockFunction,
    },
  };
  it('renders without crashing', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('header'));
    expect(wrapper).toMatchSnapshot();
  });
  it('the share button redirects to the login page if the user is not logged in', () => {
    const wrapper = shallow(<Header {...props} />);
    const instance = wrapper.instance();
    instance.share();
    expect(mockFunction).toHaveBeenCalled();
  });
});
