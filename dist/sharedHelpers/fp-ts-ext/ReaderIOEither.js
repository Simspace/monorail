"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fold = fold;
exports.orElse = orElse;
exports.fromEitherK = fromEitherK;
exports.fromIOEitherK = fromIOEitherK;
exports.getSemigroup = getSemigroup;
exports.getApplySemigroup = getApplySemigroup;
exports.getApplyMonoid = getApplyMonoid;
exports.getApplicativeReaderIOValidation = getApplicativeReaderIOValidation;
exports.getAltReaderIOValidation = getAltReaderIOValidation;
exports.getReaderIOValidation = getReaderIOValidation;
exports.run = run;
exports.bracket = bracket;
exports.providePartial = exports.provide = exports.noOpRIE = exports.runP = exports.onLeft = exports.toLeft = exports.withEnv = exports.chainWFirst = exports.orElseW = exports.sequenceSeqArray = exports.traverseSeqArray = exports.traverseSeqArrayWithIndex = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.apS = exports.apSW = exports.bind = exports.bindW = exports.bindTo = exports.Do = exports.readerIOEitherSeq = exports.readerIOEither = exports.Alt = exports.Bifunctor = exports.ApplicativeSeq = exports.ApplicativePar = exports.Functor = exports.URI = exports.throwError = exports.fromIO = exports.alt = exports.altW = exports.flatten = exports.chainFirst = exports.chainFirstW = exports.chain = exports.chainW = exports.of = exports.apSecond = exports.apFirst = exports.ap = exports.apW = exports.mapLeft = exports.bimap = exports.map = exports.chainIOEitherK = exports.chainIOEitherKW = exports.chainEitherK = exports.chainEitherKW = exports.filterOrElse = exports.filterOrElseW = exports.local = exports.swap = exports.getOrElse = exports.getOrElseW = exports.fromPredicate = exports.fromOption = exports.fromEither = exports.asks = exports.ask = exports.fromReaderEither = exports.leftReaderIO = exports.rightReaderIO = exports.leftReader = exports.rightReader = exports.leftIO = exports.rightIO = exports.right = exports.left = exports.fromIOEither = exports.bindTo_ = exports.bind_ = void 0;

var E = _interopRequireWildcard(require("fp-ts/lib/Either"));

var _function = require("fp-ts/lib/function");

var I = _interopRequireWildcard(require("fp-ts/lib/IO"));

var IE = _interopRequireWildcard(require("fp-ts/lib/IOEither"));

var R = _interopRequireWildcard(require("fp-ts/lib/Reader"));

var RI = _interopRequireWildcard(require("fp-ts-contrib/lib/ReaderIO"));

var _IO2 = require("./IO");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-enable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-unsafe-return */

/* eslint-disable prefer-object-spread */
const bind_ = (a, name, b) => Object.assign({}, a, {
  [name]: b
});
/**
 * @internal
 */


exports.bind_ = bind_;

const bindTo_ = name => b => ({
  [name]: b
});
/* eslint-enable prefer-object-spread */

/* eslint-enable @typescript-eslint/no-unsafe-return */
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category constructors
 */


exports.bindTo_ = bindTo_;
const fromIOEither = R.of;
/**
 * @category constructors
 */

exports.fromIOEither = fromIOEither;
const left = (0, _function.flow)(IE.left, fromIOEither);
/**
 * @category constructors
 */

exports.left = left;
const right = (0, _function.flow)(IE.right, fromIOEither);
/**
 * @category constructors
 */

exports.right = right;
const rightIO = (0, _function.flow)(IE.rightIO, fromIOEither);
/**
 * @category constructors
 */

exports.rightIO = rightIO;
const leftIO = (0, _function.flow)(IE.leftIO, fromIOEither);
/**
 * @category constructors
 */

exports.leftIO = leftIO;

const rightReader = ma => (0, _function.flow)(ma, IE.right);
/**
 * @category constructors
 */


exports.rightReader = rightReader;

