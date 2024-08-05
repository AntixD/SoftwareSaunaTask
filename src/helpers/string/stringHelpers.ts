export const isEmptyOrUndefined = (value: string): boolean =>
  value == null || typeof value !== "string" || value.trim().length === 0;

export const countCharacterOccurrences = (
  str: string,
  char: string
): number => {
  if (isEmptyOrUndefined(char) || char.length !== 1) {
    throw new Error("Invalid character provided, must be 1 string character.");
  }
  return str
    .split("")
    .reduce((count, curr) => (curr === char ? count + 1 : count), 0);
};

export const isValidASCIICharacter = (char: string): boolean => {
  if (isEmptyOrUndefined(char) || char.length !== 1) {
    return false;
  }
  const code = char.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
};
