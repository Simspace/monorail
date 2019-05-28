"use strict";

var _Either = require("fp-ts/lib/Either");

var _Option = require("fp-ts/lib/Option");

var t = _interopRequireWildcard(require("io-ts"));

var _jsonEncodersDecoders = require("../jsonEncodersDecoders");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const roundTrip = codec => {
  const OptionFromJSON = (0, _jsonEncodersDecoders.createOptionFromJSON)(codec);
  return ma => {
    const stringified = JSON.stringify(ma);
    const parsed = JSON.parse(stringified);
    const result = OptionFromJSON.decode(parsed);
    const expected = (0, _Either.right)(ma);
    return {
      result,
      expected
    };
  };
};

const roundTripTest = roundTrip(t.number);
describe('createOptionFromJSON', () => {
  it('properly encodes and decodes Some', () => {
    const numOpt = (0, _Option.some)(1);
    const {
      result,
      expected
    } = roundTripTest(numOpt);
    expect(result).toEqual(expected);
  });
  it('properly encodes and decodes None', () => {
    const {
      result,
      expected
    } = roundTripTest(_Option.none);
    expect(result).toEqual(expected);
  });
});