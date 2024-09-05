const buttonFourCode = `
"use client";

import { Component } from "react";

export default class ButtonFour extends Component {
  render() {
    const { 
      text="Button", 
      textColor="text-white",
      bgColor="bg-white"
    } = this.props;

    return (
        <button
          className={\`\${textColor} rounded-lg py-3 px-2 overflow-hidden group \${bgColor} group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800\`}>
          <span class="relative px-6 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0">
            {text}
          </span>
        </button>
    );
  }
}
`;

export default buttonFourCode;