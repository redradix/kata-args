const parseArgs = (args) => {
  if(args.includes("-l")){
    return {l:true}
  }
  return {}
}

module.exports = { parseArgs }
