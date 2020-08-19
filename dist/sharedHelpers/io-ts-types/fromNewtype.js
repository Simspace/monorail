"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromNewtype = fromNewtype;

var _Either = require("fp-ts/lib/Either");

var t = _interopRequireWildcard(require("io-ts"));

var _newtypeTs = require("newtype-ts");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * A utility for generating an `io-ts` `Codec` from a `newtype-ts` `Newtype`.
 *
 * Taken from the most recent version of `io-ts-types`, which we are currently
 * unable to upgrade to.
 *
 * Later, after upgrading, switch to the following import:

 * `import { fromNewtype } from 'io-ts-types/lib/fromNewtype'`
 *
 * See: https://github.com/gcanti/io-ts-types/blob/master/src/fromNewtype.ts
 * 
 * Original documentation below:
 * 
 * Returns a codec from a newtype
 *
 * @example
 * import { fromNewtype } from 'io-ts-types/lib/fromNewtype'
 * import * as t from 'io-ts'
 * import { right } from 'fp-ts/lib/Either'
 * import { PathReporter } from 'io-ts/lib/PathReporter'
 * import { Newtype, iso } from 'newtype-ts'
 *
 * interface Token extends Newtype<{ readonly Token: unique symbol }, string> {}
 *
 * const T = fromNewtype<Token>(t.string)
 *
 * assert.deepStrictEqual(T.decode('sometoken'), right(iso<Token>().wrap('sometoken')))
 * assert.deepStrictEqual(PathReporter.report(T.decode(42)), ['Invalid value 42 supplied to : fromNewtype(string)'])
 *
 * @since 0.5.2
 */
function fromNewtype(codec, name = `fromNewtype(${codec.name})`) {
  const i = (0, _newtypeTs.iso)();
  return new t.Type(name, u => codec.is(u), (u, c) => _Either.either.map(codec.validate(u, c), i.wrap), a => codec.encode(i.unwrap(a)));
}