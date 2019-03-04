"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mkJSONOptionDecoderSelector = exports.createOptionFromJSON = exports.fold = exports.isJSONSome = exports.isJSONNone = exports.jsonSome = exports.jsonNone = void 0;

var t = _interopRequireWildcard(require("io-ts"));

var _Option = require("fp-ts/lib/Option");

var _Console = require("fp-ts/lib/Console");

var _IO = require("fp-ts/lib/IO");

var _function = require("fp-ts/lib/function");

var _general = require("./general");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * JSONNone constructor
 */
const jsonNone = {
  _tag: 'None'
  /**
   * JSONSome constructor
   */

};
exports.jsonNone = jsonNone;

const jsonSome = value => {
  return {
    _tag: 'Some',
    value
  };
};
/**
 * Type guard for isJSONNone
 */


exports.jsonSome = jsonSome;

const isJSONNone = x => x._tag === 'None';
/**
 * Type guard for isJSONSome
 */


exports.isJSONNone = isJSONNone;

const isJSONSome = x => x._tag === 'Some';
/**
 * Fold function for JSONOption<A>
 */


exports.isJSONSome = isJSONSome;

const fold = (fa, onNone, onSome) => isJSONNone(fa) ? onNone : onSome(fa.value);
/**
 * Helper utility for creating a codec for Option<A> <- -> JSONOption<A>
 */


exports.fold = fold;

const createOptionFromJSON = (codec, name = `Option<${codec.name}>`) => {
  /** create an io-ts repesentation of JSONNone | JSONSome<A> */
  const JSONOption_ = t.taggedUnion('_tag', [t.type({
    _tag: t.literal('None')
  }), t.type({
    _tag: t.literal('Some'),
    value: codec
  })]);
  /** create a codec for Option<A> <- -> JSONOption<A> */

  return new t.Type(
  /** a unique name for this codec */
  name,
  /** a type guard for determining the type A of some Option<A> */
  u => u instanceof _Option.None || u instanceof _Option.Some && codec.is(u.value),
  /** succeeds if input can be decoded to a value of type Option<t.TypeOf<C>> */
  (u, c) => JSONOption_.validate(u, c).chain(o => t.success(fold(o, _Option.none, a => (0, _Option.fromEither)(codec.decode(a))))),
  /**
   * converts a value of type Option<t.TypeOf<C>> to a value of type
   * JSONOption<t.OutputOf<C>>
   */
  o => o.fold(jsonNone, a => jsonSome(codec.encode(a))));
};
/**
 * Helper utility for creating selectors that automatically handle decoding
 * JSONOptions back into Options when given a codec and a lens
 */


exports.createOptionFromJSON = createOptionFromJSON;

const mkJSONOptionDecoderSelector = codec => lens => s => {
  const encoded = lens.get(s);
  const decoded = codec.decode(encoded);
  const noOpIO = new _IO.IO(_general.constVoid);
  const constNoOpIO = (0, _function.constant)(noOpIO); // TODO: consider better error handling

  const logErrorIO = decoded.fold(errs => (0, _Console.error)({
    message: `Error decoding ${codec.name}`,
    validationErrors: errs
  }), constNoOpIO); // if Right, get Right (Option<B>), else get none

  const decodedOpt = decoded.getOrElse(_Option.none);
  const constDecodedOpt = (0, _function.constant)(decodedOpt);
  const toOptionIO = new _IO.IO(constDecodedOpt);
  const constToOptionIO = (0, _function.constant)(toOptionIO); // log error & then convert to options + continue on like nothing happened

  return logErrorIO.chain(constToOptionIO).run();
};

exports.mkJSONOptionDecoderSelector = mkJSONOptionDecoderSelector;