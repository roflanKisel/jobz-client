import React from 'react';
import classnames from 'classnames';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Navbar from '../navbar/navbar';
import routes from '../../routes';

const styles = {
  root: {
    // touchAction: 'none',
  },
};

const App = ({ classes, history }) => (
  <ConnectedRouter history={history}>
    <div className={classnames('app', classes.root)}>
      <Navbar />
      {routes}
    </div>
  </ConnectedRouter>
);

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
