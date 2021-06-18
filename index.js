const schema = require('./schema')

const parser = (params, schema) => {
  console.log(params, schema)
  throw new Error('hola')
}

// parser('-p 8080', schema)

module.exports = { parser }
