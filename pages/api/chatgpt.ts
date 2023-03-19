// pages/api/chatgpt.ts
import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from 'openai';
import {Template, TemplateInput} from "../../constants/templates";

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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {
        const { template, inputsData } = req.body as { template: Template; inputsData: InputsData };
        const instruction = createInstruction(template.inputs, inputsData);
        const mainGoal = template.command;

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

            const reply = response?.data?.choices[0].message.content;
            res.status(200).json({ reply });
        } catch (error) {
            console.error("Error while making the API call:", error);
            res.status(500).json({ error: "Error while making the API call." });
        }
    } else {
        res.status(405).json({ error: "Method not allowed. Use POST." });
    }
}
