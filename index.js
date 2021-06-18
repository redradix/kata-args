const parseArgs = args => {
  if (args.includes('-p') && args.includes('-l')) {
    return {
      l: true,
      p: args.slice(6),
    }
  }
  if (args.includes('-l')) {
    return { l: true }
  }
  if (args.includes('-p')) {
    return { p: args.slice(3) }
  }
  return {}
}

module.exports = { parseArgs }
