import React from 'react';
import { shallow } from 'enzyme';
import UserDataInput from './user-data-input';

describe('UserDataInput', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <UserDataInput
        fullName="John Doe"
        email="john_doe@gmail.com"
        onFullNameChange={() => {}}
        onEmailChange={() => {}}
      />
    );
  });

  it('should render without errors', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should get birthday prop', () => {
    expect(wrapper.prop('fullName')).toEqual('John Doe');
    expect(wrapper.prop('email')).toEqual('john_doe@gmail.com');
  });
});
