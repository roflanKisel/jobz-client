import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Paper,
  Typography,
  withStyles,
  Button,
  LinearProgress,
} from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import InputArea from '../input-area/input-area';

import validationService from '../../../../services/validationService';

const styles = theme => ({
  papers: {
    padding: 20,
    marginTop: 15,
    marginBottom: 10,
  },
  textFields: {
    width: '100%',
    marginTop: 15,
    marginBottom: 15,
    [theme.breakpoints.up('sm')]: {
      width: '49%',
    },
  },
  progress: {
    width: '100%',
  },
});

class Registration extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    dispatchRegistrationRequest: PropTypes.func.isRequired,
    dispatchSetTitle: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    email: '',
    password: '',
    confirmedPassword: '',
    birthday: '1999-06-20',
    errors: {
      email: true,
      name: true,
      password: true,
    },
  };

  componentDidMount() {
    const { dispatchSetTitle } = this.props;

    dispatchSetTitle('Sign Up');
  }

  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });

    const currentError = {};

    switch (name) {
    case 'email':
      currentError.email = !validationService.isValidEmail(event.target.value);
      break;
    case 'name':
      currentError.name = !validationService.isValidFullname(event.target.value);
      break;
    case 'password':
      currentError.password = !validationService.isValidPassword(event.target.value);
      break;
    default:
      break;
    }

    this.setState((prev) => ({
      errors: { ...prev.errors, ...currentError }
    }));
  };

  onSendData = () => {
    const { dispatchRegistrationRequest } = this.props;
    const { email, password, name, birthday } = this.state;

    dispatchRegistrationRequest({
      email,
      password,
      name,
      birthday,
    });
  };

  render() {
    const { name, email, password, confirmedPassword, birthday, errors } = this.state;
    const { classes, isLoading, isSuccess } = this.props;

    return (
      <Grid container justify="center">
        {isLoading && <LinearProgress className={classes.progress} />}
        <Grid xs={10} sm={10} md={7} lg={5} item>
          <Paper className={classes.papers}>
            <Typography variant="headline">SIGN UP</Typography>
            <InputArea
              className={classes.textFields}
              fullName={name}
              email={email}
              password={password}
              confirmedPassword={confirmedPassword}
              birthday={birthday}
              onFullNameChange={this.handleInputChange('name')}
              onEmailChange={this.handleInputChange('email')}
              onPasswordChange={this.handleInputChange('password')}
              onConfirmedPasswordChange={this.handleInputChange(
                'confirmedPassword'
              )}
              onBirthdayChange={this.handleInputChange('birthday')}
              errors={errors}
            />
          </Paper>
          <Paper className={classes.papers}>
            {!isLoading && isSuccess && <Redirect to="/" />}
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
                disabled={
                  (
                    errors.email ||
                    errors.name ||
                    errors.password ||
                    !(password === confirmedPassword)
                  )
                }
              >
                Register
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Registration);
