import React from 'react';
import { shallow } from 'enzyme';

import { Header } from 'components/Header';

const mockFunction = jest.fn();
describe('Testing the Header component', () => {
  const props = {
    authenticated: false,
    actions: {
      showModal: mockFunction,
    },
  };
  it('renders without crashing', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('header'));
    expect(wrapper).toMatchSnapshot();
  });
  it('it opens the auth modal if the user is not logged in', () => {
    const wrapper = shallow(<Header {...props} />);
    const instance = wrapper.instance();
    instance.share();
    expect(mockFunction).toHaveBeenCalled();
  });
});
