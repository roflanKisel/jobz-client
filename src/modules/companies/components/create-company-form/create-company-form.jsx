import React, { PureComponent } from 'react';
import { Button, Paper, Grid, withStyles, Typography } from '@material-ui/core';
import TextField from '../../../../components/text-field/text-field';
import StepButtonsPaper from '../../../../components/step-buttons-paper/step-buttons-paper';

const styles = theme => ({
  root: {},
  paper: {
    padding: 20,
    marginTop: 15,
    width: '100%',
  },
  textField: {
    marginTop: 10,
    marginBottom: 10,
    width: '30%',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    }
  },
  textArea: {
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
  },
});

class CreateCompanyForm extends PureComponent {
  state = {
    companyName: '',
    address: '',
    phoneNumber: '',
    description: '',
    companyNameError: false,
  };

  onChangeCompanyName = event => {
    this.setState({
      companyName: event.target.value,
    });
  }

  onChangeAddress = event => {
    this.setState({
      address: event.target.value,
    });
  }

  onChangePhoneNumber = event => {
    this.setState({
      phoneNumber: event.target.value,
    });
  }

  onChangeDescription = event => {
    this.setState({
      description: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    const { companyName, address, phoneNumber, description, companyNameError } = this.state;

    return (
      <Grid className={classes.root} container justify="center">
        <Grid item xs={11} sm={9} md={7}>
          <Paper className={classes.paper}>
            <Typography gutterBottom variant="title">
              Create company
            </Typography>
            <Grid container justify="space-between">
              <TextField
                className={classes.textField}
                value={companyName}
                label="Company Name"
                error={companyNameError}
                onChange={this.onChangeCompanyName}
              />
              <TextField
                className={classes.textField}
                value={address}
                label="Address"
                onChange={this.onChangeAddress}
              />
              <TextField
                className={classes.textField}
                value={phoneNumber}
                label="Phone"
                onChange={this.onChangePhoneNumber}
              />
            </Grid>
            <Grid container>
              <TextField className={classes.textArea} value={description} onChange={this.onChangeDescription} multiline rows={5} rowsMax={5} label="Description" />
            </Grid>
            <Button variant="contained" color="primary">
              Upload image
            </Button>
          </Paper>
          <StepButtonsPaper
            className={classes.paper}
            backLink="/"
            nextLink="/"
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(CreateCompanyForm);
