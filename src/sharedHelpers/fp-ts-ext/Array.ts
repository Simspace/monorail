import { liftA2 } from 'fp-ts/lib/Apply'
import { array, init, last, elem, snoc, sort } from 'fp-ts/lib/Array'
import { flatten } from 'fp-ts/lib/Chain'
import { Either, either, isRight } from 'fp-ts/lib/Either'
import { Predicate, constFalse, constTrue, tuple } from 'fp-ts/lib/function'
import { IO } from 'fp-ts/lib/IO'
import { none, option, some } from 'fp-ts/lib/Option'
import { setoidStrict } from './Setoid'
import { task } from 'fp-ts/lib/Task'
import { taskEither } from 'fp-ts/lib/TaskEither'

import { runIO } from './IO'
import { ordAlpha, ordNumeric } from './Ord'
import { getOrElse, fold } from './Option'

/**
 * Curried version of fp-ts' `map` for Arrays
 */
export const map = <A, B>(f: (x: A) => B) => (xs: A[]): B[] => array.map(xs, f)

/**
 * Curried version of fp-ts' `concat`/'alt' for Arrays.
 */
export const concat = <A>(xs: A[]) => (ys: A[]): A[] => array.alt(xs, ys)

/**
 * Curried version of fp-ts' `concat` or `alt` for Arrays
 * with its arguments reversed
 */
export const concatFlipped = <A>(xs: A[]) => (ys: A[]): A[] => array.alt(xs, ys)

/**
 * Function wrapper around the native `array.forEach`
 */
export const forEach = <A>(xs: A[], f: ((x: A) => void)) => xs.forEach(f)

/**
 * Function wrapper around the native `array.forEach` including an index
 */
export const forEachWithIndex = <A>(xs: A[], f: ((x: A, i: number) => void)) =>
  xs.forEach(f)

/**
 * Runs each IO<A> in an Array<IO<A>>, ignoring their return values
 */
export const runIOs = <A>(xs: Array<IO<A>>) => forEach(xs, runIO)

/**
 * Tests whether or not something is a member of an array via strict equality
 */
export const contains = <A>(x: A) => (xs: A[]): boolean =>
  elem<A>(setoidStrict)(x, xs)

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
  lefts: L[]
  rights: A[]
}

/**
 * Gets both the Lefts and Rights from an Array of Eithers simultaneously
 */
export const leftsAndRights = <L, A>(
  xs: Array<Either<L, A>>,
): LeftsAndRights<L, A> => {
  const { left, right } = array.partition(xs, isRight)
  const getValue = <L_, A_>(x: Either<L_, A_>) => x.value
  const ls = array.map(left, getValue) as L[]
  const rs = array.map(right, getValue) as A[]
  return {
    lefts: ls,
    rights: rs,
  }
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
export const liftOption2 = liftA2(option)

/**
 * Takes an element and a list and "intersperses", or "mixes in", that element
 * between the elements of the list
 */
export const intersperse = <A>(a: A, as: A[]) => {
  if (len(as) < 2) {
    return as
  } else {
    const initAs = init(as)
    const lastA = last(as)

    const result = liftOption2((init_: A[]) => (last_: A) => {
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
export const intersperseMap = <A>(f: (a: A) => A, as: A[]) => {
  if (len(as) < 2) {
    return as
  } else {
    const initAs = init(as)
    const lastA = last(as)

    const result = liftOption2((init_: A[]) => (last_: A) => {
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
  as: A[],
) => {
  if (len(as) < 2) {
    return as
  } else {
    const initAs = init(as)
    const lastA = last(as)

    const result = liftOption2((init_: A[]) => (last_: A) => {
      const pairs = array.mapWithIndex(init_, (i, x) => tuple(x, f(x, i)))
      const interspersedInit = flatten(array)(pairs)
      return snoc(interspersedInit, last_)
    })(initAs)(lastA)

    return getOrElse(as)(result)
  }
}

/**
 * Returns a boolean indicating whether or not the specified predicate function
 * holds true for any element of an array.
 */
export const any = <A>(as: A[], p: Predicate<A>) => {
  const resultOpt = traverseOptions(as, a => (p(a) ? none : some(a)))
  return fold(resultOpt, true, constFalse)
}

/**
 * Returns a boolean indicating whether or not the specified predicate function
 * holds true for all elements of an array.
 */
export const all = <A>(as: A[], p: Predicate<A>) => {
  const resultOpt = traverseOptions(as, a => (p(a) ? some(a) : none))
  return fold(resultOpt, false, constTrue)
}

/**
 * Returns a boolean indicating whether or not the specified predicate function
 * holds true for no elements of an array.
 */
export const notAny = <A>(as: A[], p: Predicate<A>) => {
  const resultOpt = traverseOptions(as, a => (p(a) ? none : some(a)))
  return fold(resultOpt, false, constTrue)
}
