"use strict";

var _Foldable = require("../Foldable");

var _remoteDataTs = require("@devexperts/remote-data-ts");

var _Option = require("fp-ts/lib/Option");

var _Array = require("fp-ts/lib/Array");

var _Either = require("fp-ts/lib/Either");

var _function = require("fp-ts/lib/function");

var _fastCheck = _interopRequireDefault(require("fast-check"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('and', () => {
  describe('should work on Option<boolean>', () => {
    const and_ = (0, _Foldable.and)(_Option.option);
    test.each([[_Option.none, true], [(0, _Option.some)(false), false], [(0, _Option.some)(true), true]])('when given %p, should return %p', (x, expected) => {
      const actual = and_(x);
      expect(actual).toEqual(expected);
    });
  });
  describe('should work on RemoteData<T, boolean>', () => {
    const and_ = (0, _Foldable.and)(_remoteDataTs.remoteData);
    test.each([[_remoteDataTs.initial, true], [_remoteDataTs.pending, true], [(0, _remoteDataTs.failure)('Oops!'), true], [(0, _remoteDataTs.failure)(true), true], [(0, _remoteDataTs.success)(true), true], [(0, _remoteDataTs.success)(false), false]])('when given %p, should return %p', (x, expected) => {
      const actual = and_(x);
      expect(actual).toEqual(expected);
    });
  });
  describe('should work on Either<T, boolean>', () => {
    const and_ = (0, _Foldable.and)(_Either.either);
    test.each([[(0, _Either.left)(false), true], [(0, _Either.left)(true), true], [(0, _Either.right)(false), false], [(0, _Either.right)(true), true]])('when given %p, should return %p', (x, expected) => {
      const actual = and_(x);
      expect(actual).toEqual(expected);
    });
  });
  describe('should work on Array<boolean>', () => {
    const and_ = (0, _Foldable.and)(_Array.array);
    test.each([[[], true], [[false], false], [[true], true], [[false, true], false], [[true, true], true]])('when given %p, should return %p', (x, expected) => {
      const actual = and_(x);
      expect(actual).toEqual(expected);
    });
  });
  describe('properties', () => {
    describe('should be equivalent to Array.prototype.every(identity) for F ~ Array', () => {
      const and_ = (0, _Foldable.and)(_Array.array);

      _fastCheck.default.assert(_fastCheck.default.property(_fastCheck.default.array(_fastCheck.default.boolean()), bs => {
        return bs.every(_function.identity) === and_(bs);
      }));
    });
  });
});
describe('or', () => {
  describe('should work on Option<boolean>', () => {
    const or_ = (0, _Foldable.or)(_Option.option);
    test.each([[_Option.none, false], [(0, _Option.some)(false), false], [(0, _Option.some)(true), true]])('when given %p, should return %p', (x, expected) => {
      const actual = or_(x);
      expect(actual).toEqual(expected);
    });
  });
  describe('should work on RemoteData<T, boolean>', () => {
    const or_ = (0, _Foldable.or)(_remoteDataTs.remoteData);
    test.each([[_remoteDataTs.initial, false], [_remoteDataTs.pending, false], [(0, _remoteDataTs.failure)('Oops!'), false], [(0, _remoteDataTs.failure)(true), false], [(0, _remoteDataTs.success)(true), true], [(0, _remoteDataTs.success)(false), false]])('when given %p, should return %p', (x, expected) => {
      const actual = or_(x);
      expect(actual).toEqual(expected);
    });
  });
  describe('should work on Either<T, boolean>', () => {
    const or_ = (0, _Foldable.or)(_Either.either);
    test.each([[(0, _Either.left)(false), false], [(0, _Either.left)(true), false], [(0, _Either.right)(false), false], [(0, _Either.right)(true), true]])('when given %p, should return %p', (x, expected) => {
      const actual = or_(x);
      expect(actual).toEqual(expected);
    });
  });
  describe('should work on Array<boolean>', () => {
    const or_ = (0, _Foldable.or)(_Array.array);
    test.each([[[], false], [[false], false], [[true], true], [[false, true], true], [[true, true], true]])('when given %p, should return %p', (x, expected) => {
      const actual = or_(x);
      expect(actual).toEqual(expected);
    });
  });
  describe('properties', () => {
    describe('should be equivalent to Array.prototype.some(identity) for F ~ Array', () => {
      const or_ = (0, _Foldable.or)(_Array.array);

      _fastCheck.default.assert(_fastCheck.default.property(_fastCheck.default.array(_fastCheck.default.boolean()), bs => {
        return bs.some(_function.identity) === or_(bs);
      }));
    });
  });
});
describe('all', () => {
  describe('should work on Option<boolean>', () => {
    const all_ = (0, _Foldable.all)(_Option.option);
    test.each([[_Option.none, true], [(0, _Option.some)(false), false], [(0, _Option.some)(true), true]])('when given %p, should return %p', (x, expected) => {
      const actual = all_(_function.identity, x);
      expect(actual).toEqual(expected);
    });
  });
  describe('should work on RemoteData<T, boolean>', () => {
    const all_ = (0, _Foldable.all)(_remoteDataTs.remoteData);
    test.each([[_remoteDataTs.initial, true], [_remoteDataTs.pending, true], [(0, _remoteDataTs.failure)('Oops!'), true], [(0, _remoteDataTs.failure)(true), true], [(0, _remoteDataTs.success)(true), true], [(0, _remoteDataTs.success)(false), false]])('when given %p, should return %p', (x, expected) => {
      const actual = all_(_function.identity, x);
      expect(actual).toEqual(expected);
    });
  });
  describe('should work on Either<T, boolean>', () => {
    const all_ = (0, _Foldable.all)(_Either.either);
    test.each([[(0, _Either.left)(false), true], [(0, _Either.left)(true), true], [(0, _Either.right)(false), false], [(0, _Either.right)(true), true]])('when given %p, should return %p', (x, expected) => {
      const actual = all_(_function.identity, x);
      expect(actual).toEqual(expected);
    });
  });
  describe('should work on Array<boolean>', () => {
    const all_ = (0, _Foldable.all)(_Array.array);
    test.each([[[], true], [[false], false], [[true], true], [[false, true], false], [[true, true], true]])('when given %p, should return %p', (x, expected) => {
      const actual = all_(_function.identity, x);
      expect(actual).toEqual(expected);
    });
  });
  describe('properties', () => {
    describe('should be equivalent to Array.prototype.every(pred) for F ~ Array', () => {
      const all_ = (0, _Foldable.all)(_Array.array);

      _fastCheck.default.assert(_fastCheck.default.property(_fastCheck.default.array(_fastCheck.default.boolean()), bs => {
        return bs.every(_function.identity) === all_(_function.identity, bs);
      }));
    });
  });
});
describe('any', () => {
  describe('should work on Option<boolean>', () => {
    const any_ = (0, _Foldable.any)(_Option.option);
    test.each([[_Option.none, false], [(0, _Option.some)(false), false], [(0, _Option.some)(true), true]])('when given %p, should return %p', (x, expected) => {
      const actual = any_(_function.identity, x);
      expect(actual).toEqual(expected);
    });
  });
  describe('should work on RemoteData<T, boolean>', () => {
    const any_ = (0, _Foldable.any)(_remoteDataTs.remoteData);
    test.each([[_remoteDataTs.initial, false], [_remoteDataTs.pending, false], [(0, _remoteDataTs.failure)('Oops!'), false], [(0, _remoteDataTs.failure)(true), false], [(0, _remoteDataTs.success)(true), true], [(0, _remoteDataTs.success)(false), false]])('when given %p, should return %p', (x, expected) => {
      const actual = any_(_function.identity, x);
      expect(actual).toEqual(expected);
    });
  });
  describe('should work on Either<T, boolean>', () => {
    const any_ = (0, _Foldable.any)(_Either.either);
    test.each([[(0, _Either.left)(false), false], [(0, _Either.left)(true), false], [(0, _Either.right)(false), false], [(0, _Either.right)(true), true]])('when given %p, should return %p', (x, expected) => {
      const actual = any_(_function.identity, x);
      expect(actual).toEqual(expected);
    });
  });
  describe('should work on Array<boolean>', () => {
    const any_ = (0, _Foldable.any)(_Array.array);
    test.each([[[], false], [[false], false], [[true], true], [[false, true], true], [[true, true], true]])('when given %p, should return %p', (x, expected) => {
      const actual = any_(_function.identity, x);
      expect(actual).toEqual(expected);
    });
  });
  describe('properties', () => {
    describe('should be equivalent to Array.prototype.some(pred) for F ~ Array', () => {
      const any_ = (0, _Foldable.any)(_Array.array);

      _fastCheck.default.assert(_fastCheck.default.property(_fastCheck.default.array(_fastCheck.default.boolean()), bs => {
        return bs.some(_function.identity) === any_(_function.identity, bs);
      }));
    });
  });
});