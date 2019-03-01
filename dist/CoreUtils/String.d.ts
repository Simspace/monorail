import { Option } from 'fp-ts/lib/Option';
import { Ord } from 'fp-ts/lib/Ord';
import { Ordering } from 'fp-ts/lib/Ordering';
/**
 * Given a string or RegExp separator and a string, splits a string into an
 * array of strings
 */
export declare const split: (sep: string | RegExp) => (xs: string) => string[];
/**
 * Translates a space separated name string into a first & last name record
 */
export declare const splitName: (name: string) => Record<"first" | "last", string>;
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
 * Converts all alphabetic characters to lowercase, taking into account the
 * host environment's current locale.
 */
export declare const toLocaleLower: (x: string) => string;
/**
 * Determines ordering of two strings (alphabetic comparison)
 */
export declare const alphaCompare: (x: string, y: string) => Ordering;
/**
 * Ord instance for string
 */
export declare const ordAlpha: Ord<string>;
/**
 * Takes a string and removes the spaces at the end of strings
 */
export declare function trim(str: string): string;
export declare function join(separator: string, arr: Array<any>): string;
