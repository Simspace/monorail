"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.atMap = atMap;
exports.indexMap = indexMap;
exports.upsert = exports.mkRecordKeyOptional = exports.mkArrayIndexOptional = exports.lensesFromRecord = exports.oLens = void 0;

var _monocleTs = require("monocle-ts");

var _Array = require("fp-ts/lib/Array");

var _function = require("fp-ts/lib/function");

var M = _interopRequireWildcard(require("fp-ts/lib/Map"));

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _Record = require("fp-ts/lib/Record");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Binary composition for lenses (`monocle-ts`)
 *
 * NOTE: This may feel like backwards (left-to-right) composition,
 * but it's not. Think of it as composing "focusers" instead of "accessors"
 */
const oLens = (f, g) => f.compose(g);
/**
 * Helper that extracts the S type from a Lens<S, A>
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any


exports.oLens = oLens;

/**
 * A function that generates monocle-ts Lenses for all top-level key-val pairs
 * when passed an object
 */
const lensesFromRecord = x => {
  let result = {};

  for (const k of Object.keys(x)) {
    result = (0, _Record.insertAt)(k, _monocleTs.Lens.fromProp()(k))(result);
  }

  return result;
};
/**
 * Creates an Optional optic for a given index in some Array<A>
 */


exports.lensesFromRecord = lensesFromRecord;

const mkArrayIndexOptional = i => new _monocleTs.Optional((0, _Array.lookup)(i), a => xs => (0, _function.pipe)(xs, (0, _Array.updateAt)(i, a), O.fold(() => _Array.array.of(a), ys => (0, _Array.cons)(a, ys))));
/**
 * Creates an Optional optic for a given key K in some Record<K, A>
 *
 * TODO: Consider rewriting this in a different way
 */


exports.mkArrayIndexOptional = mkArrayIndexOptional;

const mkRecordKeyOptional = k => new _monocleTs.Optional(s => (0, _Record.lookup)(k, s), a => obj => (0, _Record.insertAt)(k, a)(obj));
/**
 * `At` optic for `Map` keys
 *
 * Inspired by `atRecord` from `monocle-ts`:
 *
 * https://github.com/gcanti/monocle-ts/blob/master/src/At/Record.ts
 */


exports.mkRecordKeyOptional = mkRecordKeyOptional;

function atMap(E) {
  return new _monocleTs.At(k => new _monocleTs.Lens(m => M.lookup(E)(k, m), oa => m => {
    if (O.isNone(oa)) {
      return M.deleteAt(E)(k)(m);
    } else {
      return M.insertAt(E)(k, oa.value)(m);
    }
  }));
}
/**
 * `Index` optic for `Map` keys
 *
 * Inspired by `indexRecord` from `monocle-ts`:
 *
 * https://github.com/gcanti/monocle-ts/blob/master/src/Index/Record.ts
 */


function indexMap(E) {
  return _monocleTs.Index.fromAt(atMap(E));
}
/**
 * Combines update and insert. Takes a Traversal to some `B`, and a Lens to
 * an array of `B`s. Attempts to set the existing value to the given value, or
 * failing that appends it to the array.
 */


const upsert = (existing, list) => b => a => existing.asFold().getAll(a).length ? existing.set(b)(a) : list.modify(bs => (0, _Array.snoc)(bs, b))(a);

exports.upsert = upsert;