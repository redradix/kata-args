const createParser = schema => args => {
  args = args.split(' ')

  const allowedArgs = Object.keys(schema)

  const parser = {}

  args
    .filter(arg => arg.startsWith('-'))
    .map(arg => arg.slice(1))
    .forEach(arg => {
      switch (schema[arg]) {
        case 'boolean': {
          parser[arg] = true
          break
        }
        case 'string': {
          let value = args[args.indexOf(`-${arg}`) + 1]
          if (!value || value.startsWith('-')) {
            value = ''
          }
          parser[arg] = value
          break
        }
        case 'number': {
          let value = args[args.indexOf(`-${arg}`) + 1]
          if (!value || value.startsWith('-')) {
            value = 0
          }
          parser[arg] = Number(value)
          break
        }
        default:
          throw new Error()
      }
    })

  return parser
}

module.exports = { createParser }
