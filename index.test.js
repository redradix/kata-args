const { parseArgs } = require('./index.js')


describe('Parser', () => {
  it('no params', () => {
    expect(parseArgs('')).toEqual({})
  })

  it('parse a single flag', () => {
    expect(parseArgs('-l')).toEqual({l:true})
  } )
})
