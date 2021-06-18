const { createParser } = require('./index.js')

const parseArgs = createParser({
  l: 'boolean',
  p: 'string',
  d: 'number',
})

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
    expect(parseArgs('-p 8000 -l')).toEqual({ l: true, p: '8000' })
  })

  it('parses a flag without value and a flag with a default value', () => {
    expect(parseArgs('-p -l')).toEqual({ l: true, p: '' })
  })

  it('parses numeric args', () => {
    expect(parseArgs('-d 100')).toEqual({ d: 100 })
  })

  it('throws an exception when not allowed flag', () => {
    expect(() => parseArgs('-z')).toThrow()
  })

  it('can test any schema', () => {
    const parser = createParser({
      l: 'string',
      p: 'number',
      d: 'boolean',
    })
    expect(parser('-d -p 80 -l hola')).toEqual({ d: true, p: 80, l: 'hola' })
  })
})