const leftReader = me => (0, _function.flow)(me, IE.left);
/**
 * @category constructors
 */


exports.leftReader = leftReader;

const rightReaderIO = ma => (0, _function.flow)(ma, IE.rightIO);
/**
 * @category constructors
 */


exports.rightReaderIO = rightReaderIO;

const leftReaderIO = me => (0, _function.flow)(me, IE.leftIO);
/**
 * @category constructors
 */


exports.leftReaderIO = leftReaderIO;

const fromReaderEither = ma => (0, _function.flow)(ma, IE.fromEither);
/**
 * @category constructors
 */


exports.fromReaderEither = fromReaderEither;

const ask = () => IE.right;
/**
 * @category constructors
 */


exports.ask = ask;

const asks = f => (0, _function.flow)(IE.right, IE.map(f));
/**
 * Derivable from `MonadThrow`.
 *
 * @category constructors
 */


exports.asks = asks;
const fromEither = E.fold(left, a => right(a));
/**
 * Derivable from `MonadThrow`.
 *
 * @category constructors
 */

exports.fromEither = fromEither;

const fromOption = onNone => ma => ma._tag === 'None' ? left(onNone()) : right(ma.value);
/**
 * Derivable from `MonadThrow`.
 *
 * @category constructors
 */


exports.fromOption = fromOption;

const fromPredicate = (predicate, onFalse) => a => predicate(a) ? right(a) : left(onFalse(a)); // -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * @category destructors
 */


exports.fromPredicate = fromPredicate;

function fold(onLeft, onRight) {
  return ma => r => (0, _function.pipe)(ma(r), IE.fold(e => onLeft(e)(r), a => onRight(a)(r)));
}
/**
 * Less strict version of [`getOrElse`](#getOrElse).
 *
 * @category destructors
 */


const getOrElseW = onLeft => ma => r => IE.getOrElseW(e => onLeft(e)(r))(ma(r));
/**
 * @category destructors
 */


exports.getOrElseW = getOrElseW;
const getOrElse = getOrElseW; // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @category combinators
 */

exports.getOrElse = getOrElse;

function orElse(onLeft) {
  return ma => r => IE.orElse(e => onLeft(e)(r))(ma(r));
}
/**
 * @category combinators
 */


const swap = ma => (0, _function.flow)(ma, IE.swap);
/**
 * @category combinators
 *
 * NOTE: The equivalent of this for ReaderTaskEither is being removed in fp-ts version 3.0.
 */


exports.swap = swap;
const local = R.local;
/**
 * Less strict version of [`filterOrElse`](#filterOrElse).
 *
 * @category combinators
 */

exports.local = local;

const filterOrElseW = (predicate, onFalse) => chainW(a => predicate(a) ? right(a) : left(onFalse(a)));
/**
 * Derivable from `MonadThrow`.
 *
 * @category combinators
 */


exports.filterOrElseW = filterOrElseW;
const filterOrElse = filterOrElseW;
/**
 * @category combinators
 */

exports.filterOrElse = filterOrElse;

function fromEitherK(f) {
  return (...a) => fromEither(f(...a));
}
/**
 * Less strict version of [`chainEitherK`](#chainEitherK).
 *
 * @category combinators
 */


const chainEitherKW = f => chainW(fromEitherK(f));
/**
 * @category combinators
 */


exports.chainEitherKW = chainEitherKW;
const chainEitherK = chainEitherKW;
/**
 * @category combinators
 */

exports.chainEitherK = chainEitherK;

function fromIOEitherK(f) {
  return (...a) => fromIOEither(f(...a));
}
/**
 * Less strict version of [`chainIOEitherK`](#chainIOEitherK).
 *
 * @category combinators
 */


const chainIOEitherKW = f => chainW(fromIOEitherK(f));
/**
 * @category combinators
 */


exports.chainIOEitherKW = chainIOEitherKW;
const chainIOEitherK = chainIOEitherKW; // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------

exports.chainIOEitherK = chainIOEitherK;

