import React from 'react' 
import Image from 'react-bootstrap/Image'

import classes from './ProductThumbnail.module.css';

const ProductThumbnail = (props) => {
  const { src }  = props;
  return (
    <div className={classes.Wrapper}>
      <Image className={classes.Image} src={`${src}`} thumbnail></Image>
      <div className="caption">
          <h3>Hamburger</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
}

export default ProductThumbnail;
