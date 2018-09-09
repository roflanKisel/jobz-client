import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import { Paper, Button, Grid } from '@material-ui/core';

const StepButtonsPaper = ({ className = '', backLink, nextLink }) => (
  <Paper className={className}>
    <Grid container justify="space-between">
      <Button variant="contained" color="secondary">
        BACK
      </Button>
      <Button variant="contained" color="primary" disabled>
        NEXT
      </Button>
    </Grid>
  </Paper>
);

StepButtonsPaper.propTypes = {
  className: PropTypes.string,
  backLink: PropTypes.string.isRequired,
  nextLink: PropTypes.string.isRequired,
};

export default onlyUpdateForKeys(['backLink', 'nextLink'])(StepButtonsPaper);
