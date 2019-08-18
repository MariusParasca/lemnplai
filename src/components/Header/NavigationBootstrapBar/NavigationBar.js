import React from 'react';
import NavigationBoostrapItem from './NavigationBoostrapItem/NavigationBoostrapItem';

const navigationBar = props => {
  const { title } = props;
  return (
    <nav className="navbar navbar-expand-xl navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light bg-ligh shadow">
      <a className="navbar-brand" href="/">
        {title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <NavigationBoostrapItem to="/" exact>
            Home
          </NavigationBoostrapItem>
          <NavigationBoostrapItem to="/services">
            Services
          </NavigationBoostrapItem>
          <NavigationBoostrapItem to="/aboutus">
            About us
          </NavigationBoostrapItem>
        </ul>
      </div>
    </nav>
  );
};

export default navigationBar;
