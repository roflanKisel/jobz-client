import React, { PureComponent } from 'react';
import { Avatar } from '@material-ui/core';

class UserNavMenu extends PureComponent {
  state = {
    isOpened: false,
  }
  
  onAvatarClick = () => {
    this.setState(state => ({
      isOpened: !state.isOpened,
    }));
  }

  render() {
    const { username } = this.props;

    return (
      <React.Fragment>
        <Avatar onClick={this.onAvatarClick}>{username}</Avatar>
      </React.Fragment>
    );
  }
}

export default UserNavMenu;
