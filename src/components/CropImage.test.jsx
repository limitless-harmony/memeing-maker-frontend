import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import CropImage from 'components/CropImage';

describe('Testing the CropImage component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<CropImage />);
    expect(wrapper).toMatchSnapshot();
  });
});
