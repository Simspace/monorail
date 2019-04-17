import { array } from 'fp-ts/lib/Array';
import { fromNullable, none } from 'fp-ts/lib/Option';
import { fromFoldable } from 'fp-ts/lib/Record';
// TODO: Rewrite Wizard code that uses this and then delete this
/**
 * A subtype of an ES6 Map which is serializable (for viewing in Redux state)
 */
export class SerializableMap extends Map {
    constructor(pairs) {
        super(pairs);
        this.lookup = this.lookup.bind(this);
        this.toJSON = this.toJSON.bind(this);
        this.toRecord = this.toRecord.bind(this);
    }
    /**
     * A safe version of the `get` method of an ES6 Map which returns an Option
     */
    lookup(key) {
        return this.has(key) ? fromNullable(this.get(key)) : none;
    }
    toArray() {
        return Array.from(this.entries());
    }
    toJSON() {
        return this.toRecord();
    }
    toRecord() {
        return fromFoldable(array)(this.toArray(), (_, a) => a);
    }
}
/**
 * SerializableMap constructor function
 *
 */
export const mkSerializableMap = (pairs) => new SerializableMap(pairs);
//# sourceMappingURL=SerializableMap.js.map