import React from 'react';

import ContactDataBanner from './ContactDataBanner/ContactDataBanner';
import NavigationBar from './NavigationBootstrapBar/NavigationBar';

const header = () => {
  return (
    <header>
      <ContactDataBanner />
      <NavigationBar />
    </header>
  );
};

export default header;
