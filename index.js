const schema = require('./schema')

const parseArgs = str => {
  const [arg, value] = str.split(' ')
  return [arg, value]
}

const parser = (params, schema) => {
  const [arg, value] = parseArgs(params)

  const rule = schema[arg]
  const casted = rule.type(value)

  console.log(casted)

  if (isNaN(casted)) throw new Error()
  else return true

  // console.log(params, schema)
  // throw new Error('hola')
}

// parser('-p 8080', schema)

module.exports = { parser }
