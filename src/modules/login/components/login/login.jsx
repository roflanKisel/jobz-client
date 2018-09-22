import React, { PureComponent } from 'react';
import {
  withStyles,
  Grid,
  Paper,
  Typography,
  Button,
  CircularProgress,
} from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import TextField from '../../../../components/text-field/text-field';

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
  progress: {
    width: 'auto',
  },
});

class Login extends PureComponent {
  state = {
    email: '',
    password: '',
  };

  componentDidMount() {
    const { dispatchSetTitle } = this.props;

    dispatchSetTitle('Sign In');
  }

  onChangeEmail = event => {
    this.setState({
      email: event.target.value,
    });
  };

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    });
  };

  onSendData = event => {
    const { dispatchSignIn } = this.props;
    const { email, password } = this.state;

    dispatchSignIn({
      email,
      password,
    });
  };

  render() {
    const { classes, isLoading, isLoggedIn } = this.props;
    const { email, password } = this.state;

    return (
      <Grid container justify="center">
        <Grid xs={10} sm={7} md={5} lg={3} item>
          <Paper className={classes.papers}>
            <Typography variant="headline">SIGN IN</Typography>
            <Grid item container xs={12}>
              <TextField
                className={classes.textFields}
                value={email}
                onChange={this.onChangeEmail}
                type="email"
                label="E-mail"
              />
              <TextField
                className={classes.textFields}
                value={password}
                onChange={this.onChangePassword}
                type="password"
                label="Password"
              />
            </Grid>
            <Grid item xs={12} container justify="center">
              <Button
                className={classes.registerButton}
                variant="flat"
                component={Link}
                to="/signup"
              >
                Create account
              </Button>
            </Grid>
          </Paper>
          <Paper className={classes.papers}>
            {!isLoading && isLoggedIn && <Redirect to="/" />}
            <Grid
              container
              justify="space-between"
              className="button-container"
            >
              <Button
                className="back-button"
                variant="contained"
                color="secondary"
                component={Link}
                to="/"
              >
                HOME
              </Button>
              {isLoading && <CircularProgress className={classes.progress} />}
              <Button
                className="next-button"
                variant="contained"
                color="primary"
                onClick={this.onSendData}
              >
                SIGN IN
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Login);
