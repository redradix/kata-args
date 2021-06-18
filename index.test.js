const schema = require('./schema')
const { parser } = require('./index.js')

describe('Bla', () => {
  it('fails', () => {
    expect(() => parser('-p 8080', schema)).toThrow(Error)
  })
})
