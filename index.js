const parseArgs = (args) => {
  if (args.includes("-l")) {
    return { l: true };
  }
  if (args.includes("-p")) {
    return { p: args.slice(3) };
  }
  return {};
};

module.exports = { parseArgs };
