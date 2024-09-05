import React from "react";
import { useState } from "react";
import FooterOne from "./footerOne";
import footerOneCode from "./snippets/footerOneCode";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function FooterList() {
  const footers = [
    {
      id: 1,
      component: FooterOne,
      code: footerOneCode,
    },
    // {
    //     id: 2,
    //     component: FooterTwo,
    //     code: footerTwoCode,
    //     props: {
    //         logo: "logo",
    //         links:[],
    //         socials: []
    //     }
    // }
  ];

  const [previewStates, setPreviewStates] = useState(footers.map(() => true));

  const togglePreview = (index) => {
    setPreviewStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="flex flex-col items-center">
      {/* Header */}
      <h1 className="text-4xl text-white">Footer</h1>
      {/* Footer Templates */}
      {footers.map((footer, index) => {
        const FooterComponent = footer.component;
        return (
          <div key={footer.id} className="flex flex-col w-full md:w-2/3 mb-8">
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
                <FooterComponent {...footer.props} />
              ) : (
                <SyntaxHighlighter
                  language="javascript" // or other languages if needed
                  style={nightOwl} // Choose a theme that you prefer
                  className="text-white"
                >
                  {footer.code}
                </SyntaxHighlighter>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
