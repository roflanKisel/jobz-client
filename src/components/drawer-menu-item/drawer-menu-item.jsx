import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const DrawerMenuItem = ({ icon, text, link }) => (
  <ListItem button component={Link} to={link}>
    <ListItemIcon>
      {icon}
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

export default DrawerMenuItem;
