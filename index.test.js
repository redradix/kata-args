const { createParser } = require('./index.js')

describe('Parsing basics', () => {
  let parseArgs

  beforeAll(() => {
    parseArgs = createParser({
      l: 'boolean',
      p: 'string',
      d: 'number',
    })
  })

  it('works when no args are provided', () => {
    expect(parseArgs('')).toEqual({})
  })

  it('parses a single flag', () => {
    expect(parseArgs('-l')).toEqual({ l: true })
  })

  it('parses a single string option', () => {
    expect(parseArgs('-p 4000')).toEqual({ p: '4000' })
    expect(parseArgs('-p 8000')).toEqual({ p: '8000' })
  })

  it('parses a single numeric option', () => {
    expect(parseArgs('-d 100')).toEqual({ d: 100 })
    expect(parseArgs('-d 2000')).toEqual({ d: 2000 })
  })

  it('provides a default value for a single empty option', () => {
    expect(parseArgs('-p')).toEqual({ p: '' })
    expect(parseArgs('-d')).toEqual({ d: 0 })
  })

  it('parses a flag and an option', () => {
    expect(parseArgs('-l -p 8000')).toEqual({ l: true, p: '8000' })
    expect(parseArgs('-p 8000 -l')).toEqual({ l: true, p: '8000' })
  })

  it('parses a flag and provides a default value for an empty option', () => {
    expect(parseArgs('-p -l')).toEqual({ l: true, p: '' })
    expect(parseArgs('-l -p')).toEqual({ l: true, p: '' })
  })

  it('parses two options and provides a default value when appropiate', () => {
    expect(parseArgs('-p -d')).toEqual({ p: '', d: 0 })
    expect(parseArgs('-d -p')).toEqual({ p: '', d: 0 })

    expect(parseArgs('-p 8000 -d')).toEqual({ p: '8000', d: 0 })
    expect(parseArgs('-p -d 100')).toEqual({ p: '', d: 100 })
  })

  it('fails when an arg is not recognized', () => {
    expect(() => parseArgs('-z')).toThrow()
    expect(() => parseArgs('-h')).toThrow()
  })
})

describe('Parsing with different schemas', () => {
  it('can test any schema', () => {
    const parser = createParser({
      l: 'string',
      p: 'number',
      d: 'boolean',
    })

    expect(parser('-d -p 80 -l hola')).toEqual({ d: true, p: 80, l: 'hola' })
    expect(parser('-d -p -l hola')).toEqual({ d: true, p: 0, l: 'hola' })
    expect(parser('-d -p 80 -l')).toEqual({ d: true, p: 80, l: '' })
  })
})
