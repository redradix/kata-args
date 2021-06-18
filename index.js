const parseArguments = (schema, input) => {
  if (schema.p === "boolean") {
    if (input.includes("-p")) return { p: true };
    return { p: false };
  } else {
    const numberString = input.slice(3)
    const number = parseInt(numberString, 10)

    return { p: number };
  }
};

module.exports = { parseArguments };
