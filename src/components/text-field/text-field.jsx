import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import MaterialTextField from '@material-ui/core/TextField';

const TextField = (props) => (
  <MaterialTextField {...props} />
);

export default onlyUpdateForKeys(['value', 'error'])(TextField);