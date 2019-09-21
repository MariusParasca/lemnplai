// @ts-nocheck
import React from 'react';

import classes from './ContactDataBanner.module.css';

const ContactDataBanner = (props) => {
  const { tell, mail} = props;
  return (
    <ul className={classes.ContactDataBanner}>
      <li>
        <a href={`tel:${tell}`}>
          <ion-icon name="call" class="white" />
          <span>{tell}</span>
        </a>
      </li>
      <li>
        <a href={`mailto:${mail}`}>
          <ion-icon name="mail" class="white" />
          <span>{mail}</span>
        </a>
      </li>
    </ul>
  );
};

export default ContactDataBanner;
