const { parseCommand } = require('./index.js')

const specs = [
  {
    name: 'Empty schema and value',
    schema: {},
    value: '',
    result: {}
  },
  {
    name: 'Schema with value boolean "a"',
    schema: {
      a: 'boolean'
    },
    value: '-a',
    result: { a: true }
  },
  {
    name: 'Schema with value boolean "b"',
    schema: {
      b: 'boolean'
    },
    value: '-b',
    result: { b: true }
  }
]

const error = [
  {
    name: 'Schema with wrong boolean',
    schema: {
      a: 'boolean'
    },
    value: '-b',
    result: 'Invalid Parameter'
  },
]

/**

 */

describe('Validate Schema', () => {
  specs.forEach(({name, schema, value, result}) => {
    it(name, () => {
      expect(parseCommand(schema, value)).toMatchObject(result)
    })
  });

  error.forEach(({name, schema, value, result}) => {
    it (name, () => {
      expect(() => parseCommand(schema, value)).toThrowError(result)
    })
  })
})