"use client";

import { Component } from "react";

export default class ButtonOne extends Component {
  render() {
    const { 
      text="Button", 
      textColor="bg-blue-400",
    } = this.props;

    return (
        <button
          className={`${textColor} rounded-md`}
        >
          {text}
        </button>
    );
  }
}