const schema = require('./schema')

const parseArgs = str => {
  const [arg, value] = str.split(' ')
  console.log(arg, value)
}

const parser = (params, schema) => {
  parseArgs(params)
  // console.log(params, schema)
  // throw new Error('hola')
}

parser('-p 8080', schema)

module.exports = { parser }
