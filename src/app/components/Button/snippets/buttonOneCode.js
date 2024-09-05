const buttonOneCode = `
"use client";

import { Component } from "react";

export default class ButtonOne extends Component {
  render() {
    const { 
      text="Button", 
      textColor="text-white",
      bgColor="bg-white"
    } = this.props;

    return (
        <button
          className={\`\${textColor} \${bgColor} rounded-md p-3\`}
        >
          {text}
        </button>
    );
  }
}
`;

export default buttonOneCode;