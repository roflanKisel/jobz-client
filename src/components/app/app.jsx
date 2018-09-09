import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import Navbar from '../navbar/navbar';
import routes from '../../routes';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <div className="app">
      <Navbar />
      {routes}
    </div>
  </ConnectedRouter>
);

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;
