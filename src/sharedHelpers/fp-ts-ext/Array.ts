import * as Ap from 'fp-ts/lib/Apply'
import * as A from 'fp-ts/lib/Array'
import * as E from 'fp-ts/lib/Either'
import * as Eq from 'fp-ts/lib/Eq'
import {
  constFalse,
  constTrue,
  identity,
  Predicate,
  tuple,
} from 'fp-ts/lib/function'
import * as Mn from 'fp-ts/lib/Monoid'
import * as NEA from 'fp-ts/lib/NonEmptyArray'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import * as R from 'fp-ts/lib/Record'

import * as OExt from '@monorail/sharedHelpers/fp-ts-ext/Option'
import { isNotNil } from '@monorail/sharedHelpers/typeGuards'

export * from 'fp-ts/lib/Array'

// TODO: we should copy all these functions to ReadonlyArray (and change the types to ReadonlyArray), then alias those functions here.
// There is also likely some redundancy with some of these and what's available now that we are on fp-ts 2.

/**
 * Curried, pipeable version of concat. Note that the arguments are in order for use with `pipe`, so the argument order might seem backwards at first glance.
 * The first argument is passed as an object with the key of `suffix` to avoid misuse.
 *
 * The result is `prefix.concat(suffix)`
 *
 * @example
 * ```typescript
 * A.concat({ suffix: [1, 2] })([3, 4]) // [3,4,2,1]
 *
 * pipe(
 *   [1,2],
 *   A.concat({ suffix: [3, 4] })
 * ) // [1,2,3,4]
 * ```
 */
export const concat = <A>({ suffix }: { suffix: Array<A> }) => (
  prefix: Array<A>,
): Array<A> => prefix.concat(suffix)

/**
 * Curried, pipeable version of concat with arguments flipped for concatenating at the start of another Array. The result is prefix.concat(suffix).
 * The first argument is passed as an object with the key of `prefix` to avoid misuse.
 *
 * @example
 * ```typescript
 * A.precat({ prefix: [1, 2] })([3, 4]) // [1,2,3,4]
 *
 * pipe(
 *   [1,2],
 *   A.precat({ prefix: [3, 4] })
 * ) // [3,4,1,2]
 * ```
 */
export const precat = <A>({ prefix }: { prefix: Array<A> }) => (
  suffix: Array<A>,
): Array<A> => prefix.concat(suffix)

/**
 * Curried, pipeable version of `snoc` (aka append), for adding an item to the end of an Array
 */
export const append = <A>(x: A) => (xs: Array<A>): NEA.NonEmptyArray<A> =>
  A.snoc(xs, x)

/**
 * Curried, pipeable version of `cons`, for adding an item to the beginning of an Array
 */
export const prepend = <A>(x: A) => (xs: Array<A>): NEA.NonEmptyArray<A> =>
  A.cons(x, xs)

/**
 * Pipeable forEach. Runs an effect on each element of the input Array, then returns the input Array unchanged.
 */
export const forEach = <A>(f: (x: A) => void) => (xs: Array<A>): Array<A> => {
  xs.forEach(f)
  return xs
}

/**
 * Pipeable forEach with index. Runs an effect on each element of the input Array, then returns the Array unchanged.
 */
export const forEachWithIndex = <A>(f: (x: A, i: number) => void) => (
  xs: Array<A>,
): Array<A> => {
  xs.forEach(f)
  return xs
}

/**
 * Tests whether or not something is a member of an array via strict (===) equality
 */
export const elemWithEqStrict = <A>(x: A) => (xs: Array<A>): boolean =>
  A.elem<A>(Eq.eqStrict)(x, xs)

/**
 * Tests whether or not something is a member of an array based on the supplied Eq instance
 *
 * Same as base A.elem, but a more pipeable signature. Named `elemP` to disambiguate from base `elem`.
 */
export const elemP = <A>(eq: Eq.Eq<A>) => (x: A) => (xs: Array<A>): boolean =>
  A.elem<A>(eq)(x, xs)

/**
 * Returns true if any values from xs exist in ys
 * @param E the Eq insance that's used to compare
 */
