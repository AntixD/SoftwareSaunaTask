import { loadFileContent } from "./readFileUtil";

describe("loadFileContent Function", () => {
  it("Should throw for an invalid file name", () => {
    expect(() => loadFileContent("nope")).toThrow();
    expect(() => loadFileContent("")).toThrow();
    expect(() => loadFileContent(true as unknown as string)).toThrow();
  });

  it("Should not throw for a valid file name", () => {
    expect(() => loadFileContent("example_01.txt")).not.toThrow();
    expect(() => loadFileContent("test.txt")).not.toThrow();
  });

  it("Should read the file content correctly", () => {
    expect(loadFileContent("test.txt")).toBe("test");
  });
});
