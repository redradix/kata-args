const { parseArgs } = require('./index.js')


describe('Parser', () => {
  it('no params', () => {
    expect(parseArgs('')).toEqual({})
  })
})
