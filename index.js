const parseArgs = args => {
  args = args.split(" ")
  const parser = {}

  if (args.includes('-d')) {
    let value = args[args.indexOf("-d") + 1]
    if(!value || value.startsWith('-')) {
      value = 0
    }
    parser['d'] = Number(value)
  }
  if (args.includes('-l')) {
   parser['l']= true
  }
  if (args.includes('-p')) {
    let value = args[args.indexOf("-p") + 1]
    if(!value || value.startsWith('-')) {
      value = ''
    }
    parser['p']=  value
  }
  return parser
}

module.exports = { parseArgs }
