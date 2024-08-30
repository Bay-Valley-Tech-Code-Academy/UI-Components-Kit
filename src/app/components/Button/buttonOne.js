"use client";

import { Component } from "react";

export default class ButtonOne extends Component {
  render() {
    const { text="Button" } = this.props;

    return (
        <button>
          {text}
        </button>
    );
  }
}