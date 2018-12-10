import React, { PureComponent } from 'react';
import {
  withStyles,
  Grid,
  Paper,
  Typography,
  Button,
  LinearProgress,
} from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextField from '../../../../components/text-field/text-field';
import ValidationService from '../../../../services/validationService';

const styles = {
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
    width: '100%',
  },
};

class Login extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    dispatchSetTitle: PropTypes.func.isRequired,
    dispatchSignIn: PropTypes.func.isRequired,
  }

  state = {
    email: '',
    password: '',
    isEmailError: true,
  };

  componentDidMount() {
    const { dispatchSetTitle } = this.props;

    dispatchSetTitle('Sign In');
  }

  onChangeEmail = event => {
    this.setState({
      email: event.target.value,
      isEmailError: !ValidationService.isValidEmail(event.target.value),
    });
  };

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    });
  };

  onSendData = () => {
    const { dispatchSignIn } = this.props;
    const { email, password } = this.state;

    dispatchSignIn({
      email,
      password,
    });
  };

  render() {
    const { classes, isLoading, isLoggedIn } = this.props;
    const { email, password, isEmailError } = this.state;

    return (
      <Grid container justify="center">
        {isLoading && <LinearProgress className={classes.progress} />}
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
                error={isEmailError}
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
