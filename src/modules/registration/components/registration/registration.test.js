import React from 'react';
import { shallow } from 'enzyme';
import Registration from './registration';

describe('Registration', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Registration />);
  });

  it('should render without errors', () => {
    expect(wrapper).toMatchSnapshot();
  })
});