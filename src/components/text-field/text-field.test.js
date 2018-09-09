import React from 'react';
import { shallow } from 'enzyme';
import TextField from './text-field';

describe('TextField', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TextField value="hi" error />);
  });

  it('should render without errors', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should receive props', () => {
    expect(wrapper.prop('error')).toEqual(true);
  });
});
