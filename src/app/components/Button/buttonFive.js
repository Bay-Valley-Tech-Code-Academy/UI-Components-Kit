"use client";

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
                    className={`${textColor} ${bgColor} rounded-md p-3`}
                    onClick={this.toggleDropdown}
                >
                    {text}
                </button>
                {this.state.isOpen && (
                    <div>
                        {items.map((items, index) => (
                            <a
                                key={index}
                                href={items.href}
                                className="block px-4 py-2"
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