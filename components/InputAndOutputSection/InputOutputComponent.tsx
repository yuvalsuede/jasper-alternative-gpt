"use client";
import React, { useState } from "react";
import InputComponent from "./InputComponent";
import OutputComponent from "./OutputComponent";
import { Template } from "../../constants/templates";
type Props = { template: Template };
export type Output = {
  result: string[];
};

const InputOutputComponent = ({ template }: Props) => {
  const [output, setOutput] = useState<Output>();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleClearOutput = () => {
    setOutput(undefined);
  };
  async function generateOutputHandler(
    template: Template,
    inputData: { [key: string]: string }
  ): Promise<void> {
    try {
      const response: Response = await fetch("/api/chatgpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          template,
          inputData,
        }),
      });

      if (!response.ok) {
        // Handle HTTP error
        const errorData = await response.json();
        const errorMessage = errorData.message || "Unknown error";
        throw new Error(errorMessage);
      }

      console.log(response);
      const data = await response.json();
      console.log(data);
      setOutput(data || {});
    } catch (error: any) {
      // Handle any other errors, such as network issues
      console.error("Error:", error);
      // Set the error message to the given error message from the request
      setErrorMessage(error.message);
    }
  }

  return (
    <div className="flex flex-col lg:flex-row w-full h-full">
      <InputComponent
        template={template}
        generateOutput={generateOutputHandler}
      />
      <OutputComponent
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        onClearOutput={handleClearOutput}
        generatedOutput={output}
      />
    </div>
  );
};

export default InputOutputComponent;
