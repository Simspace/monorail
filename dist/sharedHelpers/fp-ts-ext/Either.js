"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fold = void 0;

/**
 * Standalone version of fp-ts' `fold` for Eithers
 */
const fold = (x, onLeft, onRight) => x.fold(onLeft, onRight);

exports.fold = fold;