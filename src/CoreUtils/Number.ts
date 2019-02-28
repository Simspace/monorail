import { Ord } from 'fp-ts/lib/Ord'
import { Ordering } from 'fp-ts/lib/Ordering'
import { setoidStrict } from './Setoid'

/**
 * Determines ordering of two strings (numeric comparison)
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
