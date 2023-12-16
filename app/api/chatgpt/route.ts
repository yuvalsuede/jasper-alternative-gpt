import { TemplateInput } from "../../../constants/templates";
import { requestDataSchema } from "./zodSchems";
// import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";
export const runtime = "edge";
export type InputsData = {
  [key: string]: string;
};
export type ChatGPTAgent = "user" | "system";
export interface ChatGPTMessage {
  role: ChatGPTAgent;
  content: string;
}

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const createInstruction = (
  inputs: TemplateInput[],
  inputData: InputsData
): string => {
  return inputs
    .map((input) => `${input.label}: ${inputData[input.id]}`)
    .join("\n");
};

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);
  let parsedData;
  try {
    parsedData = requestDataSchema.parse(data);
  } catch {
    return new Response("Invalid data", { status: 422 });
  }
  const { template, inputData } = parsedData;
  const instruction = createInstruction(template.inputs, inputData);
  const mainGoal = template.command;
  const prompt = `Your task is: "${mainGoal}".\n\nHere are the details:\n${instruction}.\nPlease suggest three output in the form of following json schema:\n{result : ["Answer 1", "Answer 2", "Answer 3"]}
  `;
  console.log(prompt);
  const messages = [
    {
      role: "system",
      content:
        "You are a helpful assistant who helps user, draft different text based output. You have been provided with a task and details. Generate the output as per the task using the given details",
    },
    {
      role: "user",
      content: prompt,
    },
  ] as ChatGPTMessage[];

  try {
    const response: any = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: messages,
      temperature: 1,
      max_tokens: 200,
      response_format: { type: "json_object" },
    });

    console.log(response);
    const reply = response.choices[0].message.content;
    return new Response(reply);
  } catch (error) {
    console.error("Error while making the API call:", error);
    return new Response("Error while making the API Call", { status: 500 });
  }
}
