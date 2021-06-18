const parseArguments = (schema, input) => {
  const [flagWithMinus, valueString] = input.split(" ");
  const flag = flagWithMinus.slice(1);

  if (schema[flag] === "boolean") {
    if (input.includes(flagWithMinus)) return { [flag]: true };
    return { [flag]: false };
  } else {
    const number = parseInt(valueString, 10);

    return { [flag]: number };
  }
};

module.exports = { parseArguments };
