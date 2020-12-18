"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showUnknown = void 0;

var _fpTsImports = require("../fp-ts-imports");

var _Either = require("./Either");

var _Option = require("./Option");

var _typeGuards = require("../typeGuards");

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
  show: x => (0, _fpTsImports.pipe)(_fpTsImports.E.left(x), _fpTsImports.E.orElse((0, _fpTsImports.flow)(_fpTsImports.E.fromPredicate(_Option.isOption, _fpTsImports.identity), _fpTsImports.E.map(_fpTsImports.O.getShow(showUnknown).show))), _fpTsImports.E.orElse((0, _fpTsImports.flow)(_fpTsImports.E.fromPredicate(_Either.isEither, _fpTsImports.identity), _fpTsImports.E.map(_fpTsImports.E.getShow(showUnknown, showUnknown).show))), _fpTsImports.E.orElse((0, _fpTsImports.flow)(_fpTsImports.E.fromPredicate(a => (0, _typeGuards.isObject)(a) && (0, _typeGuards.hasKey)(a, '_tag') && (a._tag === 'RemoteInitial' || a._tag === 'RemotePending' || a._tag === 'RemoteFailure' || a._tag === 'RemoteSuccess'), _fpTsImports.identity), _fpTsImports.E.map(_fpTsImports.RD.getShow(showUnknown, showUnknown).show))), _fpTsImports.E.orElse((0, _fpTsImports.flow)(_fpTsImports.E.fromPredicate(_typeGuards.isFunction, _fpTsImports.identity), _fpTsImports.E.map(f => `${f.name || '\u03bb'}()`))), _fpTsImports.E.getOrElse(a => `${a}`))
};
exports.showUnknown = showUnknown;