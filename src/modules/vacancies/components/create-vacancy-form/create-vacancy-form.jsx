import React, { PureComponent } from 'react';
import {
  Button,
  Paper,
  Grid,
  withStyles,
  Typography,
  LinearProgress,
} from '@material-ui/core';
import request from 'superagent';
import PropTypes from 'prop-types';
import {
  CLOUDINARY_UPLOAD_URL,
  CLOUDINARY_UPLOAD_PRESET,
} from '../../../../constants/config';
import TextField from '../../../../components/text-field/text-field';
import StepButtonsPaper from '../../../../components/step-buttons-paper/step-buttons-paper';
import CompanySelect from '../company-select/company-select';
import Dropzone from '../../../../components/dropzone/dropzone';
import CustomImage from '../../../../components/custom-image/custom-image';
import SuccessForm from '../../../../components/success-form/success-form';

import ValidationService from '../../../../services/validationService';

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
  progress: {
    width: '100%',
  },
});

class CreateVacancyForm extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    companies: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    vacancy: PropTypes.object,
    dispatchSetTitle: PropTypes.func.isRequired,
    dispatchClearState: PropTypes.func.isRequired,
    dispatchGetCompanies: PropTypes.func.isRequired,
    dispatchCreateVacancy: PropTypes.func.isRequired,
  }

  state = {
    companyName: '',
    employeePosition: '',
    estimatedSalary: '',
    description: '',
    imageUrl: '',
    errors: {
      employeePosition: true,
      estimatedSalary: true,
      description: true,
    },
  };

  componentDidMount() {
    const {
      dispatchSetTitle,
      dispatchClearState,
      dispatchGetCompanies,
    } = this.props;

    dispatchSetTitle('Create vacancy');
    dispatchClearState();
    dispatchGetCompanies();
  }

  onChangeCompany = event => {
    this.setState({
      companyName: event.target.value,
    });
  };

  onChangeEmployeePosition = event => {
    const text = event.target.value;

    this.setState((prev) => ({
      employeePosition: text,
      errors: {...prev.errors, employeePosition: !ValidationService.isValidEmployeePosition(text)},
    }));
  };

  onChangeEstimatedSalary = event => {
    const text = event.target.value;

    this.setState((prev) => ({
      estimatedSalary: text,
      errors: {...prev.errors, estimatedSalary: !ValidationService.isValidCash(text)},
    }));
  };

  onChangeDescription = event => {
    const text = event.target.value;

    this.setState((prev) => ({
      description: text,
      errors: {...prev.errors, description: !ValidationService.isValidDescription(text)},
    }));
  };

  handleImageUpload = file => {
    const upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          imageUrl: response.body.secure_url,
        });
      }
    });
  };

  onDropImage = files => {
    this.setState({
      imageUrl: files[0],
    });

    this.handleImageUpload(files[0]);
  };

  removeImage = () => {
    this.setState({
      imageUrl: '',
    });
  };

  onNextClick = () => {
    const {
      companyName,
      employeePosition,
      estimatedSalary,
      description,
      imageUrl,
    } = this.state;
    const { dispatchCreateVacancy } = this.props;

    dispatchCreateVacancy({
      companyId: companyName,
      employeePosition,
      estimatedSalary,
      description,
      imageUrl,
    });
  };

  render() {
    const { classes, companies, isLoading, vacancy } = this.props;
    const {
      companyName,
      employeePosition,
      estimatedSalary,
      description,
      imageUrl,
      errors,
    } = this.state;

    // TODO: add spinner while image not loaded

    return (
      <Grid className={classes.root} container justify="center">
        {isLoading && <LinearProgress className={classes.progress} />}
        {!vacancy && (
          <Grid item xs={11} sm={9} md={7}>
            <Paper className={classes.paper}>
              <Typography gutterBottom variant="title">
                Create vacancy
              </Typography>
              <Grid container justify="space-between">
                <CompanySelect
                  companyName={companyName}
                  onChange={this.onChangeCompany}
                  companies={companies}
                />
              </Grid>
              <Grid container justify="flex-start">
                <TextField
                  className={classes.textField}
                  value={employeePosition}
                  label="Employee position"
                  error={errors.employeePosition}
                  onChange={this.onChangeEmployeePosition}
                />
                <TextField
                  className={classes.additonalTextField}
                  value={estimatedSalary}
                  label="Estimated Salary"
                  error={errors.estimatedSalary}
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
                  error={errors.description}
                  label="Description"
                />
                {!imageUrl && <Dropzone onDrop={this.onDropImage} />}
                {imageUrl && (
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                    spacing={8}
                  >
                    <CustomImage url={imageUrl} alt="company" />
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={this.removeImage}
                    >
                      Remove image
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Paper>
            <StepButtonsPaper
              className={classes.paper}
              backLink="/"
              nextLink="/"
              onNextClick={this.onNextClick}
              disabled={
                errors.description || errors.employeePosition || errors.estimatedSalary
              }
            />
          </Grid>
        )}
        {vacancy && <SuccessForm text="Vacancy was successfully created!" />}
      </Grid>
    );
  }
}

export default withStyles(styles)(CreateVacancyForm);
