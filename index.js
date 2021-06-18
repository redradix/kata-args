const parseArgs = args => {
  const parser = {}

  if (args.includes('-d')) {
    const auxArgs = args.split(" ")
    let value = auxArgs[auxArgs.indexOf("-d") + 1]
    if(!value || value.startsWith('-')) {
      value = 0
    }
    parser['d'] = Number(value)
  }
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
