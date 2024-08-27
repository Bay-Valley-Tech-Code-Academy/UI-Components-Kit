import { useState } from "react";
import NavbarOne from "./Navbar/navbarOne";
import NavbarTwo from "./Navbar/navbarTwo";
import navbarOneCode from "./Navbar/snippets/navbarOneCode";
import navbarTwoCode from "./Navbar/snippets/navbarTwoCode";

export default function NavbarList() {
  const navbars = [
    {
      id: 1,
      component: NavbarOne,
      code: navbarOneCode,
      props: {
        logo: "MySite",
        links: ["Home", "About", "Services", "Contact"],
        backgroundColor: "bg-[#FFF8F0]",
        textColor: "text-black",
        hoverColor: "hover:text-purple-600",
      },
    },
    {
      id: 2,
      component: NavbarTwo,
      code: navbarTwoCode,
      props: {
        logo: "YourSite",
        links: ["Home", "Portfolio", "Contact"],
        backgroundColor: "bg-gray-800",
        textColor: "text-white",
        hoverColor: "hover:text-yellow-300",
      },
    },
  ];

  const [previewStates, setPreviewStates] = useState(navbars.map(() => true));

  const togglePreview = (index) => {
    setPreviewStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-white text-4xl p-2">Navbar</h2>
      {/* multiple copies later on for different styles */}
      {navbars.map((navbar, index) => {
        const NavbarComponent = navbar.component;

        return (
          <div key={navbar.id} className="flex flex-col w-full md:w-2/3 mb-8">
            <div className="flex justify-between items-center">
              <h3 className="text-white text-base md:text-lg">{previewStates[index] ? "Preview" : "Code"}</h3>
              <button
                className="text-[#180728] font-bold p-1 text-base md:text-lg bg-[#FF7D61] hover:bg-[#CC4426] rounded-md m-1"
                onClick={() => togglePreview(index)}
              >
                {previewStates[index] ? "Code -->" : "Preview ->"}
              </button>
            </div>
            <div
              className={`w-full h-96 overflow-y-scroll ${previewStates[index] ? "bg-[#523B82]" : "bg-[#1e293b]"}`}
            >
              {previewStates[index] ? (
                <NavbarComponent {...navbar.props} />
              ) : (
                <pre className="text-white p-4">
                  <code>{navbar.code}</code>
                </pre>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
