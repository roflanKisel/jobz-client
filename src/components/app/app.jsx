import React from 'react';
import classnames from 'classnames';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import { lifecycle } from 'recompose';
import Navbar from '../../containers/navbar';
import routes from '../../routes';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <div className={classnames('app')}>
      <Navbar />
      {routes}
    </div>
  </ConnectedRouter>
);

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default lifecycle({
  componentDidMount() {
    const { dispatchGetUserData } = this.props;

    dispatchGetUserData();
  }
})(App);
