import React from 'react';
import { shallow } from 'enzyme';
import DateInput from './date-input';

describe('DateInput', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DateInput birthday="1999-06-20" onBirthdayChange={() => {}} />);
  });

  it('should render without errors', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should get birthday prop', () => {
    expect(wrapper.prop('birthday')).toEqual('1999-06-20');
  });
});