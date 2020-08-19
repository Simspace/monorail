"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStruct = updateStruct;

/**
 * Create a union of values from a struct
 */

/** Recursively sets all fields of struct to optional */

/**
 * Updates `struct` with `update` via a deep merge.
 * Only plain objects are merged, i.e. objects like `Array`
 * or `Date` will merely be overwritten rather than merged
 * with the new value.
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
function updateStruct(struct, update) {
  const next = { ...struct
  };

  for (const [key, val] of Object.entries(update)) {
    const originalVal = struct[key];
    next[key] = isRecord(originalVal) && isRecord(val) ? updateStruct(originalVal, val) : val;
  }

  return next;
}

function isRecord(u) {
  return typeof u === 'object' && u !== null && Object.getPrototypeOf(u) === Object.prototype;
}