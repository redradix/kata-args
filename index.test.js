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
  },
  {
    name: 'Schema with 2 boolean values "a" and "b"',
    schema: {
      a: "boolean",
      b: 'boolean'
    },
    value: '-a -b',
    result: { a: true, b: true }
  },
  {
    name: 'Schema with 3 booleans in schema and 2 values "a" and "b"',
    schema: {
      a: 'boolean',
      b: 'boolean',
      c: 'boolean'
    },
    value: '-a -b',
    result: { a: true, b: true }
  },
  {
    name: 'Schema with value string "a"',
    schema: {
      a: 'string'
    },
    value: '-a andres',
    result: { a: 'andres' }
  },
  {
    name: 'Schema with value string "a" + boolean "b"',
    schema: {
      a: 'string',
      b: 'boolean'
    },
    value: '-b -a andres',
    result: { b: true, a: 'andres' }
  },
  {
    name: 'Schema with value number "8000"',
    schema: {
      p: 'number',
    },
    value: '-p 8000',
    result: { p: 8000 }
  },

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
  {
    name: 'Schema with wrong boolean',
    schema: {
      a: 'boolean',
      b: 'boolean'
    },
    value: '-b -c',
    result: 'Invalid Parameter'
  },
  {
    name: 'Schema with value string "a"',
    schema: {
      a: 'boolean',
      f: 'boolean'
    },
    value: '-a andres -f',
    result: 'Invalid schema type'
  },
  {
    name: 'Schema with wrong value number "bananas"',
    schema: {
      p: 'number',
    },
    value: '-p bananas',
    result: 'Invalid schema type'
  },
]

/**

 */

describe('Validate Schema', () => {
  specs.forEach(({name, schema, value, result}) => {
    it(name, () => {
      expect(parseCommand(schema, value)).toEqual(result)
    })
  });

  error.forEach(({name, schema, value, result}) => {
    it (`[ERROR] ${name}`, () => {
      expect(() => parseCommand(schema, value)).toThrowError(result)
    })
  })
})