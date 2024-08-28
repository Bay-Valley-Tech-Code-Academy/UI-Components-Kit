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

          {/* Getting Started Section */}
          <section id="getting-started">
            <div className="p-4 border border-gray-300 rounded-lg bg-[#333044] shadow-md">
              <h2 className="text-3xl font-bold mb-4 text-[#ffffff]">Getting Started</h2>
              <p className="mb-6 text-[#ffffff]">
                This section will help you get started with the project. You’ll
                find installation instructions and basic usage examples.
              </p>
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
