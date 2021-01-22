"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  getUndefinableEq: true,
  eqStringByLowerCase: true,
  getEqStrict: true,
  eqShallow: true,
  getEqShallow: true,
  recordWithNameLowerEquality: true,
  eqRecordWithNameLower: true
};
exports.eqRecordWithNameLower = exports.recordWithNameLowerEquality = exports.getEqShallow = exports.eqShallow = exports.getEqStrict = exports.eqStringByLowerCase = exports.getUndefinableEq = void 0;

var Eq = _interopRequireWildcard(require("fp-ts/lib/Eq"));

Object.keys(Eq).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === Eq[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return Eq[key];
    }
  });
});

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _pipeable = require("fp-ts/lib/pipeable");

var _shallowEqual = require("../shallowEqual");

var _strings = require("../strings");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const getUndefinableEq = eq => ({
  equals: (a, b) => O.getEq(eq).equals(O.fromNullable(a), O.fromNullable(b))
});
/**
 * Case insensitive Eq instance for strings
 *
 * TODO: we have a similar ordStringByLocaleLowerCase function which uses toLocaleLowerCase instead
 */


exports.getUndefinableEq = getUndefinableEq;
const eqStringByLowerCase = (0, _pipeable.pipe)(Eq.eqString, Eq.contramap(s => s.toLowerCase()));
/**
 * Function that returns a generic eq that uses strict equality checking
 *
 * NOTE: This only exists in case you need to explicitly provide a generic
 */

exports.eqStringByLowerCase = eqStringByLowerCase;

const getEqStrict = () => Eq.eqStrict;
/**
 * Generic eq that uses shallow equality checking
 */


exports.getEqStrict = getEqStrict;
const eqShallow = {
  equals: _shallowEqual.shallowEqual
};
/**
 * Function that returns a generic eq that uses shallow equality checking
 *
 * NOTE: This only exists in case you need to explicitly provide a generic
 */

exports.eqShallow = eqShallow;

const getEqShallow = () => eqShallow;
/**
 * Equality checker for RecordWithName, comparing lowercase names
 */


exports.getEqShallow = getEqShallow;

const recordWithNameLowerEquality = (a, b) => (0, _strings.toLower)(a.name) === (0, _strings.toLower)(b.name);
/**
 * Eq for RecordWithName using recordWithNameLowerEquality
 */


exports.recordWithNameLowerEquality = recordWithNameLowerEquality;
const eqRecordWithNameLower = {
  equals: recordWithNameLowerEquality
};
exports.eqRecordWithNameLower = eqRecordWithNameLower;