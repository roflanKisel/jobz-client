import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Button, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
});

const Navbar = ({ classes }) => (
  <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            News
          </Typography>
          <Button color="inherit">SIGN IN</Button>
        </Toolbar>
      </AppBar>
    </div>
);

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navbar);
