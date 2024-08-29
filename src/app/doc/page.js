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
              <p className="mb-6 text-[#ffffff]">
                This components project will help you build your own website.
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
              <p className="mb-6 text-[#ffffff]">
                Assuming you have installed all prerequisite packages for your project, you can proceed to the next section.
              </p>
            </div>
          </section>

          {/* Getting Started */}
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
                  <img
                    src="/images/step1.png"
                    alt="Screenshot of Step 1"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Step 2: Installation */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#ffffff]">Step 2: Installation</h3>
                <p className="text-[#ffffff]">
                  Once you find a component template you like, click the "code" button to reveal the code for that template, and head over to Visual Studio Code.
                </p>
                <div className="flex justify-center mt-4">
                  <img
                    src="/images/step2.png"
                    alt="Screenshot of Step 2"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Step 3: Visual Studio Code */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#ffffff]">Step 3: Visual Studio Code</h3>
                <p className="text-[#ffffff]">
                  Create a .js file titled with the relevant name in the folder location, and then copy and paste the .js portion of the code into the file and save it.
                </p>
                <div className="flex justify-center mt-4">
                  <img
                    src="/images/step3.png"
                    alt="Screenshot of Step 3"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Step 4: Integration */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#ffffff]">Step 4: Integration</h3>
                <p className="text-[#ffffff]">
                  Now that you've created the proper component, you can integrate it into your main application file or any other component. Below is an example of how to use it:
                </p>
                <div className="flex justify-center mt-4">
                  <img
                    src="/images/step4.png"
                    alt="Screenshot of Step 4"
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
                You can customize each component to your liking with ease.
              </p>
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
