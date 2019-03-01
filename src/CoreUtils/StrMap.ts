import { StrMap } from 'fp-ts/lib/StrMap'

/**
 * StrMap constructor function
 *
 */
export const mkStrMap = <A>(object: { [key: string]: A }) => new StrMap(object)
