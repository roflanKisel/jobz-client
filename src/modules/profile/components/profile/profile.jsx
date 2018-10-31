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

const Profile = ({ classes, match, userData }) => (
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
              <Grid container alignItems="flex-start" justify="center">
                <Grid item xs={12} container justify="center">
                  <Typography variant="headline">{userData.name.split(' ')[0]}</Typography>
                </Grid>
                <Grid item xs={12} container justify="center">
                  <Typography variant="caption">{userData.email}</Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="flex-end" justify="center">
                <Hidden smDown>
                  <Button
                    className={classes.bottomButton}
                    variant="contained"
                    color="primary"
                    size="medium"
                  >
                    View summary
                  </Button>
                  <Button
                    className={classes.bottomButton}
                    variant="contained"
                    color="secondary"
                    size="medium"
                  >
                    Edit profile
                  </Button>
                </Hidden>
                <Hidden mdUp>
                <Button variant="fab" color="secondary" aria-label="Edit" className={classes.button}>
                  <EditIcon />
                </Button>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Tabs />
      </Grid>
    </Grid>
  </React.Fragment>
);

const ProfileWithMounting = lifecycle({
  componentDidMount() {
    const { dispatchSetTitle } = this.props;

    dispatchSetTitle('Profile');
  },
})(Profile);

export default withStyles(styles)(ProfileWithMounting);
