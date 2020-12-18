import * as O from 'fp-ts/lib/Option';
/**
 * Given a string or RegExp separator and a string, splits a string into an
 * array of strings
 */
export declare const split: (sep: string | RegExp) => (xs: string) => string[];
/**
 * Replaces text in a string, using an object that supports replacement within a string.
 */
export declare const replace: (searchValue: {
    [Symbol.replace](string: string, replaceValue: string): string;
}, replaceValue: string) => (xs: string) => string;
/**
 * Translates a space separated name string into a first & last name record
 */
export declare const splitName: (name: string) => {
    first: string;
    last: string;
};
/**
 * Returns the position of the first occurrence of a substring wrapped in a Some
 * or returns a None if the substring is not found
 */
export declare const findIndex: (substring: string) => (xs: string) => O.Option<number>;
/**
 * Converts all the alphabetic characters in a string to lowercase.
 */
export declare const toLower: (x: string) => string;
/**
 * Converts all alphabetic characters to local lower case
 */
export declare const toLocaleLower: (target: string) => string;
/**
 * Takes a string and removes the spaces at the end of strings
 */
export declare function trim(str: string): string;
/**
 * Find and remove all space characters within a string. This may be useful for
 * filtering numeric text (given some user input) where spaces don't matter.
 *
 * includesNoncase(removeSpaces('2/10'))(removeSpaces('2 / 10')) // true
 */
export declare function removeSpaces(str: string): string;
export declare function join<T>(separator: string, arr: Array<T>): string;
export declare function join<T>(separator: string): (arr: Array<T>) => string;
export declare const truncate: (maxLength: number) => (value: string) => string;
export declare const includes: (target: string) => (source: string) => boolean;
export declare const includesNoncase: (target: string) => (source: string) => boolean;
export declare const capitalizeFirstLetter: (str: string) => string;
export declare const capitalizeWords: (str: string) => string;
export declare const startsWithNonCase: (target: string) => (source: string) => boolean;
export declare const words: (str: string) => Array<string>;
export declare const unwords: (str: Array<string>) => string;
export declare const titleCase: (str: string) => string;
export declare const camelCaseToTitleCase: (str: string) => string;
export declare const addTrailingSlash: (path: string) => string;
export declare const take: (n: number) => (s: string) => string;
/**
 * Removes the leading {@param n} characters from the supplied string
 * @param n the amount of characters to drop
 */
export declare const drop: (n: number) => (s: string) => string;
/**
 * Returns a string that contains `input` concatenated back-to-back `n` times
 */
export declare const repeat: (n: number) => (input: string) => string;
/**
 * Adds padding to the start of a string to reach a `targetLength`
 */
export declare const padStart: (targetLength: number, padWith: string) => (input: string) => string;
/**
 * Splits a string at a given index
 *
 * @example
 * ```ts
 * const [before, after] = "aadd".splitAt(2)
 *
 * before // "aa"
 * after // "dd"
 * ```
 *
 * @param n the index to split the string at
 */
export declare const splitAt: (n: number) => (s: string) => [string, string];
/**
 * A safe version of `parseInt` that provides a default radix of `10`,
 * and checks to see if the result is NaN. Returns `None` if the result is NaN.
 */
export declare const safeParseInt: (str: string, radix?: number) => O.Option<number>;
export declare const elemLocaleLowerCase: (needle: string) => (haystack: string) => boolean;
/**
 * Patially matches any string value, returning None if a match is not found
 *
 * @example
 *
 * ```ts
 * pipe(
 *   'foo',
 *   matchStringP({
 *     foo: () => 'Hello',
 *     bar: () => 'World'
 *   })
 * ) // Some('Hello')
 * ```
 *
 * ```ts
 * pipe(
 *   'asdf',
 *   matchStringP({
 *     foo: () => 'Hello',
 *     bar: () => 'World'
 *   })
 * ) // None
 * ```
 */
export declare const matchStringP: <Out>(matchObj: Record<string, () => Out>) => (s: string) => O.Option<Out>;
