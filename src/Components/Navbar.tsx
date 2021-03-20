import React from 'react';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { useAppDispatch } from '../hooks';
import { setCurrentTab } from '../reducers/tabReducer';

import { Tab } from '../types';

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <BootstrapNavbar bg="dark" expand="lg">
      <BootstrapNavbar.Brand>Podcasts</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link role="link" onClick={() => dispatch(setCurrentTab(Tab.UserSubscriptions))}>Subscriptions</Nav.Link>
          <Nav.Link role="link" onClick={() => dispatch(setCurrentTab(Tab.PodcastDirectory))}>Directory</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
