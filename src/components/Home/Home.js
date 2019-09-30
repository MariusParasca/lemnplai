import React, { useState } from 'react';

import ImageSlider from './ImageSlider/ImageSlider';
import TextBanner from '../common/TextBanner/TextBanner';
import Spinner from '../UI/Spinner/Spinner';

const Home = () => {
  const [isImageSliderLoading, setIsImageSliderLoading] = useState(true);

  return (
    <>
      {isImageSliderLoading ? <Spinner /> : null}
      <ImageSlider setLoading={setIsImageSliderLoading} />
      <TextBanner />
    </>
  );
};

export default Home;
