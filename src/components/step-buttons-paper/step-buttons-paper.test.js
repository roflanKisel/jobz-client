import React from 'react';
import { shallow } from 'enzyme';
import StepButtonsPaper from './step-buttons-paper';

describe('StepButtonsPaper', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StepButtonsPaper backLink="/" nextLink="/next" />);
  });

  it('should render without errors', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should get props without errors', () => {
    expect(wrapper.prop('backLink')).toEqual('/');
    expect(wrapper.prop('nextLink')).toEqual('/next');
  });
});
