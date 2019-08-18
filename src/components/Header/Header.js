import React from 'react';

import ContactDataBanner from './ContactDataBanner/ContactDataBanner';
import NavigationBar from './NavigationBootstrapBar/NavigationBar';

const header = props => {
  return (
    <header>
      <ContactDataBanner />
      <NavigationBar {...props} />
    </header>
  );
};

export default header;
