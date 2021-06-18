const parseArguments = (schema, input) => {
  if (schema.p === "boolean") {
    if (input.includes("-p")) return { p: true };
    return { p: false };
  } else {
    return { p: 8080 };
  }
};

module.exports = { parseArguments };