const map_ = (fa, f) => (0, _function.pipe)(fa, map(f));

const apPar_ = (fab, fa) => (0, _function.pipe)(fab, ap(fa));

const apSeq_ = (fab, fa) => (0, _function.pipe)(fab, chain(f => (0, _function.pipe)(fa, map(f))));

const chain_ = (ma, f) => (0, _function.pipe)(ma, chain(f));

const alt_ = (fa, that) => (0, _function.pipe)(fa, alt(that));

const bimap_ = (fa, f, g) => (0, _function.pipe)(fa, bimap(f, g));

const mapLeft_ = (fa, f) => (0, _function.pipe)(fa, mapLeft(f)); // -------------------------------------------------------------------------------------
// pipeables
// -------------------------------------------------------------------------------------


const map = f => fa => (0, _function.flow)(fa, IE.map(f));
/**
 * Map a pair of functions over the two last type arguments of the bifunctor.
 *
 * @category Bifunctor
 */


exports.map = map;

const bimap = (f, g) => fa => r => (0, _function.pipe)(fa(r), IE.bimap(f, g));
/**
 * Map a function over the second type argument of a bifunctor.
 *
 * @category Bifunctor
 */


exports.bimap = bimap;

const mapLeft = f => fa => r => (0, _function.pipe)(fa(r), IE.mapLeft(f));
/**
 * Less strict version of [`ap`](#ap).
 *
 * @category Apply
 */


exports.mapLeft = mapLeft;

const apW = fa => fab => r => (0, _function.pipe)(fab(r), IE.apW(fa(r)));
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 */


exports.apW = apW;
const ap = apW;
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 */

exports.ap = ap;

const apFirst = fb => (0, _function.flow)(map(a => () => a), ap(fb));
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 */


exports.apFirst = apFirst;

const apSecond = fb => (0, _function.flow)(map(() => b => b), ap(fb));
/**
 * Wrap a value into the type constructor.
 *
 * Equivalent to [`right`](#right).
 *
 * @category Applicative
 */


exports.apSecond = apSecond;
const of = right;
/**
 * Less strict version of [`chain`](#chain).
 *
 * @category Monad
 */

exports.of = of;

const chainW = f => fa => r => (0, _function.pipe)(fa(r), IE.chainW(a => f(a)(r)));
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 */


exports.chainW = chainW;
const chain = chainW;
/**
 * Less strict version of [`chainFirst`](#chainFirst).
 *
 * Derivable from `Monad`.
 *
 * @category combinators
 */

exports.chain = chain;

