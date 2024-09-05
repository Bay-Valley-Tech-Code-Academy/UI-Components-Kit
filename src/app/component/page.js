"use client";

import Navbar from "../components/Website/navbar";
import ComponentCard from "../components/Website/componentCard";
import AiModel from "../components/Website/aiModel";
import NavbarList from "../components/Navbar/navbarList";
import CarouselList from "../components/Carousel/CarouselList";
import ButtonList from "../components/Button/buttonList";
import CardList from "../components/Card/cardList";
import FooterList from "../components/Footer/footerList";
import { useState } from "react";

export default function Component() {
  const [selectedContent, setSelectedContent] = useState(null);
  const [imgSrc, setImgSrc] = useState("/images/ai-white.png");
  const [open, setOpen] = useState(false);

  const cards = [
    { title: "Navbar", content: <NavbarList /> },
    { title: "Footer", content: <FooterList /> },
    { title: "Promo", content: "" },
    { title: "Button", content: <ButtonList />},
    { title: "Card", content: <CardList/>},
    { title: "Carousel", content: <CarouselList/>},
  ];

  const handleCardClick = (content) => {
    setSelectedContent(content);
  };

  const openAiForm = () => {
    setOpen(true);
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
          <div className="w-full">{selectedContent}</div>
        </div>
      )}
      <div className="p-6 fixed bottom-0 right-0">
        <img
          src={imgSrc}
          className="w-12 cursor-pointer"
          onClick={() => openAiForm()}
          onMouseEnter={() => setImgSrc("/images/ai-color.png")}
          onMouseLeave={() => setImgSrc("/images/ai-white.png")}
          alt="ai"
        />
      </div>
      <AiModel open={open} setOpen={setOpen} />
    </div>
  );
}
