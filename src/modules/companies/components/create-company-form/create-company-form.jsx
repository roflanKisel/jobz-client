import React, { PureComponent } from 'react';
import { Button, Paper, Grid, withStyles, Typography, LinearProgress } from '@material-ui/core';
import request from 'superagent';
import { CLOUDINARY_UPLOAD_URL, CLOUDINARY_UPLOAD_PRESET } from '../../../../constants/config';
import TextField from '../../../../components/text-field/text-field';
import StepButtonsPaper from '../../../../components/step-buttons-paper/step-buttons-paper';
import SuccessForm from '../../../../components/success-form/success-form';
import Dropzone from '../../../../components/dropzone/dropzone';
import CustomImage from '../../../../components/custom-image/custom-image';

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

class CreateCompanyForm extends PureComponent {
  state = {
    companyName: '',
    address: '',
    phoneNumber: '',
    description: '',
    imageUrl: '',
  };

  componentDidMount() {
    const { dispatchSetTitle, dispatchClearState } = this.props;

    dispatchClearState();
    dispatchSetTitle('Create company');
  }

  onChangeCompanyName = event => {
    this.setState({
      companyName: event.target.value,
    });
  };

  onChangeAddress = event => {
    this.setState({
      address: event.target.value,
    });
  };

  onChangePhoneNumber = event => {
    this.setState({
      phoneNumber: event.target.value,
    });
  };

  onChangeDescription = event => {
    this.setState({
      description: event.target.value,
    });
  };

  handleImageUpload = file => {
    const upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          imageUrl: response.body.secure_url
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

  onNextClick = () => {
    const { dispatchCreateCompany } = this.props;
    const { companyName, address, phoneNumber, description, imageUrl } = this.state;

    dispatchCreateCompany({
      companyName,
      address,
      phoneNumber,
      description,
      imageUrl,
    });
  };

  removeImage = () => {
    this.setState({
      imageUrl: '',
    });
  };

  render() {
    const { classes, isLoading, isFailure, company } = this.props;
    const {
      companyName,
      address,
      phoneNumber,
      description,
      imageUrl,
    } = this.state;

    // TODO: add spinner while image not loaded

    return (
      <Grid className={classes.root} container justify="center">
        {isLoading && <LinearProgress className={classes.progress} />}
        {!company && (
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
                  error={isFailure}
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
                <TextField
                  className={classes.textArea}
                  value={description}
                  onChange={this.onChangeDescription}
                  multiline
                  rows={5}
                  rowsMax={5}
                  label="Description"
                />
                {!imageUrl && <Dropzone onDrop={this.onDropImage} />}
                {imageUrl &&
                  <Grid container direction="column" alignItems="center" justify="center" spacing={8}>
                    <CustomImage url={imageUrl} alt="company" />
                    <Button variant="contained" color="secondary" onClick={this.removeImage}>Remove image</Button>
                  </Grid>
                }
              </Grid>
            </Paper>
            <StepButtonsPaper
              className={classes.paper}
              backLink="/"
              nextLink="/"
              onNextClick={this.onNextClick}
            />
          </Grid>
        )}
        {company && (
          <SuccessForm text="Company was successfully created!" />
        )}
      </Grid>
    );
  }
}

export default withStyles(styles)(CreateCompanyForm);
