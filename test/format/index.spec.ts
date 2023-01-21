import { describe } from 'mocha'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
import { expect } from 'chai'
import { formatDate } from '../../src/format'

chai.use(chaiAsPromised)

describe('FormatDateFunctions', () => {
  it('sanity check', () => {
    expect(true).to.equal(true)
  })

  it('should return in YYYY/MM/DD', () => {
    const date = new Date('2023-01-01')
    const formatedDateString = formatDate(date, 'YYYY/MM/DD')
    expect(formatedDateString).to.equal('2023/1/1')
  })

  it('should return in YYYY-MM-DD', () => {
    const date = new Date('2023-01-01')
    const formatedDateString = formatDate(date, 'YYYY-MM-DD')
    expect(formatedDateString).to.equal('2023-1-1')
  })
})
