/**
 * Create a union of values from a struct
 */
export declare type UnionFromStruct<S> = S[keyof S];
/** Recursively sets all fields of struct to optional */
export declare type DeepPartial<T extends Record<string, unknown>> = {
    [K in keyof T]?: T[K] extends Record<string, unknown> ? DeepPartial<T[K]> : T[K];
};
/**
 * Recursively merges the second argument into the first.
 * Only plain objects are merged, i.e. objects like `Array`
 * or `Date` will be overwritten rather than merged.
 *
 * **WARNING: Be wary of using this. fp-ts v2+ ADTs are plain object,
 * so they'll get merged, usually in ways you don't want.**
 *
 *
 * ```ts
 * const data = {
 *   one: {
 *     two: ['hello'],
 *     three: {
 *       four: 'goodbye'
 *     }
 *   }
 * }
 *
 * const actual1 = updateStruct(data, {
 *   one: { two: ['there'] }
 * })
 *
 * const actual2 = updateStruct(data, {
 *   one: { three: { four: 'adios' } }
 * })
 *
 * expect(actual1.one.two).toEqual(['there'])
 * expect(actual2.one.three.four).toEqual('adios')
 * ```
 */
export declare function deepMerge<T extends Record<string, unknown>>(struct: T, update: DeepPartial<T>): T;
