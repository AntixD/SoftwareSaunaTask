import fs from "fs";
import path from "path";
import { isEmptyOrUndefined } from "../string/stringHelpers";

const readFileAsASCII = (filePath: string): string => {
  try {
    return fs.readFileSync(filePath, "ascii");
  } catch (error) {
    throw new Error(`Failed to read file on path: ${filePath}. ${error}`);
  }
};

export const loadFileContent = (fileName: string): string => {
  if (isEmptyOrUndefined(fileName)) {
    throw new Error("Invalid file name. Must be a non-empty string.");
  }
  const fullPath = path.join(__dirname, "..", "..", "..", "data", fileName);
  return readFileAsASCII(fullPath);
};