export const elemAny = <A>(eq: Eq.Eq<A>) => (xs: Array<A>) => (
  ys: Array<A>,
): boolean => A.array.foldMap(Mn.monoidAny)(xs, x => elemP(eq)(x)(ys))

/**
 * Gets the length of an ArrayLike or string
 */
export const len = (xs: ArrayLike<unknown> | string): number => xs.length

/**
 * Lift a function of two arguments to a function which accepts and returns
 * those same values in the context of Options
 */
export const liftOption2 = <A, B, C>(f: (a: A) => (b: B) => C) => (
  oa: O.Option<A>,
) => (ob: O.Option<B>): O.Option<C> =>
  pipe(
    Ap.sequenceT(O.option)(oa, ob),
    O.map(([a, b]) => f(a)(b)),
  )

/**
 * Like `intersperse`, but takes a map function that returns the item to be
 * "interspersed" instead of directly taking the item itself
 */
export const intersperseMap = <A>(f: (a: A) => A) => (as: Array<A>) => {
  if (len(as) < 2) {
    return as
  } else {
    const initAs = A.init(as)
    const lastA = A.last(as)

    const result = liftOption2((init_: Array<A>) => (last_: A) => {
      const interspersedInit = A.array.chain(init_, x => tuple(x, f(x)))
      return A.snoc(interspersedInit, last_)
    })(initAs)(lastA)

    return O.getOrElse(() => as)(result)
  }
}

/**
 * An indexed version of `intersperseMap`-- adds an index to the map function
 */
export const intersperseMapWithIndex = <A>(f: (a: A, i: number) => A) => (
  as: Array<A>,
) => {
  if (len(as) < 2) {
    return as
  } else {
    const initAs = A.init(as)
    const lastA = A.last(as)

    const result = liftOption2((init_: Array<A>) => (last_: A) => {
      const pairs = A.array.mapWithIndex(init_, (i, x) => tuple(x, f(x, i)))
      const interspersedInit = A.flatten(pairs)
      return A.snoc(interspersedInit, last_)
    })(initAs)(lastA)

    return OExt.getOrElse(() => as)(result)
  }
}

/**
 * Variant of separate that returns the resulting arrays in a tuple
 */
export const separateT = <L, R>(
  eithers: Array<E.Either<L, R>>,
): [Array<L>, Array<R>] => {
  const { left, right } = A.separate(eithers)
  return [left, right]
}

/**
 * Returns a boolean indicating whether the specified predicate function
 * holds true for any element of an array.
 */
export const any = <A>(as: Array<A>, p: Predicate<A>) => {
  return as.some(p)
}

/**
 * Returns a boolean indicating whether the specified predicate function
 * holds true for all elements of an array.
 */
export const all = <A>(as: Array<A>, p: Predicate<A>) => {
  return as.every(p)
}

/**
 * Returns a boolean indicating whether the specified predicate function
 * holds true for no elements of an array.
 */
export const notAny = <A>(as: Array<A>, p: Predicate<A>) => {
  return !as.some(p)
}

/**
 * Returns an array of elements which are in both input arrays but not in their
 * intersection. Also known as symmetric difference or disjunctive union.
 */
export const xor = <A>(eq: Eq.Eq<A>) => (xs: Array<A>, ys: Array<A>) => [
  ...A.difference(eq)(xs, ys),
  ...A.difference(eq)(ys, xs),
]

/**
 * Returns an object made up of a keys from the result the accessor function
 */
export const arrayToRecord = <T, V>(
  keyAccessor: (curr: T) => string,
  mapValue?: (curr: T) => V,
) => (arr: Array<T>): Record<string, V> => {
  return arr.reduce((acc, curr) => {
    const key = keyAccessor(curr)
    const value = isNotNil(mapValue) ? mapValue(curr) : curr
    return pipe(
      R.lookup(key, acc),
      O.fold(
        () => ({ ...acc, [key]: value }),
        () => acc,
      ),
    )
  }, {})
}
/**
 * Checks if an array is *not* empty
 */
export const isNotEmpty = <T>(arr: Array<T>) => !A.isEmpty(arr)

/**
 * removes all occurences of an element from an Array
 * @param E equals instance for comapring elements in the array
 * @param t the value to remove
 */
