import { Ord } from 'fp-ts/lib/Ord'
import { Ordering } from 'fp-ts/lib/Ordering'

import { setoidRecordWithNameLower, setoidStrict } from './Setoid'
import { toLower } from '../strings'

/**
 * Determines ordering of two numbers (numeric comparison)
 */
export const numericCompare = (x: number, y: number): Ordering =>
  x < y ? -1 : x > y ? 1 : 0

/**
 * Ord instance for number
 */
export const ordNumeric: Ord<number> = {
  ...setoidStrict,
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
  ...setoidStrict,
  compare: alphaCompare,
}

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
  ...setoidRecordWithNameLower,
  compare: recordWithNameLowerComparator,
}
