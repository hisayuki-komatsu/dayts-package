import { FormatType } from '../../types/index'

export const formatDate = (date: Date, formatType: FormatType): string => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  if (formatType === 'YYYY/MM/DD') return `${year}/${month}/${day}`

  return `${year}-${month}-${day}`
}
