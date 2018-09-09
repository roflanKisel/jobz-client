import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import TextField from '../../../../components/text-field/text-field';

const DateInput = ({ className = '', birthday, onBirthdayChange }) => (
  <Grid item xs={12}>
    <TextField
      className={className}
      required
      label="Birthday"
      type="date"
      value={birthday}
      onChange={onBirthdayChange}
    />
  </Grid>
);

DateInput.propTypes = {
  birthday: PropTypes.string.isRequired,
  onBirthdayChange: PropTypes.func.isRequired,
};

export default onlyUpdateForKeys(['birthday'])(DateInput);
