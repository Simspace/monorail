import * as t from 'io-ts';
import { Lens } from 'monocle-ts';
interface ExactHasLenses extends t.ExactType<HasLenses> {
}
declare type HasLenses = t.InterfaceType<any> | ExactHasLenses;
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
export declare function getLenses<C extends HasLenses>(codec: C): {
    [K in keyof t.TypeOf<C>]: Lens<t.TypeOf<C>, t.TypeOf<C>[K]>;
};
export {};
//# sourceMappingURL=getLenses.d.ts.map