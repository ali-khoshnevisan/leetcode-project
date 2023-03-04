
const chai = window.chai
const expect = chai.expect

describe('msToTime', () => {
  it('pass', () => {
    expect(msToTime(1356400)).to.deep.equal('00:22:36')
    // expect(msToTime()).to.deep.equal()
    // expect(msToTime()).to.deep.equal()
  })
})