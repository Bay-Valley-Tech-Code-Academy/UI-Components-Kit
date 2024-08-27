const navbarOneCode = `
    #navbarOne.js

    "use client";

    import { Component } from "react";

    export default class NavbarOne extends Component {
      render() {
        const {
          logo = "Default Logo",
          links = ["Home", "About", "Contact"],
          backgroundColor = "bg-white",
          textColor = "text-gray-900",
          hoverColor = "hover:text-indigo-600",
        } = this.props;

        return (
          <nav className={\`flex justify-between items-center p-4 \${backgroundColor}\`}>
            <div className="text-xl font-bold">
              {logo}
            </div>
            <div className="flex space-x-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className={\`text-sm font-semibold \${textColor} \${hoverColor}\`}
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
        );
      }
    }

    #Call component
    
    <NavbarOne
      logo="MySite"
      links={["Home", "About", "Services", "Contact"]}
      backgroundColor="bg-blue-600"
      textColor="text-white"
      hoverColor="hover:text-gray-300"
    />
`;

export default navbarOneCode;