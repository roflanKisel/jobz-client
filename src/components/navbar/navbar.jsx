import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, withStyles, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from '../side-drawer/side-drawer';

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

  render() {
    const { classes } = this.props;
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
            <Button color="inherit" component={Link} to="/signin">SIGN IN</Button>
          </Toolbar>
          <SideDrawer 
            open={isSideDrawerOpen}
            onClose={this.onSideDrawerClose}
            onOpen={this.onSideDrawerOpen}
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
