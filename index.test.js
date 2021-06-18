const schema = require('./schema')
const { parser } = require('./index.js')

describe('Bla', () => {
  it('ok', () => {
    expect(() => parser('-p 8080', schema)).toBe(true)
  })
  it('fails', () => {
    expect(() => parser('-p string', schema)).toThrow(Error)
  })
})
