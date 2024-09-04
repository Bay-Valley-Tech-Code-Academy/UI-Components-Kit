import React from 'react';
import FAQItem from '../components/Documentation/FAQitem';
import GetStarted from '../components/Documentation/getStarted';
import Navbar from "../components/Website/navbar";
import NavbarOne from "../components/Navbar/navbarOne";
import NavbarTwo from "../components/Navbar/navbarTwo";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

const DocumentationLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header>
        <Navbar />
        <h1 className="text-[#ffffff] text-2xl font-bold p-4">Documentation</h1>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-[#333044] rounded-lg shadow-md p-6 sticky top-0 h-screen">
          <nav>
            <ul className="space-y-4">
              <li>
                <a href="#introduction" className="text-indigo-200 hover:text-orange-400">
                  Introduction
                </a>
              </li>
              <li>
                <a href="#overview" className="text-indigo-200 hover:text-orange-400">
                  Overview
                </a>
              </li>
              <li>
                <a href="#prerequisites" className="text-indigo-200 hover:text-orange-400">
                  Prerequisites
                </a>
              </li>
              <li>
                <a href="#getting-started" className="text-indigo-200 hover:text-orange-400">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="#components" className="text-indigo-200 hover:text-orange-400">
                  Components
                </a>
              </li>
              <li>
                <a href="#AI-Powered-Component-Generator" className="text-indigo-200 hover:text-orange-400">
                  AI-Powered Component Generator
                </a>
              </li>
              <li>
                <a href="#api-reference" className="text-indigo-200 hover:text-orange-400">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#FAQ" className="text-indigo-200 hover:text-orange-400">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6">

          {/* Introduction Section */}
          <section id="introduction">
            <div className="p-4 border border-gray-300 rounded-lg bg-[#333044] shadow-md">
              <h2 className="text-3xl font-bold mb-4 text-[#ffffff]">Introduction</h2>
              <p className="mb-6 text-[#ffffff]">
                Welcome to the documentation for our project. This section
                provides an overview of what you can find in the documentation.
              </p>
              <p className="mb-6 text-[#ffffff]">
                This is a Next.js project bootstrapped with{" "}
                <code>create-next-app</code>.
              </p>
              <p className="mb-6 text-[#ffffff]">
                This components project will help you build your own website.
              </p>
            </div>
          </section>

          {/* Getting Started Section */}
          <section id="getting-started">
            <div className="p-4 border border-gray-300 rounded-lg bg-[#333044] shadow-md">
              <h2 className="text-3xl font-bold mb-4 text-[#ffffff]">Getting Started</h2>

              {/* Step 1: Components */}
              <GetStarted
                subtitle="Step 1: Components"
                body="First, head over to the components page and click on a component category that you are wanting to add to your website."
              />

              {/* Step 2: Installation */}
              <GetStarted
                subtitle="Step 2: Installation"
                body="Once you find a component template you like, click the 'code' button to reveal the code for that template, and head over to your source code editor."
              />

              {/* Step 3: Integration */}
              <GetStarted
                subtitle="Step 3: Integration"
                body="Create a .js file titled with the relevant name in the folder location, and then copy and paste the .js portion of the code into the file and save it."
              />

              {/* Step 4: Import */}
              <GetStarted
                subtitle="Step 4: Import"
                body="Now that you've created the proper component, you can import it into your main application file or any other component. Below is an example of how to use it:"
                codeSnippet={`import NavbarOne from './components/NavbarOne';\n\nfunction HomePage() {\n  return (\n    <div>\n      <NavbarOne\n        logo="MySite"\n        links={["Home", "About", "Services", "Contact"]}\n      />\n      {/* Other content */}\n    </div>\n  );\n}`}
              >
                <img
                  src="/images/docs/step4.png"
                  alt="Screenshot of Step 4"
                />
              </GetStarted>
            </div>
          </section>

          {/* Components Section */}
          <section id="components">
            <div className="p-4 border border-gray-300 rounded-lg bg-[#333044] shadow-md">
              <h2 className="text-3xl font-bold mb-4 text-[#ffffff]">Components</h2>
              <p className="mb-6 text-[#ffffff]">
                Once you have successfully integrated a component into your project, you can customize each component with ease.
              </p>
              {/* Embed a specific Navbar component */}
              <NavbarOne
                logo="MySite"
                links={["Home", "About", "Services", "Contact"]}
                textColor="text-black"
                hoverColor="hover:text-purple-600"
              />
              <img
                src="/images/docs/navbarOne_snip.png"
                alt="Screenshot of navbarOne_snip"
                className="mt-6"
              />
              <p className="text-[#ffffff] mt-6">
                The above example demonstrates how you can use the `NavbarOne` component. You can customize the logo, links, colors, and more to fit your needs.
              </p>
              <p className="text-[#ffffff] mt-6 mb-6">
                An example below with different customization options:
              </p>
              <NavbarTwo
                logo="YourSite"
                links={["Home", "Portfolio", "Contact"]}
                backgroundColor="bg-gray-800"
                textColor="text-white"
                hoverColor="hover:text-yellow-300"
              />
              <img
                src="/images/docs/navbarTwo_snip.png"
                alt="Screenshot of navbarTwo_snip"
                className="mt-6"
              />
            </div>
          </section>

          {/* AI-Powered Component Generator Section*/}
          <section id="AI-Powered-Component-Generator">
            <div className="p-4 border border-gray-300 rounded-lg bg-[#333044] shadow-md space-y-6">
              <h2 className="text-3xl font-bold text-[#ffffff]">AI-Powered Component Generator</h2>
              <p className="text-[#ffffff]">
                Our AI-powered custom component generator allows you to quickly and easily create components tailored to your specific design and functional needs. Whether you need a Navbar, Button, or Footer, this tool can help you generate code snippets that you can integrate directly into your website project.
              </p>

              <div className="p-4 border border-gray-300 rounded-lg bg-[#444054] shadow-md">
                <h4 className="text-lg font-semibold mb-4 text-[#ffffff]">Accessing the AI Model</h4>
                <p className="text-[#ffffff]">
                  The AI model feature can be accessed from the <a href="#components" className="text-indigo-400 hover:text-orange-500">Components Page</a> on our website. You'll find a button labeled "Generate with AI" that opens the AI model dialog.
                </p>
              </div>

              <div className="p-4 border border-gray-300 rounded-lg bg-[#444054] shadow-md">
                <h4 className="text-lg font-semibold mb-4 text-[#ffffff]">Filling Out the Form</h4>
                <p className="mb-4 text-[#ffffff]">
                  Once the AI model dialog opens, you'll be presented with a form where you can input specific details about the component you want to generate. Here's how to fill out the form:
                </p>
                <ul className="list-disc pl-5 text-[#ffffff]">
                  <li className="mb-4">
                    <strong>Component Type:</strong> Select the type of component you want (e.g., Navbar, Button, Footer).
                    <br />
                    <em>Example:</em> If you need a navigation bar, enter "Navbar."
                  </li>
                  <li className="mb-4">
                    <strong>Design Specifications:</strong> Describe your design preferences, such as colors, layout, or any specific design elements.
                    <br />
                    <em>Example:</em> "A modern design with a gradient background."
                  </li>
                  <li className="mb-4">
                    <strong>Functional Requirements:</strong> Specify any functionality you need, like responsiveness or interactive elements.
                    <br />
                    <em>Example:</em> "The navbar should be responsive and include a dropdown menu."
                  </li>
                  <li className="mb-4">
                    <strong>Specific Elements or Features:</strong> List any particular elements you want to include, such as logos or social media icons.
                    <br />
                    <em>Example:</em> "Logo on the left side, social media icons on the right."
                  </li>
                  <li>
                    <strong>Theme or Style:</strong> Define the overall theme or style, such as a dark theme or minimalist design.
                    <br />
                    <em>Example:</em> "Dark theme with a minimalist design."
                  </li>
                </ul>
              </div>

              <div className="p-4 border border-gray-300 rounded-lg bg-[#444054] shadow-md">
                <h4 className="text-lg font-semibold mb-4 text-[#ffffff]">Generating the Component</h4>
                <p className="text-[#ffffff]">
                  After filling out the form, click the "Submit" button to send your request to the AI model. The AI will process your input and generate a code snippet for the requested component.
                </p>
              </div>

              <div className="p-4 border border-gray-300 rounded-lg bg-[#444054] shadow-md">
                <h4 className="text-lg font-semibold mb-4 text-[#ffffff]">Viewing and Testing the Generated Component</h4>
                <p className="mb-4 text-[#ffffff]">
                  The generated code will be displayed directly within the AI model dialog. You can copy this code and paste it into your project to see it in action.
                </p>
                <p className="text-[#ffffff]">
                  <strong>Testing Tip:</strong> To test the component, you can paste the code into your existing Next.js project.
                </p>
              </div>

              <div className="p-4 border border-gray-300 rounded-lg bg-[#444054] shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-[#ffffff]">Why Use the AI Model?</h3>
                <ul className="list-disc pl-5 mb-4 text-[#ffffff]">
                  <li><strong>Save Time:</strong> The AI model generates code quickly, allowing you to focus on other aspects of your project.</li>
                  <li><strong>Customization:</strong> Tailor the component to your exact specifications without manually coding each detail.</li>
                  <li><strong>Experimentation:</strong> Easily test different design ideas and functional requirements without needing extensive development knowledge.</li>
                </ul>
                <p className="text-[#ffffff]">
                  By integrating this tool into your workflow, you can enhance your productivity and create polished, custom components in a fraction of the time.
                </p>
              </div>
            </div>
          </section>

          {/* API Reference Section */}
          <section id="api-reference">
            <div className="p-4 border border-gray-300 rounded-lg bg-[#333044] shadow-md">
              <h2 className="text-3xl font-bold mb-4 text-[#ffffff]">API Reference</h2>
              <p className="mb-6 text-[#ffffff]">
                Detailed API reference and examples can be found in this section.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq">
            <div className="p-4 border border-gray-300 rounded-lg bg-[#333044] shadow-md space-y-6 text-[#ffffff]">
              <h2 className="text-3xl font-bold mb-4 text-[#ffffff]">FAQ</h2>

              <div className="p-4 border border-gray-300 rounded-lg bg-[#444054] shadow-md">
                <FAQItem
                  question="How do I install the components in my project?"
                  answer="To install our components, you can simply copy the provided code snippets directly into your project files. Ensure that the required dependencies, such as React and Tailwind CSS, are already installed in your project. You can then import the component into your files and start using it immediately."
                />
              </div>

              <div className="p-4 border border-gray-300 rounded-lg bg-[#444054] shadow-md">
                <FAQItem
                  question="Can I customize the components to match my website's design?"
                  answer="Absolutely! Our components are built with flexibility in mind. You can easily customize aspects like colors, fonts, and layout by passing different props to the components or by modifying the provided Tailwind CSS classes. Check out the examples in our documentation to see how to make these adjustments."
                />
              </div>

              <div className="p-4 border border-gray-300 rounded-lg bg-[#444054] shadow-md">
                <FAQItem
                  question="What if I need a component that’s not available in your library?"
                  answer="If you need a specific component that isn’t included in our library, you have a few options. You can either create the component yourself using our existing components as a reference, or you can reach out to us with a feature request. We're continually updating our library based on user feedback."
                />
              </div>

              <div className="p-4 border border-gray-300 rounded-lg bg-[#444054] shadow-md">
                <FAQItem
                  question="How do I integrate a component into an existing page on my website?"
                  answer="To integrate a component into an existing page, first, import the component at the top of your file. Then, insert the component within the JSX where you want it to appear on the page. For example:"
                />
                <div className="p-4 border border-gray-300 rounded-lg bg-[#333044] shadow-md mt-4">
                  <SyntaxHighlighter
                    language="javascript"
                    style={nightOwl}
                    className="text-white"
                  >
                    {`import NavbarOne from './components/NavbarOne';\n\nfunction HomePage() {\n  return (\n    <div>\n      <NavbarOne\n        logo="MySite"\n        links={["Home", "About", "Services", "Contact"]}\n      />\n      {/* Other content */}\n    </div>\n  );\n}`}
                  </SyntaxHighlighter>
                </div>
              </div>

              <div className="p-4 border border-gray-300 rounded-lg bg-[#444054] shadow-md">
                <FAQItem
                  question="What if I encounter an issue or bug while using a component?"
                  answer="If you encounter any issues or bugs, please report them to us through our GitHub repository or contact our support team directly. Provide as much detail as possible, including the code you’re using and the specific issue you’re facing. We’ll work to resolve the issue promptly."
                />
              </div>

              <div className="p-4 border border-gray-300 rounded-lg bg-[#444054] shadow-md">
                <FAQItem
                  question="Can I use these components with other front-end frameworks or libraries?"
                  answer="Our components are designed for React and may require modifications to work with other frameworks like Angular or Vue. However, since our components are built with standard HTML, CSS (using Tailwind), and JavaScript, adapting them should be straightforward with some tweaks."
                />
              </div>

              <div className="p-4 border border-gray-300 rounded-lg bg-[#444054] shadow-md">
                <FAQItem
                  question="How do I update a component if you release a new version?"
                  answer="When we release updates, you can easily integrate the latest version of a component by replacing the old code with the updated snippet from our documentation. Ensure to review any release notes for breaking changes or new features."
                />
              </div>

              <div className="p-4 border border-gray-300 rounded-lg bg-[#444054] shadow-md">
                <FAQItem
                  question="Are the components responsive and mobile-friendly?"
                  answer="Yes, all of our components are designed to be responsive and mobile-friendly out of the box. They utilize Tailwind CSS’s responsive design utilities, ensuring they look great on devices of all sizes."
                />
              </div>

              <div className="p-4 border border-gray-300 rounded-lg bg-[#444054] shadow-md">
                <FAQItem
                  question="Do I need to include any additional CSS or JavaScript files?"
                  answer="As long as you have Tailwind CSS and React set up in your project, you don’t need to include any additional CSS or JavaScript files to use our components. If a component requires specific assets, it will be mentioned in the documentation."
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DocumentationLayout;
