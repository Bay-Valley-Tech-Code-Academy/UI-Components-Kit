import { useState } from "react";
import CardOne from './cardOne';
import CardTwo from './cardTwo';
import CardOneCode from './snippets/cardOneCode.js'
import CardTwoCode from './snippets/cardTwoCode.js'

export default function CardList() {
  const cards = [
    {
      id: 1,
      component: CardOne,
      code: CardOneCode,
      props: {
        description:"Tailwind Box Component",
        title:"Explore Tailwind CSS",
        button:"Learn More",
        author:"John Doe",
        buttonColor:"bg-pink-600",
        hoverColor:"hover:bg-orange-500",
        width:"w-50"
      },
    },
    {
      id: 2,
      component: CardTwo,
      code: CardTwoCode,
      props: {
        title:"Bird Watching",
        description:"Tailwind Box Component",
        button:"Learn More",
        author:"Jane Doe",
        buttonColor:"bg-green-600",
        hoverColor:"hover:bg-red-500",
        width:"w-full"
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
