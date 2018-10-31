import React, { PureComponent } from 'react';
import {
  Button,
  Paper,
  Grid,
  withStyles,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@material-ui/core';
import TextField from '../../../../components/text-field/text-field';
import StepButtonsPaper from '../../../../components/step-buttons-paper/step-buttons-paper';
import CompanySelect from '../company-select/company-select';

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
    minWidth: 140,
    width: '30%',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
    },
  },
  additonalTextField: {
    margin: '10px 10px 10px 10px',
    minWidth: 130,
    width: '15%',
    [theme.breakpoints.only('xs')]: {
      margin: '10px 0px 10px 0px',
      width: '100%',
    },
  },
  textArea: {
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
  },
});

class CreateVacancyForm extends PureComponent {
  state = {
    companyName: '',
    employeePosition: '',
    estimatedSalary: '',
    description: '',
  };

  componentDidMount() {
    const { dispatchSetTitle } = this.props;

    dispatchSetTitle('Create vacancy');
  }

  onChangeCompany = event => {
    this.setState({
      companyName: event.target.value,
    });
  };

  onChangeEmployeePosition = event => {
    this.setState({
      employeePosition: event.target.value,
    });
  };

  onChangeEstimatedSalary = event => {
    this.setState({
      estimatedSalary: event.target.value,
    });
  };

  onChangeDescription = event => {
    this.setState({
      description: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { companyName, employeePosition, estimatedSalary, description } = this.state;

    return (
      <Grid className={classes.root} container justify="center">
        <Grid item xs={11} sm={9} md={7}>
          <Paper className={classes.paper}>
            <Typography gutterBottom variant="title">
              Create vacancy
            </Typography>
            <Grid container justify="space-between">
              <CompanySelect
                companyName={companyName}
                onChange={this.onChangeCompany}
              />
            </Grid>
            <Grid container justify="flex-start">
              <TextField
                className={classes.textField}
                value={employeePosition}
                label="Employee position"
                onChange={this.onChangeEmployeePosition}
              />
              <TextField
                className={classes.additonalTextField}
                value={estimatedSalary}
                label="Estimated Salary"
                onChange={this.onChangeEstimatedSalary}
              />
            </Grid>
            <Grid container>
              <TextField
                className={classes.textArea}
                value={description}
                onChange={this.onChangeDescription}
                multiline
                rows={5}
                rowsMax={5}
                label="Description"
              />
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

export default withStyles(styles)(CreateVacancyForm);
