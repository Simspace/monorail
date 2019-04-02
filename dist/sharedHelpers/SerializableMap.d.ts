import { Option } from 'fp-ts/lib/Option';
/**
 * A subtype of an ES6 Map which is serializable (for viewing in Redux state)
 */
export declare class SerializableMap<K extends string, V> extends Map<K, V> {
    constructor(pairs: ReadonlyArray<[K, V]>);
    /**
     * A safe version of the `get` method of an ES6 Map which returns an Option
     */
    lookup(key: K): Option<V>;
    toArray(): Array<[K, V]>;
    toJSON(): Record<K, V>;
    toRecord(): Record<K, V>;
}
/**
 * SerializableMap constructor function
 *
 */
export declare const mkSerializableMap: <K extends string, V>(pairs: ReadonlyArray<[K, V]>) => SerializableMap<K, V>;
