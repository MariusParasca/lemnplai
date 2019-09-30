import React from 'react';

import ContactDataBanner from './ContactDataBanner/ContactDataBanner';
import NavigationBar from './NavigationBootstrapBar/NavigationBar';

const Header = props => {
  const { title } = props;
  return (
    <header>
      <ContactDataBanner tell="0740777941" mail="lemnplai@yahoo.com" />
      <NavigationBar title={title} />
    </header>
  );
};

export default Header;
