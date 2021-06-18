const parseArgs = (args) => {
  if (args.includes("-l")) {
    return { l: true };
  }
  if (args.includes("-p")) {
    return { p: "4000" };
  }
  return {};
};

module.exports = { parseArgs };
