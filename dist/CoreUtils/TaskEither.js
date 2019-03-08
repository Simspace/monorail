"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constRunTaskEither = exports.runTaskEither = exports.mkTaskEither = void 0;

var _TaskEither = require("fp-ts/lib/TaskEither");

/**
 * TaskEither constructor function
 *
 */
const mkTaskEither = task => new _TaskEither.TaskEither(task);
/**
 * Run a TaskEither
 */


exports.mkTaskEither = mkTaskEither;

const runTaskEither = x => x.run();
/**
 * Returns the run function for a TaskEither<L, A>
 */


exports.runTaskEither = runTaskEither;

const constRunTaskEither = x => x.run;

exports.constRunTaskEither = constRunTaskEither;