import React from 'react';
import { List } from '@material-ui/core';
import PropTypes from 'prop-types';
import DrawerMenuItem from '../drawer-menu-item/drawer-menu-item';

const DrawerMenuList = ({ items }) => (
  <List style={{width: '250px'}}>
    {items.map((item, index) => (
      <DrawerMenuItem
        key={index}
        icon={item.icon}
        text={item.text}
        link={item.link}
      />
    ))}
  </List>
);

DrawerMenuList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
};

export default DrawerMenuList;
