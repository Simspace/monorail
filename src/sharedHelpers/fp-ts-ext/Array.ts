import { O } from '@monorail/sharedHelpers/fp-ts-imports'
import { remoteData } from '@devexperts/remote-data-ts'
import { sequenceT } from 'fp-ts/lib/Apply'
import {
  array,
  difference,
  elem,
  flatten,
  init,
  isEmpty,
  last,
  reduce,
  snoc,
  sort,
  union,
} from 'fp-ts/lib/Array'
import { Either, either, isRight, fold } from 'fp-ts/lib/Either'
import { Eq } from 'fp-ts/lib/Eq'
import { constFalse, constTrue, Predicate, tuple } from 'fp-ts/lib/function'
import { pipe } from 'fp-ts/lib/pipeable'
import { IO } from 'fp-ts/lib/IO'
import { none, option, some, Option } from 'fp-ts/lib/Option'
import { lookup } from 'fp-ts/lib/Record'
import { task } from 'fp-ts/lib/Task'
import { taskEither } from 'fp-ts/lib/TaskEither'

import { isNotNil } from '../typeGuards'

import { runIO } from './IO'
import { getOrElse } from './Option'
import { ordAlpha, ordNumeric } from './Ord'
import { eqStrict } from './Eq'
import { monoidAny } from 'fp-ts/lib/Monoid'
import { identity } from 'lodash'

/**
 * Curried version of fp-ts' `map` for Arrays
 */
export const map = <A, B>(f: (x: A) => B) => (xs: Array<A>): Array<B> =>
  array.map(xs, f)

/**
 * Curried version of fp-ts' `concat`/'alt' for Arrays.
 */
export const concat = <A>(xs: Array<A>) => (ys: Array<A>): Array<A> =>
  array.alt(xs, () => ys)

/**
 * Curried version of fp-ts' `concat` or `alt` for Arrays
 * with its arguments reversed
 */
export const concatFlipped = <A>(xs: Array<A>) => (ys: Array<A>): Array<A> =>
  array.alt(xs, () => ys)

/**
 * Function wrapper around the native `array.forEach`
 */
export const forEach = <A>(xs: Array<A>, f: (x: A) => void) => xs.forEach(f)

/**
 * Function wrapper around the native `array.forEach` including an index
 */
export const forEachWithIndex = <A>(
  xs: Array<A>,
  f: (x: A, i: number) => void,
) => xs.forEach(f)

/**
 * Runs each IO<A> in an Array<IO<A>>, ignoring their return values
 */
export const runIOs = <A>(xs: Array<IO<A>>) => forEach(xs, runIO)

/**
 * Tests whether or not something is a member of an array via strict equality
 */
export const contains = <A>(x: A) => (xs: Array<A>): boolean =>
  elem<A>(eqStrict)(x, xs)

/**
 * Tests whether or not something is a member of an array based on the supplied Eq instance
 */
export const containsEq = <A>(eq: Eq<A>) => (x: A) => (xs: Array<A>): boolean =>
  elem<A>(eq)(x, xs)

/**
 * Returns true if any values from xs exist in ys
 * @param E the Eq insance that's used to compare
 */
export const containsAny = <A>(eq: Eq<A>) => (xs: Array<A>) => (
  ys: Array<A>,
): boolean => array.foldMap(monoidAny)(xs, x => containsEq(eq)(x)(ys))

/**
 * Gets the length of an ArrayLike or string
 */
export const len = (xs: ArrayLike<unknown> | string): number => xs.length

/**
 * sequence utility for the Option instance of Applicative and the Array
 * instance of Traversable2v1
 */
export const sequenceOptions = array.sequence(option)

/**
 * sequence utility for the Either instance of Applicative and the Array
 * instance of Traversable2v1
 */
export const sequenceEithers = array.sequence(either)

/**
 * sequence utility for the Task instance of Applicative and the Array
 * instance of Traversable2v1
 */
export const sequenceTasks = array.sequence(task)

/**
 * sequence utility for the TaskEither instance of Applicative and the Array
 * instance of Traversable2v1
 */
export const sequenceTaskEithers = array.sequence(taskEither)

/**
 * sequence utility for the RemoteData instance of Applicative and the Array
 * instance of Traversable2v1
 */
export const sequenceRemoteData = array.sequence(remoteData)

/**
 * traverse utility for the Option instance of Applicative and the Array
 * instance of Traversable2v1
 */
export const traverseOptions = array.traverse(option)

/**
 * traverse utility for the Either instance of Applicative and the Array
 * instance of Traversable2v1
 */
export const traverseEithers = array.traverse(either)

/**
 * traverse utility for the Task instance of Applicative and the Array
 * instance of Traversable2v1
 */
export const traverseTasks = array.traverse(task)

/**
 * traverse utility for the TaskEither instance of Applicative and the Array
 * instance of Traversable2v1
 */
export const traverseTaskEithers = array.traverse(taskEither)

/**
 * Type representing the Left and Right values of an Array of Eithers
 */
export interface LeftsAndRights<L, A> {
  lefts: Array<L>
  rights: Array<A>
}

/**
 * Gets both the Lefts and Rights from an Array of Eithers simultaneously
 */
export const leftsAndRights = <L, A>(
  xs: Array<Either<L, A>>,
): LeftsAndRights<L, A> => {
  const { left, right } = array.partition(xs, isRight)
  const getValue = <L_, A_>(x: Either<L_, A_>) =>
    pipe(x, fold<L_, A_, L_ | A_>(identity, identity))
  const ls = array.map(left, getValue) as Array<L>
  const rs = array.map(right, getValue) as Array<A>
  return {
    lefts: ls,
    rights: rs,
  }
}

