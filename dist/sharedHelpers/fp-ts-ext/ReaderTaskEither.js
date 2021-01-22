"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  orElseW: true,
  chainWFirst: true,
  withEnv: true,
  toLeft: true,
  onLeft: true,
  runP: true,
  noOpRTE: true,
  provide: true,
  providePartial: true,
  sequenceW: true
};
exports.sequenceW = sequenceW;
exports.providePartial = exports.provide = exports.noOpRTE = exports.runP = exports.onLeft = exports.toLeft = exports.withEnv = exports.chainWFirst = exports.orElseW = void 0;

var _Array = require("fp-ts/lib/Array");

var E = _interopRequireWildcard(require("fp-ts/lib/Either"));

var _function = require("fp-ts/lib/function");

var _pipeable = require("fp-ts/lib/pipeable");

var RTE = _interopRequireWildcard(require("fp-ts/lib/ReaderTaskEither"));

Object.keys(RTE).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === RTE[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return RTE[key];
    }
  });
});

var _IO = require("./IO");

var _ReadonlyArray = require("./ReadonlyArray");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Pipeable port of rte.orElse, which widens types
 * @param f
 */
const orElseW = f => rte => (0, _pipeable.pipe)(rte, RTE.orElse((0, _function.unsafeCoerce)(f)));

exports.orElseW = orElseW;

const chainWFirst = f => ma => env => () => RTE.run(ma, env).then(ea => (0, _pipeable.pipe)(ea, E.fold(err => E.left(err), a => RTE.run(f(a), env).then(() => ea))));
/**
 * Widens Dependency type to the manually supplied type parameter,
 *
 * i.e.
 * @example
 * ```ts
 * const rte = withEnv<{ num: number }>(RTE.of("foo"))
 * rte.run({ num: 6 }) // requires a `{ num: number }`
 * ```
 */


exports.chainWFirst = chainWFirst;

const withEnv = () => r => (0, _pipeable.pipe)(RTE.ask(), RTE.chainW(() => r));
/**
 * Takes a successful Right RTE, and turns it into a failing 'Left' RTE
 * @param rtea
 */


exports.withEnv = withEnv;

const toLeft = rtea => env => () => {
  return RTE.run(rtea, env).then(E.fold(e => E.left(e), a => E.left(a)));
};
/**
 * Executes an RTE if a left is encountered, enabling access to the original error.
 * The value returnded from `f` will be discarded, and the resulting RTE will contain
 * the original value.
 *
 * @example
 * ```ts
 * pipe(
 *   RTE.left2v('foo'),
 *   onLeft(e => log(`Encountered error: ${e}`))
 * )
 * ```
 */


exports.toLeft = toLeft;

const onLeft = f => rte => (0, _pipeable.pipe)(rte, orElseW(e => {
  return (0, _pipeable.pipe)(toLeft(f(e)), RTE.mapLeft(() => e));
}));
/**
 * Runs a ReaderTaskEither with the specified parameters
 *
 * @example
 * ```ts
 * pipe(
 *   RTE.ask<string, number>(),
 *   run('supplied parameter')
 * )
 * ```
 *
 * Note: if the inferred type of R is a subtype of the R in your RTE,
 * You'll need to explicitly type R to the supertype which matches the RTE
 *
 * This is because in fp-ts v1, the `R` type parameter in RTE is invariant
 * in fp-ts v2, it is contravariant, so this inference issue will go away.
 *
 * i.e.:
 * ```ts
 * declare const foo: 'foo'
 * pipe(RTE.ask<string, number>(), run(foo)) // fails
 * pipe(RTE.ask<string, number>(), run<string>(foo)) // succeeds
 * ```
 *
 *
 * Some more information about this error:
 * ```ts
 *
 * declare const fooRTE: RTE.ReaderTaskEither<'foo', unknown, unknown>
 * declare const stringRTE: RTE.ReaderTaskEither<string, unknown, unknown>
 *
 * const a: RTE.ReaderTaskEither<string, unknown, unknown> = fooRTE
 * const b: RTE.ReaderTaskEither<'foo', unknown, unknown> = fooRTE
 * const c: RTE.ReaderTaskEither<'foo', unknown, unknown> = stringRTE
 * const d: RTE.ReaderTaskEither<string, unknown, unknown> = stringRTE
 * ```
 * Here, the assignment to `a` and `b` fails, but in fp-ts v2, only the assignment to `a` fails
 *
 * Using the suffix `P` for `pipeable` to disambiguate the name from the base `run`
 *
 * NOTE: The above examples show primitive types being used in the RTE environment. However,
 * all utility functions in this file require the environment to be expressed as an object type
 * due to the reliance on using intersection types to aggregate dependencies.
 */


exports.onLeft = onLeft;

const runP = r => rte => RTE.run(rte, r);
/**
 * A ReaderTaskEither that performs a noOp computation
 *
 * It uses an empty environment and cannot fail.
 */


exports.runP = runP;
const noOpRTE = RTE.fromIO(_IO.noOpIO);
/**
 * Provides the required environment to a ReaderTaskEither,
 * converting it into a TaskEither.
 *
 * Similar to `runP` but delays execution.
 */

exports.noOpRTE = noOpRTE;

const provide = r => rte => () => RTE.run(rte, r);
/**
 * Provides a subset of a ReaderTaskEither's required environment,
 * returning a new ReaderTaskEither with a narrowed environment requirement.
 *
 * Similar to `provide` but does not completely fulfill the RTE's requirements.
 * Think of this as partial application for RTE dependencies.
 */


exports.provide = provide;

const providePartial = q => rte => r => () => RTE.run(rte, { ...q,
  ...r
});
/**
 * Given a tuple/list of RTEs, it will aggregate their combined environments into an intersection,
 * their combined errors into a union, and map the values into a corresponding tuple/list.
 *
 * TLDR; Promise.all for ReaderTaskEither
 */


exports.providePartial = providePartial;

function sequenceW(rtes) {
  return _Array.array.sequence(RTE.readerTaskEither)((0, _ReadonlyArray.unsafeCoerceToArray)(rtes));
}
/**
 * Performs the type-level computation that combineRTE uses
 */