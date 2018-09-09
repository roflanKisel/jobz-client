import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Paper, Button, Grid } from '@material-ui/core';

const StepButtonsPaper = ({ className = '', backLink, nextLink }) => (
  <Paper className={className}>
    <Grid container justify="space-between">
      <Button variant="contained" color="secondary" component={Link} to={backLink}>
        BACK
      </Button>
      <Button variant="contained" color="primary" disabled component={Link} to={nextLink}>
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
