"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequenceW = sequenceW;
exports.provide = exports.noOpRTE = exports.run = exports.onLeft = exports.toLeft = exports.withDeps = exports.chainWFirst = exports.orElseW = void 0;

var _Array = require("fp-ts/lib/Array");

var E = _interopRequireWildcard(require("fp-ts/lib/Either"));

var _pipeable = require("fp-ts/lib/pipeable");

var RTE = _interopRequireWildcard(require("fp-ts/lib/ReaderTaskEither"));

var _IO = require("./IO");

var _ReadonlyArray = require("./ReadonlyArray");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Pipeable port of rte.orElse, which widens types
 * @param f
 */
const orElseW = f => rte => (0, _pipeable.pipe)(rte, RTE.orElse(f));

exports.orElseW = orElseW;

const chainWFirst = f => ma => env => () => RTE.run(ma, env).then(ea => (0, _pipeable.pipe)(ea, E.fold(err => E.left(err), a => RTE.run(f(a), env).then(() => ea))));
/**
 * Widens Dependency type to the manually supplied type parameter,
 *
 * i.e.
 * @example
 * ```ts
 * const rte = withDeps<number>(RTE.of("foo"))
 * rte.run(6) // requires a `number`
 * ```
 */


exports.chainWFirst = chainWFirst;

const withDeps = () => r => (0, _pipeable.pipe)(RTE.ask(), RTE.chainW(() => r));
/**
 * Takes a successful Right RTE, and turns it into a failing 'Left' RTE
 * @param rtea
 */


exports.withDeps = withDeps;

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
 */


exports.onLeft = onLeft;

const run = r => rte => RTE.run(rte, r);
/**
 * Given a tuple/list of RTEs, it will aggregate their combined environments into an intersection,
 * their combined errors into a union, and map the values into a corresponding tuple/list.
 *
 * TLDR; Promise.all for ReaderTaskEither
 */


exports.run = run;

function sequenceW(rtes) {
  return _Array.array.sequence(RTE.readerTaskEither)((0, _ReadonlyArray.unsafeCoerceToArray)(rtes));
}
/**
 * Performs the type-level computation that combineRTE uses
 */


const noOpRTE = RTE.fromIO(_IO.noOpIO);
exports.noOpRTE = noOpRTE;

const provide = env => rt => () => RTE.run(rt, env);

exports.provide = provide;