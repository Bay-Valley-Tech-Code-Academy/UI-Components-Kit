import { useState } from 'react';
import ButtonOne from './buttonOne';
import ButtonTwo from './buttonTwo';
import buttonOneCode from './snippets/buttonOneCode';
import buttonTwoCode from './snippets/buttonTwoCode'

export default function ButtonList() {
  const buttons = [
    {
      id: 1,
      component: ButtonOne,
      code: buttonOneCode,
      props: {
        text: "Button1",
        textColor: "bg-blue-400",
      },
    },
    {
      id: 2,
      component: ButtonTwo,
      code: buttonTwoCode,
      props: {
        text: "Button2",
        textColor: "bg-red-300",
      },
    },
  ];

  const [previewStates, setPreviewStates] = useState(buttons.map(()=> true));

  const togglePreview = (index) => {
    setPreviewStates((previewStates) => 
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