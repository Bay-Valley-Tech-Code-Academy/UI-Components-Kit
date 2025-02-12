import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function AiModel({ open, setOpen }) {
  const [openResult, setOpenResult] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [component, setComponent] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    componentType: "",
    designSpecification: "",
    functionalReq: "",
    specificElement: "",
    theme: "",
  });

  const updateForm = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingState(true);
    setOpenResult(true);

    try {
      const response = await fetch("/api/getComponentSuggestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Network response was not ok");
      }

      const data = await response.json();
      setComponent(data.componentSuggestion);
      setError("");
    } catch (error) {
      console.error("Error fetching component:", error);
      setError(error.message);
    } finally {
      setLoadingState(false);
    }
  };

  const handleNewQuery = (e) => {
    e.preventDefault();
    console.log("New query button clicked");
    setComponent("");
    setOpenResult(false);
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-[#3D3860] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            {openResult ? (
              <>
                <div className="bg-[#3D3860] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="items-start">
                    <div className="mt-3 sm:mt-0 text-left">
                      <DialogTitle
                        as="h3"
                        className="text-xl font-semibold leading-6 text-white"
                      >
                        AI custom component
                      </DialogTitle>
                      <div className={`mt-2 ${loadingState && "flex justify-center"}`}>
                        {loadingState && (
                          <div className="text-white flex">
                            <svg
                              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                class="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                stroke-width="4"
                              ></circle>
                              <path
                                class="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            loading
                          </div>
                        )}
                        {component && (
                          <div className="text-white">
                            {
                              <ReactMarkdown
                                children={component}
                                remarkPlugins={[remarkGfm]}
                                className="prose prose-sm lg:prose-base"
                                components={{
                                  code(props) {
                                    const {
                                      children,
                                      className,
                                      node,
                                      ...rest
                                    } = props;
                                    const match = /language-(\w+)/.exec(
                                      className || ""
                                    );
                                    return match ? (
                                      <SyntaxHighlighter
                                        {...rest}
                                        PreTag="div"
                                        children={String(children).replace(
                                          /\n$/,
                                          ""
                                        )}
                                        language={match[1]}
                                        style={nightOwl}
                                        className="!bg-black"
                                      />
                                    ) : (
                                      <code {...rest} className={className}>
                                        {children}
                                      </code>
                                    );
                                  },
                                }}
                              />
                            }
                          </div>
                        )}
                        {error && <div>{error}</div>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-[#FF7D61] px-3 py-2 text-sm font-semibold text-[#180728] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#CC4426] sm:mt-0 sm:w-auto"
                    onClick={handleNewQuery}
                  >
                    New query
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="bg-[#3D3860] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <DialogTitle
                        as="h3"
                        className="text-xl font-semibold leading-6 text-white"
                      >
                        AI custom component
                      </DialogTitle>
                      <div className="mt-2">
                        <p className="text-sm text-white mb-3">
                          Fill out the form below to create a custom AI
                          generated component.
                        </p>
                        <form
                          id="ai-form"
                          className="flex flex-col"
                          onSubmit={handleSubmit}
                        >
                          <label className="text-white pb-1">
                            Component Type:
                          </label>
                          <input
                            type="text"
                            name="componentType"
                            value={formData.componentType}
                            onChange={updateForm}
                            placeholder="Navbar, Button, Footer"
                            required
                            className="mb-2 p-1"
                          />
                          <label className="text-white pb-1">
                            Design Specifications:
                          </label>
                          <textarea
                            name="designSpecification"
                            value={formData.designSpecification}
                            onChange={updateForm}
                            placeholder="Describe design preferences"
                            required
                            className="mb-2 p-1"
                          ></textarea>
                          <label className="text-white pb-1">
                            Functional Requirements:
                          </label>
                          <textarea
                            name="functionalReq"
                            value={formData.functionalReq}
                            onChange={updateForm}
                            placeholder="Specify functionality (e.g., responsive, dropdown)"
                            required
                            className="mb-2 p-1"
                          ></textarea>
                          <label className="text-white pb-1">
                            Specific Elements or Features:
                          </label>
                          <textarea
                            name="specificElement"
                            value={formData.specificElement}
                            onChange={updateForm}
                            placeholder="e.g., Logo on the left, social media icons"
                            className="mb-2 p-1"
                          ></textarea>
                          <label className="text-white pb-1">
                            Theme or Style:
                          </label>
                          <input
                            type="text"
                            name="theme"
                            value={formData.theme}
                            onChange={updateForm}
                            placeholder="e.g., Dark theme, Minimalist"
                            className="mb-2 p-1"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="submit"
                    form="ai-form"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-[#FF7D61] px-3 py-2 text-sm font-semibold text-[#180728] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#CC4426] sm:mt-0 sm:w-auto"
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
