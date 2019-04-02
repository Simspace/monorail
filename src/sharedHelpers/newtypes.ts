import { Newtype, prism } from 'newtype-ts'

/**
 * NaN is a refinement of number
 */
export interface NaN extends Newtype<{ readonly NaN: unique symbol }, number> {}

// use this prism to return an option with prismNaN.getOption(someNumber)
export const prismNaN = prism<NaN>(Number.isNaN)
