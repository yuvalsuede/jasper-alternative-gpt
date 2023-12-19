import { z } from "zod";
export const inputsDataSchema = z.record(z.string());

export const templateInputSchema = z.union([
  z.object({
    id: z.string(),
    label: z.string(),
    placeholder: z.string(),
    type: z.union([z.literal("text"), z.literal("textarea")]),
    options: z.array(z.string()).optional(),
  }),
  z.object({
    id: z.string(),
    label: z.string(),
    placeholder: z.string(),
    type: z.literal("select"),
    for: z.literal("language"),
    options: z.array(z.string()).optional(),
  }),
]);

export const templateSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  command: z.string(),
  inputs: z.array(templateInputSchema),
  icon: z.any(),
  categories: z.array(z.string()),
});

export const requestDataSchema = z.object({
  template: templateSchema,
  inputData: inputsDataSchema,
});
