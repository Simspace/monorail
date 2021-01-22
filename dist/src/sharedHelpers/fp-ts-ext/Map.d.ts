import { Eq } from 'fp-ts/lib/Eq';
import * as O from 'fp-ts/lib/Option';
export * from 'fp-ts/lib/Map';
/**
 * Allows removal, modification, or insertion of values into a map.
 *
 * The `alter` function is passed an `Option<A>` and returns an `Option<A>`,
 * so the cases are:
 *  in: `some`, out: `some` -> update
 *  in: `some`, out: `none` -> remove
 *  in: `none`, out: `some` -> insert
 *  in: `none`, out: `none` -> noop
 */
export declare const alterAt: <K>(eq: Eq<K>) => <A>(k: K, alter: (a: O.Option<A>) => O.Option<A>) => (map: Map<K, A>) => Map<K, A>;
