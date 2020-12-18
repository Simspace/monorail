"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepMerge = deepMerge;

/**
 * Create a union of values from a struct
 */

/** Recursively sets all fields of struct to optional */

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
function deepMerge(struct, update) {
  const next = { ...struct
  };

  for (const [key, val] of Object.entries(update)) {
    const originalVal = struct[key];
    next[key] = isRecord(originalVal) && isRecord(val) ? deepMerge(originalVal, val) : val;
  }

  return next;
}

function isRecord(u) {
  return typeof u === 'object' && u !== null && Object.getPrototypeOf(u) === Object.prototype;
}