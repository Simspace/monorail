export interface OneFieldOperator<K, A> {
  type: 'oneField'
  key: K
  predicate: (params: { value: A; cell: A }) => boolean
}

export interface TwoFieldOperator<K, A> {
  type: 'twoField'
  key: K
  predicate: (params: { first: A; second: A; cell: A }) => boolean
}

export type RangeFilterOperator<K, A = unknown> =
  | OneFieldOperator<K, A>
  | TwoFieldOperator<K, A>
