import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, withStyles } from '@material-ui/core';
import StepButtonsPaper from '../../../../components/step-buttons-paper/step-buttons-paper';
import InputArea from '../input-area/input-area';

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
});

class Registration extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = {
    name: '',
    email: '',
    password: '',
    confirmedPassword: '',
    birthday: '1999-06-20',
  };

  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  onSendData = event => {
    const { dispatchRegistrationRequest } = this.props;
    const { email, password, name, birthday } = this.state;
    
    dispatchRegistrationRequest({
      email,
      password,
      name,
      birthday,
    });
  }

  render() {
    const {
      name,
      email,
      password,
      confirmedPassword,
      birthday,
    } = this.state;
    const { classes } = this.props;

    return (
      <Grid container justify="center">
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
            />
          </Paper>
          <StepButtonsPaper className={classes.papers} backLink="/" nextLink="/" onNextClick={this.onSendData}/>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Registration);
