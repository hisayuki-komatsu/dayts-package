import { getDate } from '.'

describe('FormatDateFunctions', () => {
  const YEAR = 2023
  const MONTH = 2
  const DAY = 4
  const DATE = new Date(`${YEAR}-${MONTH}-${DAY}`)
  it('sanity check', () => {
    expect(true).toEqual(true)
  })

  it(`should return in ${YEAR}`, () => {
    const year = getDate(DATE, 'year')
    expect(year).toEqual(YEAR)
  })

  it(`should return in ${MONTH}`, () => {
    const month = getDate(DATE, 'month')
    expect(month).toEqual(MONTH)
  })

  it(`should return in ${DAY}`, () => {
    const day = getDate(DATE, 'day')
    expect(day).toEqual(DAY)
  })
})
