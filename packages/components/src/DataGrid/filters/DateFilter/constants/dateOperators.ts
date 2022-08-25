import type { IUtils } from '@date-io/core/IUtils'

import type { RangeFilterOperator } from '../../RangeFilter.js'
import type { DateFilterOperator } from '../models.js'

export const getDateOperators = <TDate>(
  adapter: IUtils<TDate>,
): {
  [K in DateFilterOperator]: RangeFilterOperator<K, TDate>
} => ({
  on: {
    type: 'oneField',
    key: 'on',
    predicate: ({ value, cell }) =>
      cell >= adapter.startOfDay(value) && cell <= adapter.endOfDay(value),
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
      cell < adapter.startOfDay(value) || cell > adapter.endOfDay(value),
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
})
