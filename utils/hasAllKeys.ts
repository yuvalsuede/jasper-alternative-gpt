export function hasAllKeys(object: { [key: string]: string }, keys: string[]) {
  for (const key in keys) {
    if (!(key in Object.keys(object))) {
      return false; // If any key is missing, return false
    }
  }
  return true; // All keys are present
}
