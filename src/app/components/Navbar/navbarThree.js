"use client";

import { Component } from "react";

export default class NavbarThree extends Component {
  render() {
    const {
      logo = "Default Logo",
      links = ["Home", "About", "Contact"],
      backgroundColor = "bg-gray-500",
      textColor = "text-yellow",
      hoverColor = "hover:text-yellow-500",
    } = this.props;

    return (
      <nav className={`flex justify-between items-center p-4 ${backgroundColor} shadow-lg`}>
        <div className="flex space-x-6">
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className={`text-lg font-medium ${textColor} ${hoverColor} transition-colors duration-300`}
            >
              {link}
            </a>
          ))}
        </div>
        <div>
            <input type="text" placeholder="Search"/>
        </div>
        <div className="text-2xl font-extrabold">
          {logo}
        </div>
      </nav>
    );
  }
}