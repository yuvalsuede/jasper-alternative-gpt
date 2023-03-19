import React, { useState } from 'react';
import InputComponent from "./InputComponent";
import OutputComponent from "./OutputComponent";
import {Template, TemplateInput} from "../constants/templates";
import {Configuration, OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
export type InputsData = {
    [key: string]: string;
};
const createInstruction = (inputs: TemplateInput[], inputsData: InputsData): string => {
    return inputs.map((input) => `${input.label}: ${inputsData[input.id]}`).join("\n");
};

// @ts-ignore
const InputOutputComponent = ({ template }) => {
    const [output, setOutput] = useState("");



    const handleClearOutput = () => {
        setOutput("")
    }
    const generateOutputHandler = async (template: Template, inputsData: { [key: string]: string }) => {
        const instruction = createInstruction(template.inputs, inputsData);
        const mainGoal = template.description;

        const messages = [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: `Your task is: "${mainGoal}".\n\nHere are the details:\n${instruction}. 
            Please suggest 3 outputs. number them 1,2,3` },
        ];

        try {
            const response: any = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                // @ts-ignore
                messages: messages,
                temperature: 1,
            });
            console.log(response)

            const reply = response?.data?.choices[0].message.content;
            console.log(reply)
            setOutput(reply || '');

        } catch (error) {
            console.log(error)
        }
    };
    return (
        <div className="flex flex-col lg:flex-row w-full h-full">

            <InputComponent
                template={template}
                generateOutput={generateOutputHandler}
            />
            <OutputComponent
                onClearOutput={handleClearOutput}
                generatedOutput={output} />
        </div>
    );
};

export default InputOutputComponent;
