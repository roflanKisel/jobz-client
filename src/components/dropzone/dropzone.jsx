import React from 'react';
import ReactDropzone from 'react-dropzone';
import { withStyles } from '@material-ui/core';

const styles = {
  dropzone: {
    width: '100%',
    border: '0.5px dashed #B5B5B5',
    textAlign: 'center',
    userSelect: 'none',
    cursor: 'pointer',
  },
};

const Dropzone = ({ classes, onDrop }) => (
  <ReactDropzone className={classes.dropzone} multiple={false} accept="image/*" onDrop={onDrop}>
    <p>Drop an image or click to select a file upload</p>
  </ReactDropzone>
);

export default withStyles(styles)(Dropzone);
