import { StrMap } from 'fp-ts/lib/StrMap'

/**
 * StrMap constructor function
 *
 */
export const newStrMap = <A>(object: { [key: string]: A }) => new StrMap(object)
