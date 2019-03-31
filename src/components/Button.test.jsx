import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

import Button from 'components/Button';

describe('Testing the Button component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button'));
    expect(wrapper).toMatchSnapshot();
  });
  it('It changes the background color', () => {
    const tree = renderer.create(<Button color="red" />).toJSON();
    expect(tree).toHaveStyleRule('background-color', 'red');
  });
});
