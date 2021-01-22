"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  alterAt: true
};
exports.alterAt = void 0;

var _function = require("fp-ts/lib/function");

var M = _interopRequireWildcard(require("fp-ts/lib/Map"));

Object.keys(M).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === M[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return M[key];
    }
  });
});

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Allows removal, modification, or insertion of values into a map.
 *
 * The `alter` function is passed an `Option<A>` and returns an `Option<A>`,
 * so the cases are:
 *  in: `some`, out: `some` -> update
 *  in: `some`, out: `none` -> remove
 *  in: `none`, out: `some` -> insert
 *  in: `none`, out: `none` -> noop
 */
const alterAt = eq => (k, alter) => map => (0, _function.pipe)(map, M.lookup(eq)(k), alter, O.fold(() => M.deleteAt(eq)(k)(map), a => M.insertAt(eq)(k, a)(map)));

exports.alterAt = alterAt;