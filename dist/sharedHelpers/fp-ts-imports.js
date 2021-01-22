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
exports.Tree = exports.Th = exports.TE = exports.T = exports.Show = exports.S = exports.R = exports.RM = exports.RAZ = exports.RAOZ = exports.RA = exports.RTE = exports.Ord = exports.O = exports.M = exports.IO = exports.Fld = exports.Eq = exports.E = exports.A = exports.Ap = exports.W = exports.Tup = exports.Sg = exports.RT = exports.RS = exports.RR = exports.RNEA = exports.Re = exports.NEA = exports.Mn = exports.IOE = exports.Apl = exports.RD = void 0;

var RD = _interopRequireWildcard(require("@devexperts/remote-data-ts"));

exports.RD = RD;

var Apl = _interopRequireWildcard(require("fp-ts/lib/Applicative"));

exports.Apl = Apl;

var IOE = _interopRequireWildcard(require("fp-ts/lib/IOEither"));

exports.IOE = IOE;

var Mn = _interopRequireWildcard(require("fp-ts/lib/Monoid"));

exports.Mn = Mn;

var NEA = _interopRequireWildcard(require("fp-ts/lib/NonEmptyArray"));

exports.NEA = NEA;

var _pipeable = require("fp-ts/lib/pipeable");

var Re = _interopRequireWildcard(require("fp-ts/lib/Reader"));

exports.Re = Re;

var RNEA = _interopRequireWildcard(require("fp-ts/lib/ReadonlyNonEmptyArray"));

exports.RNEA = RNEA;

var RR = _interopRequireWildcard(require("fp-ts/lib/ReadonlyRecord"));

exports.RR = RR;

var RS = _interopRequireWildcard(require("fp-ts/lib/ReadonlySet"));

exports.RS = RS;

var RT = _interopRequireWildcard(require("fp-ts/lib/ReadonlyTuple"));

exports.RT = RT;

var Sg = _interopRequireWildcard(require("fp-ts/lib/Semigroup"));

exports.Sg = Sg;

var Tup = _interopRequireWildcard(require("fp-ts/lib/Tuple"));

exports.Tup = Tup;

var W = _interopRequireWildcard(require("fp-ts/lib/Writer"));

exports.W = W;

var Ap = _interopRequireWildcard(require("./fp-ts-ext/Apply"));

exports.Ap = Ap;

var A = _interopRequireWildcard(require("./fp-ts-ext/Array"));

exports.A = A;

var E = _interopRequireWildcard(require("./fp-ts-ext/Either"));

exports.E = E;

var Eq = _interopRequireWildcard(require("./fp-ts-ext/Eq"));

exports.Eq = Eq;

var Fld = _interopRequireWildcard(require("./fp-ts-ext/Foldable"));

exports.Fld = Fld;

var _function = require("./fp-ts-ext/function");

var IO = _interopRequireWildcard(require("./fp-ts-ext/IO"));

exports.IO = IO;

var M = _interopRequireWildcard(require("./fp-ts-ext/Map"));

exports.M = M;

var O = _interopRequireWildcard(require("./fp-ts-ext/Option"));

exports.O = O;

var Ord = _interopRequireWildcard(require("./fp-ts-ext/Ord"));

exports.Ord = Ord;

var RTE = _interopRequireWildcard(require("./fp-ts-ext/ReaderTaskEither"));

exports.RTE = RTE;

var RA = _interopRequireWildcard(require("./fp-ts-ext/ReadonlyArray"));

exports.RA = RA;

var RAOZ = _interopRequireWildcard(require("./fp-ts-ext/ReadonlyArrayOrZipper"));

exports.RAOZ = RAOZ;

var RAZ = _interopRequireWildcard(require("./fp-ts-ext/ReadonlyArrayZipper"));

exports.RAZ = RAZ;

var RM = _interopRequireWildcard(require("./fp-ts-ext/ReadonlyMap"));

exports.RM = RM;

var R = _interopRequireWildcard(require("./fp-ts-ext/Record"));

exports.R = R;

var S = _interopRequireWildcard(require("./fp-ts-ext/Set"));

exports.S = S;

var Show = _interopRequireWildcard(require("./fp-ts-ext/Show"));

exports.Show = Show;

var T = _interopRequireWildcard(require("./fp-ts-ext/Task"));

exports.T = T;

var TE = _interopRequireWildcard(require("./fp-ts-ext/TaskEither"));

exports.TE = TE;

var Th = _interopRequireWildcard(require("./fp-ts-ext/These"));

exports.Th = Th;

var Tree = _interopRequireWildcard(require("./fp-ts-ext/Tree"));

exports.Tree = Tree;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }