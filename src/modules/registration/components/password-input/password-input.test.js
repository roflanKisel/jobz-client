import React from 'react';
import { shallow } from 'enzyme';
import PasswordInput from './password-input';

describe('PasswordInput', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <PasswordInput
        password="password"
        confirmedPassword="hello"
        onPasswordChange={() => {}}
        onConfirmedPasswordChange={() => {}}
      />
    );
  });

  it('should render without errors', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should receive all props', () => {
    expect(wrapper.prop('password')).toEqual('password');
    expect(wrapper.prop('confirmedPassword')).toEqual('hello');
  });
});
