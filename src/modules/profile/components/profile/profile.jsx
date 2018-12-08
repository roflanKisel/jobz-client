import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  Grid,
  Paper,
  withStyles,
  Typography,
  Avatar,
  Button,
  Hidden,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Create';
import { lifecycle } from 'recompose';
import PropTypes from 'prop-types';
import Tabs from '../tabs/tabs';

const styles = theme => ({
  root: {
    marginTop: 15,
  },
  paper: {
    padding: 20,
  },
  avatar: {
    minWidth: 100,
    minHeight: 100,
    [theme.breakpoints.up('md')]: {
      minWidth: 120,
      minHeight: 120,
    },
    [theme.breakpoints.up('sm')]: {
      minWidth: 120,
      minHeight: 120,
    },
  },
  bottomButton: {
    marginBottom: 15,
    marginLeft: 5,
    marginRight: 5,
  },
  tabs: {
    marginTop: 15,
  },
});

const Profile = ({ classes, match, userData, vacancies }) => (
  <React.Fragment>
    {match.params.action === 'edit' && <Redirect to="/" />}
    <Grid container justify="center">
      <Grid className={classes.root} item xs={11} sm={8} md={6} lg={5}>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item xs={7} sm={4}>
              <Avatar className={classes.avatar}>{userData.name[0]}</Avatar>
            </Grid>
            <Grid item xs={5} sm={8} container justify="center">
              <Grid container alignItems="center" justify="center">
                <Grid item xs={12} container justify="center" alignItems="center" direction="column">
                  <Typography variant="headline">{userData.name.split(' ')[0]}</Typography>
                  <Typography variant="caption">{userData.email}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Tabs vacancies={vacancies} />
      </Grid>
    </Grid>
  </React.Fragment>
);

const ProfileWithMounting = lifecycle({
  componentDidMount() {
    const { dispatchSetTitle, dispatchGetVacancies } = this.props;

    dispatchSetTitle('Profile');
    dispatchGetVacancies();
  },
})(Profile);

ProfileWithMounting.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      action: PropTypes.string,
    }).isRequired,
  }).isRequired,
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  dispatchSetTitle: PropTypes.func.isRequired,
};

export default withStyles(styles)(ProfileWithMounting);
