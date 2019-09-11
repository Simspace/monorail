import { Newtype, prism } from 'newtype-ts'

/**
 * NaN is a refinement of number
 */
export interface NaN extends Newtype<{ readonly NaN: unique symbol }, number> {}

// use this prism to return an option with prismNaN.getOption(someNumber)
export const prismNaN = prism<NaN>(Number.isNaN)

/**
 * Infinity is a refinement of number
 */
export interface Infinity
  extends Newtype<{ readonly Infinity: unique symbol }, number> {}

export const prismInfinity = prism<Infinity>(
  x => !Number.isFinite(x) && !Number.isNaN(x),
)

/**
 * Finite is a refinement of number
 */
export interface Finite
  extends Newtype<{ readonly Finite: unique symbol }, number> {}

export const prismFinite = prism<Finite>(Number.isFinite)
