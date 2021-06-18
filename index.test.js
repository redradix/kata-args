const { parseCommand } = require('./index.js')

const specs = [
  {
    name: 'Empty schema and value',
    schema: {},
    value: '',
    result: {}
  },
  {
    name: 'Boolean',
    schema: {
      a: 'boolean'
    },
    value: '-a',
    result: { a: true }
  },
]

/**

 */

describe('Validate Schema', () => {
  specs.forEach(({name, schema, value, result}) => {
    it(name, () => {
      expect(parseCommand(schema, value)).toMatchObject(result)
    })
  })
})