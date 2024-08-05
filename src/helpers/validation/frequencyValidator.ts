import { countCharacterOccurrences } from "../string/stringHelpers";

export const ensureCharFrequency = (
  str: string,
  char: string,
  requiredFrequency: number
): void => {
  const actualFrequency = countCharacterOccurrences(str, char);
  if (actualFrequency !== requiredFrequency) {
    throw new Error(
      `Expected exactly ${requiredFrequency} occurrence(s) of '${char}' but found ${actualFrequency}.`
    );
  }
};
