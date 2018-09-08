import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import App from './components/app/app';

import 'typeface-roboto';

ReactDOM.render(
  <Fragment><CssBaseline /><App /></Fragment>,
  document.getElementById('root')
);
