import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = {
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    margin: '10px 10px 10px 10px',
  },
};

const CustomImage = ({ classes, url, alt }) => (
  <img className={classes.image} src={url} alt={alt} />
);

export default withStyles(styles)(CustomImage);
