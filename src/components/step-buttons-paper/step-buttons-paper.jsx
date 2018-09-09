import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import { Paper, Button, Grid } from '@material-ui/core';

const StepButtonsPaper = ({classes, backLink, nextLink}) => (
  <Paper className={classes.papers}>
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
  classes: PropTypes.object.isRequired,
  backLink: PropTypes.string.isRequired,
  nextLink: PropTypes.string.isRequired,
}

export default onlyUpdateForKeys(['backLink', 'nextLink'])(StepButtonsPaper);