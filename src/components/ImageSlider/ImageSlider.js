import React, { Component } from 'react';
import './ImageSlider.css';
import Spinner from '../UI/Spinner/Spinner';

// @ts-ignore
const imageSlides = require.context(
  '../../../public/assets/images/slides/',
  false,
  /^.*\.jpg$/
);
const BASE_IMAGE_NAME = 'slide';
const IMAGE_EXTENSION = 'jpg';
const NUMBER_OF_SLIDES = 3;

class ImageSlider extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: false });
    console.log('componenetDidMount');
  }

  loadImages = () => {
    const images = [];
    images.push(imageSlides(`./${BASE_IMAGE_NAME}1.${IMAGE_EXTENSION}`));
    for (let slideNumber = 2; slideNumber <= NUMBER_OF_SLIDES; slideNumber++) {
      images.push(
        imageSlides(`./${BASE_IMAGE_NAME}${slideNumber}.${IMAGE_EXTENSION}`)
      );
    }
    return images;
  };

  getCarouselImageTags = imagesPaths => {
    const imageTags = [];
    imageTags.push(
      <div
        className="carousel-item active"
        key={`./${BASE_IMAGE_NAME}1.${IMAGE_EXTENSION}`}
      >
        <img
          className="d-block img-responsive"
          src={imagesPaths[0]}
          alt={`${BASE_IMAGE_NAME}1`}
        />
      </div>
    );
    for (let slideNumber = 2; slideNumber <= NUMBER_OF_SLIDES; slideNumber++) {
      const imageName = `./${BASE_IMAGE_NAME}${slideNumber}.${IMAGE_EXTENSION}`;
      imageTags.push(
        <div className="carousel-item" key={imageName}>
          <img
            className="d-block img-responsive"
            src={imagesPaths[slideNumber - 1]}
            alt={`${BASE_IMAGE_NAME}${slideNumber}`}
          />
        </div>
      );
    }

    this.sleepFor(2000);

    return imageTags;
  };

  sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) {
      /* do nothing */
    }
  }

  render() {
    let carouselImagesTags = [<Spinner key={'Spinner'} />];
    if (!this.state.loading) {
      carouselImagesTags = this.getCarouselImageTags(this.loadImages());
    }

    return (
      <div
        id="myCarousel"
        className="container-fluid carousel slide nopadding"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
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
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default ImageSlider;
