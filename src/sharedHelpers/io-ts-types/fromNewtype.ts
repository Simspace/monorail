import { either } from 'fp-ts/lib/Either'
import * as t from 'io-ts'
import { AnyNewtype, CarrierOf, iso } from 'newtype-ts'

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
export function fromNewtype<N extends AnyNewtype = never>(
  codec: t.Type<CarrierOf<N>, t.OutputOf<CarrierOf<N>>>,
  name = `fromNewtype(${codec.name})`,
): t.Type<N, CarrierOf<N>, unknown> {
  const i = iso<N>()
  return new t.Type(
    name,
    (u): u is N => codec.is(u),
    (u, c) => either.map(codec.validate(u, c), i.wrap),
    a => codec.encode(i.unwrap(a)),
  )
}
