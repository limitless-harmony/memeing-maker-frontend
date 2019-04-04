import React from 'react';
import { shallow, mount } from 'enzyme';

import { CreateMeme } from 'pages/CreateMeme';

import * as imageHelper from 'helpers/image';

const mockFunction = jest.fn();

describe('Testing the CreateMeme page component', () => {
  const props = {
    selectedImage: '/images/me.png',
    actions: {
      showModal: mockFunction,
      selectImage: mockFunction,
    },
  };
  it('renders without crashing', () => {
    const wrapper = shallow(<CreateMeme />);
    expect(wrapper.find('div'));
    expect(wrapper).toMatchSnapshot();
  });
  it('it loads an image when the component mounts', () => {
    const wrapper = shallow(<CreateMeme {...props} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'loadImage');
    instance.componentDidMount();
    expect(spy).toHaveBeenCalled();
  });
  it('invoking changeText updates the state', () => {
    const wrapper = shallow(<CreateMeme {...props} />);
    const instance = wrapper.instance();
    expect(wrapper.state('topText')).toBe('');
    const event = {
      currentTarget: {
        name: 'topText',
        value: 'Veraclins',
      },
    };
    instance.changeText(event);
    expect(wrapper.state('topText')).toBe('Veraclins');
  });
  it('invoking selectImage opens the select-image modal', () => {
    const wrapper = shallow(<CreateMeme {...props} />);
    const instance = wrapper.instance();
    instance.selectImage();
    expect(mockFunction).toHaveBeenCalled();
  });
  it('it composes the meme into an image', () => {
    imageHelper.composeImage = mockFunction;
    const wrapper = mount(<CreateMeme {...props} />);
    const instance = wrapper.instance();
    instance.composeMeme();
    expect(mockFunction).toHaveBeenCalled();
  });
});
