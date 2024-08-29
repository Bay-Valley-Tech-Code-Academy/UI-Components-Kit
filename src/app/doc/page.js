import Navbar from "../components/navbar";

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
                  href="#installation"
                  className="text-indigo-200 hover:text-orange-400"
                >
                  Installation
                </a>
              </li>
              <li>
                <a
                  href="#example-usage"
                  className="text-indigo-200 hover:text-orange-400"
                >
                  Example Usage
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
            </div>
          </section>

          {/* Overview Section */}
          <section id="Overview">
            <div className="p-4 border border-gray-300 rounded-lg bg-[#333044] shadow-md">
              <h2 className="text-3xl font-bold mb-4 text-[#ffffff]">Overview</h2>
              <p className="mb-6 text-[#ffffff]">
              This is a Next.js project bootstrapped with{" "}
              <code>create-next-app</code>.
              </p>
            </div>
          </section>

          {/* Prerequisites Section */}
          <section id="Overview">
            <div className="p-4 border border-gray-300 rounded-lg bg-[#333044] shadow-md">
              <h2 className="text-3xl font-bold mb-4 text-[#ffffff]">Prerequisites</h2>
              <p className="mb-6 text-[#ffffff]">
              Before you begin, make sure you have the following tools installed
              on your system:
            </p>
            <ul className="list-disc list-inside mb-6 text-[#ffffff]">
              <li>
                <strong>Git</strong> - Version control system. You can download
                it from{" "}
                <a
                  href="https://git-scm.com/"
                  className="text-indigo-200 hover:text-orange-400 hover:underline"
                >
                  git-scm.com
                </a>
                .
              </li>
              <li>
                <strong>Node.js</strong> - The latest stable version is
                recommended. You can download it from{" "}
                <a
                  href="https://nodejs.org/"
                  className="text-indigo-200 hover:text-orange-400 hover:underline"
                >
                  nodejs.org
                </a>
                .
              </li>
              <li>
                <strong>Visual Studio Code</strong> - A powerful code editor.
                You can download it from{" "}
                <a
                  href="https://code.visualstudio.com/"
                  className="text-indigo-200 hover:text-orange-400 hover:underline"
                >
                  code.visualstudio.com
                </a>
                .
              </li>
            </ul>
            <p className="mb-6 text-[#ffffff]">
              Ensure that you have these tools installed and configured before
              proceeding with the setup instructions.
              </p>
            </div>
          </section>

          <section id="getting-started">
  <div className="p-4 border border-gray-300 rounded-lg bg-[#333044] shadow-md">
    <h2 className="text-3xl font-bold mb-4 text-[#ffffff]">Getting Started</h2>
    <p className="mb-6 text-[#ffffff]">
      This section will help you integrate our components into your own website projects. Below is an example of how to use the components from our library.
    </p>

    {/* Step 1: Installation Instructions */}
    <div className="mb-6">
      <h3 className="text-2xl font-semibold text-[#ffffff]">Step 1: Installation</h3>
      <p className="text-[#ffffff]">
        First, ensure you have Node.js installed. Then, install the required packages by running:
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded mt-4">
        npm install your-component-library
      </pre>
    </div>

    {/* Step 2: Usage Example */}
    <div className="mb-6">
      <h3 className="text-2xl font-semibold text-[#ffffff]">Step 2: Usage Example</h3>
      <p className="text-[#ffffff]">
        After installation, you can import and use the components in your project as shown below:
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded mt-4">
        {`import Navbar from 'your-component-library/Navbar';`}
        {"\n\n"}
        {`export default function App() {`}
        {"\n"}
        {`  return (`}
        {"\n"}
        {`    <div>`}
        {"\n"}
        {`      <Navbar />`}
        {"\n"}
        {`    </div>`}
        {"\n"}
        {`  );`}
        {"\n"}
        {`}`}
      </pre>
    </div>

    {/* Step 3: Visual Representation */}
    <div className="mb-6">
      <h3 className="text-2xl font-semibold text-[#ffffff]">Step 3: Visual Example</h3>
      <p className="text-[#ffffff]">
        Below is a screenshot of what the Navbar component looks like when integrated into your project:
      </p>
      <div className="flex justify-center mt-4">
        <img
          src="/path-to-screenshot.png"
          alt="Navbar Component Screenshot"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>


          {/* Components Section */}
          <section id="components">
            <div className="p-4 border border-gray-300 rounded-lg bg-[#333044] shadow-md">
              <h2 className="text-3xl font-bold mb-4 text-[#ffffff]">Components</h2>
              <p className="mb-6 text-[#ffffff]">
                Here you can find detailed information about the components used
                in the project.
              </p>
            </div>
          </section>

          {/* Installation Section */}
          <section id="installation">
            <div className="p-4 border border-gray-300 rounded-lg bg-[#333044] shadow-md">
              <h2 className="text-3xl font-bold mb-4 text-[#ffffff]">Installation</h2>
              <p className="mb-6 text-[#ffffff]">
                Follow these steps to download and install the required components
                and software:
              </p>
              <ul className="list-disc list-inside text-[#ffffff]">
                <li>Step 1: Download the components from our website.</li>
                <li>Step 2: Extract the downloaded files.</li>
                <li>Step 3: Install the necessary dependencies using <code className="bg-gray-800 p-1 rounded">npm install</code>.</li>
              </ul>
            </div>
          </section>

          {/* Example Usage Section */}
          <section id="example-usage">
            <div className="p-4 border border-gray-300 rounded-lg bg-[#333044] shadow-md">
              <h2 className="text-3xl font-bold mb-4 text-[#ffffff]">Example Usage</h2>
              <p className="mb-6 text-[#ffffff]">
                Here’s an example of how you can use our Navbar component in your project:
              </p>
              <pre className="bg-gray-800 text-white p-4 rounded mb-6">
                {`import Navbar from 'your-component-path';\n`}
                {`export default function App() {\n`}
                {`  return (\n`}
                {`    <div>\n`}
                {`      <Navbar />\n`}
                {`    </div>\n`}
                {`  );\n`}
                {`}`}
              </pre>
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
              <p className="mb-6 text-[#ffffff]">
                Answers to frequently asked questions are provided here.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
