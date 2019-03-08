"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mkRecordKeyOptional = exports.mkArrayIndexOptional = exports.lensesFromRecord = exports.oLens = void 0;

var _monocleTs = require("monocle-ts");

var _Record = require("fp-ts/lib/Record");

var _Array = require("fp-ts/lib/Array");

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

/* tslint:disable:no-any */


exports.oLens = oLens;

/* tslint:enable:no-any */

/**
 * A function that generates monocle-ts Lenses for all top-level key-val pairs
 * when passed an object
 */
const lensesFromRecord = x => {
  const result = {};

  for (const k of Object.keys(x)) {
    result[k] = _monocleTs.Lens.fromProp()(k);
  }

  return result;
};
/**
 * Creates an Optional optic for a given index in some Array<A>
 */


exports.lensesFromRecord = lensesFromRecord;

const mkArrayIndexOptional = i => new _monocleTs.Optional(xs => (0, _Array.index)(i, xs), a => xs => (0, _Array.insertAt)(i, a, xs).fold(_Array.array.of(a), ys => (0, _Array.cons)(a, ys)));
/**
 * Creates an Optional optic for a given key K in some Record<K, A>
 */


exports.mkArrayIndexOptional = mkArrayIndexOptional;

const mkRecordKeyOptional = k => new _monocleTs.Optional(s => (0, _Record.lookup)(k, s), a => obj => (0, _Record.insert)(k, a, obj));

exports.mkRecordKeyOptional = mkRecordKeyOptional;