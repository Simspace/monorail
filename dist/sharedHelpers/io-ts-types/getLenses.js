"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLenses = getLenses;

var _monocleTs = require("monocle-ts");

function getProps(codec) {
  switch (codec._tag) {
    case 'InterfaceType':
      // tslint:disable-next-line no-unsafe-any
      return codec.props;

    case 'ExactType':
      return getProps(codec.type);
  }
} // tslint:disable-next-line no-any


const fromProp = _monocleTs.Lens.fromProp();
/**
 * A utility for generating lenses from an `io-ts` `Codec`.
 *
 * Taken from the most recent version of `io-ts-types`, which we are currently
 * unable to upgrade to.
 *
 * See: https://github.com/gcanti/io-ts-types/blob/master/src/getLenses.ts
 *
 *  Later, after upgrading, switch to the following import:
 *
 * `import { fromNewtype } from 'io-ts-types/lib/fromNewtype'`
 *
 * Original documentation below:
 *
 * Return a `Lens` for each prop
 *
 * @example
 * import * as t from 'io-ts'
 * import { getLenses } from 'io-ts-types/lib/getLenses'
 *
 * const Person = t.type({
 *   name: t.string,
 *   age: t.number
 * })
 *
 * const lenses = getLenses(Person)
 * assert.strictEqual(lenses.age.get({ name: 'Giulio', age: 44 }), 44)
 *
 * @since 0.5.0
 */


function getLenses(codec) {
  // tslint:disable-next-line no-any
  const r = {}; // tslint:disable-next-line forin

  for (const k in getProps(codec)) {
    // tslint:disable-next-line no-unsafe-any
    r[k] = fromProp(k);
  } // tslint:disable-next-line no-unsafe-any


  return r;
}