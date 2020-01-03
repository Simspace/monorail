import { Option } from 'fp-ts/lib/Option';
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
export declare const findIndex: (substring: string) => (xs: string) => Option<number>;
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
export declare function join<T>(separator: string, arr: Array<T>): string;
export declare const truncate: (maxLength: number) => (value: string) => string;
export declare const includes: (target: string) => (source: string) => boolean;
export declare const includesNoncase: (target: string) => (source: string) => boolean;
export declare const capitalizeFirstLetter: (str: string) => string;
