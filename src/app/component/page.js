"use client";

import Navbar from "../components/Website/navbar";
import ComponentCard from "../components/Website/componentCard";
import NavbarList from "../components/Navbar/navbarList";
import CarouselList from "../components/Carousel/CarouselList";
import { useState } from "react";

import BVTLogo from '../../../public/images/bvt_logo.png'

export default function Component() {
  const [selectedContent, setSelectedContent] = useState(null);

  const cards = [
    { title: "Navbar", content: <NavbarList /> },
    { title: "Footer", content: "" },
    { title: "Promo", content: "" },
    { title: "Card", content: "" },
    { title: "Button", content: ""},
    { title: "Carousel", content: <CarouselList/>},
  ];

  const handleCardClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex justify-start p-6 text-white text-4xl sm:text-5xl md:text-7xl xl:text-8xl mt-10 font-extrabold mb-10">
        <h1>Components</h1>
      </div>
      {selectedContent === null ? (
        <div className="flex flex-wrap justify-around p-6">
          {cards.map((card, index) => (
            <ComponentCard
              key={index}
              title={card.title}
              onClick={() => handleCardClick(card.content)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col p-6">
          <div>
          <button
            className="text-[#180728] p-3 text-lg bg-[#FF7D61] rounded-md md:text-xl hover:bg-[#CC4426] m-1 md:m-4 ml-auto block"
            onClick={() => handleCardClick(null)}
          >
            Back
          </button>
          </div>
          <div className="w-full">
            {selectedContent}
          </div>
        </div>
      )}
      {/* Grid of Boxes
       <div className="-mt-2 p-2 mr-2 lg:mt-0 gap-x-6 grid lg:grid-flow-col grid-flow-row auto-cols-max justify-center gap-4">
        <Box
          description="Explore Tailwind CSS"
          title="Tailwind Box Component"
          button="Learn More"
          p="By John Doe"
          buttonColor="bg-pink-600"
          hoverColor="hover:bg-orange-500"
        />
      </div> */}
    </div>
  );
}
