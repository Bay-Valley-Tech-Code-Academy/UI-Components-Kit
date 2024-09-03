import { useState } from 'react';
import ButtonOne from './buttonOne';
import ButtonTwo from './buttonTwo';
import buttonOneCode from './snippets/buttonOneCode';
import buttonTwoCode from './snippets/buttonTwoCode'
import ButtonThree from './buttonThree';
import buttonThreeCode from './snippets/buttonThreeCode';
import ButtonFour from './buttonFour';
import buttonFourCode from './snippets/buttonFourCode';

export default function ButtonList() {
  const buttons = [
    {
      id: 1,
      component: ButtonOne,
      code: buttonOneCode,
      props: {
        text: "Purple to Blue",
        textColor: "text-white",
        bgColor: "bg-gradient-to-r from-[#EE86FF] to-[#009DB2]"
      },
    },
    {
      id: 2,
      component: ButtonTwo,
      code: buttonTwoCode,
      props: {
        text: "Blue to Green",
        textColor: "text-white",
        bgColor: "bg-gradient-to-r from-[#054FDF] to-[#7AFFBF]",
      },
    },
    {
      id: 3,
      component: ButtonThree,
      code: buttonThreeCode,
      props: {
        text: "Pink to Blue",
        textColor: "text-white",                            
        bgColor: "bg-gradient-to-r from-[#FF008A] to-[#251CC0]",
      },
    },
    {
      id: 4,
      component: ButtonFour,
      code: buttonFourCode,
      props: {
        text: "Pink to Blue",
        textColor: "text-black",
        bgColor: "bg-white",
      },
    },
  ];

  const [previewStates, setPreviewStates] = useState(buttons.map(()=> true));

  const togglePreview = (index) => {
    setPreviewStates((prevStates) => 
      prevStates.map((state, i) => (i === index ? !state: state))
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h2>Button</h2>
      {buttons.map((button, index) => {
        const ButtonComponent = button.component;

        return (
          <div key={button.id} className="flex flex-col w-full md:w-2/3 mb-3">
            <div className="flex justify-between items-center">
              <h3>{previewStates[index] ? "Preview": "Code"}</h3>
              <button
                className="text-white p-1 text-base md:text-lg bg-[#FF5531] hover:bg-[#CC4426] rounded-md m-1"
                onClick={() => togglePreview(index)}
              >
                {previewStates[index] ? "Code ->" : "Preview ->"}
              </button>
            </div>
            <div className={`w-full h-96 overflow-y-scroll ${previewStates[index] ? "bg-black" : "bg-[#1e293b]"}`}>
              {previewStates[index] ? (
                <ButtonComponent {...button.props} />
              ) : (
                <pre className="text-white p-4">
                  <code>{button.code}</code>
                </pre>
              )}
            </div>
          </div>
          );
        })}
    </div>
  )
}