import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import TextField from '../../../../components/text-field/text-field';

const PasswordInput = ({
  className = '',
  password,
  confirmedPassword,
  onPasswordChange,
  onConfirmedPasswordChange,
}) => (
  <Grid item xs={12} container justify="space-between">
    <TextField
      className={className}
      required
      label="Password"
      type="password"
      value={password}
      onChange={onPasswordChange}
    />
    <TextField
      className={className}
      required
      label="Confirm Password"
      type="password"
      error={password !== confirmedPassword}
      value={confirmedPassword}
      onChange={onConfirmedPasswordChange}
    />
  </Grid>
);

PasswordInput.propTypes = {
  password: PropTypes.string.isRequired,
  confirmedPassword: PropTypes.string.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onConfirmedPasswordChange: PropTypes.func.isRequired,
};

export default onlyUpdateForKeys(['password', 'confirmedPassword'])(
  PasswordInput
);
