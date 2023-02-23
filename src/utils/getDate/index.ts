import { DateUtil } from '~/types'

export const getDate = (date: Date, util: DateUtil): number => {
  if (util === 'year') return date.getFullYear()
  if (util === 'month') return date.getMonth() + 1
  if (util === 'day') return date.getDate()

  throw new Error(`${util} is not found`)
}
