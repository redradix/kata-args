const parseCommand = (schema, value) => {
  const params = value.split('-').slice(1).map(value => value.trim());

  return params.reduce((acc, param) => {
    const [flag, value] = param.split(' ')
    const type = schema[flag]

    if (!type) {
      throw new Error('Invalid Parameter')
    }

    if (type === 'boolean') {
      return  { ...acc, [flag]: true }
    } else if (type === 'string') {
      return { ...acc, [flag]: value }
    }

    
  }, {})
}

module.exports = { parseCommand }