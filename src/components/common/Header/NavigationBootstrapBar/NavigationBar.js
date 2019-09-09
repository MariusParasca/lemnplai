import React from 'react';
import NavigationBoostrapItem from './NavigationBoostrapItem/NavigationBoostrapItem';
import { Navbar, Nav } from 'react-bootstrap';

const navigationBar = props => {
  const { title } = props;
  return (
    <Navbar className="shadow" expand="sm" bg="light" variant="light">
      <Navbar.Brand href="#home">{title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavigationBoostrapItem to="/" exact>
            Home
          </NavigationBoostrapItem>
          <NavigationBoostrapItem to="/products">
            Products
          </NavigationBoostrapItem>
          <NavigationBoostrapItem to="/aboutus">
            About us
          </NavigationBoostrapItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navigationBar;
