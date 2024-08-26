"use client";

import Navbar from "../components/navbar";
import ComponentCard from "../components/componentCard";
import NavbarList from "../components/navbarList";
import { useState } from "react";

export default function Component() {
  const [selectedContent, setSelectedContent] = useState(null);

  const cards = [
    { title: "Navbar", content: <NavbarList /> },
    { title: "Footer", content: "" },
    { title: "Promo", content: "" },
    { title: "Card", content: "" },
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
            <button className="text-white p-1 text-base bg-[#FF5531] rounded-md md:text-lg hover:bg-[#CC4426] m-1" onClick={() => handleCardClick(null)}>Back</button>
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
