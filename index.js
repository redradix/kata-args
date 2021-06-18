const parseCommand = (schema, value) => {
  const params = value.split('-').slice(1).map(value => value.trim());

  return params.reduce((acc, param) => {
    const [flag, value] = param.split(' ')
    const type = schema[flag]

    if (!type) {
      throw new Error('Invalid Parameter')
    }

    if (type === 'boolean') {
      if (value) {
        throw new Error('Invalid schema type')
      }

      return { ...acc, [flag]: true }
    } else if (type === 'string') {
      return { ...acc, [flag]: value }
    } else if (type === 'number') {
      const numberedValue = parseInt(value, 10)

      if (isNaN(numberedValue)) {
        throw new Error('Invalid schema type')
      }

      return { ...acc, [flag]: numberedValue }
    }
  }, {})
}

module.exports = { parseCommand }