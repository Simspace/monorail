"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  sequenceOptionsTuple: true,
  sequenceEithersTuple: true,
  sequenceTasksTuple: true,
  sequenceTaskEithersTuple: true,
  sequenceOptionsStruct: true,
  sequenceEithersStruct: true,
  sequenceTasksStruct: true,
  sequenceTaskEithersStruct: true,
  sequenceRemoteDataStruct: true
};
exports.sequenceRemoteDataStruct = exports.sequenceTaskEithersStruct = exports.sequenceTasksStruct = exports.sequenceEithersStruct = exports.sequenceOptionsStruct = exports.sequenceTaskEithersTuple = exports.sequenceTasksTuple = exports.sequenceEithersTuple = exports.sequenceOptionsTuple = void 0;

var _remoteDataTs = require("@devexperts/remote-data-ts");

var _Apply = require("fp-ts/lib/Apply");

Object.keys(_Apply).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Apply[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Apply[key];
    }
  });
});

var _Either = require("fp-ts/lib/Either");

var _Option = require("fp-ts/lib/Option");

var _Task = require("fp-ts/lib/Task");

var _TaskEither = require("fp-ts/lib/TaskEither");

/**
 * sequence utility for a tuple containing Options of mixed value types
 */
const sequenceOptionsTuple = (0, _Apply.sequenceT)(_Option.option);
/**
 * sequence utility for a tuple containing Eithers of mixed value types
 */

exports.sequenceOptionsTuple = sequenceOptionsTuple;
const sequenceEithersTuple = (0, _Apply.sequenceT)(_Either.either);
/**
 * sequence utility for a tuple containing Tasks of mixed value types
 */

exports.sequenceEithersTuple = sequenceEithersTuple;
const sequenceTasksTuple = (0, _Apply.sequenceT)(_Task.task);
/**
 * sequence utility for a tuple containing TaskEithers of mixed value types
 */

exports.sequenceTasksTuple = sequenceTasksTuple;
const sequenceTaskEithersTuple = (0, _Apply.sequenceT)(_TaskEither.taskEither);
/**
 * sequence utility for structs (interfaces/objects) containing Options of mixed value types
 */

exports.sequenceTaskEithersTuple = sequenceTaskEithersTuple;
const sequenceOptionsStruct = (0, _Apply.sequenceS)(_Option.option);
/**
 * sequence utility for structs (interfaces/objects) containing Eithers of mixed value types
 */

exports.sequenceOptionsStruct = sequenceOptionsStruct;
const sequenceEithersStruct = (0, _Apply.sequenceS)(_Either.either);
/**
 * sequence utility for structs (interfaces/objects) containing Tasks of mixed value types
 */

exports.sequenceEithersStruct = sequenceEithersStruct;
const sequenceTasksStruct = (0, _Apply.sequenceS)(_Task.task);
/**
 * sequence utility for structs (interfaces/objects) containing TaskEithers of mixed value types
 */

exports.sequenceTasksStruct = sequenceTasksStruct;
const sequenceTaskEithersStruct = (0, _Apply.sequenceS)(_TaskEither.taskEither);
/**
 * sequence utility for structs (interfaces/objects) containing RemoteData of mixed value types
 */

exports.sequenceTaskEithersStruct = sequenceTaskEithersStruct;
const sequenceRemoteDataStruct = (0, _Apply.sequenceS)(_remoteDataTs.remoteData);
exports.sequenceRemoteDataStruct = sequenceRemoteDataStruct;