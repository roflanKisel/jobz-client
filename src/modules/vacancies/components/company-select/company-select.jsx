import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  withStyles,
} from '@material-ui/core';

const styles = {
  form: {
    minWidth: '200px',
  }
};

const CompanySelect = ({ companyName, companies, onChange, classes }) => (
  <FormControl required className={classes.form}>
    <InputLabel htmlFor="company-name-required">Company name</InputLabel>
    <Select
      value={companyName}
      onChange={onChange}
      name="Company name"
      inputProps={{
        id: 'company-name-required',
      }}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {companies.map(company => <MenuItem key={company.id} value={company.id}>{company.name}</MenuItem>)}
    </Select>
    <FormHelperText>Required</FormHelperText>
  </FormControl>
);

export default withStyles(styles)(CompanySelect);
