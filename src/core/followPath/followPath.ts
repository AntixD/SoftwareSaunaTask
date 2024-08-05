import os from "os";
import { PathGrid } from "../../types/types";
import { loadFileContent } from "../../helpers/file/readFileUtil";
import { ensureCharFrequency } from "../../helpers/validation/frequencyValidator";
import { END_VALUE, START_VALUE } from "../../constants/constants";
import { traverseGrid } from "../traversal/traversal";
import { FollowPathResult } from "../../types/interfaces";

export const followPath = (fileName: string): FollowPathResult => {
  const rawGrid = loadFileContent(fileName);
  ensureCharFrequency(rawGrid, START_VALUE, 1);
  ensureCharFrequency(rawGrid, END_VALUE, 1);
  const pathGrid: PathGrid = rawGrid.split(os.EOL);
  return traverseGrid(pathGrid);
};
