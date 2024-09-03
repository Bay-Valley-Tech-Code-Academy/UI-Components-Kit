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
          className={`${textColor} ${bgColor} rounded-md p-3 ring-offset-2 ring-offset-gradient-to-r ring-offset-blue-500 ring-offset-green-500`}
        >
          {text}
        </button>
    );
  }
}