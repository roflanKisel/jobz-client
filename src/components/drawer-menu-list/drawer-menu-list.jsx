import React from 'react';
import { List } from '@material-ui/core';
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

export default DrawerMenuList;
