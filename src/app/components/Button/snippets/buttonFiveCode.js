const buttonFiveCode = `
"use client";
import { ChevronDoubleDownIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

import { Component } from "react";

export default class ButtonFive extends Component {
    constructor(props) {
        super(props);
        this.state={
            isOpen: false,
        };
    }

    toggleDropdown = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    };
    
    render() {
        const { 
        text="Button", 
        textColor="text-white",
        bgColor="bg-white",
        items=[]
        } = this.props;

        return (
            <div className="relative">
                <button
                    className={\`\${textColor} \${bgColor} rounded p-3\`}
                    onClick={this.toggleDropdown}
                >
                    <div className="flex gap-1">
                        {text}
                        <ChevronDownIcon className="size-5 mt-1" />
                    </div>
                </button>
                {this.state.isOpen && (
                    <div className="absolute bg-white w-36 rounded">
                        {items.map((items, index) => (
                            <a
                                key={index}
                                href={items.href}
                                className="block px-4 py-2 hover:bg-gray-200"
                            >
                                {items.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}
`;

export default buttonFiveCode;