import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import UserDataInput from '../user-data-input/user-data-input';
import PasswordInput from '../password-input/password-input';
import DateInput from '../date-input/date-input';

const InputArea = ({
  className = '',
  fullName,
  email,
  password,
  confirmedPassword,
  birthday,
  onFullNameChange,
  onEmailChange,
  onPasswordChange,
  onConfirmedPasswordChange,
  onBirthdayChange,
}) => (
  <Grid item container justify="flex-start" xs={12}>
    <UserDataInput
      className={className}
      fullName={fullName}
      email={email}
      onFullNameChange={onFullNameChange}
      onEmailChange={onEmailChange}
    />
    <PasswordInput
      className={className}
      password={password}
      confirmedPassword={confirmedPassword}
      onPasswordChange={onPasswordChange}
      onConfirmedPasswordChange={onConfirmedPasswordChange}
    />
    <DateInput
      className={className}
      birthday={birthday}
      onBirthdayChange={onBirthdayChange}
    />
  </Grid>
);

InputArea.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmedPassword: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  onFullNameChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onConfirmedPasswordChange: PropTypes.func.isRequired,
  onBirthdayChange: PropTypes.func.isRequired,
};

export default onlyUpdateForKeys([
  'fullName',
  'email',
  'password',
  'confirmedPassword',
  'birthday',
])(InputArea);
