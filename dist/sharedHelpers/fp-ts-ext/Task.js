"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  newTask: true,
  runTask: true,
  noOpTask: true
};
exports.noOpTask = exports.runTask = exports.newTask = void 0;

var _Task = require("fp-ts/lib/Task");

Object.keys(_Task).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Task[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Task[key];
    }
  });
});

/**
 * Task constructor function
 *
 */
const newTask = f => f;
/**
 * Runs a Task. This will construct and effectively start the execution of the underlying Promise<A>.
 */


exports.newTask = newTask;

const runTask = x => x();
/**
 * A function that returns a noop Task
 */


exports.runTask = runTask;
const noOpTask = newTask(async () => {});
exports.noOpTask = noOpTask;