export const without = <T>(eq: Eq.Eq<T>, t: T) => (xs: Array<T>): Array<T> =>
  xs.filter(x => !eq.equals(x, t))

/**
 * Converts an Option into an Array, if the Option is none,
 * an empty array will be returned,
 * if the option is some, and array with the value will be returned
 * @param o the Option to convert
 */
export const fromOption = <T>(o: O.Option<T>): Array<T> =>
  pipe(
    o,
    O.fold(
      () => [],
      v => [v],
    ),
  )

/**
 * Converts an Either into an Array, returning an empty array if the either
 * is Left, and an array of length one with the right value if the either
 * is Right
 * @param e the Either to convert
 */
export const fromEither = <L, R>(e: E.Either<L, R>): Array<R> =>
  pipe(
    e,
    E.fold(
      () => [],
      r => [r],
    ),
  )

/**
 * Adds or removes an item from an Array, depending on whether it's already in the Array
 */
export const toggle = <A>(eq: Eq.Eq<A>) => (a: A) => (as: Array<A>) =>
  (A.elem(eq)(a, as) ? A.difference : A.union)(eq)(as, [a])

/**
 * Calculates the run length encoding of an array. Given a sorted array, this is
 * equivalent to finding the counts of each entry.
 *
 * @example
 *
 * expect(rle(eqString)('aaabba'.split(''))).toEqual([
 *   ['a', 3], ['b', 2], ['a', 1]
 * ])
 */
export const rle = <A>(eq: Eq.Eq<A>) => (as: Array<A>): Array<[A, number]> =>
  pipe(
    as,
    A.reduce([] as Array<[A, number]>, (runLengths, next) =>
      pipe(
        A.last(runLengths),
        O.fold(
          () => [[next, 1]],
          ([prev, n]) =>
            eq.equals(prev, next)
              ? runLengths.slice(0, -1).concat([[prev, n + 1]])
              : runLengths.concat([[next, 1]]),
        ),
      ),
    ),
  )

type ExtractValues<T extends Array<Array<unknown>>> = {
  [K in keyof T]: T[K] extends Array<infer S> ? S : never
}

/**
 * Variadic zip with type inference.
 *
 * Note: fp-ts Array has a more naive zip function, but because this is better-typed,
 * we'll override the base `zip` function with this. If you want the base `zip`, you can import
 * it directly from `fp-ts/lib/Array`.
 *
 * @example
 * declare const ns: Array<number>
 * declare const ss: Array<string>
 * declare const bs: Array<boolean>
 * zip(ns, ns, ns) // :: Array<[number, number, number]>
 * zip(ss, ns) // :: Array<[string, number]>
 * zip(bs, ns, ss, ss) // :: Array<[boolean, number, string, string]>
 */
export const zip = <As extends Array<Array<unknown>>>(
  ...as: As
): Array<ExtractValues<As>> => {
  const res: Array<ExtractValues<As>> = []
  const l = as.length === 0 ? 0 : Math.min(...as.map(a => a.length))
  for (let i = 0; i < l; i++) {
    res[i] = as.map(a => a[i]) as ExtractValues<As>
  }
  return res
}

/**
 * Immutable, predicate-based splice
 */
export const spliceWhere = <A>(predicate: Predicate<A>) => (
  mapMatch: (a: A) => Array<A>,
  mapNotMatch: (a: A) => A = identity,
) => (arr: Array<A>): Array<A> =>
  pipe(
    arr,
    A.chain(a => (predicate(a) ? mapMatch(a) : [mapNotMatch(a)])),
  )

/**
 * Finds first element in an array for which `f` returns a `some`
 */
export const findFirstMapWithIndex = <A, B>(
  f: (i: number, a: A) => O.Option<B>,
) => (as: Array<A>): O.Option<B> => {
  const l = as.length
  for (let i = 0; i < l; i++) {
    const v = f(i, as[i])
    if (O.isSome(v)) {
      return v
    }
  }
  return O.none
}

/**
 * Array.compact that works on Array<Nullable> as opposed to Array<Option>
 * Does not affect falsey values
 * @param as
 */
export const compactNullable = <T>(as: Array<T>): Array<T> =>
  pipe(as, A.filter(isNotNil))
