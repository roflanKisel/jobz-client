import React from 'react';
import { shallow } from 'enzyme';
import Login from './login';

describe('Login', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('should render without errors', () => {
    expect(wrapper).toMatchSnapshot();
  });
})