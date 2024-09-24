import { useState } from "react";
import CardOne from './cardOne';
import CardTwo from './cardTwo';
import CardThree from './cardThree';
import CardFour from './cardFour';
import CardFive from './cardFive';
import CardOneCode from './snippets/cardOneCode.js';
import CardTwoCode from './snippets/cardTwoCode.js';
import CardThreeCode from './snippets/cardThreeCode.js';
import CardFourCode from './snippets/cardFourCode.js';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CardList() {
  const cards = [
    {
      id: 1,
      component: CardOne,
      code: CardOneCode,
      props: {
        name:"Alisson Ross",
        userIconColor:"stroke-pink-400",
        emailIconColor:"stroke-purple-400",
        phoneIconColor:"stroke-purple-400",
        chatIconColor:"stroke-purple-400",
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
    {
      id: 3,
      component: CardThree,
      code: CardThreeCode,
    },
    {
      id: 4,
      component: CardFour,
      code: CardFourCode,
      props: {
        image: "https://media-cdn.tripadvisor.com/media/photo-s/1c/47/18/ee/tonys-courtyard-cafe.jpg",
        restaurant: "Toni's Courtyard Cafe",
        type: "Cafe",
        price: "$$",
        rating: "*****",
        review: "26"
      }
    },
    {
      id: 5,
      component: CardFive,
    }
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
                className="text-[#180728] font-bold p-1 text-base md:text-lg bg-[#FF5531] hover:bg-[#CC4426] rounded-md m-1"
                onClick={() => togglePreview(index)}
              >
                {previewStates[index] ? "Code ->" : "Preview ->"}
              </button>
            </div>
            <div
              className={`w-full h-96 overflow-y-scroll ${previewStates[index] ? "bg-black" : "bg-[#011627]"}`}
            >
              {previewStates[index] ? (
                <CardComponent {...card.props} />
              ) : (
                <SyntaxHighlighter
                  language="javascript" // or other languages if needed
                  style={nightOwl} // Choose a theme that you prefer
                  className="text-white"
                >
                  {card.code}
                </SyntaxHighlighter>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
