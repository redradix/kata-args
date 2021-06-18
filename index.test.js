const { parser } = require('./index.js')

const schema = {
  p: {
    type: Number,
    regex: null,
  },
}

describe('Bla', () => {
  it('fails', () => {
    expect(parser('-p 8080', schema)).toThrow(Error)
  })
})
