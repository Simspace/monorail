"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  one: true,
  partitionBy: true
};
exports.partitionBy = exports.one = void 0;

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _pipeable = require("fp-ts/lib/pipeable");

var _Set = require("fp-ts/lib/Set");

Object.keys(_Set).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Set[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Set[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Returns one element of a set, or `none` if the set is empty.
 *
 * Strictly speaking this is roughly the same as `head`, since ES Sets are
 * actually OrderedSets.
 */
const one = ts => (0, _pipeable.pipe)(ts.values().next(), t => t.done ? O.none : O.some(t.value));
/**
 * Partitions a set of objects by the values of some property of that object.
 *
 * @example
 * const objs = new Set([{ foo: 1 }, { foo: 2 }, { foo: 1 }])
 * partitionBy('foo')(objs) => [Set([{foo: 1}, {foo:1}]), Set([{foo:2}])]
 */


exports.one = one;

const partitionBy = key => ts => (0, _pipeable.pipe)(ts, one, O.map(t => (0, _pipeable.pipe)(ts, (0, _Set.partition)(u => t[key] === u[key]), ({
  left,
  right
}) => [right, ...partitionBy(key)(left)])), O.getOrElse(() => []));

exports.partitionBy = partitionBy;