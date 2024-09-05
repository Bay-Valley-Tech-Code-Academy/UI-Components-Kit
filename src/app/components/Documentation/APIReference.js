import React from 'react';

const APIReference = () => {
    return (
        <section id="api-reference" className="p-4 border border-gray-300 rounded-lg bg-[#333044] shadow-md mt-8">
            <h2 className="text-3xl font-bold mb-4 text-[#ffffff]">API Reference</h2>
            <p className="text-[#ffffff] mb-6">
                This section provides detailed information about the various functions, methods, and components available in this project. Below, you'll find descriptions, parameter details, return types, and example usage for each.
            </p>

            {/* Example Component Reference */}
            <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#ffffff] mb-4">Component: NavbarOne</h3>
                <p className="text-[#ffffff] mb-2">
                    <strong>Description:</strong> The <code>NavbarOne</code> component displays a navigation bar with customizable links and a logo.
                </p>
                <p className="text-[#ffffff] mb-2">
                    <strong>Props:</strong>
                </p>
                <ul className="list-disc list-inside text-[#ffffff] mb-4">
                    <li><strong>logo</strong> (string): The text or image to be displayed as the logo.</li>
                    <li><strong>links</strong> (array): An array of link names to be displayed in the navigation bar.</li>
                </ul>
                <p className="text-[#ffffff] mb-2">
                    <strong>Returns:</strong> A JSX element representing the navigation bar.
                </p>
                <p className="text-[#ffffff] mb-2">
                    <strong>Example Usage:</strong>
                </p>
                <pre className="bg-gray-800 p-4 rounded text-white">
                    <code>{`import NavbarOne from './components/NavbarOne';\n\nfunction HomePage() {\n  return (\n    <div>\n      <NavbarOne\n        logo="MySite"\n        links={["Home", "About", "Services", "Contact"]}\n      />\n      {/* Other content */}\n    </div>\n  );\n}`}</code>
                </pre>
            </div>

            {/* More components or functions can be added below */}
        </section>
    );
};

export default APIReference;
