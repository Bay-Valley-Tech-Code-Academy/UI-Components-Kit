"use client";

import { Component } from "react";

export default class ButtonTwo extends Component {
  render() {
    const { 
      text="Button", 
      textColor="text-white",
      bgColor="bg-white"
    } = this.props;

    return (
        <div>
            <button
              className={`${textColor} ${bgColor} rounded-md p-3 outline`}
            >
              {text}
            </button>
        </div>
    );
  }
}