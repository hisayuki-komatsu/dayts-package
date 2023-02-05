import { describe } from 'mocha'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
import { expect } from 'chai'
import { getDate } from '../../src/getDate'

chai.use(chaiAsPromised)

describe('FormatDateFunctions', () => {
  const YEAR = 2023
  const MONTH = 2
  const DAY = 4
  const DATE = new Date(`${YEAR}-${MONTH}-${DAY}`)
  it('sanity check', () => {
    expect(true).to.equal(true)
  })

  it(`should return in ${YEAR}`, () => {
    const year = getDate(DATE, 'year')
    expect(year).to.equal(YEAR)
  })

  it(`should return in ${MONTH}`, () => {
    const month = getDate(DATE, 'month')
    expect(month).to.equal(MONTH)
  })

  it(`should return in ${DAY}`, () => {
    const day = getDate(DATE, 'day')
    expect(day).to.equal(DAY)
  })
})
