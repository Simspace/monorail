"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noOpTask = exports.constRunTask = exports.runTask = exports.newTask = void 0;

/**
 * Task constructor function
 *
 */
const newTask = f => f;
/**
 * Run a Task (a lazy Promise)
 */


exports.newTask = newTask;

const runTask = x => x();
/**
 * Returns the run function for a Task<A>
 */


exports.runTask = runTask;

const constRunTask = x => x;
/**
 * A function that returns a noop Task
 */


exports.constRunTask = constRunTask;
const noOpTask = newTask(async () => {});
exports.noOpTask = noOpTask;