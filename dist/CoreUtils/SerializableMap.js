"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mkSerializableMap = exports.SerializableMap = void 0;

var _Array = require("fp-ts/lib/Array");

var _Option = require("fp-ts/lib/Option");

var _Record = require("fp-ts/lib/Record");

/**
 * A subtype of an ES6 Map which is serializable (for viewing in Redux state)
 */
class SerializableMap extends Map {
  constructor(pair) {
    super(pair);
    this.lookup = this.lookup.bind(this);
    this.toJSON = this.toJSON.bind(this);
    this.toRecord = this.toRecord.bind(this);
  }
  /**
   * A safe version of the `get` method of an ES6 Map which returns an Option
   */


  lookup(key) {
    return this.has(key) ? (0, _Option.fromNullable)(this.get(key)) : _Option.none;
  }

  toArray() {
    return Array.from(this.entries());
  }

  toJSON() {
    return this.toRecord();
  }

  toRecord() {
    return (0, _Record.fromFoldable)(_Array.array)(this.toArray(), (_, a) => a);
  }

}
/**
 * SerializableMap constructor function
 *
 */


exports.SerializableMap = SerializableMap;

const mkSerializableMap = pairs => new SerializableMap(pairs);

exports.mkSerializableMap = mkSerializableMap;