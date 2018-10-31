import React from 'react';
import { onlyUpdateForKeys, compose } from 'recompose';
import { Avatar, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
  link: {
    textDecoration: 'none',
  },
  avatar: {
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
    }
  },
};

const UserNavMenu = ({ classes, username, onAvatarClick }) => (
  <React.Fragment>
    <Link to="/profile" className={classes.link}>
      <Avatar className={classes.avatar} onClick={onAvatarClick}>{username}</Avatar>
    </Link>
  </React.Fragment>
)

export default compose(
  onlyUpdateForKeys(['username', 'id']),
  withStyles(styles)
)(UserNavMenu);
