import React, { PureComponent } from 'react';
import { Button, Paper, Grid, withStyles, Typography } from '@material-ui/core';
import TextField from '../../../../components/text-field/text-field';
import StepButtonsPaper from '../../../../components/step-buttons-paper/step-buttons-paper';

const styles = theme => ({
  root: {
    
  },
  paper: {
    padding: 20,
    marginTop: 15,
    width: '100%',
  },
  textField: {
    marginTop: 10,
  },
});

class CreateCompanyForm extends PureComponent {
  state = {
    companyName: '',
    companyNameError: false,
  };

  render() {
    const { classes } = this.props;
    const { companyName, companyNameError } = this.state;

    return (
      <Grid className={classes.root} container justify="center">
        <Grid item xs={11} sm={9} md={7}>
          <Paper className={classes.paper}>
            <Typography gutterBottom variant="title">
              Create company
            </Typography>
            <Typography variant="body1">
              Here you will create page of your own company
            </Typography>
            <TextField
              className={classes.textField}
              value={companyName}
              type="text"
              label="Company Name"
              error={companyNameError}
            />
            <TextField multiline rows={5} rowsMax={5} label="Description"/>
            <Button variant="contained" color="primary">Upload image</Button>
          </Paper>
          <StepButtonsPaper className={classes.paper} backLink="/" nextLink="/" />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(CreateCompanyForm);