const chainFirstW = f => chainW(a => (0, _function.pipe)(f(a), map(() => a)));
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Monad`.
 *
 * @category combinators
 */


exports.chainFirstW = chainFirstW;
const chainFirst = chainFirstW;
/**
 * Derivable from `Monad`.
 *
 * @category combinators
 */

exports.chainFirst = chainFirst;
const flatten = chain(_function.identity);
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 */

exports.flatten = flatten;

const altW = that => fa => r => (0, _function.pipe)(fa(r), IE.altW(() => that()(r)));
/**
 * Identifies an associative operation on a type constructor. It is similar to `Semigroup`, except that it applies to
 * types of kind `* -> *`.
 *
 * @category Alt
 */


exports.altW = altW;
const alt = altW;
/**
 * @category MonadIO
 */

exports.alt = alt;
const fromIO = rightIO;
/**
 * @category MonadThrow
 */

exports.fromIO = fromIO;
const throwError = left; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

exports.throwError = throwError;
const URI = 'ReaderIOEither';
exports.URI = URI;

/**
 * Semigroup returning the left-most non-`Left` value. If both operands are `Right`s then the inner values are
 * concatenated using the provided `Semigroup`
 *
 * @category instances
 */
function getSemigroup(S) {
  return R.getSemigroup(IE.getSemigroup(S));
}
/**
 * Semigroup returning the left-most `Left` value. If both operands are `Right`s then the inner values
 * are concatenated using the provided `Semigroup`
 *
 * @category instances
 */


function getApplySemigroup(S) {
  return R.getSemigroup(IE.getApplySemigroup(S));
}
/**
 * @category instances
 */


function getApplyMonoid(M) {
  return {
    concat: getApplySemigroup(M).concat,
    empty: right(M.empty)
  };
}
/**
 * @category instances
 */


function getApplicativeReaderIOValidation(A, SE) {
  const AV = IE.getApplicativeIOValidation(SE);

  const ap = fga => (0, _function.flow)(R.map(gab => ga => AV.ap(gab, ga)), R.ap(fga));

  return {
    URI,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    _E: undefined,
    map: map_,
    ap: (fab, fa) => (0, _function.pipe)(fab, ap(fa)),
    of
  };
}
/**
 * @category instances
 */


function getAltReaderIOValidation(SE) {
  const A = IE.getAltIOValidation(SE);
  return {
    URI,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    _E: undefined,
    map: map_,
    alt: (me, that) => r => A.alt(me(r), () => that()(r))
  };
}
/**
 * @category instances
 *
 * NOTE: This is just for convenience. This style of exporting the full set of type class instances is being removed in fp-ts version 3.
 */


function getReaderIOValidation(SE) {
  const applicativeReaderIOValidation = getApplicativeReaderIOValidation(I.Applicative, SE);
  const altReaderIOValidation = getAltReaderIOValidation(SE);
  return {
    URI,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    _E: undefined,
    map: map_,
    of,
    chain: chain_,
    bimap: bimap_,
    mapLeft: mapLeft_,
    ap: applicativeReaderIOValidation.ap,
    alt: altReaderIOValidation.alt,
    fromIO,
    throwError
  };
}
/**
 * @category instances
 */


const Functor = {
  URI,
  map: map_
};
/**
 * @category instances
 * @since 2.8.4
 */

exports.Functor = Functor;
const ApplicativePar = {
  URI,
  map: map_,
  ap: apPar_,
  of
};
/**
 * @category instances
 * @since 2.8.4
 */

exports.ApplicativePar = ApplicativePar;
const ApplicativeSeq = {
  URI,
  map: map_,
  ap: apSeq_,
  of
};
/**
 * @category instances
 */

exports.ApplicativeSeq = ApplicativeSeq;
const Bifunctor = {
  URI,
  bimap: bimap_,
  mapLeft: mapLeft_
};
/**
 * @category instances
 */

exports.Bifunctor = Bifunctor;
const Alt = {
  URI,
  map: map_,
  alt: alt_
};
/**
 * @category instances
 *
 * NOTE: This is just for convenience. This style of exporting the full set of
 * type class instances is being removed in fp-ts version 3.
 */

exports.Alt = Alt;
const readerIOEither = {
  URI,
  map: map_,
  of,
  ap: apPar_,
  chain: chain_,
  alt: alt_,
  bimap: bimap_,
  mapLeft: mapLeft_,
  fromIO,
  throwError
};
/**
 * @category instances
 *
 * NOTE: This is just for convenience. This style of exporting the full set of
 * type class instances is being removed in fp-ts version 3.
 */

exports.readerIOEither = readerIOEither;
const readerIOEitherSeq = {
  URI,
  map: map_,
  of,
  ap: apSeq_,
  chain: chain_,
  alt: alt_,
  bimap: bimap_,
  mapLeft: mapLeft_,
  fromIO,
  throwError
}; // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * NOTE: The equivalent of this for ReaderTaskEither is being removed in fp-ts version 3.0.
 */

exports.readerIOEitherSeq = readerIOEitherSeq;

function run(ma, r) {
  return ma(r)();
}
/**
 * Make sure that a resource is cleaned up in the event of an exception (\*). The release action is called regardless of
 * whether the body action throws (\*) or returns.
 *
 * (\*) i.e. returns a `Left`
 *
 * Derivable from `MonadThrow`.
 */


function bracket(aquire, use, release) {
  return r => IE.bracket(aquire(r), a => use(a)(r), (a, e) => release(a, e)(r));
} // -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------


const Do = of({});
exports.Do = Do;

const bindTo = name => map(bindTo_(name));

exports.bindTo = bindTo;

const bindW = (name, f) => chainW(a => (0, _function.pipe)(f(a), map(b => bind_(a, name, b))));

exports.bindW = bindW;
const bind = bindW; // -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------

exports.bind = bind;

const apSW = (name, fb) => (0, _function.flow)(map(a => b => bind_(a, name, b)), apW(fb));

exports.apSW = apSW;
const apS = apSW; // -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------
// missing from ReaderIO implementation in fp-ts-contrib

exports.apS = apS;

const readerIO_traverseArrayWithIndex = f => (0, _function.flow)(R.traverseArrayWithIndex(f), R.map(I.sequenceArray));

const traverseArrayWithIndex = f => (0, _function.flow)(readerIO_traverseArrayWithIndex(f), RI.map(E.sequenceArray));

exports.traverseArrayWithIndex = traverseArrayWithIndex;

const traverseArray = f => traverseArrayWithIndex((_, a) => f(a));

exports.traverseArray = traverseArray;
const sequenceArray = traverseArray(_function.identity);
exports.sequenceArray = sequenceArray;

const traverseSeqArrayWithIndex = f => arr => r => () => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const b = f(i, arr[i])(r)();

    if (E.isLeft(b)) {
      return b;
    }

    result.push(b.right);
  }

  return E.right(result);
};

exports.traverseSeqArrayWithIndex = traverseSeqArrayWithIndex;

const traverseSeqArray = f => traverseSeqArrayWithIndex((_, a) => f(a));

exports.traverseSeqArray = traverseSeqArray;
const sequenceSeqArray = traverseSeqArray(_function.identity); // -------------------------------------------------------------------------------------
// Effect extension functions (similar to the ReaderTaskEither file in this directory)
// -------------------------------------------------------------------------------------

exports.sequenceSeqArray = sequenceSeqArray;

const orElseW = f => rie => (0, _function.pipe)(rie, orElse((0, _function.unsafeCoerce)(f)));

exports.orElseW = orElseW;

const chainWFirst = f => ma => env => () => {
  const ea = run(ma, env);
  return (0, _function.pipe)(ea, E.fold(err => E.left(err), a => {
    run(f(a), env);
    return ea;
  }));
};

exports.chainWFirst = chainWFirst;

const withEnv = () => r => (0, _function.pipe)(ask(), chainW(() => r));

exports.withEnv = withEnv;

const toLeft = riea => env => () => (0, _function.pipe)(run(riea, env), E.fold(e => E.left(e), a => E.left(a)));

exports.toLeft = toLeft;

const onLeft = f => rie => (0, _function.pipe)(rie, orElseW(e => {
  return (0, _function.pipe)(toLeft(f(e)), mapLeft(() => e));
}));

exports.onLeft = onLeft;

const runP = r => rie => run(rie, r);
/**
 * A ReaderIOEither that performs a noOp computation
 *
 * It uses an empty environment and cannot fail.
 */


exports.runP = runP;
const noOpRIE = fromIO(_IO2.noOpIO);
/**
 * Provides the required environment to a ReaderIOEither,
 * converting it into a TaskEither.
 *
 * Similar to `runP` but delays execution.
 */

exports.noOpRIE = noOpRIE;

const provide = r => rie => () => run(rie, r);
/**
 * Provides a subset of a ReaderIOEither's required environment,
 * returning a new ReaderIOEither with a narrowed environment requirement.
 *
 * Similar to `provide` but does not completely fulfill the RIE's requirements.
 * Think of this as partial application for RIE dependencies.
 */


exports.provide = provide;

const providePartial = q => rie => r => () => run(rie, { ...q,
  ...r
});

exports.providePartial = providePartial;