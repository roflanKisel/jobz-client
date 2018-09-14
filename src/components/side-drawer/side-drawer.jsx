import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import { SwipeableDrawer, Divider } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AboutIcon from '@material-ui/icons/Info';
import HelpIcon from '@material-ui/icons/Help'
import DrawerMenuList from '../drawer-menu-list/drawer-menu-list';
import { iOS } from '../../constants/config';

const mainItems = [
  {
    icon: <HomeIcon />,
    text: 'Home',
    link: '/',
  },
  {
    icon: <SearchIcon />,
    text: 'Search',
    link: '/signin',
  }
];

const additionalItems = [
  {
    icon: <AboutIcon />,
    text: 'About',
    link: '/about',
  },
  {
    icon: <HelpIcon />,
    text: 'Help',
    link: '/help',
  },
];

const SideDrawer = ({ open, onClose, onOpen }) => (
  <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} anchor="left" open={open} onClose={onClose} onOpen={onOpen}>
    <div
      tabIndex={0}
      role="button"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <DrawerMenuList items={mainItems} />
      <Divider />
      <DrawerMenuList items={additionalItems} />
    </div>
  </SwipeableDrawer>
);

SideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
}

export default onlyUpdateForKeys(['open'])(SideDrawer);
