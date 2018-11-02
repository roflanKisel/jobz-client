import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';
import {
  SwipeableDrawer,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import AboutIcon from '@material-ui/icons/InfoOutlined';
import HelpIcon from '@material-ui/icons/HelpOutline';
import SignOutIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';
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
  },
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

const manipulatingItems = [
  {
    icon: <AddIcon />,
    text: 'Create company',
    link: '/companies/create',
  },
  {
    icon: <AddIcon />,
    text: 'Create vacancy',
    link: '/vacancies/create',
  },
];

const SideDrawer = ({ open, onClose, onOpen, isLoggedIn, onSignOutClick }) => (
  <SwipeableDrawer
    disableBackdropTransition={!iOS}
    disableDiscovery={iOS}
    anchor="left"
    open={open}
    onClose={onClose}
    onOpen={onOpen}
  >
    <div tabIndex={0} role="button" onClick={onClose} onKeyDown={onClose}>
      <DrawerMenuList items={mainItems} />
      {isLoggedIn && (
        <React.Fragment>
          <Divider />
          <DrawerMenuList items={manipulatingItems} />
        </React.Fragment>
      )}
      <Divider />
      <DrawerMenuList items={additionalItems} />
      {isLoggedIn && (
        <React.Fragment>
          <Divider />
          <List>
            <ListItem button onClick={onSignOutClick}>
              <ListItemIcon>{<SignOutIcon />}</ListItemIcon>
              <ListItemText primary="Sign out" />
            </ListItem>
          </List>
        </React.Fragment>
      )}
    </div>
  </SwipeableDrawer>
);

SideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  onSignOutClick: PropTypes.func.isRequired,
};

export default onlyUpdateForKeys(['open'])(SideDrawer);
