import { flow } from 'fp-ts/lib/function'
import { contramap, fromCompare, Ord, ordDate, ordString } from 'fp-ts/lib/Ord'
import { invert as invertOrdering, Ordering } from 'fp-ts/lib/Ordering'
import { pipe } from 'fp-ts/lib/pipeable'
import * as RTup from 'fp-ts/lib/ReadonlyTuple'
import * as Tup from 'fp-ts/lib/Tuple'

import { toLower } from '../strings'
import { eqRecordWithNameLower, eqStrict } from './Eq'

/**
 * Determines ordering of two numbers (numeric comparison)
 */
export const numericCompare = (x: number, y: number): Ordering =>
  x < y ? -1 : x > y ? 1 : 0

/**
 * Ord instance for number
 */
export const ordNumeric: Ord<number> = {
  ...eqStrict,
  compare: numericCompare,
}

/**
 * Determines ordering of two strings (alphabetic comparison)
 */
export const alphaCompare = (x: string, y: string): Ordering =>
  x < y ? -1 : x > y ? 1 : 0

/**
 * Ord instance for string
 */
export const ordAlpha: Ord<string> = {
  ...eqStrict,
  compare: alphaCompare,
}

export const ordCaseInsensitiveString = contramap((s: string) =>
  s.toLocaleLowerCase(),
)(ordString)

/**
 * Comparator for RecordWithName, comparing lowercase names alphabetically
 */
export const recordWithNameLowerComparator = <
  A extends {
    name: string
  }
>(
  a: A,
  b: A,
): Ordering => {
  const nameA = toLower(a.name)
  const nameB = toLower(b.name)
  return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
}

/**
 * Ord instance for types extending the RecordWithName interface
 * that does comparisons & equality checking against the name prop
 * converted to lowercase
 */
export const ordRecordWithNameLower: Ord<{
  name: string
}> = {
  ...eqRecordWithNameLower,
  compare: recordWithNameLowerComparator,
}

/**
 * Inverts an Ord instance
 * @param o
 */
export const invert = <T>(o: Ord<T>): Ord<T> =>
  fromCompare(flow(o.compare, invertOrdering))

/**
 * Returns an Ord for a tuple that only compares the first element
 * @param ord
 */
export const getTupleOrdFst = <A, B>(ord: Ord<A>) =>
  pipe(
    ord,
    contramap((tuple: [A, B]) => Tup.fst(tuple)),
  )

/**
 * Returns an Ord for a readonly tuple that only compares the first element
 * @param ord
 */
export const getReadonlyTupleOrdFst = <A, B>(ord: Ord<A>) =>
  pipe(
    ord,
    contramap((tuple: readonly [A, B]) => RTup.fst(tuple)),
  )

/**
 * Returns an Ord for a tuple that only compares the second element
 * @param ord
 */
export const getTupleOrdSnd = <A, B>(ord: Ord<B>) =>
  pipe(
    ord,
    contramap((tuple: [A, B]) => Tup.snd(tuple)),
  )

/**
 * Returns an Ord for a readonly tuple that only compares the second element
 * @param ord
 */
export const getReadonlyTupleOrdSnd = <A, B>(ord: Ord<B>) =>
  pipe(
    ord,
    contramap((tuple: readonly [A, B]) => RTup.snd(tuple)),
  )

export const ordDateFromString: Ord<string> = pipe(
  ordDate,
  contramap(a => new Date(a)),
)
