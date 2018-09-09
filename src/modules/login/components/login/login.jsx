import React, { PureComponent } from 'react';
import { withStyles, Grid, Paper, Typography } from '@material-ui/core';
import TextField from '../../../../components/text-field/text-field';
import StepButtonsPaper from '../../../../components/step-buttons-paper/step-buttons-paper';

const styles = theme => ({
  papers: {
    padding: 20,
    marginTop: 20,
  },
  textFields: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
  }
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
          </Paper>
          <StepButtonsPaper className={classes.papers} backLink="/" nextLink="/" />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Login);
