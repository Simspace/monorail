"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "constant", {
  enumerable: true,
  get: function () {
    return _function.constant;
  }
});
Object.defineProperty(exports, "flow", {
  enumerable: true,
  get: function () {
    return _function.flow;
  }
});
Object.defineProperty(exports, "identity", {
  enumerable: true,
  get: function () {
    return _function.identity;
  }
});
Object.defineProperty(exports, "not", {
  enumerable: true,
  get: function () {
    return _function.not;
  }
});
Object.defineProperty(exports, "tuple", {
  enumerable: true,
  get: function () {
    return _function.tuple;
  }
});
Object.defineProperty(exports, "pipe", {
  enumerable: true,
  get: function () {
    return _pipeable.pipe;
  }
});
exports.W = exports.Tup = exports.Th = exports.TE = exports.T = exports.Show = exports.S = exports.Sg = exports.R = exports.RT = exports.RS = exports.RR = exports.RNEA = exports.RM = exports.RA = exports.RTE = exports.Re = exports.Ord = exports.O = exports.NEA = exports.Mn = exports.M = exports.IOE = exports.IO = exports.Eq = exports.E = exports.A = exports.Ap = exports.Apl = exports.RD = void 0;

var RD = _interopRequireWildcard(require("@devexperts/remote-data-ts/dist/remote-data"));

exports.RD = RD;

var Apl = _interopRequireWildcard(require("fp-ts/lib/Applicative"));

exports.Apl = Apl;

var Ap = _interopRequireWildcard(require("fp-ts/lib/Apply"));

exports.Ap = Ap;

var A = _interopRequireWildcard(require("fp-ts/lib/Array"));

exports.A = A;

var E = _interopRequireWildcard(require("fp-ts/lib/Either"));

exports.E = E;

var Eq = _interopRequireWildcard(require("fp-ts/lib/Eq"));

exports.Eq = Eq;

var _function = require("fp-ts/lib/function");

var IO = _interopRequireWildcard(require("fp-ts/lib/IO"));

exports.IO = IO;

var IOE = _interopRequireWildcard(require("fp-ts/lib/IOEither"));

exports.IOE = IOE;

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

var _pipeable = require("fp-ts/lib/pipeable");

var Re = _interopRequireWildcard(require("fp-ts/lib/Reader"));

exports.Re = Re;

var RTE = _interopRequireWildcard(require("fp-ts/lib/ReaderTaskEither"));

exports.RTE = RTE;

var RA = _interopRequireWildcard(require("fp-ts/lib/ReadonlyArray"));

exports.RA = RA;

var RM = _interopRequireWildcard(require("fp-ts/lib/ReadonlyMap"));

exports.RM = RM;

var RNEA = _interopRequireWildcard(require("fp-ts/lib/ReadonlyNonEmptyArray"));

exports.RNEA = RNEA;

var RR = _interopRequireWildcard(require("fp-ts/lib/ReadonlyRecord"));

exports.RR = RR;

var RS = _interopRequireWildcard(require("fp-ts/lib/ReadonlySet"));

exports.RS = RS;

var RT = _interopRequireWildcard(require("fp-ts/lib/ReadonlyTuple"));

exports.RT = RT;

var R = _interopRequireWildcard(require("fp-ts/lib/Record"));

exports.R = R;

var Sg = _interopRequireWildcard(require("fp-ts/lib/Semigroup"));

exports.Sg = Sg;

var S = _interopRequireWildcard(require("fp-ts/lib/Set"));

exports.S = S;

var Show = _interopRequireWildcard(require("fp-ts/lib/Show"));

exports.Show = Show;

var T = _interopRequireWildcard(require("fp-ts/lib/Task"));

exports.T = T;

var TE = _interopRequireWildcard(require("fp-ts/lib/TaskEither"));

exports.TE = TE;

var Th = _interopRequireWildcard(require("fp-ts/lib/These"));

exports.Th = Th;

var Tup = _interopRequireWildcard(require("fp-ts/lib/Tuple"));

exports.Tup = Tup;

var W = _interopRequireWildcard(require("fp-ts/lib/Writer"));

exports.W = W;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }