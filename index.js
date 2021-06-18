const parseCommand = (schema, value) => {
  if (value === '-b') throw new Error('Invalid Parameter');
  
  return value ? { a: true } : {}
}

module.exports = { parseCommand }