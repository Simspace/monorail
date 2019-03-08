import { array } from 'fp-ts/lib/Array'
import { Option, fromNullable, none } from 'fp-ts/lib/Option'
import { fromFoldable } from 'fp-ts/lib/Record'

/**
 * A subtype of an ES6 Map which is serializable (for viewing in Redux state)
 */
export class SerializableMap<K extends string, V> extends Map<K, V> {
  constructor(pair: ReadonlyArray<[K, V]>) {
    super(pair)
    this.lookup = this.lookup.bind(this)
    this.toJSON = this.toJSON.bind(this)
    this.toRecord = this.toRecord.bind(this)
  }

  /**
   * A safe version of the `get` method of an ES6 Map which returns an Option
   */
  lookup(key: K): Option<V> {
    return this.has(key) ? fromNullable(this.get(key)) : none
  }

  toArray(): Array<[K, V]> {
    return Array.from(this.entries())
  }

  toJSON() {
    return this.toRecord()
  }

  toRecord() {
    return fromFoldable(array)(this.toArray(), (_, a) => a)
  }
}

/**
 * SerializableMap constructor function
 *
 */
export const mkSerializableMap = <K extends string, V>(
  pairs: ReadonlyArray<[K, V]>,
) => new SerializableMap(pairs)
