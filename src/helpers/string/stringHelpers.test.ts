import {
  countCharacterOccurrences,
  isValidASCIICharacter,
  isEmptyOrUndefined,
} from "./stringHelpers";

describe("String Helpers", () => {
  describe("countCharacterOccurrences", () => {
    it("Should return correct frequency for a character", () => {
      expect(countCharacterOccurrences("hello world", "o")).toBe(2);
      expect(countCharacterOccurrences("test", "t")).toBe(2);
      expect(countCharacterOccurrences("test", "@")).toBe(0);
    });

    it("Should throw for invalid character input", () => {
      expect(() => countCharacterOccurrences("test", "te")).toThrow();
      expect(() => countCharacterOccurrences("test", "")).toThrow();
      expect(() =>
        countCharacterOccurrences("test", null as unknown as string)
      ).toThrow();
    });
  });

  describe("isValidASCIICharacter", () => {
    it("Should return true for valid ASCII letters", () => {
      expect(isValidASCIICharacter("A")).toBe(true);
      expect(isValidASCIICharacter("z")).toBe(true);
    });

    it("Should return false for non-ASCII letters or invalid inputs", () => {
      expect(isValidASCIICharacter("")).toBe(false);
      expect(isValidASCIICharacter(" ")).toBe(false);
      expect(isValidASCIICharacter("1")).toBe(false);
      expect(isValidASCIICharacter("@")).toBe(false);
    });
  });

  describe("isEmptyOrUndefined", () => {
    it("Should return true for empty or undefined strings", () => {
      expect(isEmptyOrUndefined("")).toBe(true);
      expect(isEmptyOrUndefined("   ")).toBe(true);
      expect(isEmptyOrUndefined(null as unknown as string)).toBe(true);
      expect(isEmptyOrUndefined(undefined as unknown as string)).toBe(true);
    });

    it("Should return false for non-empty strings", () => {
      expect(isEmptyOrUndefined("hello")).toBe(false);
      expect(isEmptyOrUndefined("  a  ")).toBe(false);
    });
  });
});
