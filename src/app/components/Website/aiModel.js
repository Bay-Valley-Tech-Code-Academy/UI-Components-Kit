import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function AiModel({ open, setOpen }) {
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
                      Fill out the form below to create a custom AI generated
                      component.
                    </p>
                    <form id="ai-form" className="flex flex-col">
                      <label className="text-white pb-1">Component Type:</label>
                      <input
                        type="text"
                        name="componentType"
                        placeholder="Navbar, Button, Footer"
                        required
                        className="mb-2"
                      />
                      <label className="text-white pb-1">Design Specifications:</label>
                      <textarea
                        name="designSpecs"
                        placeholder="Describe design preferences"
                        required
                        className="mb-2"
                      ></textarea>
                      <label className="text-white pb-1">Functional Requirements:</label>
                      <textarea
                        name="functionalReqs"
                        placeholder="Specify functionality (e.g., responsive, dropdown)"
                        required
                        className="mb-2"
                      ></textarea>
                      <label className="text-white pb-1">Specific Elements or Features:</label>
                      <textarea
                        name="specificElements"
                        placeholder="e.g., Logo on the left, social media icons"
                        className="mb-2"
                      ></textarea>
                      <label className="text-white pb-1">Theme or Style:</label>
                      <input
                        type="text"
                        name="themeStyle"
                        placeholder="e.g., Dark theme, Minimalist"
                        className="mb-2"
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
                data-autofocus
                className="mt-3 inline-flex w-full justify-center rounded-md bg-[#FF7D61] px-3 py-2 text-sm font-semibold text-[#180728] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#CC4426] sm:mt-0 sm:w-auto"
              >
                Submit
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
