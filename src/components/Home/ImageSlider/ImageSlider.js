import React, { useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import './ImageSlider.css';

// @ts-ignore
const imageSlides = require.context('../../../../public/assets/images/slides', false, /^.*\.jpg$/);
const BASE_IMAGE_NAME = 'slide';
const IMAGE_EXTENSION = 'jpg';
const NUMBER_OF_SLIDES = 3;

const getCarouselImageTags = () => {
  const imageTags = [];
  for (let slideNumber = 1; slideNumber <= NUMBER_OF_SLIDES; slideNumber += 1) {
    const imageName = `./${BASE_IMAGE_NAME}${slideNumber}.${IMAGE_EXTENSION}`;
    imageTags.push(<div data-src={imageSlides(imageName)} key={imageName} />);
  }

  return imageTags;
};

const ImageSlider = props => {
  useEffect(() => props.setLoading(false), [props]);

  return (
    <AwesomeSlider className=".aws-btn" infinite>
      {getCarouselImageTags()}
    </AwesomeSlider>
  );
};

export default ImageSlider;
