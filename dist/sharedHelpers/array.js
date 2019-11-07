"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boundedIdx = boundedIdx;

/** Keeps idx within the bounds of [0, length), looping back to 0 when over, and length-1 when under  */
function boundedIdx(idx, length) {
  return (idx % length + length) % length;
}