const consumeArgs = (schema, args, result = {}) => {
  if (!args || args.length === 0) return result

  const [currentArg, ...nextArgs] = args
  if (currentArg === '' && nextArgs.length === 0) return result

  const option = currentArg.slice(1)

  switch (schema[option]) {
    case 'boolean': {
      return consumeArgs(schema, nextArgs, {
        ...result,
        [option]: true,
      })
    }
    case 'string': {
      const [value, ...nextArgsWithoutValue] = nextArgs

      if (!value || value.startsWith('-')) {
        return consumeArgs(schema, nextArgs, {
          ...result,
          [option]: '',
        })
      }

      return consumeArgs(schema, nextArgsWithoutValue, {
        ...result,
        [option]: value,
      })
    }
    case 'number': {
      const [value, ...nextArgsWithoutValue] = nextArgs

      if (!value || value.startsWith('-')) {
        return consumeArgs(schema, nextArgs, {
          ...result,
          [option]: 0,
        })
      }

      return consumeArgs(schema, nextArgsWithoutValue, {
        ...result,
        [option]: Number(value),
      })
    }
    default:
      throw new Error(`Argument ${currentArg} is not supported`)
  }
}

const createParser = schema => input => {
  const args = input.split(' ')

  return consumeArgs(schema, args)
}

module.exports = { createParser }
