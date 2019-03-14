import React from 'react';
import { shallow } from 'enzyme';

import { SelectImage } from 'components/SelectImage';

import * as imageHelper from 'helpers/image';

const mockFunction = jest.fn();

describe('Testing the SelectImage page component', () => {
  const props = {
    selectedImage: '/images/me.png',
    actions: {
      hideModal: mockFunction,
      selectImage: mockFunction,
    },
  };
  it('renders without crashing', () => {
    const wrapper = shallow(<SelectImage />);
    expect(wrapper.find('div'));
    expect(wrapper).toMatchSnapshot();
  });
  it('invoking changeText updates the state', () => {
    const wrapper = shallow(<SelectImage {...props} />);
    const instance = wrapper.instance();
    expect(wrapper.state('imageUrl')).toBe('');
    const event = {
      currentTarget: {
        name: 'imageUrl',
        value: 'veraclins.com',
      },
    };
    instance.changeText(event);
    expect(wrapper.state('imageUrl')).toBe('veraclins.com');
  });
  it('invoking onFileChange updates the state', async () => {
    const wrapper = shallow(<SelectImage {...props} />);
    const instance = wrapper.instance();
    expect(wrapper.state('imageUrl')).toBe('');
    const blob = new Blob(['image'], { type: 'image/png' });
    blob.lastModifiedDate = '';
    blob.name = 'filename.png';
    const event = {
      target: {
        files: [blob],
      },
    };
    const dataUrl = await imageHelper.readFile(blob);
    await instance.onFileChange(event);
    expect(wrapper.state('imageUrl')).toBe(dataUrl);
  });
  it('invoking onCropChange updates the state', () => {
    const wrapper = shallow(<SelectImage {...props} />);
    const instance = wrapper.instance();
    expect(wrapper.state('crop')).toEqual({ x: 0, y: 0 });
    const crop = { x: 200, y: 200 };
    instance.onCropChange(crop);
    expect(wrapper.state('crop')).toEqual({ x: 200, y: 200 });
  });
  it('invoking onZoomChange updates the state', () => {
    const wrapper = shallow(<SelectImage {...props} />);
    const instance = wrapper.instance();
    expect(wrapper.state('zoom')).toEqual(1);
    const zoom = 2;
    instance.onZoomChange(zoom);
    expect(wrapper.state('zoom')).toEqual(2);
  });
  it('invoking onCropComplete updates the state', () => {
    const wrapper = shallow(<SelectImage {...props} />);
    const instance = wrapper.instance();
    expect(wrapper.state('croppedAreaPixels')).toEqual({});
    const croppedAreaPixels = { x: 200, y: 200 };
    instance.onCropComplete(croppedAreaPixels, croppedAreaPixels);
    expect(wrapper.state('croppedAreaPixels')).toEqual({ x: 200, y: 200 });
  });
  it('invoking uploadImageFile records the cropped image and closes the select-image modal', () => {
    const wrapper = shallow(<SelectImage {...props} />);
    const instance = wrapper.instance();
    instance.uploadImageFile();
    expect(mockFunction).toHaveBeenCalled();
  });
});
