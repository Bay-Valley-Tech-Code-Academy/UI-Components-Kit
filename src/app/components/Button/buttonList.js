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

  return (
    <div>

    </div>
  )
}