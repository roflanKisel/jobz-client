import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import TextField from '../../../../components/text-field/text-field';

const UserDataInput = ({
  className='',
  fullName,
  email,
  onFullNameChange,
  onEmailChange,
}) => (
  <Grid item xs={12} container justify="space-between">
    <TextField
      className={className}
      required
      label="Fullname"
      type="text"
      value={fullName}
      onChange={onFullNameChange}
    />
    <TextField
      className={className}
      required
      label="E-mail"
      type="email"
      value={email}
      onChange={onEmailChange}
    />
  </Grid>
);

UserDataInput.propTypes = {
  className: PropTypes.string,
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onFullNameChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
}

export default onlyUpdateForKeys(['fullName', 'email'])(UserDataInput);
