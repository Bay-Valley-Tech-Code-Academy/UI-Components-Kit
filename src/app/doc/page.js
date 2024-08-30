import Navbar from "../components/Website/navbar";
import NavbarOne from "../components/Navbar/navbarOne";
import NavbarTwo from "../components/Navbar/navbarTwo";

export default function DocumentationLayout() {
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
        <aside className="w-64 bg-[#333044] rounded-lg shadow-md p-6">
          <nav>
            <ul className="space-y-4">
              <li>
                <a
                  href="#introduction"
                  className="text-indigo-200 hover:text-orange-400"
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="#Overview"
                  className="text-indigo-200 hover:text-orange-400"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#prerequisites"
                  className="text-indigo-200 hover:text-orange-400">
                  Prerequisites
                </a>
              </li>
              <li></li>
              <li>
                <a
                  href="#getting-started"
                  className="text-indigo-200 hover:text-orange-400"
                >
                  Getting Started
                </a>
              </li>
              <li>
                <a
                  href="#components"
                  className="text-indigo-200 hover:text-orange-400"
                >
                  Components
                </a>
              </li>
              <li>
                <a
                  href="#api-reference"
                  className="text-indigo-200 hover:text-orange-400"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-indigo-200 hover:text-orange-400"
                >
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

          {/* Getting Started Section*/}
          <section id="getting-started">
            <div className="p-4 border border-gray-300 rounded-lg bg-[#333044] shadow-md">
              <h2 className="text-3xl font-bold mb-4 text-[#ffffff]">Getting Started</h2>
              <p className="mb-6 text-[#ffffff]">
                This section shows the steps of how to properly integrate our components into your project.
              </p>

              {/* Step 1: Components */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#ffffff]">Step 1: Components</h3>
                <p className="text-[#ffffff]">
                  First, head over to the components page and click on a component category that you are wanting to add to your website.
                </p>
                <div className="flex justify-center mt-4">
                </div>
              </div>

              {/* Step 2: Installation */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#ffffff]">Step 2: Installation</h3>
                <p className="text-[#ffffff]">
                  Once you find a component template you like, click the "code" button to reveal the code for that template, and head over to your source code editor.
                </p>
                <div className="flex justify-center mt-4">
                </div>
              </div>

              {/* Step 3: Visual Studio Code */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#ffffff]">Step 3: Visual Studio Code</h3>
                <p className="text-[#ffffff]">
                  Create a .js file titled with the relevant name in the folder location, and then copy and paste the .js portion of the code into the file and save it.
                </p>
                <div className="flex justify-center mt-4">
                </div>
              </div>

              {/* Step 4: Integration */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#ffffff]">Step 4: Integration</h3>
                <p className="text-[#ffffff] mb-8">
                  Now that you've created the proper component, you can import it into your main application file or any other component. Below is an example of how to use it:
                </p>
                <img
                  src="\images\docs\step4.png"
                  alt="Screenshot of Step 4"
                />
                <div className="flex justify-center mt-4">
                </div>
              </div>
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
                src="\images\docs\navbarOne_snip.png"
                alt="Screenshot of navbarOne_snip"
              />
              <p className="text-[#ffffff] mt-6">
                The above example demonstrates how you can use the `NavbarOne` component. You can customize the logo, links, colors, and more to fit your needs.
              </p>
              <p className="text-[#ffffff] mt-6">
                An example with different customization options:
              </p>
              <NavbarTwo
                logo="YourSite"
                links={["Home", "Portfolio", "Contact"]}
                backgroundColor="bg-gray-800"
                textColor="text-white"
                hoverColor="hover:text-yellow-300"
              />
              <img
                src="\images\docs\navbarTwo_snip.PNG"
                alt="Screenshot of navbarTwo_snip"
              />
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
            <div className="p-4 border border-gray-300 rounded-lg bg-[#333044] shadow-md">
              <h2 className="text-3xl font-bold mb-4 text-[#ffffff]">FAQ</h2>
              <div className="space-y-12 text-[#ffffff]">

                {/* FAQ 1 */}
                <div>
                  <h3 className="text-2xl font-semibold">How do I install the components in my project?</h3>
                  <p>
                    To install our components, you can simply copy the provided code snippets directly into your project files. Ensure that the required dependencies, such as React and Tailwind CSS, are already installed in your project. You can then import the component into your files and start using it immediately.
                  </p>
                </div>

                {/* FAQ 2 */}
                <div>
                  <h3 className="text-2xl font-semibold">Can I customize the components to match my website's design?</h3>
                  <p>
                    Absolutely! Our components are built with flexibility in mind. You can easily customize aspects like colors, fonts, and layout by passing different props to the components or by modifying the provided Tailwind CSS classes. Check out the examples in our documentation to see how to make these adjustments.
                  </p>
                </div>

                {/* FAQ 3 */}
                <div>
                  <h3 className="text-2xl font-semibold">What if I need a component that’s not available in your library?</h3>
                  <p>
                    If you need a specific component that isn’t included in our library, you have a few options. You can either create the component yourself using our existing components as a reference, or you can reach out to us with a feature request. We're continually updating our library based on user feedback.
                  </p>
                </div>

                {/* FAQ 4 */}
                <div>
                  <h3 className="text-2xl font-semibold">How do I integrate a component into an existing page on my website?</h3>
                  <p>
                    To integrate a component into an existing page, first, import the component at the top of your file. Then, insert the component within the JSX where you want it to appear on the page. For example:
                  </p>
                  <pre className="bg-gray-800 p-4 rounded text-white">
                    <code>{`import NavbarOne from './components/NavbarOne';

      function HomePage() {
        return (
          <div>
            <NavbarOne 
            logo="MySite" 
            links={["Home", "About", "Services", "Contact"]} />
            {/* Other content */}
          </div>
        );
      }`}</code>
                  </pre>
                  <p>
                    This example shows how to add the `NavbarOne` component to your homepage. You can do the same with any of our components.
                  </p>
                </div>

                {/* FAQ 5 */}
                <div>
                  <h3 className="text-2xl font-semibold">What if I encounter an issue or bug while using a component?</h3>
                  <p>
                    If you encounter any issues or bugs, please report them to us through our GitHub repository or contact our support team directly. Provide as much detail as possible, including the code you’re using and the specific issue you’re facing. We’ll work to resolve the issue promptly.
                  </p>
                </div>

                {/* FAQ 6 */}
                <div>
                  <h3 className="text-2xl font-semibold">Can I use these components with other front-end frameworks or libraries?</h3>
                  <p>
                    Our components are designed for React and may require modifications to work with other frameworks like Angular or Vue. However, since our components are built with standard HTML, CSS (using Tailwind), and JavaScript, adapting them should be straightforward with some tweaks.
                  </p>
                </div>

                {/* FAQ 7 */}
                <div>
                  <h3 className="text-2xl font-semibold">How do I update a component if you release a new version?</h3>
                  <p>
                    When we release updates, you can easily integrate the latest version of a component by replacing the old code with the updated snippet from our documentation. Ensure to review any release notes for breaking changes or new features.
                  </p>
                </div>

                {/* FAQ 8 */}
                <div>
                  <h3 className="text-2xl font-semibold">Are the components responsive and mobile-friendly?</h3>
                  <p>
                    Yes, all of our components are designed to be responsive and mobile-friendly out of the box. They utilize Tailwind CSS’s responsive design utilities, ensuring they look great on devices of all sizes.
                  </p>
                </div>

                {/* FAQ 9 */}
                <div>
                  <h3 className="text-2xl font-semibold">Do I need to include any additional CSS or JavaScript files?</h3>
                  <p>
                    As long as you have Tailwind CSS and React set up in your project, you don’t need to include any additional CSS or JavaScript files to use our components. If a component requires specific assets, it will be mentioned in the documentation.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
