"use client";

import { Component } from "react";

export default class ButtonOne extends Component {
  constructor(props) {
    super(props);
    // Initialize state for menuOpen
    this.state = {
      menuOpen: false,
    };
  }

  // toggles menu accordion
  toggleMenuAccordion = () => {
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  render() {
    // Destructure state inside render method
    const { menuOpen } = this.state;

    return (
      // accordion button
      <div className="w-full p-2">
        <div className="p-3 border border-gray-300 rounded-lg shadow-md bg-white">
          <div className="border border-gray-200 rounded-lg">
            <button
              onClick={this.toggleMenuAccordion}
              className="flex justify-between w-full px-4 py-2 text-left text-2xl font-bold mb-2 text-black bg-gray-100 rounded-lg focus:outline-none transition duration-500 ease-in"
            >
              {menuOpen ? "Hide Menu" : "Show Menu"}
              <span className={`transform transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${menuOpen ? "max-h-[1000px] p-6" : "max-h-0 p-0"} border-t border-gray-200`}>
              <p>No menu available.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
