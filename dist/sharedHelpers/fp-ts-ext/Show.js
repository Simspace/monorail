"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  showUnknown: true
};
exports.showUnknown = void 0;

var RD = _interopRequireWildcard(require("@devexperts/remote-data-ts"));

var E = _interopRequireWildcard(require("fp-ts/lib/Either"));

var _function = require("fp-ts/lib/function");

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _pipeable = require("fp-ts/lib/pipeable");

var _Either2 = require("./Either");

var _Option2 = require("./Option");

var _typeGuards = require("../typeGuards");

var _Show = require("fp-ts/lib/Show");

Object.keys(_Show).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Show[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Show[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * This attempts to provide some useful output on most common (possibly
 * higher-kinded) types. Due to the nature of fp-ts, this can only handle types
 * it specifically knows about, which currently includes
 *
 * - Option
 * - Either
 * - RemoteData
 * - Function
 *
 * Everything else gets shoved into a string template, which will work for
 * native types and maybe even some others.
 *
 * This should probably only be used for debugging and nothing else.
 */
const showUnknown = {
  show: x => (0, _pipeable.pipe)(E.left(x), E.orElse((0, _function.flow)(E.fromPredicate(_Option2.isOption, _function.identity), E.map(O.getShow(showUnknown).show))), E.orElse((0, _function.flow)(E.fromPredicate(_Either2.isEither, _function.identity), E.map(E.getShow(showUnknown, showUnknown).show))), E.orElse((0, _function.flow)(E.fromPredicate(a => (0, _typeGuards.isObject)(a) && (0, _typeGuards.hasKey)(a, '_tag') && (a._tag === 'RemoteInitial' || a._tag === 'RemotePending' || a._tag === 'RemoteFailure' || a._tag === 'RemoteSuccess'), _function.identity), E.map(RD.getShow(showUnknown, showUnknown).show))), E.orElse((0, _function.flow)(E.fromPredicate(_typeGuards.isFunction, _function.identity), E.map(f => `${f.name || '\u03bb'}()`))), E.getOrElse(a => `${a}`))
};
exports.showUnknown = showUnknown;