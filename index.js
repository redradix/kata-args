const parseArgs = args => {
  const parser = {}

  if (args.includes('-l')) {
   parser['l']= true
  }
  if (args.includes('-p')) {
    auxArgs = args.split(" ")
    parser['p']=  auxArgs[auxArgs.indexOf("-p") + 1] || ""
  }
  return parser
}

module.exports = { parseArgs }
