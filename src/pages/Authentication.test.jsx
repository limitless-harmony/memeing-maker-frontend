import React from 'react';
import { shallow } from 'enzyme';

import AuthComponent from 'pages/Authentication';

describe('Testing the Authentication component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<AuthComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
