import React from 'react';

import ContactDataBanner from './ContactDataBanner/ContactDataBanner';
import NavigationBar from './NavigationBar/NavigationBar';

const header = () => {
  return (
    <header>
      <ContactDataBanner />
      <NavigationBar />
    </header>
  );
};

export default header;
