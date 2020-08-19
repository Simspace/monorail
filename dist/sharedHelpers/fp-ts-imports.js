"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "pipe", {
  enumerable: true,
  get: function () {
    return _pipeable.pipe;
  }
});
exports.TE = exports.T = exports.Sg = exports.S = exports.RTE = exports.RT = exports.RS = exports.RR = exports.RM = exports.RD = exports.RA = exports.R = exports.Ord = exports.O = exports.NEA = exports.Mn = exports.M = exports.IO = exports.E = exports.A = void 0;

var _pipeable = require("fp-ts/lib/pipeable");

var A = _interopRequireWildcard(require("fp-ts/lib/Array"));

exports.A = A;

var E = _interopRequireWildcard(require("fp-ts/lib/Either"));

exports.E = E;

var IO = _interopRequireWildcard(require("fp-ts/lib/IO"));

exports.IO = IO;

var M = _interopRequireWildcard(require("fp-ts/lib/Map"));

exports.M = M;

var Mn = _interopRequireWildcard(require("fp-ts/lib/Monoid"));

exports.Mn = Mn;

var NEA = _interopRequireWildcard(require("fp-ts/lib/NonEmptyArray"));

exports.NEA = NEA;

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

exports.O = O;

var Ord = _interopRequireWildcard(require("fp-ts/lib/Ord"));

exports.Ord = Ord;

var R = _interopRequireWildcard(require("fp-ts/lib/Record"));

exports.R = R;

var RA = _interopRequireWildcard(require("fp-ts/lib/ReadonlyArray"));

exports.RA = RA;

var RD = _interopRequireWildcard(require("@devexperts/remote-data-ts/dist/remote-data"));

exports.RD = RD;

var RM = _interopRequireWildcard(require("fp-ts/lib/ReadonlyMap"));

exports.RM = RM;

var RR = _interopRequireWildcard(require("fp-ts/lib/ReadonlyRecord"));

exports.RR = RR;

var RS = _interopRequireWildcard(require("fp-ts/lib/ReadonlySet"));

exports.RS = RS;

var RT = _interopRequireWildcard(require("fp-ts/lib/ReadonlyTuple"));

exports.RT = RT;

var RTE = _interopRequireWildcard(require("fp-ts/lib/ReaderTaskEither"));

exports.RTE = RTE;

var S = _interopRequireWildcard(require("fp-ts/lib/Set"));

exports.S = S;

var Sg = _interopRequireWildcard(require("fp-ts/lib/Semigroup"));

exports.Sg = Sg;

var T = _interopRequireWildcard(require("fp-ts/lib/Task"));

exports.T = T;

var TE = _interopRequireWildcard(require("fp-ts/lib/TaskEither"));

exports.TE = TE;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }