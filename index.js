const parseArguments = (schema, input) => {
  if (schema.p === "boolean") {
    if (input.includes("-p")) return { p: true };
    return { p: false };
  } else {
    const [flagWithMinus, numberString] = input.split(" ");
    const flag = flagWithMinus.slice(1);
    const number = parseInt(numberString, 10);

    return { [flag]: number };
  }
};

module.exports = { parseArguments };
