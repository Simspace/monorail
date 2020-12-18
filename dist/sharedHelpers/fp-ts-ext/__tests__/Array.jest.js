"use strict";

var _expectType = require("expect-type");

var _fastCheck = _interopRequireDefault(require("fast-check"));

var _Array = require("fp-ts/lib/Array");

var _Either = require("fp-ts/lib/Either");

var _Eq = require("fp-ts/lib/Eq");

var _function = require("fp-ts/lib/function");

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _IO = require("../IO");

var _Array2 = require("../Array");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// tslint:disable-next-line:no-implicit-dependencies
const isGreaterThanZero = x => x > 0;

describe('all', () => {
  it('should return false when a member of the array does not hold true for a predicate', () => {
    const actual = (0, _Array2.all)([-1, 0, 1, 2, 3], isGreaterThanZero);
    const expected = false;
    expect(actual).toBe(expected);
  });
  it('should return true when a predicate holds true for all members of an array', () => {
    const actual = (0, _Array2.all)([1, 2, 3, 4, 5], isGreaterThanZero);
    const expected = true;
    expect(actual).toBe(expected);
  });
});
describe('any', () => {
  it('should return true when a predicate holds true for any member of an array', () => {
    const actual = (0, _Array2.any)([-5, 0, -3, 2], isGreaterThanZero);
    const expected = true;
    expect(actual).toBe(expected);
  });
  it('should return false when a predicate holds true for no members of an array', () => {
    const actual = (0, _Array2.any)([-5, -4, -3, -2, -1], isGreaterThanZero);
    const expected = false;
    expect(actual).toBe(expected);
  });
});
describe('compactNullable', () => {
  it('should remove all null and undefined members of an array', () => {
    const actual = (0, _Array2.compactNullable)([1, null, 3, 4, undefined, 6, 7]);
    const expected = [1, 3, 4, 6, 7];
    expect(actual).toEqual(expected);
  });
  it('should not remove falsey items', () => {
    const actual = (0, _Array2.compactNullable)([0, false, -1]);
    const expected = [0, false, -1];
    expect(actual).toEqual(expected);
  });
});
describe('concat', () => {
  it('should concatenate arrays correctly', () => {
    const actual = (0, _Array2.concat)([0])([1]);

    const expected = _Array.array.alt([0], () => [1]);

    expect(actual).toEqual(expected);
  });
});
describe('concatFlipped', () => {
  it('should concatenate arrays correctly with the arguments flipped', () => {
    const actual = (0, _Array2.concatFlipped)([0])([1]);

    const expected = _Array.array.alt([1], () => [0]);

    expect(actual).toEqual(expected);
  });
});
describe('contains', () => {
  it('should return true when an array contains an element', () => {
    const actual = (0, _Array2.contains)(0)([0, 1, 2]);
    const expected = true;
    expect(actual).toBe(expected);
  });
  it('should return false when an array does not contain an element', () => {
    const actual = (0, _Array2.contains)(5)([0, 1, 2]);
    const expected = false;
    expect(actual).toBe(expected);
  });
});
describe('containsEq', () => {
  it('should return true when x is in xs', () => {
    const actual = (0, _Array2.containsEq)(_Eq.eqNumber)(3)([3, 4, 5]);
    const expected = true;
    expect(actual).toBe(expected);
  });
  it('should return false when xs is not in xs', () => {
    const actual = (0, _Array2.containsEq)(_Eq.eqNumber)(1)([4, 5, 6]);
    const expected = false;
    expect(actual).toBe(expected);
  });
});
describe('containsAny', () => {
  it('should return true when xs contains an element in ys', () => {
    const actual = (0, _Array2.containsAny)(_Eq.eqNumber)([1, 2, 3])([3, 4, 5]);
    const expected = true;
    expect(actual).toBe(expected);
  });
  it('should return false when xs does not contain an element in ys', () => {
    const actual = (0, _Array2.containsAny)(_Eq.eqNumber)([1, 2, 3])([4, 5, 6]);
    const expected = false;
    expect(actual).toBe(expected);
  });
});
describe('forEach', () => {
  it('should perform a side-effect using each elem of the array', () => {
    const getActual = seed => {
      let mut = seed;
      (0, _Array2.forEach)([0, 1, 2, 3, 4], x => mut += x);
      return mut;
    };

    const actual = getActual(0);
    const expected = 10;
    expect(actual).toBe(expected);
  });
});
describe('forEachPipe', () => {
  it('should perform a side-effect using each elem of the array', () => {
    const getActual = seed => {
      let mut = seed;
      (0, _Array2.forEachPipe)(x => mut += x)([0, 1, 2, 3, 4]);
      return mut;
    };

    const actual = getActual(2);
    const expected = 12;
    expect(actual).toBe(expected);
  });
});
describe('forEachWithIndex', () => {
  it('should perform a side-effect using each elem & index of the array', () => {
    const getActual = seed => {
      let mut = seed;
      (0, _Array2.forEachWithIndex)([0, 1, 2, 3, 4], (x, i) => mut += x + i);
      return mut;
    };

    const actual = getActual(0);
    const expected = 20;
    expect(actual).toBe(expected);
  });
});
describe('intersperse', () => {
  it('should insert a value in between all elements of an array', () => {
    const actual = (0, _Array2.intersperse)('_', ['a', 'b', 'c']);
    const expected = ['a', '_', 'b', '_', 'c'];
    expect(actual).toEqual(expected);
  });
});
describe('intersperseMap', () => {
  it('should insert the value returned by a function in between all elements of an array', () => {
    const actual = (0, _Array2.intersperseMap)(x => `${x}_`, ['a', 'b', 'c']);
    const expected = ['a', 'a_', 'b', 'b_', 'c'];
    expect(actual).toEqual(expected);
  });
});
describe('intersperseMapWithIndex', () => {
  it('should insert the value returned by a function in between all elements of an array', () => {
    const actual = (0, _Array2.intersperseMapWithIndex)((x, i) => `${i}_`, ['a', 'b', 'c']);
    const expected = ['a', '0_', 'b', '1_', 'c'];
    expect(actual).toEqual(expected);
  });
});
describe('leftsAndRights', () => {
  it('should separate & extract the lefts & rights in an array of eithers', () => {
    const eithers = [(0, _Either.left)('error'), (0, _Either.right)(0), (0, _Either.right)(5)];
    const actual = (0, _Array2.leftsAndRights)(eithers);
    const expected = {
      lefts: ['error'],
      rights: [0, 5]
    };
    expect(actual).toEqual(expected);
  });
});
describe('sortByAlpha', () => {
  it('should sort a list of strings alphabetically', () => {
    const actual = (0, _Array2.sortByAlpha)(['blueberry', 'apple', 'cranberry']);
    const expected = ['apple', 'blueberry', 'cranberry'];
    expect(actual).toEqual(expected);
  });
});
describe('sortByNumeric', () => {
  it('should sort a list of strings numerically', () => {
    const actual = (0, _Array2.sortByNumeric)([5, 3, 7, 4]);
    const expected = (0, _Array2.sortByNumeric)([3, 4, 5, 7]);
    expect(actual).toEqual(expected);
  });
});
describe('len', () => {
  it('should return the length of an array', () => {
    const a = [0, 1, 2, 3];
    const actual = a.length;
    const expected = (0, _Array2.len)(a);
    expect(actual).toBe(expected);
  });
});
describe('map', () => {
  it('should transform the values in an array', () => {
    const a = [0, 1, 2, 3];
    const actual = (0, _Array2.map)(x => x + 1)(a);
    const expected = [1, 2, 3, 4];
    expect(actual).toEqual(expected);
  });
});
describe('notAny', () => {
  it('should return false when a predicate holds true for any member of an array', () => {
    const actual = (0, _Array2.notAny)([-5, 0, -3, 2], isGreaterThanZero);
    const expected = false;
    expect(actual).toBe(expected);
  });
  it('should return true when a predicate holds true for no members of an array', () => {
    const actual = (0, _Array2.notAny)([-5, -4, -3, -2, -1], isGreaterThanZero);
    const expected = true;
    expect(actual).toBe(expected);
  });
});
describe('runIOs', () => {
  it('run a series of side-effects contained within IOs', () => {
    const getActual = seed => {
      let mut = seed;
      const ios = [(0, _IO.newIO)(() => {
        mut += 1;
      }), (0, _IO.newIO)(() => {
        mut += 3;
      }), (0, _IO.newIO)(() => {
        mut += 5;
      })];
      (0, _Array2.runIOs)(ios);
      return mut;
    };

    const actual = getActual(0);
    const expected = 9;
    expect(actual).toBe(expected);
  });
});
describe('xor', () => {
  test.each([[[1, 2, 3], [4, 5, 6], [1, 2, 3, 4, 5, 6]], [[1, 2, 3], [3, 4, 5, 6], [1, 2, 4, 5, 6]], [[1, 2, 3, 4], [3, 5, 6], [1, 2, 4, 5, 6]], [[], [], []], [[1], [], [1]], [[], [1], [1]], [[], [-1], [-1]], [[], [0], [0]], [[1], [1], []], [[1], [2], [1, 2]]])('when given %p and %p, should return %p', (xs, ys, expected) => {
    const actual = (0, _Array2.xor)(_Eq.eqNumber)(xs, ys);
    expect(actual).toEqual(expected);
  });
  test.each([[['a', 'b', 'c'], ['4', '5', '6'], ['a', 'b', 'c', '4', '5', '6']], [['a', 'b', 'c'], ['4', '5', '6', 'c'], ['a', 'b', '4', '5', '6']], [['a', 'b', 'c', 'd', 'e'], ['c'], ['a', 'b', 'd', 'e']], [[], [], []], [['a'], [], ['a']], [['a'], ['a'], []], [['a'], ['b'], ['a', 'b']]])('when given %p and %p, should return %p', (xs, ys, expected) => {
    const actual = (0, _Array2.xor)(_Eq.eqString)(xs, ys);
    expect(actual).toEqual(expected);
  });
  describe('properties', () => {
    const arrNumEq = (0, _Array.getEq)(_Eq.eqNumber);
    const numXor = (0, _Array2.xor)(_Eq.eqNumber);
    test('identity', () => {
      _fastCheck.default.assert(_fastCheck.default.property(_fastCheck.default.set(_fastCheck.default.integer()), xs => {
        return arrNumEq.equals(numXor(xs, []), xs) && arrNumEq.equals(numXor([], xs), xs);
      }));
    });
    test('self inverse', () => {
      _fastCheck.default.assert(_fastCheck.default.property(_fastCheck.default.set(_fastCheck.default.integer()), xs => {
        return arrNumEq.equals(numXor(xs, xs), []);
      }));
    });
    test('combined inputs contain the result', () => {
      _fastCheck.default.assert(_fastCheck.default.property(_fastCheck.default.set(_fastCheck.default.integer()), _fastCheck.default.set(_fastCheck.default.integer()), (xs, ys) => {
        const combined = [...xs, ...ys];
        return numXor(xs, ys).every(n => combined.includes(n));
      }));
    });
    test('commutative', () => {
      _fastCheck.default.assert(_fastCheck.default.property(_fastCheck.default.set(_fastCheck.default.integer()), _fastCheck.default.set(_fastCheck.default.integer()), (xs, ys) => {
        return arrNumEq.equals(numXor(xs, ys).sort(), numXor(ys, xs).sort());
      }));
    });
    test('associative', () => {
      _fastCheck.default.assert(_fastCheck.default.property(_fastCheck.default.set(_fastCheck.default.integer()), _fastCheck.default.set(_fastCheck.default.integer()), _fastCheck.default.set(_fastCheck.default.integer()), (xs, ys, zs) => {
        return arrNumEq.equals(numXor(numXor(xs, ys), zs).sort(), numXor(xs, numXor(ys, zs)).sort());
      }));
    });
  });
});
describe('rle', () => {
  it('should calculate the run-length encoding', () => {
    expect((0, _Array2.rle)(_Eq.eqString)('aaabba'.split(''))).toEqual([['a', 3], ['b', 2], ['a', 1]]);
    expect((0, _Array2.rle)(_Eq.eqString)('abc'.split(''))).toEqual([['a', 1], ['b', 1], ['c', 1]]);
    expect((0, _Array2.rle)(_Eq.eqString)([])).toEqual([]);
  });
});
describe('zip', () => {
  it('should work with arbitrarily many arguments', () => {
    const expected = [[1, 'a', 'z', 0xff], [2, 'b', 'y', 0xfe], [3, 'c', 'x', 0xfd], [4, 'd', 'w', 0xfc]];
    const original = [[1, 2, 3, 4], ['a', 'b', 'c', 'd'], ['z', 'y', 'x', 'w'], [0xff, 0xfe, 0xfd, 0xfc]];
    const actual4 = (0, _Array2.zip)(...original);
    expect(actual4).toEqual(expected);
    const actual3 = (0, _Array2.zip)(...original.map(x => x.slice(0, 3)));
    expect(actual3).toEqual(expected.slice(0, 3));
    const actual2 = (0, _Array2.zip)(...original.map(x => x.slice(0, 2)));
    expect(actual2).toEqual(expected.slice(0, 2));
    const actual1 = (0, _Array2.zip)(...original.map(x => x.slice(0, 1)));
    expect(actual1).toEqual(expected.slice(0, 1));
  });
  it('should infer tuple types from arguments', () => {
    (0, _expectType.expectTypeOf)((0, _Array2.zip)([1, 2, 3], ['a', 'b', 'c'])).toEqualTypeOf();
    (0, _expectType.expectTypeOf)((0, _Array2.zip)([1], ['a'], [true])).toEqualTypeOf();
    (0, _expectType.expectTypeOf)((0, _Array2.zip)([1], [2], [3], [4], [5])).toEqualTypeOf();
  });
  it('should work with no arguments', () => {
    expect((0, _Array2.zip)()).toEqual([]);
  });
  it('should accept empty arrays', () => {
    expect((0, _Array2.zip)([], [])).toEqual([]);
  });
  it('should only zip up to the shortest argument length', () => {
    expect((0, _Array2.zip)([1, 2], ['a', 'b', 'c'])).toEqual([[1, 'a'], [2, 'b']]);
  });
});
describe('spliceWhere', () => {
  const arr = [1, 2, 3, 4, 5];
  it('should remove elements', () => {
    const expected = [1, 2, 4, 5];
    const actual = (0, _function.pipe)(arr, (0, _Array2.spliceWhere)(a => a === 3)(() => []));
    expect(actual).toEqual(expected);
  });
  it('should add/modify elements', () => {
    const expected = [1, 2, 6, 9, 4, 5];
    const actual = (0, _function.pipe)(arr, (0, _Array2.spliceWhere)(a => a === 3)(x => [x * 2, x * 3]));
    expect(actual).toEqual(expected);
  });
});
describe('findFirstMapWithIndex', () => {
  it('should return none on no match', () => {
    const actual = (0, _Array2.findFirstMapWithIndex)((i, _a) => O.fromPredicate(x => x === 3)(i))([0, 1, 2]);
    expect(actual).toBeNone();
  });
  it('should return some on first match', () => {
    const actual = (0, _Array2.findFirstMapWithIndex)((i, _a) => O.fromPredicate(x => x === 0)(i))([0, 1, 2]);
    expect(actual).toEqualSome(0);
  });
});