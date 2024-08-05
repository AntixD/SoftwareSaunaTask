import { ensureCharFrequency } from "./frequencyValidator";

describe("ensureCharFrequency Function", () => {
  it("Should not throw if character frequency is correct", () => {
    expect(() => ensureCharFrequency("test", "t", 2)).not.toThrow();
    expect(() => ensureCharFrequency("test", "@", 0)).not.toThrow();
  });

  it("Should throw if character frequency is not correct", () => {
    expect(() => ensureCharFrequency("test", "t", 1)).toThrow();
    expect(() => ensureCharFrequency("test", "@", 1)).toThrow();
  });

  it("Should throw if the input string is not a valid string", () => {
    expect(() =>
      ensureCharFrequency(123 as unknown as string, "1", 0)
    ).toThrow();
    expect(() =>
      ensureCharFrequency(true as unknown as string, "t", 0)
    ).toThrow();
    expect(() =>
      ensureCharFrequency(["a"] as unknown as string, "t", 0)
    ).toThrow();
    expect(() =>
      ensureCharFrequency({ a: "a" } as unknown as string, "t", 0)
    ).toThrow();
  });

  it("Should throw if the target character is not a single character", () => {
    expect(() => ensureCharFrequency("test", "te", 1)).toThrow();
    expect(() => ensureCharFrequency("test", "@@", 0)).toThrow();
  });
});
