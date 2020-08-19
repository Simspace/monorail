"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reduce = exports.isEmpty = exports.unsafeCoerceToArray = void 0;

var Array = _interopRequireWildcard(require("fp-ts/lib/Array"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Makes an unsafe type-cast of ReadonlyArray<A> to Array<A>
 */
const unsafeCoerceToArray = readonlyArray => readonlyArray;

exports.unsafeCoerceToArray = unsafeCoerceToArray;

const isEmpty = readonlyArray => readonlyArray.length === 0;

exports.isEmpty = isEmpty;
const reduce = Array.reduce;
exports.reduce = reduce;