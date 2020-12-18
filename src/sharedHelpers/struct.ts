/**
 * Create a union of values from a struct
 */

export type UnionFromStruct<S> = S[keyof S]

/** Recursively sets all fields of struct to optional */
export type DeepPartial<T extends Record<string, unknown>> = {
  [K in keyof T]?: T[K] extends Record<string, unknown>
    ? DeepPartial<T[K]>
    : T[K]
}

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
export function deepMerge<T extends Record<string, unknown>>(
  struct: T,
  update: DeepPartial<T>,
): T {
  const next: Record<string, unknown> = { ...struct }
  for (const [key, val] of Object.entries(update)) {
    const originalVal = struct[key]
    next[key] =
      isRecord(originalVal) && isRecord(val) ? deepMerge(originalVal, val) : val
  }
  return next as T
}

function isRecord(u: unknown): u is Record<string, unknown> {
  return (
    typeof u === 'object' &&
    u !== null &&
    Object.getPrototypeOf(u) === Object.prototype
  )
}
