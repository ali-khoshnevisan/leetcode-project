const chai = window.chai
const expect = chai.expect

describe('msToTime', () => {
  it('pass', () => {
    expect(msToTime(1356400)).to.deep.equal('00:22:36')
    expect(msToTime(56890021)).to.deep.equal('15:48:10')
    expect(msToTime(3265)).to.deep.equal('00:00:03')
    expect(msToTime(3564642620)).to.deep.equal('41 day(s) and 06:10:42')
    expect(msToTime(536890021)).to.deep.equal('6 day(s) and 05:08:10')
  })
})