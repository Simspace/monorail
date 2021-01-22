"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  newTaskEither: true,
  runTaskEither: true
};
exports.runTaskEither = exports.newTaskEither = void 0;

var _TaskEither = require("fp-ts/lib/TaskEither");

Object.keys(_TaskEither).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TaskEither[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _TaskEither[key];
    }
  });
});

/**
 * TaskEither constructor function
 *
 */
const newTaskEither = task => task;
/**
 * Runs a TaskEither
 */


exports.newTaskEither = newTaskEither;

const runTaskEither = x => x();

exports.runTaskEither = runTaskEither;