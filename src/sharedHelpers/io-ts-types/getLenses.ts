import * as t from 'io-ts'
import { Lens } from 'monocle-ts'

// Utils required for `getLenses`, intentionally not exported

interface ExactHasLenses extends t.ExactType<HasLenses> {}

// tslint:disable-next-line no-any
type HasLenses = t.InterfaceType<any> | ExactHasLenses

function getProps(codec: HasLenses): t.Props {
  switch (codec._tag) {
    case 'InterfaceType':
      // tslint:disable-next-line no-unsafe-any
      return codec.props
    case 'ExactType':
      return getProps(codec.type)
  }
}

// tslint:disable-next-line no-any
const fromProp = Lens.fromProp<any>()

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
export function getLenses<C extends HasLenses>(
  codec: C,
): { [K in keyof t.TypeOf<C>]: Lens<t.TypeOf<C>, t.TypeOf<C>[K]> } {
  // tslint:disable-next-line no-any
  const r: any = {}
  // tslint:disable-next-line forin
  for (const k in getProps(codec)) {
    // tslint:disable-next-line no-unsafe-any
    r[k] = fromProp(k)
  }
  // tslint:disable-next-line no-unsafe-any
  return r
}
