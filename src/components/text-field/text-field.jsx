import React from 'react';
import { pure } from 'recompose';
import MaterialTextField from '@material-ui/core/TextField';

const TextField = (props) => (
  <MaterialTextField {...props} />
);

export default pure(TextField);