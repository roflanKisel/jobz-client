import React from 'react';
import { Grid, TextField, Paper, Typography, withStyles, Checkbox, Button } from '@material-ui/core';

const styles = theme => ({
  papers: {
    padding: 20,
    marginTop: 20,
  },
  textFields: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.up('sm')]: {
      width: '49%',
    },
  },
});

const Registration = ({ classes }) => (
  <Grid container justify="center">
    <Grid xs={10} sm={8} md={7} item>
      <Paper className={classes.papers}>
        <Typography variant="headline">
          Registration
        </Typography>
        <Grid item container justify="flex-start" xs={12}>
          <Grid item xs={12} container justify="space-between">
            <TextField className={classes.textFields} required label="E-mail" />
            <TextField className={classes.textFields} required label="Fullname" />
          </Grid>
          <Grid item xs={12} container justify="space-between">
            <TextField className={classes.textFields} required label="Password" type="password" />
            <TextField className={classes.textFields} required label="Confirm Password" type="password" />
          </Grid>
          <Grid item xs={12}>
            <TextField className={classes.textFields} required label="Birthday" type="date" defaultValue="2017-05-24" />
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.papers}>
        <Grid container justify="space-between">
          <Button variant="contained" color="secondary">BACK</Button>
          <Button variant="contained" color="primary" disabled>REGISTER</Button>
        </Grid>
      </Paper>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Registration);