/**
 * Splits an Array of eithers using {@link leftsAndRights},
 * but wraps it in a tuple for easier renaming
 * @param xs the array of Eithers to split
 */
export const splitEithers = <L, R>(
  xs: Array<Either<L, R>>,
): [Array<L>, Array<R>] => {
  const { lefts, rights } = leftsAndRights(xs)
  return [lefts, rights]
}

/**
 * Sorts an array of strings alphabetically
 */
export const sortByAlpha = sort(ordAlpha)

/**
 * Sorts an array of strings numerically
 */
export const sortByNumeric = sort(ordNumeric)

/**
 * Lift a function of two arguments to a function which accepts and returns
 * those same values in the context of Options
 */
export const liftOption2 = <A, B, C>(f: (a: A) => (b: B) => C) => (
  oa: Option<A>,
) => (ob: Option<B>): Option<C> =>
  pipe(
    sequenceT(O.option)(oa, ob),
    O.map(([a, b]) => f(a)(b)),
  )

/**
 * Takes an element and a list and "intersperses", or "mixes in", that element
 * between the elements of the list
 */
export const intersperse = <A>(a: A, as: Array<A>) => {
  if (len(as) < 2) {
    return as
  } else {
    const initAs = init(as)
    const lastA = last(as)

    const result = liftOption2((init_: Array<A>) => (last_: A) => {
      const interspersedInit = array.chain(init_, x => tuple(x, a))
      return snoc(interspersedInit, last_)
    })(initAs)(lastA)

    return getOrElse(as)(result)
  }
}

/**
 * Like `intersperse`, but takes a map function that returns the item to be
 * "interspersed" instead of directly taking the item itself
 */
export const intersperseMap = <A>(f: (a: A) => A, as: Array<A>) => {
  if (len(as) < 2) {
    return as
  } else {
    const initAs = init(as)
    const lastA = last(as)

    const result = liftOption2((init_: Array<A>) => (last_: A) => {
      const interspersedInit = array.chain(init_, x => tuple(x, f(x)))
      return snoc(interspersedInit, last_)
    })(initAs)(lastA)

    return getOrElse(as)(result)
  }
}

/**
 * An indexed version of `intersperseMap`-- adds an index to the map function
 */
export const intersperseMapWithIndex = <A>(
  f: (a: A, i: number) => A,
  as: Array<A>,
) => {
  if (len(as) < 2) {
    return as
  } else {
    const initAs = init(as)
    const lastA = last(as)

    const result = liftOption2((init_: Array<A>) => (last_: A) => {
      const pairs = array.mapWithIndex(init_, (i, x) => tuple(x, f(x, i)))
      const interspersedInit = flatten(pairs)
      return snoc(interspersedInit, last_)
    })(initAs)(lastA)

    return getOrElse(as)(result)
  }
}

/**
 * Returns a boolean indicating whether or not the specified predicate function
 * holds true for any element of an array.
 */
export const any = <A>(as: Array<A>, p: Predicate<A>) => {
  const resultOpt = traverseOptions(as, a => (p(a) ? none : some(a)))
  return O.fold(constTrue, constFalse)(resultOpt)
}

/**
 * Returns a boolean indicating whether or not the specified predicate function
 * holds true for all elements of an array.
 */
export const all = <A>(as: Array<A>, p: Predicate<A>) => {
  const resultOpt = traverseOptions(as, a => (p(a) ? some(a) : none))
  return O.fold(constFalse, constTrue)(resultOpt)
}

/**
 * Returns a boolean indicating whether or not the specified predicate function
 * holds true for no elements of an array.
 */
export const notAny = <A>(as: Array<A>, p: Predicate<A>) => {
  const resultOpt = traverseOptions(as, a => (p(a) ? none : some(a)))
  return O.fold(constFalse, constTrue)(resultOpt)
}

/**
 * Returns an array of elements which are in both input arrays but not in their
 * intersection. Also known as symmetric difference or disjunctive union.
 */
export const xor = <A>(eq: Eq<A>) => (xs: Array<A>, ys: Array<A>) => [
  ...difference(eq)(xs, ys),
  ...difference(eq)(ys, xs),
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
      lookup(key, acc),
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
export const isNotEmpty = <T>(arr: Array<T>) => !isEmpty(arr)

/**
 * removes all occurences of an element from an Array
 * @param E equals instance for comapring elements in the array
 * @param t the value to remove
 */
export const without = <T>(eq: Eq<T>, t: T) => (xs: Array<T>): Array<T> =>
  xs.filter(x => !eq.equals(x, t))

/**
 * Converts an Option into an Array, if the Option is none,
 * an empty array will be returned,
 * if the option is some, and array with the value will be returned
 * @param o the Option to convert
 */
export const fromOption = <T>(o: Option<T>): Array<T> =>
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
export const fromEither = <L, R>(e: Either<L, R>): Array<R> =>
  pipe(
    e,
    fold(
      () => [],
      r => [r],
    ),
  )

export const toggle = <A>(eq: Eq<A>) => (a: A) => (as: Array<A>) =>
  (elem(eq)(a, as) ? difference : union)(eq)(as, [a])

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
export const rle = <A>(eq: Eq<A>) => (as: Array<A>): Array<[A, number]> =>
  pipe(
    as,
    reduce([] as Array<[A, number]>, (runLengths, next) =>
      pipe(
        last(runLengths),
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
