"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constRunTaskEither = exports.runTaskEither = exports.newTaskEither = void 0;

var _TaskEither = require("fp-ts/lib/TaskEither");

/**
 * TaskEither constructor function
 *
 */
const newTaskEither = task => new _TaskEither.TaskEither(task);
/**
 * Run a TaskEither
 */


exports.newTaskEither = newTaskEither;

const runTaskEither = x => x.run();
/**
 * Returns the run function for a TaskEither<L, A>
 */


exports.runTaskEither = runTaskEither;

const constRunTaskEither = x => x.value.run;

exports.constRunTaskEither = constRunTaskEither;