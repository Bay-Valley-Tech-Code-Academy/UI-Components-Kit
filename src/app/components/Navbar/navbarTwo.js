"use client";

import { Component } from "react";

export default class NavbarTwo extends Component {
  render() {
    const {
      logo = "Default Logo",
      links = ["Home", "About", "Contact"],
      backgroundColor = "bg-gray-800",
      textColor = "text-white",
      hoverColor = "hover:text-yellow-300",
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
        <div className="text-2xl font-extrabold">
          {logo}
        </div>
      </nav>
    );
  }
}