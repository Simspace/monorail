"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constRunTaskEither = exports.runTaskEither = exports.newTaskEither = void 0;

/**
 * TaskEither constructor function
 *
 */
const newTaskEither = task => task;
/**
 * Run a TaskEither
 */


exports.newTaskEither = newTaskEither;

const runTaskEither = x => x();
/**
 * Returns the run function for a TaskEither<L, A>
 */


exports.runTaskEither = runTaskEither;

const constRunTaskEither = x => x;

exports.constRunTaskEither = constRunTaskEither;