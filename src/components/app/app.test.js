import React from 'react';
import { shallow } from 'enzyme';
import App from './app';
import history from '../../helpers/history';

describe('<App />', () => {
  it('should render without errors', () => {
    const wrapper = shallow(
      <App history={history}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});