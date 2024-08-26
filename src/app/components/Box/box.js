"use client"
import { Component } from "react";
export default class Box extends Component {
  render() {
    const { description = "Default Description", title = "Default Title", button = "Click Me", p = "Default Footer Text", buttonColor = "bg-indigo-600", hoverColor = "hover:bg-indigo-500", focusColor = "focus-visible:outline-indigo-600" } = this.props;

    return (
      <div className="-mt-2 p-2 mr-2 lg:mt-0 gap-x-6 grid lg:grid-flow-col grid-flow-row auto-cols-max justify-center gap-4">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 gap-x-6">
          <div className="mx-2 max-w-xs">
            <p className="mt-6 flex items-baseline justify-center gap-x-2 px-[5rem]">
              <span className="text-5xl font-bold tracking-tight text-gray-900">{description}</span>
            </p>
            <p className="text-base font-semibold text-gray-600">{title}</p>
            <a
              href="#"
              className={`mt-10 block w-full rounded-md ${buttonColor} px-3 py-2 text-center text-sm font-semibold text-white shadow-sm ${hoverColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${focusColor}`}
            >
              {button}
            </a>
            <p className="mt-6 text-xs leading-5 text-gray-600 flex flex-row justify-end">
             
              {p}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
