"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optionC = void 0;

var t = _interopRequireWildcard(require("io-ts"));

var E = _interopRequireWildcard(require("fp-ts/lib/Either"));

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _pipeable = require("fp-ts/lib/pipeable");

var _Option2 = require("../fp-ts-ext/Option");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Codec for converting null or undefined members to/from Option
 * @param typeC
 */
const optionC = typeC => new t.Type(`Option<${typeC.name}>`, input => (0, _Option2.isOption)(input) && (0, _pipeable.pipe)(input, O.fold(() => true, typeC.is)), (input, context) => (0, _pipeable.pipe)(O.fromNullable(input), (0, _Option2.opTraverse)(E.either)(typeC.decode)), O.fold(() => null, typeC.encode));

exports.optionC = optionC;