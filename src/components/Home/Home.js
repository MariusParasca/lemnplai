import React, { useState } from 'react';

import ImageSlider from './ImageSlider/ImageSlider';
import TextBanner from '../common/TextBanner/TextBanner';
import Spinner from '../UI/Spinner/Spinner';

const Home = () => {

  const [ isImageSliderLoading, setIsImageSliderLoading ] = useState(true);

  return (
    <React.Fragment>
      {isImageSliderLoading ? <Spinner /> : null}
      <ImageSlider setLoading={setIsImageSliderLoading} />
      <TextBanner />
    </React.Fragment>
  );
};

export default Home;
