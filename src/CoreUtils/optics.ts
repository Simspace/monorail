import { Lens, Optional } from 'monocle-ts'
import { insert, lookup } from 'fp-ts/lib/Record'
import { array, cons, index, insertAt } from 'fp-ts/lib/Array'

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

/**
 * A function that generates monocle-ts Lenses for all top-level key-val pairs
 * when passed an object
 */
export const lensesFromRecord = <
  A extends { [key: string]: unknown },
  K extends keyof A & string,
  LensRecord extends { [P in K]: Lens<A, A[P]> },
  LensRecord_ extends { [key: string]: Lens<A, A[K]> }
>(
  x: A,
): LensRecord => {
  const result = {} as LensRecord & LensRecord_

  for (const k of Object.keys(x)) {
    result[k] = Lens.fromProp<A>()(k as K)
  }

  return result
}

/**
 * Creates an Optional optic for a given index in some Array<A>
 */
export const mkArrayIndexOptional = <S extends Array<A>, A>(i: number) =>
  new Optional<S, A>(
    xs => index(i, xs),
    a => xs => insertAt(i, a, xs).fold(array.of(a), ys => cons(a, ys)) as S,
  )

/**
 * Creates an Optional optic for a given key K in some Record<K, A>
 */
export const mkRecordKeyOptional = <
  S extends Record<K, A>,
  K extends keyof S & string,
  A extends S[K]
>(
  k: K,
) => new Optional<S, A>(s => lookup(k, s), a => obj => insert(k, a, obj) as S)
