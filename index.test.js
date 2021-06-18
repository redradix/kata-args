const { parseArgs } = require('./index.js')

describe('Parser', () => {
  it('no params', () => {
    expect(parseArgs('')).toEqual({})
  })

  it('parse a single flag', () => {
    expect(parseArgs('-l')).toEqual({ l: true })
  })

  it('parse a single flag with a value', () => {
    expect(parseArgs('-p 4000')).toEqual({ p: '4000' })
    expect(parseArgs('-p 8000')).toEqual({ p: '8000' })
  })

  it('provides a default value if none is provided', () => {
    expect(parseArgs('-p')).toEqual({ p: '' })
  })

  it('parses a flag without value and a flag with a value', () => {
    expect(parseArgs('-l -p 8000')).toEqual({ l: true, p: '8000' })
  })
})
