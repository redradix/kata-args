const parseCommand = (schema, value) => {
  const flags = value.split('-').slice(1).map(value => value.trim());
  const schemaKeys = Object.keys(schema);

  return flags.reduce((acc, key) => {
    if (schemaKeys.includes(key)) {
      return { ...acc, [key]: true }
    } else {
      throw new Error('Invalid Parameter')
    }
  }, {})
}

module.exports = { parseCommand }