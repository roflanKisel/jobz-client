import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

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

CustomImage.propTypes = {
  classes: PropTypes.shape({
    image: PropTypes.object
  }).isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default withStyles(styles)(CustomImage);
