"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsafeCoerceFromMap = unsafeCoerceFromMap;
exports.unsafeCoerceToMap = unsafeCoerceToMap;

// These utilities are copied from fp-ts 2.x ::
// https://github.com/gcanti/fp-ts/blob/3f7fa3b5f398c84ce3f2f692389720cb82e1bcf9/src/ReadonlyMap.ts#L30-L44
function unsafeCoerceFromMap(m) {
  return new Map(m);
}

function unsafeCoerceToMap(m) {
  return new Map(m);
}