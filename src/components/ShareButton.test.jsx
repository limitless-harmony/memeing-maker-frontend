import React from 'react';
import { shallow } from 'enzyme';

import { ShareButton } from 'components/ShareButton';

const mockFunction = jest.fn();
describe('Testing the ShareButton component', () => {
  const props = {
    router: {
      location: {
        pathname: '/',
      },
    },
    network: 'facebook',
    actions: {
      hideModal: mockFunction,
    },
  };
  it('renders without crashing', () => {
    const wrapper = shallow(<ShareButton {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('it opens the share window and closes the modal', () => {
    const wrapper = shallow(<ShareButton {...props} />);
    const instance = wrapper.instance();
    instance.onClick();
    expect(mockFunction).toHaveBeenCalled();
  });
});
