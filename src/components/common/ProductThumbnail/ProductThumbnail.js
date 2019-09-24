import React, { useState } from 'react' 
import LazyLoad from 'react-lazy-load';

import classes from './ProductThumbnail.module.css';
import Spinner from '../../UI/Spinner/Spinner';

const ProductThumbnail = (props) => {
  const { src,  title, description }  = props;
  const [ loading, setLoading ] = useState(true);

  return (
    <div className={classes.Wrapper}>
      {loading ? <Spinner/> : null}
      <LazyLoad>
        <img 
          style={{display: !loading ? 'block' : 'none'}}
          className={`${classes.Image} img-thumbnail`}
          src={`${src}`}
          onLoad={() => setLoading(false)}
          alt={title}
        />
      </LazyLoad>
      <div className="caption">
        <h3>{title}</h3>
        <p className={classes.Description}>{description}</p>
      </div>
    </div>
  );
}

export default ProductThumbnail;
