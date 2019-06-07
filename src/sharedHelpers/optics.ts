import { array, cons, index, updateAt } from 'fp-ts/lib/Array'
import { insert, lookup } from 'fp-ts/lib/Record'
import { Lens, Optional } from 'monocle-ts'

/**
 * Binary composition for lenses (`monocle-ts`)
 *
 * NOTE: This may feel like backwards (left-to-right) composition,
 * but it's not. Think of it as composing "focusers" instead of "accessors"
 */
export const oLens = <S, A, B>(f: Lens<S, A>, g: Lens<A, B>): Lens<S, B> =>
  f.compose(g)

/**
 * Helper that extracts the S type from a Lens<S, A>
 */

/* tslint:disable:no-any */
export type ExtractSFromLens<L extends Lens<any, any>> = L extends Lens<
  infer S,
  any
>
  ? S
  : never

/**
 * Helper that extracts the A type from a Lens<S, A>
 */
export type ExtractAFromLens<L extends Lens<any, any>> = L extends Lens<
  any,
  infer A
>
  ? A
  : never

/* tslint:enable:no-any */

/**
 * A function that generates monocle-ts Lenses for all top-level key-val pairs
 * when passed an object
 */
export const lensesFromRecord = <
  A,
  K extends keyof A & string,
  LensRecord extends { [P in K]: Lens<A, A[P]> },
  IndexedLensRecord extends Record<string, Lens<A, A[K]>>
>(
  x: A,
): LensRecord => {
  type LensRecord_ = LensRecord & IndexedLensRecord
  let result = {} as LensRecord_

  for (const k of Object.keys(x) as Array<K>) {
    result = insert(k, Lens.fromProp<A>()(k), result) as LensRecord_
  }

  return result
}

/**
 * Creates an Optional optic for a given index in some Array<A>
 */
export const mkArrayIndexOptional = <S extends Array<A>, A>(i: number) =>
  new Optional<S, A>(
    xs => index(i, xs),
    a => xs => updateAt(i, a, xs).fold(array.of(a), ys => cons(a, ys)) as S,
  )

/**
 * Creates an Optional optic for a given key K in some Record<K, A>
 *
 * TODO: Consider rewriting this in a different way
 */
export const mkRecordKeyOptional = <
  S extends Record<string, S[K]>,
  K extends keyof S & string
>(
  k: K,
) =>
  new Optional<S, S[K]>(s => lookup(k, s), a => obj => insert(k, a, obj) as S)
