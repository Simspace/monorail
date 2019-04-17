import { toArray } from 'fp-ts/lib/Foldable2v';
import { constTrue } from 'fp-ts/lib/function';
import { option, none, some } from 'fp-ts/lib/Option';
import { isFalsy, isNil } from '../typeGuards';
/**
 * type guard for Option
 */
// tslint:disable-next-line:no-any
export const isOption = (x) => !isNil(x) &&
    !isNil(x.isSome) &&
    !isNil(x.isNone) &&
    ((!isNil(x._tag) && x._tag === 'Some') || x._tag === 'None');
/**
 * Standalone version of fp-ts' `fold` for Options. Like `getOrElse`,
 * but with a mapping transformation for the value in a `Some`
 */
export const fold = (a, onNone, onSome) => a.fold(onNone, onSome);
/**
 * A specialized (partially applied with a null default) version of Option's
 * `fold` method that returns null when given a `None` or a `ReactNode` when
 * given a `Some`
 */
export const renderOnSome = (a, onSome) => fold(a, null, onSome);
/**
 * Curried version of fp-ts' `getOrElse`. Used to extract the value
 * from a Some or return a default value in place of a None. Also
 * known as `fromMaybe` in Haskell, PureScript, etc.
 */
export const getOrElse = (a) => (b) => b.getOrElse(a);
/**
 * Partially applied version of `getOrElse` providing an empty array
 * as the default argument
 */
export const getOrEmptyArray = (opt) => getOrElse([])(opt);
/**
 * Partially applied version of `getOrElse` providing an empty string
 * as the default argument
 */
export const getOrEmptyString = getOrElse('');
/**
 * Partially applied version of `getOrElse` providing the number zero
 * as the default argument
 */
export const getOrZero = getOrElse(0);
/**
 * Converts truthy/falsy values into Options, like `fromNullable` from
 * fp-ts, but converts all falsy values, instead of just null or undefined,
 * into Nones
 */
export const fromTruthyFalsy = (x) => isFalsy(x) ? none : some(x);
/**
 * Converts a None into false, and a Some<T> into a boolean
 */
export const toBoolean = (x) => fold(x, false, constTrue);
/**
 * Folds an option down into either an empty array or a single-element array containing
 * the value from within the Some. Useful in conjunction with the spread operator.
 */
export const toSpreadable = toArray(option);
//# sourceMappingURL=Option.js.map