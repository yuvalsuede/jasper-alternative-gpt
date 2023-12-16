import React, { useState } from "react";
import Toast from "../ui/Toast";
import { Output } from "./InputOutputComponent";

interface OutputComponentProps {
  generatedOutput: Output | undefined;
  onClearOutput: () => void;
  errorMessage: string | null;
  setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>;
}

const OutputComponent: React.FC<OutputComponentProps> = ({
  generatedOutput,
  onClearOutput,
  errorMessage,
  setErrorMessage,
}) => {
  const [toastVisible, setToastVisible] = useState(false);

  const copyTextToClipboard = async (answer: string) => {
    try {
      await navigator.clipboard.writeText(answer);
      setToastVisible(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  // This function is to close the Text Copied toast
  const handleToastDismiss = () => {
    setToastVisible(false);
  };
  // This function is to close Error toast
  const handleErrorToast = () => {
    setErrorMessage(null);
  };

  return (
    <div className="w-full lg:w-1/2">
      {/* Displaying the error message if it is not null */}
      {errorMessage !== null && (
        <Toast
          message={errorMessage}
          duration={3000}
          onDismiss={handleErrorToast}
        />
      )}

      <div className="xl:sticky xl:z-10 top-0 flex items-center px-3 bg-white border-b border-gray-200">
        <nav className="flex flex-grow py-1 space-x-3" aria-label="Tabs">
          <button className="relative transition-all duration-150 before:transition-all before:duration-150 before:absolute before:inset-0 whitespace-nowrap py-2 px-3 text-xs font-medium before:bg-gray-100 before:rounded-lg before:scale-100 before:opacity-100 text-blue-700">
            <span className="relative">
              New outputs{" "}
              <span className="px-2 py-1 ml-2 text-xs rounded-full bg-white">
                {generatedOutput?.result.length || 0}
              </span>
            </span>
          </button>
          {/* ... other buttons, if needed */}
        </nav>
        <div>
          <button
            onClick={onClearOutput}
            className="relative transition-all duration-150 before:transition-all before:duration-150 before:absolute before:inset-0 px-3 py-2 text-xs font-medium leading-4 text-gray-400 hover:text-gray-600 before:bg-gray-100 before:rounded-lg before:scale-50 before:opacity-0 hover:before:scale-100 hover:before:opacity-100"
          >
            <span className="relative">Clear</span>
          </button>
        </div>
      </div>
      <div className="w-full text-gray-900 bg-white space-y-4 p-2">
        {/* Displaying all the output(which is in the form of list) */}
        {generatedOutput ? (
          <>
            {generatedOutput.result.map((answer, index) => (
              <div
                key={index}
                className="py-3 px-3 border-b border-gray-200 group shadow-black shadow-sm rounded-md cursor-pointer bg-green-50 hover:bg-green-300/5"
              >
                <div className="flex items-center space-x-2">
                  {/* Your action buttons */}
                </div>
                <div
                  className="w-full mt-2 mb-3 text-base font-medium leading-7 text-gray-800 whitespace-pre-wrap pre"
                  onClick={() => copyTextToClipboard(answer)}
                >
                  {index + 1}. {answer}
                  {toastVisible && (
                    <Toast
                      message="Text copied to clipboard!"
                      duration={3000}
                      onDismiss={handleToastDismiss}
                    />
                  )}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="w-4/5 mx-auto mt-12 text-gray-900 bg-white border border-gray-200 p-4 rounded-md shadow-sm flex items-center justify-center">
            <span className="text-lg font-normal text-gray-200">
              No output generated yet.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default OutputComponent;
