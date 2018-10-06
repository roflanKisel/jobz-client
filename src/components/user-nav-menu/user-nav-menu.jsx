import React from 'react';
import { withHandlers, onlyUpdateForKeys, compose, withState } from 'recompose';
import { Avatar, withStyles } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

const styles = {
  avatar: {
    '&:hover': {
      cursor: 'pointer',
    }
  },
}

const UserNavMenu = ({ classes, username, isClicked, onAvatarClick }) => (
  <React.Fragment>
    {isClicked && <Redirect to="/profile" />}
    <Avatar className={classes.avatar} onClick={onAvatarClick}>{username}</Avatar>
  </React.Fragment>
)

export default compose(
  withState('isClicked', 'setIsClicked', false),
  withHandlers({
    onAvatarClick: props => () => {
      props.setIsClicked(true);
    }
  }),
  onlyUpdateForKeys(['username', 'isClicked', 'id'])
)(withStyles(styles)(UserNavMenu));
