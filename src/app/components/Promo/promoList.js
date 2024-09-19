import React, { useState } from "react";
import PromoOne from "./promoOne";
import promoOneCode from "./snippets/promoOneCode";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PromoList() {
  const promos = [
    {
      id: 1,
      component: PromoOne,
      code: promoOneCode,
      props: {
        imageSrc: "https://www.shutterstock.com/image-photo/beautiful-pink-flower-anemones-fresh-260nw-1028135845.jpg",
        description: "Get 50% off on your first purchase. Don't miss out!",
        buttonText: "Grab the Deal",
        onButtonClick: () => alert('Promo button clicked!'),
      },
    },
  ];

  const [previewStates, setPreviewStates] = useState(promos.map(() => true));

  const togglePreview = (index) => {
    setPreviewStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-white">Promos</h1>
      {promos.map((promo, index) => {
        const PromoComponent = promo.component;
        return (
          <div key={promo.id} className="flex flex-col w-full md:w-2/3 mb-8">
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
              className={`w-full h-96 overflow-y-scroll 
                    ${previewStates[index] ? "bg-black" : "bg-[#011627]"}`}
            >
              {previewStates[index] ? (
                <PromoComponent {...promo.props} />
              ) : (
                <SyntaxHighlighter
                  language="javascript"
                  style={nightOwl}
                  className="text-white"
                >
                  {promo.code}
                </SyntaxHighlighter>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
