import React from 'react'
import classes from './ImageResponsive.module.css';

function ImageResponsive( { src, width, height } ) {
  return (
    <div
      style={ { 
        width,
      } }
      className={classes.ImageResponsive}>
      <div style={ {
          paddingBottom: ( height / width * 100 ) + '%'
        } } />
      <img
        src={ src }
        alt={src} />
    </div>
  );
}

export default ImageResponsive
