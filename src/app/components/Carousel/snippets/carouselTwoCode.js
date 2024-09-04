const carouselTwoCode = `
  "use client";

import React, { Component } from "react";
import Image from "next/image"; // Import Next.js Image component

export default class CarouselTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0, // Initial slide index
    };
  }

  // Array of image data (source paths and alt texts)
  slides = [
    { src: "/images/bvt_logo.png", alt: "Logo Image" },
    { src: "/images/ui-shop-tool-kit.png", alt: "Second Image" },
  ];

  goToNext = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.slides.length,
    }));
  };

  goToPrevious = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === 0
          ? this.slides.length - 1
          : prevState.currentIndex - 1,
    }));
  };

  render() {
    const { currentIndex } = this.state;

    return (
      <div className="relative w-full max-w-xl mx-auto">
        {/* Carousel wrapper */}
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-200 ease-linear"
            style={{ transform: \`translateX(-\${currentIndex * 100}%)\` }}
          >
            {this.slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full h-80 flex-shrink-0 bg-gray-300"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  width={800}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={this.goToPrevious}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>

        </button>

        {/* Next Button */}
        <button
          onClick={this.goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>

        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-4">
          {this.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => this.setState({ currentIndex: index })}
              className={\`w-3 h-3 mx-1 \${
                currentIndex === index ? "bg-green-500" : "bg-white"
              }\`}
            />
          ))}
        </div>
      </div>
    );
  }
}


`;

export default carouselTwoCode;