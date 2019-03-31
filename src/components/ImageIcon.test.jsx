import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ImageIcon from 'components/ImageIcon';
import { calculateRem } from 'styles';

describe('Testing the ImageIcon component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ImageIcon src="www.me.memememem" />);
    expect(wrapper.find('img'));
    expect(wrapper).toMatchSnapshot();
  });
  it('It changes the width and height', () => {
    const tree = renderer.create(<ImageIcon height={50} width={50} />).toJSON();
    expect(tree).toHaveStyleRule('height', `${calculateRem(50)}`);
    expect(tree).toHaveStyleRule('width', `${calculateRem(50)}`);
  });
});
