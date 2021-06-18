const parseArgs = args => {
  const parser = {}

  if (args.includes('-l')) {
   parser['l']= true
  }
  if (args.includes('-p')) {
    const auxArgs = args.split(" ")
    let value = auxArgs[auxArgs.indexOf("-p") + 1]
    if(!value || value.startsWith('-')) {
      value = ''
    }
    parser['p']=  value
  }
  return parser
}

module.exports = { parseArgs }
