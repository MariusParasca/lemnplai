import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationBoostrapItem.css';

const navigationBoostrapItem = props => {
  const { to, current, exact, children } = props;
  const liClasses = current ? 'nav-item' : 'nav-item active';

  return (
    <li className={liClasses}>
      <NavLink
        to={to}
        exact={exact}
        activeClassName="active"
        className="nav-link"
      >
        {children}
      </NavLink>
    </li>
  );
};

export default navigationBoostrapItem;
