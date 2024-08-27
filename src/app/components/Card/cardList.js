import { useState } from "react";
import Card from "./card";
import CardOneCode from './snippets/cardOneCode.js'

export default function CardList() {
  const cards = [
    {
      id: 1,
      component: Card,
      code: CardOneCode,
      props: {
        logo: "MySite",
        links: ["Home", "About", "Services", "Contact"],
        backgroundColor: "bg-blue-600",
        textColor: "text-white",
        hoverColor: "hover:text-gray-300",
      },
    },
    {
      id: 2,
      component: Card,
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

  const [previewStates, setPreviewStates] = useState(cards.map(() => true));

  const togglePreview = (index) => {
    setPreviewStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-white text-4xl p-2">Cards</h2>
      {/* multiple copies later on for different styles */}
      {cards.map((card, index) => {
        const CardComponent = card.component;

        return (
          <div key={card.id} className="flex flex-col w-full md:w-2/3 mb-8">
            <div className="flex justify-between items-center">
              <h3 className="text-white text-base md:text-lg">{previewStates[index] ? "Preview" : "Code"}</h3>
              <button
                className="text-white p-1 text-base md:text-lg bg-[#FF5531] hover:bg-[#CC4426] rounded-md m-1"
                onClick={() => togglePreview(index)}
              >
                {previewStates[index] ? "Code ->" : "Preview ->"}
              </button>
            </div>
            <div
              className={`w-full h-96 overflow-y-scroll ${previewStates[index] ? "bg-black" : "bg-[#1e293b]"}`}
            >
              {previewStates[index] ? (
                <CardComponent {...card.props} />
              ) : (
                <pre className="text-white p-4">
                  <code>{card.code}</code>
                </pre>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
