import React from 'react';
import { shallow } from 'enzyme';

import { Modal } from 'components/Modal';

const mockFunction = jest.fn();
describe('Testing the Modal component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Modal>Sample Modal</Modal>);
    expect(wrapper.find('Modal'));
    expect(wrapper).toMatchSnapshot();
  });
  it('it closes when the close button is clicked', () => {
    const props = {
      actions: {
        hideModal: mockFunction,
      },
    };
    const wrapper = shallow(<Modal {...props}>Sample Modal</Modal>);
    const instance = wrapper.instance();
    instance.close();
    expect(mockFunction).toHaveBeenCalled();
  });
});
