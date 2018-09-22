import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys, lifecycle, compose } from 'recompose';
import {
  Grid,
  Typography,
  withStyles,
  LinearProgress,
} from '@material-ui/core';
import CommonCard from '../common-card/common-card';

const styles = theme => ({
  root: {
    marginTop: 15,
  },
  paper: {
    width: '100%',
    padding: 20,
  },
  progress: {
    width: '100%',
  },
});

const HomePage = ({ classes, companies, vacancies, isLoading }) => (
  <Grid container justify="center">
    {isLoading && <LinearProgress className={classes.progress} />}
    {!isLoading && (
      <React.Fragment>
        <Grid className={classes.root} xs={11} item>
          <Typography variant="display3">Companies</Typography>
          <Grid item xs={12} container spacing={16}>
            {companies.map(company => (
              <CommonCard
                key={company.id}
                header={company.header}
                description={company.description}
                img={company.img}
                link={company.link}
              />
            ))}
          </Grid>
        </Grid>
        <Grid className={classes.root} xs={11} item>
          <Typography variant="display3">Vacancies</Typography>
          <Grid item xs={12} container spacing={16}>
            {vacancies.map(vacancy => (
              <CommonCard
                key={vacancy.id}
                header={vacancy.header}
                description={vacancy.description}
                img={vacancy.img}
                link={vacancy.link}
              />
            ))}
          </Grid>
        </Grid>
      </React.Fragment>
    )}
  </Grid>
);

HomePage.propTypes = {
  companies: PropTypes.array.isRequired,
  vacancies: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  dispatchGetCompanies: PropTypes.func.isRequired,
  dispatchGetVacancies: PropTypes.func.isRequired,
};

const enhancedHomePage = withStyles(styles)(HomePage);

export default compose(
  lifecycle({
    componentDidMount() {
      const {
        dispatchGetCompanies,
        dispatchGetVacancies,
        dispatchSetTitle,
      } = this.props;

      dispatchGetCompanies();
      dispatchGetVacancies();
      dispatchSetTitle('Home');
    },
  }),
  onlyUpdateForKeys(['companies', 'vacancies', 'isLoading'])
)(enhancedHomePage);
