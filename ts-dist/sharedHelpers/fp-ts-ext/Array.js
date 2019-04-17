import { liftA2 } from 'fp-ts/lib/Apply';
import { array, init, last, elem, snoc, sort } from 'fp-ts/lib/Array';
import { flatten } from 'fp-ts/lib/Chain';
import { either, isRight } from 'fp-ts/lib/Either';
import { constFalse, constTrue, tuple } from 'fp-ts/lib/function';
import { none, option, some } from 'fp-ts/lib/Option';
import { task } from 'fp-ts/lib/Task';
import { taskEither } from 'fp-ts/lib/TaskEither';
import { runIO } from './IO';
import { ordAlpha, ordNumeric } from './Ord';
import { getOrElse, fold } from './Option';
import { setoidStrict } from './Setoid';
/**
 * Curried version of fp-ts' `map` for Arrays
 */
export const map = (f) => (xs) => array.map(xs, f);
/**
 * Curried version of fp-ts' `concat`/'alt' for Arrays.
 */
export const concat = (xs) => (ys) => array.alt(xs, ys);
/**
 * Curried version of fp-ts' `concat` or `alt` for Arrays
 * with its arguments reversed
 */
export const concatFlipped = (xs) => (ys) => array.alt(xs, ys);
/**
 * Function wrapper around the native `array.forEach`
 */
export const forEach = (xs, f) => xs.forEach(f);
/**
 * Function wrapper around the native `array.forEach` including an index
 */
export const forEachWithIndex = (xs, f) => xs.forEach(f);
/**
 * Runs each IO<A> in an Array<IO<A>>, ignoring their return values
 */
export const runIOs = (xs) => forEach(xs, runIO);
/**
 * Tests whether or not something is a member of an array via strict equality
 */
export const contains = (x) => (xs) => elem(setoidStrict)(x, xs);
/**
 * Gets the length of an ArrayLike or string
 */
export const len = (xs) => xs.length;
/**
 * sequence utility for the Option instance of Applicative and the Array
 * instance of Traversable2v1
 */
export const sequenceOptions = array.sequence(option);
/**
 * sequence utility for the Either instance of Applicative and the Array
 * instance of Traversable2v1
 */
export const sequenceEithers = array.sequence(either);
/**
 * sequence utility for the Task instance of Applicative and the Array
 * instance of Traversable2v1
 */
export const sequenceTasks = array.sequence(task);
/**
 * sequence utility for the TaskEither instance of Applicative and the Array
 * instance of Traversable2v1
 */
export const sequenceTaskEithers = array.sequence(taskEither);
/**
 * traverse utility for the Option instance of Applicative and the Array
 * instance of Traversable2v1
 */
export const traverseOptions = array.traverse(option);
/**
 * traverse utility for the Either instance of Applicative and the Array
 * instance of Traversable2v1
 */
export const traverseEithers = array.traverse(either);
/**
 * traverse utility for the Task instance of Applicative and the Array
 * instance of Traversable2v1
 */
export const traverseTasks = array.traverse(task);
/**
 * traverse utility for the TaskEither instance of Applicative and the Array
 * instance of Traversable2v1
 */
export const traverseTaskEithers = array.traverse(taskEither);
/**
 * Gets both the Lefts and Rights from an Array of Eithers simultaneously
 */
export const leftsAndRights = (xs) => {
    const { left, right } = array.partition(xs, isRight);
    const getValue = (x) => x.value;
    const ls = array.map(left, getValue);
    const rs = array.map(right, getValue);
    return {
        lefts: ls,
        rights: rs,
    };
};
/**
 * Sorts an array of strings alphabetically
 */
export const sortByAlpha = sort(ordAlpha);
/**
 * Sorts an array of strings numerically
 */
export const sortByNumeric = sort(ordNumeric);
/**
 * Lift a function of two arguments to a function which accepts and returns
 * those same values in the context of Options
 */
export const liftOption2 = liftA2(option);
/**
 * Takes an element and a list and "intersperses", or "mixes in", that element
 * between the elements of the list
 */
export const intersperse = (a, as) => {
    if (len(as) < 2) {
        return as;
    }
    else {
        const initAs = init(as);
        const lastA = last(as);
        const result = liftOption2((init_) => (last_) => {
            const interspersedInit = array.chain(init_, x => tuple(x, a));
            return snoc(interspersedInit, last_);
        })(initAs)(lastA);
        return getOrElse(as)(result);
    }
};
/**
 * Like `intersperse`, but takes a map function that returns the item to be
 * "interspersed" instead of directly taking the item itself
 */
export const intersperseMap = (f, as) => {
    if (len(as) < 2) {
        return as;
    }
    else {
        const initAs = init(as);
        const lastA = last(as);
        const result = liftOption2((init_) => (last_) => {
            const interspersedInit = array.chain(init_, x => tuple(x, f(x)));
            return snoc(interspersedInit, last_);
        })(initAs)(lastA);
        return getOrElse(as)(result);
    }
};
/**
 * An indexed version of `intersperseMap`-- adds an index to the map function
 */
export const intersperseMapWithIndex = (f, as) => {
    if (len(as) < 2) {
        return as;
    }
    else {
        const initAs = init(as);
        const lastA = last(as);
        const result = liftOption2((init_) => (last_) => {
            const pairs = array.mapWithIndex(init_, (i, x) => tuple(x, f(x, i)));
            const interspersedInit = flatten(array)(pairs);
            return snoc(interspersedInit, last_);
        })(initAs)(lastA);
        return getOrElse(as)(result);
    }
};
/**
 * Returns a boolean indicating whether or not the specified predicate function
 * holds true for any element of an array.
 */
export const any = (as, p) => {
    const resultOpt = traverseOptions(as, a => (p(a) ? none : some(a)));
    return fold(resultOpt, true, constFalse);
};
/**
 * Returns a boolean indicating whether or not the specified predicate function
 * holds true for all elements of an array.
 */
export const all = (as, p) => {
    const resultOpt = traverseOptions(as, a => (p(a) ? some(a) : none));
    return fold(resultOpt, false, constTrue);
};
/**
 * Returns a boolean indicating whether or not the specified predicate function
 * holds true for no elements of an array.
 */
export const notAny = (as, p) => {
    const resultOpt = traverseOptions(as, a => (p(a) ? none : some(a)));
    return fold(resultOpt, false, constTrue);
};
//# sourceMappingURL=Array.js.map