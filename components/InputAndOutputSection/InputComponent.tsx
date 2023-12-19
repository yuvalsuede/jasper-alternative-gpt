import React, { Fragment, useState } from "react";
import TemplateHeader from "./TemplateHeader";
import { Template, TemplateInput } from "../../constants/templates";
import RenderCorrectInputField from "./SelectInputType";
import { Button } from "../ui/button";
import { shouldBeDisabled } from "@/utils/shouldTheButtonBeDisabled";
import { Label } from "../ui/label";

interface InputComponentProps {
  generateOutput: (
    template: Template,
    inputData: { [key: string]: string }
  ) => Promise<void>;
  template: Template;
}

function InputComponent({ template, generateOutput }: InputComponentProps) {
  // For handling loading state
  const [isLoading, setIsLoading] = useState(false);

  // For storing all the input data entered by the user
  const [inputData, setInputData] = useState<{ [key: string]: string }>({});

  //Even handler where user types something
  const handleInputChange = (e: any) => {
    setInputData({ ...inputData, [e.target.id]: e.target.value });
  };
  // Clear input when the user wants
  const handleClearInputs = () => {
    const clearedinputData = { ...inputData };
    Object.keys(clearedinputData).forEach((key) => {
      clearedinputData[key] = "";
    });
    setInputData(clearedinputData);
  };

  // This is for handling submit i.e The Generate Button
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await generateOutput(template, inputData);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full lg:w-1/2 bg-gray-50 border-r flex flex-col">
      <TemplateHeader
        icon={template.icon}
        title={template.title}
        description={template.description}
      />

      <div className="flex flex-col p-4 flex-grow">
        {/* For each input displaying the correct input field which can be a 1) text input  or 2) textarea */}
        {template.inputs.map((input: TemplateInput) => (
          <Fragment key={input.id}>
            <Label htmlFor={input.id} className="block mt-4" key={input.id}>
              {input.label}
            </Label>
            {/* Displays the correct input filed */}
            <RenderCorrectInputField
              input={input}
              value={inputData[input.id] || ""}
              handleChange={handleInputChange}
            />
          </Fragment>
        ))}
      </div>

      <div className="flex items-center justify-between p-4 border-t border-gray-200">
        {/* Clears input */}
        <Button
          onClick={handleClearInputs}
          className="px-4 py-2 text-gray-600 bg-white border border-gray-200 rounded-md hover:bg-gray-100"
        >
          Clear inputs
        </Button>

        <Button
          // Generating the output using ChatGPT
          onClick={handleSubmit}
          className={`px-4 py-2 text-white bg-gradient-to-r from-purple-400 to-blue-400 rounded-md hover:from-purple-300 hover:to-blue-300 relative ${
            isLoading ? "opacity-50" : ""
          }`}
          // Check when the inputData is empty, or all the input fields are not filled in
          disabled={isLoading || shouldBeDisabled(inputData, template)}
        >
          {/* The loader which is shown when the output in being generated */}
          {isLoading && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 border-t-2 border-purple-500 border-solid rounded-full animate-spin"></div>
            </div>
          )}
          <span className={`${isLoading ? "invisible" : ""}`}>Generate</span>
        </Button>
      </div>
    </div>
  );
}
export default InputComponent;
