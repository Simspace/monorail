"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "fromEither", {
  enumerable: true,
  get: function () {
    return _remoteDataTs.fromEither;
  }
});
exports.toOption = exports.toNullable = exports.toEither = exports.recoverMap = exports.recover = exports.isSuccess = exports.isPending = exports.isInitial = exports.isFailure = exports.getOrElse = exports.getEq = exports.fromOption = exports.fold = exports.exists = exports.elem = exports.reduceRight = exports.reduce = exports.mapLeft = exports.map = exports.foldMap = exports.flatten = exports.extend = exports.duplicate = exports.chainFirst = exports.chain = exports.bimap = exports.apSecond = exports.apFirst = exports.ap = exports.alt = void 0;

var _remoteDataTs = require("@devexperts/remote-data-ts");

var _pipeable = require("fp-ts/lib/pipeable");

var _fpTsImports = require("../fp-ts-imports");

const {
  alt,
  ap,
  apFirst,
  apSecond,
  bimap,
  chain,
  chainFirst,
  duplicate,
  extend,
  flatten,
  foldMap,
  map,
  mapLeft,
  reduce,
  reduceRight
} = (0, _pipeable.pipeable)(_remoteDataTs.remoteData);
/**
 * Compare values and returns `true` if they are identical, otherwise returns
 * `false`. `Left` part will return `false`. `RemoteSuccess` will call
 * `Eq.equals`.
 *
 * If you want to compare `RemoteData}'s values better use `getEq`
 * or `getOrd` helpers.
 *
 */

exports.reduceRight = reduceRight;
exports.reduce = reduce;
exports.mapLeft = mapLeft;
exports.map = map;
exports.foldMap = foldMap;
exports.flatten = flatten;
exports.extend = extend;
exports.duplicate = duplicate;
exports.chainFirst = chainFirst;
exports.chain = chain;
exports.bimap = bimap;
exports.apSecond = apSecond;
exports.apFirst = apFirst;
exports.ap = ap;
exports.alt = alt;
const elem = _fpTsImports.RD.elem;
/**
 * Takes a predicate and apply it to `RemoteSuccess` value.
 * `Left` part will return `false`.
 */

exports.elem = elem;
const exists = _fpTsImports.RD.exists;
/**
 * Needed for "unwrap" value from `RemoteData` "container".
 * It applies a function to each case in the data structure.
 *
 * @example
 * const onInitial = "it's initial"
 * const onPending = "it's pending"
 * const onFailure = (err) => "it's failure"
 * const onSuccess = (data) => `${data + 1}`
 * const f = fold(onInitial, onPending, onFailure, onSuccess)
 *
 * f(initial) // "it's initial"
 * f(pending) // "it's pending"
 * f(failure(new Error('error text'))) // "it's failure"
 * f(success(21)) // '22'
 */

exports.exists = exists;
const fold = _fpTsImports.RD.fold;
exports.fold = fold;

const fromOption = onNone => o => (0, _remoteDataTs.fromOption)(o, onNone);

exports.fromOption = fromOption;
const getEq = _fpTsImports.RD.getEq;
/**
 * Takes a default value as an argument. If this `RemoteData` is "Left"
 * part it will return default value. If this `RemoteData` is
 * `RemoteSuccess` it will return it's value ("wrapped" value, not default
 * value)
 *
 * Note: Default value should be the same type as `RemoteData` (internal)
 * value, if you want to pass different type as default, use `fold`.
 *
 * @example
 * getOrElse(() => 999)(some(1)) // 1
 * getOrElseValue(() => 999)(initial) // 999
 */

exports.getEq = getEq;
const getOrElse = _fpTsImports.RD.getOrElse;
/**
 * Returns true only if `RemoteData` is `RemoteFailure`
 */

exports.getOrElse = getOrElse;
const isFailure = _fpTsImports.RD.isFailure;
/**
 * Returns true only if `RemoteData` is `RemoteInitial`
 */

exports.isFailure = isFailure;
const isInitial = _fpTsImports.RD.isInitial;
/**
 * Returns true only if `RemoteData} is `RemotePending`
 */

exports.isInitial = isInitial;
const isPending = _fpTsImports.RD.isPending;
/**
 * Returns true only if `RemoteData` is `RemoteSuccess`
 */

exports.isPending = isPending;
const isSuccess = _fpTsImports.RD.isSuccess;
/**
 * Maps this `RemoteFailure` error into `RemoteSuccess` if passed
 * function `f` returns `Some` value, otherwise returns self
 */

exports.isSuccess = isSuccess;
const recover = _fpTsImports.RD.recover;
/**
 * Recovers `RemoteFailure` also mapping `RemoteSuccess` case
 * @see `recover`
 */

exports.recover = recover;
const recoverMap = _fpTsImports.RD.recoverMap;
/**
 * Convert `RemoteData` to `Either`.
 * `Left` part will be converted to `Left<L>`.
 * Since `RemoteInitial} and `RemotePending` do not have `L` values,
 * you must provide a value of type `L` that will be used to construct
 * the `Left<L>` for those two cases.
 * `RemoteSuccess` will be converted to `Right<R>`.
 *
 * @example:
 * const f = toEither(
 * 		() => new Error('Data not fetched'),
 * 		() => new Error('Data is fetching')
 * )
 * f(success(2)) // right(2)
 * f(initial) // right(Error('Data not fetched'))
 * f(pending) // right(Error('Data is fetching'))
 * f(failure(new Error('error text'))) // right(Error('error text'))
 */

exports.recoverMap = recoverMap;
const toEither = _fpTsImports.RD.toEither;
/**
 * One more way to fold (unwrap) value from `RemoteData`.
 * `Left` part will return `null`.
 * `RemoteSuccess` will return value.
 *
 * For example:
 *
 * `toNullable(success(2))` will return `2`
 *
 * `toNullable(initial)` will return `null`
 *
 * `toNullable(pending)` will return `null`
 *
 * `toNullable(failure(new Error('error text')))` will return `null`
 *
 */

exports.toEither = toEither;
const toNullable = _fpTsImports.RD.toNullable;
/**
 * Convert `RemoteData` to `Option`
 * `Left` part will be converted to `None`.
 * `RemoteSuccess} will be converted to `Some`.
 *
 * @example
 * toOption(success(2)) // some(2)
 * toOption(initial) // none
 * toOption(pending) // none
 * toOption(failure(new Error('error text'))) // none
 */

exports.toNullable = toNullable;
const toOption = _fpTsImports.RD.toOption;
exports.toOption = toOption;