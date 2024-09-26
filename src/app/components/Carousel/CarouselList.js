import { useState } from "react";

import carouselOne from "./carouselOne";
import carouselOneCode from "./snippets/carouselOneCode";
import carouselTwo from "./carouselTwo";
import carouselTwoCode from "./snippets/carouselTwoCode";
import carouselThree from "./carouselThree";
import carouselThreeCode from "./snippets/carouselThreeCode";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CarouselList() {
  const carousels = [
    {
      id: 1,
      component: carouselOne,
      code: carouselOneCode,
    },
    {
      id: 2,
      component: carouselTwo,
      code: carouselTwoCode,
    },
    {
      id: 3,
      component: carouselThree,
      code: carouselThreeCode,
    },
  ];

  const [previewStates, setPreviewStates] = useState(carousels.map(() => true));

  const togglePreview = (index) => {
    setPreviewStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-white text-4xl p-2">Carousel</h2>
      {/* multiple copies later on for different styles */}
      {carousels.map((carousel, index) => {
        const CarouselComponent = carousel.component;

        return (
          <div key={carousel.id} className="flex flex-col w-full md:w-2/3 mb-8">
            <div className="flex justify-between items-center">
              <h3 className="text-white text-base md:text-lg">
                {previewStates[index] ? "Preview" : "Code"}
              </h3>
              <button
                className="text-[#180728] font-bold p-1 text-base md:text-lg bg-[#FF7D61] hover:bg-[#CC4426] rounded-md m-1"
                onClick={() => togglePreview(index)}
              >
                {previewStates[index] ? "Code -->" : "Preview ->"}
              </button>
            </div>
            <div
              className={`w-full h-96 overflow-auto ${previewStates[index] ? "bg-black" : "bg-[#011627]"} p-2`}
            >
              {previewStates[index] ? (
                <CarouselComponent {...carousel.props} />
              ) : (
                <SyntaxHighlighter
                  language="javascript" // or other languages if needed
                  style={nightOwl} // Choose a theme that you prefer
                  className="text-white"
                >
                  {carousel.code}
                </SyntaxHighlighter>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
