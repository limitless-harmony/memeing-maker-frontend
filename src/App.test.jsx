import React from 'react';
import { shallow } from 'enzyme';

import { App } from 'App';
import { history } from 'store';

describe('Testing the Root component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App history={history} />);
    expect(wrapper.find('div'));
    expect(wrapper).toMatchSnapshot();
  });
});
