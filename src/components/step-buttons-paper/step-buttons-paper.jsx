import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Paper, Button, Grid } from '@material-ui/core';

const StepButtonsPaper = ({ className = '', backLink, onNextClick }) => (
  <Paper className={className}>
    <Grid container justify="space-between" className="button-container">
      <Button className="back-button" variant="contained" color="secondary" component={Link} to={backLink}>
        BACK
      </Button>
      <Button className="next-button" variant="contained" color="primary" onClick={onNextClick}>
        NEXT
      </Button>
    </Grid>
  </Paper>
);

StepButtonsPaper.propTypes = {
  className: PropTypes.string,
  backLink: PropTypes.string.isRequired,
  onNextClick: PropTypes.func,
};

export default onlyUpdateForKeys(['backLink', 'nextLink'])(StepButtonsPaper);
