import React from 'react';

import ContactDataBanner from './ContactDataBanner/ContactDataBanner';
import NavigationBar from './NavigationBootstrapBar/NavigationBar';

const Header = props => {
  return (
    <header>
      <ContactDataBanner tell={'0740777941'} mail={'lemnplai@yahoo.com'} />
      <NavigationBar {...props} />
    </header>
  );
};

export default Header;
