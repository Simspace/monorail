"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasPartialEquals = void 0;

var _typeGuards = require("./typeGuards");

// Like Record.isSubrecord but works for Partial<Record<K, V>>
const hasPartialEquals = (keys, E) => (d1, d2) => {
  for (const k of keys) {
    const x = d1[k];
    const y = d2[k];

    if ((0, _typeGuards.isNotUndefined)(x) && (0, _typeGuards.isNotUndefined)(y)) {
      // X && Y isNot undefined, so run thru Eq.
      if (!E.equals(x, y)) {
        return false;
      } // Unless both x,y is undefined, it's `false`
      // because it'll mean one is defined and one is undefined.

    } else if (!((0, _typeGuards.isUndefined)(x) && (0, _typeGuards.isUndefined)(y))) {
      return false;
    }
  }

  return true;
};

exports.hasPartialEquals = hasPartialEquals;