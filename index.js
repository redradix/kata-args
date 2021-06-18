const parseArguments = (schema, input) => {
  for (const [flag, type] of Object.entries(schema)) {
    if (type === "boolean") {
      return { [flag]: input.includes(`-${flag}`) };
    } else {
      const [flagWithMinus, numberString] = input.split(" ");
      const flag = flagWithMinus.slice(1);
      const number = parseInt(numberString, 10);

      return { [flag]: number };
    }
  }
};

module.exports = { parseArguments };
