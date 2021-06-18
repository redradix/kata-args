const schema = require('./schema')

const parseArgs = str => {
  const [arg, value] = str.split(' ')
  return [arg, value]
}

const x = string => {
  const y = string.split(' ')
  const result = y.map((v, i) => {
    if (v.startsWith('-')) return [v]
  })
  console.log(result)
}

x('-l -p 8080 -x')

const parser = (params, schema) => {
  const [arg, value] = parseArgs(params)

  const rule = schema[arg]
  const casted = rule.type(value)

  const parsedObject = { [arg]: casted }

  if (isNaN(casted)) throw new Error()
  else return parsedObject

  // console.log(params, schema)
  // throw new Error('hola')
}

// parser('-p 8080', schema)

module.exports = { parser }
