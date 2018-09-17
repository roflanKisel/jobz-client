import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, withStyles, IconButton, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from '../side-drawer/side-drawer';
import UserNavMenu from '../user-nav-menu/user-nav-menu';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class Navbar extends Component {
  state = {
    isSideDrawerOpen: false,
  }

  onSideDrawerClose = () => {
    this.setState({
      isSideDrawerOpen: false,
    });
  }

  onSideDrawerOpen = () => {
    this.setState({
      isSideDrawerOpen: true,
    });
  };

  onSignOutClick = () => {
    const { dipatchSignOut } = this.props;

    dipatchSignOut();
  }

  render() {
    const { classes, isLoggedIn, userData } = this.props;
    const { isSideDrawerOpen } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" className={classes.menuButton} onClick={this.onSideDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              News
            </Typography>
            {!isLoggedIn && <Button color="inherit" component={Link} to="/signin">SIGN IN</Button>}
            {isLoggedIn && 
              <React.Fragment>
                <UserNavMenu username={userData.name[0]} />
              </React.Fragment>
            }
          </Toolbar>
          <SideDrawer 
            open={isSideDrawerOpen}
            onClose={this.onSideDrawerClose}
            onOpen={this.onSideDrawerOpen}
            isLoggedIn={isLoggedIn}
            onSignOutClick={this.onSignOutClick}
          />
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navbar);
