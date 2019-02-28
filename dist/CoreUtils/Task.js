"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constRunTask = exports.runTask = exports.mkTask = void 0;

var _Task = require("fp-ts/lib/Task");

/**
 * Task constructor function
 *
 */
const mkTask = f => new _Task.Task(f);
/**
 * Run a Task (a lazy Promise)
 */


exports.mkTask = mkTask;

const runTask = x => x.run();
/**
 * Returns the run function for a Task<A>
 */


exports.runTask = runTask;

const constRunTask = x => x.run;

exports.constRunTask = constRunTask;