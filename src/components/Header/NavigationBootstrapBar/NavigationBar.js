import React from 'react';
import NavigationBoostrapItem from './NavigationBoostrapItem/NavigationBoostrapItem';
import { Navbar, Nav } from 'react-bootstrap';

const navigationBar = props => {
  const { title } = props;
  return (
    <Navbar className="shadow mb-5" expand="sm" bg="light" variant="light">
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
    // <nav className="navbar navbar-expand-xl navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light bg-ligh shadow">
    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav mr-auto">
    //       <NavigationBoostrapItem to="/" exact>
    //         Home
    //       </NavigationBoostrapItem>
    //       <NavigationBoostrapItem to="/products">
    //         Products
    //       </NavigationBoostrapItem>
    //       <NavigationBoostrapItem to="/aboutus">
    //         About us
    //       </NavigationBoostrapItem>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default navigationBar;
