import { TemplateInput } from "../../../constants/templates";
import { requestDataSchema } from "./zodSchems";
import OpenAI from "openai";

export const runtime = "edge";

export type InputsData = {
  [key: string]: string;
};
// Types for ChatGPT message
export type ChatGPTAgent = "user" | "system";
export interface ChatGPTMessage {
  role: ChatGPTAgent;
  content: string;
}
// Configuring OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// This function converts the provided input into a instruction for ChatGPT to follow
const createInstruction = (
  inputs: TemplateInput[],
  inputData: InputsData
): string => {
  return inputs
    .map((input) => `${input.label}: ${inputData[input.id]}`)
    .join("\n");
};

// The actual API Endpoint
export async function POST(request: Request) {
  // Getting the data
  const data = await request.json();
  let parsedData;
  try {
    // Parsing it with zod to see if the data provided is valid data or not
    parsedData = requestDataSchema.parse(data);
  } catch {
    // If parsing fails then returning an error response
    return new Response("Invalid data", { status: 422 });
  }
  const language = parsedData.inputData.language;
  // Getting the actual data that was provided if parsing was success
  const { template, inputData } = parsedData;
  // Creating the instruction which will be sent to chatgpt model
  const instruction = createInstruction(template.inputs, inputData);
  // Extracting the Goal form the template
  const mainGoal = template.command;
  const prompt = `Your task is: "${mainGoal}".\n\nHere are the details:\n${instruction}.\nPlease suggest three output in the form of following json schema:\n{result : ["Answer 1", "Answer 2", "Answer 3"]}
  `;
  const messages = [
    {
      role: "system",
      content: `You are a helpful assistant who helps user, draft different text based output. You have been provided with a task and details.  
        Follow these four instructions below in all your responses:
        1.Generate the output as per the given task using the given details;
        2. Use ${language} language only;
        3.Use ${language} alphabet whenever possible;
        4. Translate any other language to the ${language} language whenever possible.
        `,
    },
    {
      role: "user",
      content: prompt,
    },
  ] as ChatGPTMessage[];

  try {
    // Making request to ChatGPT for output
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: messages,
      temperature: 1,
      max_tokens: 512,
      // This makes it so that the model always outputs valid JSON
      response_format: { type: "json_object" },
    });
    const reply = response.choices[0].message.content;
    return new Response(reply);
  } catch (error) {
    console.error("Error while making the API call:", error);
    return new Response("Error while making the API Call", { status: 500 });
  }
}
