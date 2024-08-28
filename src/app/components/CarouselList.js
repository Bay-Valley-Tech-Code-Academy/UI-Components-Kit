import { useState } from "react";
import NavbarOne from "./Navbar/navbarOne";
import NavbarTwo from "./Navbar/navbarTwo";
import navbarOneCode from "./Navbar/snippets/navbarOneCode";
import navbarTwoCode from "./Navbar/snippets/navbarTwoCode";

import carouselOne from "./Carousel/carouselOne";

export default function CarouselList() {
  const carousels = [
    {
      id: 1,
      component: carouselOne,
      code: navbarOneCode,
      props: {
        backgroundColor: "bg-[#FFF8F0]",
      },
    },
    {
      id: 2,
      component: NavbarTwo,
      code: navbarTwoCode,
      props: {
        logo: "YourSite",
        links: ["Home", "Portfolio", "Contact"],
        backgroundColor: "bg-gray-800",
        textColor: "text-white",
        hoverColor: "hover:text-yellow-300",
      },
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
              <h3 className="text-white text-base md:text-lg">{previewStates[index] ? "Preview" : "Code"}</h3>
              <button
                className="text-[#180728] font-bold p-1 text-base md:text-lg bg-[#FF7D61] hover:bg-[#CC4426] rounded-md m-1"
                onClick={() => togglePreview(index)}
              >
                {previewStates[index] ? "Code -->" : "Preview ->"}
              </button>
            </div>
            <div
              className={`w-full h-96 overflow-y-scroll ${previewStates[index] ? "bg-[#523B82]" : "bg-[#1e293b]"}`}
            >
              {previewStates[index] ? (
                <CarouselComponent {...carousel.props} />
              ) : (
                <pre className="text-white p-4">
                  <code>{carousel.code}</code>
                </pre>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
