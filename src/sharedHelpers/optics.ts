import { At, Index, Lens, Optional, Traversal } from 'monocle-ts'
import {
  array,
  cons,
  lookup as lookupArray,
  snoc,
  updateAt,
} from 'fp-ts/lib/Array'
import { Eq } from 'fp-ts/lib/Eq'
import { pipe } from 'fp-ts/lib/function'
import * as M from 'fp-ts/lib/Map'
import * as O from 'fp-ts/lib/Option'
import { insertAt, lookup } from 'fp-ts/lib/Record'

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ExtractSFromLens<L extends Lens<any, any>> = L extends Lens<
  infer S,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any
>
  ? S
  : never

/**
 * Helper that extracts the A type from a Lens<S, A>
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ExtractAFromLens<L extends Lens<any, any>> = L extends Lens<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  A,
  K extends keyof A & string,
  LensRecord extends {
    [P in K]: Lens<A, A[P]>
  },
  IndexedLensRecord extends Record<string, Lens<A, A[K]>>
>(
  x: A,
): LensRecord => {
  type LensRecord_ = LensRecord & IndexedLensRecord
  let result = {} as LensRecord_

  for (const k of Object.keys(x) as Array<K>) {
    result = insertAt(k, Lens.fromProp<A>()(k))(result) as LensRecord_
  }

  return result
}

/**
 * Creates an Optional optic for a given index in some Array<A>
 */
export const mkArrayIndexOptional = <S extends Array<A>, A>(i: number) =>
  new Optional<S, A>(lookupArray(i), a => xs =>
    pipe(
      xs,
      updateAt(i, a),
      O.fold(
        () => array.of(a),
        ys => cons(a, ys),
      ),
    ) as S,
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
  new Optional<S, S[K]>(
    s => lookup(k, s),
    a => obj => insertAt(k, a)(obj) as S,
  )

/**
 * `At` optic for `Map` keys
 *
 * Inspired by `atRecord` from `monocle-ts`:
 *
 * https://github.com/gcanti/monocle-ts/blob/master/src/At/Record.ts
 */
export function atMap<K, A = never>(E: Eq<K>): At<Map<K, A>, K, O.Option<A>> {
  return new At(
    k =>
      new Lens(
        m => M.lookup(E)(k, m),
        oa => m => {
          if (O.isNone(oa)) {
            return M.deleteAt(E)(k)(m)
          } else {
            return M.insertAt(E)(k, oa.value)(m)
          }
        },
      ),
  )
}

/**
 * `Index` optic for `Map` keys
 *
 * Inspired by `indexRecord` from `monocle-ts`:
 *
 * https://github.com/gcanti/monocle-ts/blob/master/src/Index/Record.ts
 */
export function indexMap<K, A = never>(E: Eq<K>): Index<Map<K, A>, K, A> {
  return Index.fromAt(atMap<K, A>(E))
}

/**
 * Combines update and insert. Takes a Traversal to some `B`, and a Lens to
 * an array of `B`s. Attempts to set the existing value to the given value, or
 * failing that appends it to the array.
 */
export const upsert = <A, B>(
  existing: Traversal<A, B>,
  list: Lens<A, Array<B>>,
) => (b: B) => (a: A) =>
  existing.asFold().getAll(a).length
    ? existing.set(b)(a)
    : list.modify(bs => snoc(bs, b))(a)
