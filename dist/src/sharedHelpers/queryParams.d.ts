import { Query } from 'history';
import * as Nea from 'fp-ts/lib/NonEmptyArray';
export declare type QueryParams = Record<string, Nea.NonEmptyArray<string>>;
declare type BadQueryParams = Query;
export declare const empty: QueryParams;
/**
 * Add one or more string values to the given field of an existing query params
 * object. If the key already exists, the provided values will be added to the
 * end. If the key doesn't exist, it will be added.
 *
 * If you want to add exactly one value, see `addSingleValue`. If you aren't
 * sure whether your array is non-empty, see `maybeAddValues`.
 *
 * @param key the query param field to be added or appended to
 * @param value the non-empty array of values to be added
 */
export declare const addValues: <K extends string = string>(key: K, value: Nea.NonEmptyArray<string>) => (query: QueryParams) => QueryParams;
/**
 * Given a string key and an array of string values, add all values to the given
 * query params object. If the key already exists in the provided object, the
 * new values will be concat'd on to the end. If the provided array is empty, no
 * change will be made (and the key will not be added).
 *
 * ```
 * maybeAddValues("foo", ["bar"])({}) === ({ foo: ["bar"]})
 * maybeAddValues("foo", [])({}) === ({})
 * maybeAddValues("foo", ["bar"])( foo: ["baz"]) === ({ foo: ["baz", "bar"]})
 * ```
 */
export declare const maybeAddValues: <K extends string = string>(key: K, value: Array<string>) => (query: QueryParams) => QueryParams;
/**
 * Add a single string value to a query params object, appending the value to
 * the end of the array if the key already exists, or creating a new key if
 * necessary.
 *
 * @param key the query param field to add to
 * @param value the single value to be added
 */
export declare const addStringValue: <K extends string = string>(key: K, value: string) => (query: QueryParams) => QueryParams;
/**
 * Given a `location.query` field from React Router, safely convert it to our
 * query params object. This handles the runtime type-checking so you don't have
 * to and deals with weirdness around null, undefined, and empty arrays.
 *
 * @param bad the `Query` object that comes from react-router's `location`
 */
export declare const fromReactRouter: (bad: BadQueryParams) => QueryParams;
/**
 * Convert a query param object into a string, ready to be appended to a URL.
 * The returned string is prefixed with `?` and each Record key/value is
 * separated by `&`.
 *
 * ```
 * toUrlString({ q: ["bar", "baz"], count: ["3"]]}) === '?q=bar&q=baz&count=3';
 * toUrlString({}) === '';
 * ```
 */
export declare const toUrlString: (query: QueryParams) => string;
export {};
