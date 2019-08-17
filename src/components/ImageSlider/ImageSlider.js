import React from 'react';
import './ImageSlider.css';

const imageSlider = () => {
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
      <div
        id="myCarouselControllers"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block img-responsive"
              src={require('../../assets/images/slides/slide1.jpg')}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block img-responsive"
              src={require('../../assets/images/slides/slide2.jpg')}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block img-responsive"
              src={require('../../assets/images/slides/slide3.jpg')}
              alt="Second slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#myCarouselControllers"
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
          href="#myCarouselControllers"
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
    </div>
  );
};

export default imageSlider;
