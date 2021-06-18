const { parseArgs } = require("./index.js");

describe("Parser", () => {
  it("no params", () => {
    expect(parseArgs("")).toEqual({});
  });

  it("parse a single flag", () => {
    expect(parseArgs("-l")).toEqual({ l: true });
  });

  it("parse a single flag with a value", () => {
    expect(parseArgs("-p 4000")).toEqual({ p: "4000" });
  });
});
