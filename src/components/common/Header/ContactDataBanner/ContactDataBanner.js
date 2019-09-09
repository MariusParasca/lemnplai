// @ts-nocheck
import React from 'react';

import classes from './ContactDataBanner.module.css';

const contactDataBanner = () => {
  return (
    <ul className={classes.ContactDataBanner}>
      <li>
        <a href="tel:1234567890">
          <ion-icon name="call" class="white" />
          <span>0740777941</span>
        </a>
      </li>
      <li>
        <a href="mailto:test@test.com">
          <ion-icon name="mail" class="white" />
          <span>lemnplai@yahoo.com</span>
        </a>
      </li>
    </ul>
  );
};

export default contactDataBanner;
