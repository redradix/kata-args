const parseCommand = (schema, value) => {
  return value ? { a: true } : {}
}

module.exports = { parseCommand }