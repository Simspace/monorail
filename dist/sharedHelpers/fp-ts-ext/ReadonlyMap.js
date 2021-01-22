"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  unsafeCoerceFromMap: true,
  unsafeCoerceToMap: true
};
exports.unsafeCoerceFromMap = unsafeCoerceFromMap;
exports.unsafeCoerceToMap = unsafeCoerceToMap;

var _ReadonlyMap = require("fp-ts/lib/ReadonlyMap");

Object.keys(_ReadonlyMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ReadonlyMap[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ReadonlyMap[key];
    }
  });
});

// These utilities are copied from fp-ts 2.x ::
// https://github.com/gcanti/fp-ts/blob/3f7fa3b5f398c84ce3f2f692389720cb82e1bcf9/src/ReadonlyMap.ts#L30-L44
function unsafeCoerceFromMap(m) {
  return new Map(m);
}

function unsafeCoerceToMap(m) {
  return new Map(m);
}