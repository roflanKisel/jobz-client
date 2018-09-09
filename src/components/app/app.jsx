import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
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

export default App;
