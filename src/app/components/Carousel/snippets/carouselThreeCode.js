const carouselThreeCode = 

`"use client";

import React, { Component } from "react";
import Slider from "react-slick";

// Import css files for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CarouselThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0, // Initial slide index
    };
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    return (
      <div id="controls-carousel" className="relative w-full" data-carousel="static">
        <Slider {...settings}>
          {/* Carousel slides */}
          <div>
            <img src="/images/hamburger.jpg" className="carousel-image" alt="Hamburger" />
          </div>
          <div>
            <img src="/images/pizza.jpg" className="carousel-image" alt="Pizza" />
          </div>
          <div>
            <img src="/images/ramen.jpg" className="carousel-image" alt="Ramen" />
          </div>
          <div>
            <img src="/images/taco.jpg" className="carousel-image" alt="Taco" />
          </div>
        </Slider>
      </div>
    );
  }
}

// Custom Next Arrow component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      onClick={onClick}
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
        </svg>
        <span className="sr-only">Next</span>
      </span>
    </button>
  );
};

// Custom Prev Arrow component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      onClick={onClick}
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
        </svg>
        <span className="sr-only">Previous</span>
      </span>
    </button>
  );
};

`;

              export default carouselThreeCode;