import React from 'react';

import classes from './TextBanner.module.css';

const TextBanner = () => {
  const textToShow = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus ab nulla dolorum autem nisi officiis blanditiis
            voluptatem`;
  return (
    <div className={`${classes.TextBanner} container-fluid  shadow`}>
      <div className="container">
        <section className="py-5 text-color text-size">
          <h2 className="font-weight-bold">{textToShow}</h2>
        </section>
      </div>
    </div>
  );
};

export default TextBanner;
