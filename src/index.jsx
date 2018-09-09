import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import store from './helpers/store';
import history from './helpers/history';
import App from './components/app/app';

import 'typeface-roboto';

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <Provider store={store}>
      <App history={history} />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);
