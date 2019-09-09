import React from 'react';

import ImageSlider from './ImageSlider/ImageSlider';
import TextBanner from '../common/TextBanner/TextBanner';

const home = () => {
  return (
    <React.Fragment>
      <ImageSlider />
      <TextBanner />
    </React.Fragment>
  );
};

export default home;
