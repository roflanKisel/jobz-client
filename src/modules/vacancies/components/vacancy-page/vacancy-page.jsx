import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, Paper, Grid, LinearProgress, Typography, Button} from '@material-ui/core';

const styles = {
  container: {
    marginTop: 15,
  },
  paper: {
    width: '70%',
    overflow: 'hidden',
    // padding: 20,
  },
  previewImage: {
    height: '100%',
    width: '100%',
    filter: 'blur(5px)',
    // position: 'absolute',
  },
  progress: {
    width: '100%',
  },
  imageContainer: {
    maxHeight: '300px',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  companyInfo: {
    padding: '16px 0px 16px 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    heigth: '100%',

    backgroundColor: 'rgba(172, 180, 193, 0.8)',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  vacancyInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '32px 0px 16px 0px',
  },
  favoriteBtn: {
    width: '100%',
    borderRadius: '0px',
    marginTop: 16,
    height: 50,
  }
};

class VacancyPage extends React.Component {
  componentDidMount() {
    const { dispatchSetTitle, dispatchGetVacancy, match } = this.props;

    dispatchSetTitle('Vacancy');
    dispatchGetVacancy(match.params.id);
  }

  onSaveToFavorites = () => {
    const { vacancy, dispatchAddFavoriteVacancy } = this.props;

    dispatchAddFavoriteVacancy(vacancy.id);
  }

  render() {
    const {vacancy, isLoading, classes} = this.props;

    console.log(vacancy);

    return (
      <Grid container justify="center">
        {isLoading && <LinearProgress className={classes.progress} />}
        {!isLoading && vacancy && (
          <React.Fragment>
            <Grid className={classes.container} container item xs={11} sm={8} md={6} justify="center">
              <Paper className={classes.paper}>
                <div className={classes.imageContainer}>
                  <div>
                    <img className={classes.previewImage} src={vacancy.company.imageUrl} alt="" />
                  </div>
                  <div className={classes.companyInfo}>
                    <Typography color="primary" variant="h2">{vacancy.company.name}</Typography>
                    <Typography color="primary" variant="body1">Phone: {vacancy.company.phone}</Typography>
                  </div>
                </div>
                <div className={classes.vacancyInfo}>
                  <Typography variant="body2">Vacancy: {vacancy.employeePosition}</Typography>
                  <Typography variant="body2">Estimated salary: {vacancy.estimatedSalary}</Typography>
                  <Typography variant="body1">Additional Info: {vacancy.description}</Typography>
                </div>
                <Button variant="contained" onClick={this.onSaveToFavorites} color="primary" className={classes.favoriteBtn}>Add to favorites</Button>
              </Paper>
            </Grid>
          </React.Fragment>
        )}
      </Grid>
    );
  }
}

export default withStyles(styles)(VacancyPage);
