import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { Grid, Avatar, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  bigAvatar: {
    width: '100%',
    height: 'auto',
  },
  infoText: {
    paddingLeft: 15,
  },
});

const AuthorInfo = ({ classes, avatar = '', header = '', description = '' }) => (
  <Grid className={classes.root} container xs={12} justify="center" alignItems="center">
    <Grid item xs={3} sm={1}>
      <Avatar className={classes.bigAvatar} alt="Kaneki Ken Old" src={avatar} />
    </Grid>
    <Grid item xs={9} sm={11} className={classes.infoText}>
      <Typography variant="title">{header}</Typography>
      <Typography variant="body1">{description}</Typography>
    </Grid>
  </Grid>
);

AuthorInfo.propTypes = {
  avatar: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
};

export default onlyUpdateForKeys(['avatar', 'header', 'description'])(withStyles(styles)(AuthorInfo));
