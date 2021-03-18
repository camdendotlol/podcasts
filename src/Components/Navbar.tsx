import React from 'react';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Tabs } from '../types';

interface Props {
  setCurrentTab(tab: Tabs): void
}

const Navbar: React.FC<Props> = ({ setCurrentTab }: Props) => (
  <BootstrapNavbar bg="dark" expand="lg">
    <BootstrapNavbar.Brand>Podcasts</BootstrapNavbar.Brand>
    <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
    <BootstrapNavbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link onClick={() => setCurrentTab(Tabs.UserSubscriptions)}>Subscriptions</Nav.Link>
        <Nav.Link onClick={() => setCurrentTab(Tabs.PodcastDirectory)}>Directory</Nav.Link>
      </Nav>
    </BootstrapNavbar.Collapse>
  </BootstrapNavbar>
);

export default Navbar;
