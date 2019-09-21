import React from 'react' 
import Image from 'react-bootstrap/Image'

import classes from './ProductThumbnail.module.css';

const ProductThumbnail = (props) => {
  const { src,  title, description }  = props;
  return (
    <div className={classes.Wrapper}>
      <Image className={classes.Image} src={`${src}`} thumbnail></Image>
      <div className="caption">
          <h3>{title}</h3>
          <p className={classes.Description}>{description}</p>
      </div>
    </div>
  );
}

export default ProductThumbnail;
