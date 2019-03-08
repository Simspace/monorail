"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequenceTupleTaskEithers = exports.sequenceTupleTasks = exports.sequenceTupleEithers = exports.sequenceTupleOptions = exports.swap = exports.tuple = void 0;

var _Apply = require("fp-ts/lib/Apply");

var _Either = require("fp-ts/lib/Either");

var _Option = require("fp-ts/lib/Option");

var _Task = require("fp-ts/lib/Task");

var _TaskEither = require("fp-ts/lib/TaskEither");

/**
 * Utility for constructing tuples with proper inference
 */
const tuple = (...args) => args;
/**
 * Flips the position of each item in a 2-tuple
 */


exports.tuple = tuple;

const swap = ([x, y]) => [y, x];
/**
 * sequence utility for a tuple of Options
 */


exports.swap = swap;
const sequenceTupleOptions = (0, _Apply.sequenceT)(_Option.option);
/**
 * sequence utility for a tuple of Eithers
 */

exports.sequenceTupleOptions = sequenceTupleOptions;
const sequenceTupleEithers = (0, _Apply.sequenceT)(_Either.either);
/**
 * sequence utility for a tuple of Task
 */

exports.sequenceTupleEithers = sequenceTupleEithers;
const sequenceTupleTasks = (0, _Apply.sequenceT)(_Task.task);
/**
 * sequence utility for a tuple of TaskEithers
 */

exports.sequenceTupleTasks = sequenceTupleTasks;
const sequenceTupleTaskEithers = (0, _Apply.sequenceT)(_TaskEither.taskEither);
exports.sequenceTupleTaskEithers = sequenceTupleTaskEithers;