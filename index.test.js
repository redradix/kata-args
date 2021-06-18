const { parseArguments } = require("./index.js");

describe("parseArguments", () => {
  it("support parsing a single flag as `true`", () => {
    const schema = {
      p: "boolean",
    };

    const input = "-p";

    expect(parseArguments(schema, input)).toEqual({
      p: true,
    });
  });

  it("support parsing a single flag as `false`", () => {
    const schema = {
      p: "boolean",
    };

    const input = "";

    expect(parseArguments(schema, input)).toEqual({
      p: false,
    });
  });
});
