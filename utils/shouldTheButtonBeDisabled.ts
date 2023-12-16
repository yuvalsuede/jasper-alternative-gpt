import { Template } from "@/constants/templates";
import { hasAllKeys } from "./hasAllKeys";

export const shouldBeDisabled = (
  inputData: { [key: string]: string },
  template: Template
) => {
  if (Object.keys(inputData).length === 0) {
    return true;
  }

  const allTheInputIds = template.inputs.map((input) => input.id);
  if (!hasAllKeys(inputData, allTheInputIds)) {
    return true;
  }

  for (const key in inputData) {
    const value = inputData[key];
    // Check if the value is empty
    if (
      value === undefined ||
      value === null ||
      (typeof value === "string" && value.trim() === "") ||
      (Array.isArray(value) && value.length === 0)
    ) {
      return true; // Found an empty key
    }
  }

  return false;
};
