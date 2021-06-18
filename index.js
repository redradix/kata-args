const parseArguments = (schema, input) => {
  if (input.includes("-p")) return { p: true };
  return { p: false };
  
};

module.exports = { parseArguments };
