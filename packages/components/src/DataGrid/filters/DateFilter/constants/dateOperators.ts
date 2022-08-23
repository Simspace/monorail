import { endOfDay, startOfDay } from 'date-fns'

import { RangeFilterOperator } from '../../RangeFilter.js'
import { DateFilterOperator } from '../models.js'

export const dateOperators: {
  [K in DateFilterOperator]: RangeFilterOperator<K, Date>
} = {
  on: {
    type: 'oneField',
    key: 'on',
    predicate: ({ value, cell }) =>
      cell >= startOfDay(value) && cell <= endOfDay(value),
  },
  before: {
    type: 'oneField',
    key: 'before',
    predicate: ({ value, cell }) => cell < value,
  },
  after: {
    type: 'oneField',
    key: 'after',
    predicate: ({ value, cell }) => cell > value,
  },
  notOn: {
    type: 'oneField',
    key: 'notOn',
    predicate: ({ value, cell }) =>
      cell < startOfDay(value) || cell > endOfDay(value),
  },
  between: {
    type: 'twoField',
    key: 'between',
    predicate: ({ first, second, cell }) => cell >= first && cell <= second,
  },
  notBetween: {
    type: 'twoField',
    key: 'notBetween',
    predicate: ({ first, second, cell }) => cell <= first || cell >= second,
  },
}
