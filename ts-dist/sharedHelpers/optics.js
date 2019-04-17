import { Lens, Optional } from 'monocle-ts';
import { insert, lookup } from 'fp-ts/lib/Record';
import { array, cons, index, updateAt } from 'fp-ts/lib/Array';
/**
 * Binary composition for lenses (`monocle-ts`)
 *
 * NOTE: This may feel like backwards (left-to-right) composition,
 * but it's not. Think of it as composing "focusers" instead of "accessors"
 */
export const oLens = (f, g) => f.compose(g);
/* tslint:enable:no-any */
/**
 * A function that generates monocle-ts Lenses for all top-level key-val pairs
 * when passed an object
 */
export const lensesFromRecord = (x) => {
    let result = {};
    for (const k of Object.keys(x)) {
        result = insert(k, Lens.fromProp()(k), result);
    }
    return result;
};
/**
 * Creates an Optional optic for a given index in some Array<A>
 */
export const mkArrayIndexOptional = (i) => new Optional(xs => index(i, xs), a => xs => updateAt(i, a, xs).fold(array.of(a), ys => cons(a, ys)));
/**
 * Creates an Optional optic for a given key K in some Record<K, A>
 *
 * TODO: Consider rewriting this in a different way
 */
export const mkRecordKeyOptional = (k) => new Optional(s => lookup(k, s), a => obj => insert(k, a, obj));
//# sourceMappingURL=optics.js.map