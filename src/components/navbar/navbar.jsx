import React from 'react';
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
          <Button color="inherit">Find job</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
);

export default withStyles(styles)(Navbar);
