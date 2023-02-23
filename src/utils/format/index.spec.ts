import { formatDate } from '.'

describe('FormatDateFunctions', () => {
  it('sanity check', () => {
    expect(true).toEqual(true)
  })

  it('should return in YYYY/MM/DD', () => {
    const date = new Date('2023-01-01')
    const formatedDateString = formatDate(date, 'YYYY/MM/DD')
    expect(formatedDateString).toEqual('2023/1/1')
  })

  it('should return in YYYY-MM-DD', () => {
    const date = new Date('2023-01-01')
    const formatedDateString = formatDate(date, 'YYYY-MM-DD')
    expect(formatedDateString).toEqual('2023-1-1')
  })
})
