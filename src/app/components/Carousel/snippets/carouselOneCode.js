const carouselOneCode = `
  "use client";

import React, { Component } from "react";
import Image from "next/image"; // Import Next.js Image component

export default class CarouselOne extends Component {
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

  componentDidMount() {
    // Automatically go to the next slide every 3 seconds (3000 ms)
    this.interval = setInterval(this.goToNext, 3000);
  }

  componentWillUnmount() {
    // Clear interval when the component is unmounted to prevent memory leaks
    clearInterval(this.interval);
  }

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
      <div className="relative w-full max-w-lg mx-auto">
        {/* Carousel wrapper */}
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: \`translateX(-\${currentIndex * 100}%)\` }}
          >
            {this.slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full h-64 flex-shrink-0 bg-gray-300"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  width={500}
                  height={300}
                  priority
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
          &lt;
        </button>

        {/* Next Button */}
        <button
          onClick={this.goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          &gt;
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-4">
          {this.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => this.setState({ currentIndex: index })}
              className={\`w-3 h-3 mx-1 rounded-full \${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }\`}
            />
          ))}
        </div>
      </div>
    );
  }
}

`;

export default carouselOneCode;