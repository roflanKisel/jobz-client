import React from 'react';
import { Paper, Grid, Button, withStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import OkIcon from '@material-ui/icons/CheckCircleOutline';

const styles = {
  paper: {
    width: '100%',
    marginTop: 15,
    padding: 20,
  },
  icon: {
    color: '#2d57bc',
    width: '50%',
    height: '50%',
    maxWidth: 300,
    maxHeight: 300,
  },
  textArea: {
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
  },
};

const SuccessForm = ({ classes, text='' }) => (
  <Grid container item justify="center" xs={11} sm={10} md={6} lg={6}>
    <Paper className={classes.paper}>
      <Grid container item justify="center">
        <OkIcon className={classes.icon} />
      </Grid>
      <Grid container item justify="center" className={classes.textArea}>
        <Typography variant="title">{text}</Typography>
      </Grid>
      <Grid container item justify="center" className={classes.button}>
        <Button variant="contained" color="primary" component={Link} to="/">Continue</Button>
      </Grid>
    </Paper>
  </Grid>
);

export default withStyles(styles)(SuccessForm);
