import { RangeFilterOperator } from '../../RangeFilter'
import { NumericFilterOperator } from '../models'

export const numericOperators: {
  [K in NumericFilterOperator]: RangeFilterOperator<K, number>
} = {
  greaterThan: {
    type: 'oneField',
    key: 'greaterThan',
    predicate: ({ value, cell }) => cell >= value,
  },
  lessThan: {
    type: 'oneField',
    key: 'lessThan',
    predicate: ({ value, cell }) => cell <= value,
  },
  equalTo: {
    type: 'oneField',
    key: 'equalTo',
    predicate: ({ value, cell }) => cell === value,
  },
  notEqualTo: {
    type: 'oneField',
    key: 'notEqualTo',
    predicate: ({ value, cell }) => cell !== value,
  },
  between: {
    type: 'twoField',
    key: 'between',
    predicate: ({ first, second, cell }) => first <= cell && cell <= second,
  },
  notBetween: {
    type: 'twoField',
    key: 'notBetween',
    predicate: ({ first, second, cell }) => first >= cell || cell >= second,
  },
}
