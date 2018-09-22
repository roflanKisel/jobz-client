import React from 'react';
import {shallow} from 'enzyme';

import Navbar from './navbar';

describe('Navbar', () => {
  it('should render without errors', () => {
    const wrapper = shallow(
      <Navbar isLoggedIn title="navbar" />
    );
    expect(wrapper).toMatchSnapshot();
  });
})