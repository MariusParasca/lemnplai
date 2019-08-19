import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationBoostrapItem.css';

const navigationBoostrapItem = props => {
  const { to, exact, children } = props;
  return (
    <NavLink
      to={to}
      exact={exact}
      activeClassName="active"
      className="nav-link"
    >
      {children}
    </NavLink>
  );
};

export default navigationBoostrapItem;
