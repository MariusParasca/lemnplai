import React from 'react';
import './ImageSlider.css';

// @ts-ignore
const imageSlides = require.context(
  '../../../public/assets/images/slides/',
  false,
  /^.*\.jpg$/
);
const BASE_IMAGE_NAME = 'slide';
const IMAGE_EXTENSION = 'jpg';
const NUMBER_OF_SLIDES = 3;

const getCarouselImageTags = () => {
  const imageTags = [];
  imageTags.push(
    <div className="carousel-item active">
      <img
        className="d-block img-responsive"
        src={imageSlides(`./${BASE_IMAGE_NAME}1.${IMAGE_EXTENSION}`)}
        alt={`${BASE_IMAGE_NAME}1`}
      />
    </div>
  );
  for (let slideNumber = 2; slideNumber <= NUMBER_OF_SLIDES; slideNumber++) {
    imageTags.push(
      <div className="carousel-item">
        <img
          className="d-block img-responsive"
          src={imageSlides(
            `./${BASE_IMAGE_NAME}${slideNumber}.${IMAGE_EXTENSION}`
          )}
          alt={`${BASE_IMAGE_NAME}${slideNumber}`}
        />
      </div>
    );
  }
  return imageTags;
};

const imageSlider = () => {
  const carouselImagesTags = getCarouselImageTags();
  return (
    <div
      id="myCarousel"
      className="container-fluid carousel slide nopadding"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">{carouselImagesTags}</div>
      <a
        className="carousel-control-prev"
        href="#myCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#myCarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default imageSlider;
