import { PathElement } from "./types";

export interface Coordinates {
  row: number;
  column: number;
}

export interface Node {
  coordinates: Coordinates;
  value: PathElement;
}

export interface FollowPathResult {
  pathAsCharacters: string;
  collectedLetters: string;
}
