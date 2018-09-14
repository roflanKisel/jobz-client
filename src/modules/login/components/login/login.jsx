import React, { PureComponent } from 'react';
import { withStyles, Grid, Paper, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TextField from '../../../../components/text-field/text-field';
import StepButtonsPaper from '../../../../components/step-buttons-paper/step-buttons-paper';

const styles = theme => ({
  papers: {
    padding: 20,
    marginTop: 15,
    marginBottom: 10,
  },
  textFields: {
    marginTop: 15,
    marginBottom: 15,
    width: '100%',
  },
  registerButton: {
    marginTop: 5,
    width: '100%',
  },
});


class Login extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center">
        <Grid xs={10} sm={7} md={5} lg={3} item>
          <Paper className={classes.papers}>
            <Typography variant="headline">SIGN IN</Typography>
            <Grid item container xs={12}>
              <TextField className={classes.textFields} type="email" label="E-mail" />
              <TextField className={classes.textFields} type="password" label="Password" />
            </Grid>
            <Grid item xs={12} container justify="center">
              <Button className={classes.registerButton} variant="flat" component={Link} to="/signup">Create account</Button>
            </Grid>
          </Paper>
          <StepButtonsPaper className={classes.papers} backLink="/" nextLink="/" />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Login);
