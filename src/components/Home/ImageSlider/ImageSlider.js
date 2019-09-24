import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import './ImageSlider.css';

// @ts-ignore
const imageSlides = require.context(
  '../../../../public/assets/images/slides',
  false,
  /^.*\.jpg$/
);
const BASE_IMAGE_NAME = 'slide';
const IMAGE_EXTENSION = "jpg";
const NUMBER_OF_SLIDES = 3;

const getCarouselImageTags = () => {
  const imageTags = [];
  for (let slideNumber = 1; slideNumber <= NUMBER_OF_SLIDES; slideNumber++) {
    const imageName = `./${BASE_IMAGE_NAME}${slideNumber}.${IMAGE_EXTENSION}`;
    imageTags.push(<div data-src={imageSlides(imageName)} key={imageName} />);
  }

  return imageTags;
};

const ImageSlider = () => {
  return (
    <AwesomeSlider className=".aws-btn" infinite={true}>
      {getCarouselImageTags()}
    </AwesomeSlider>
  );
}

export default ImageSlider;
