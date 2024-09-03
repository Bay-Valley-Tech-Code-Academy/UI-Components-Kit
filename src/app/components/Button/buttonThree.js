"use client";

import { Component } from "react";

export default class ButtonThree extends Component {
  render() {
    const { 
      text="Button", 
      textColor="text-white",
      bgColor="bg-white"
    } = this.props;

    return (
        <div>
            <button
              className={`${textColor} ${bgColor} rounded-md p-3`}
            >
              {text}
            </button>
        </div>
    );
  }
}