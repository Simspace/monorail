"use strict";

var _fastCheck = _interopRequireDefault(require("fast-check"));

var _Array = require("fp-ts/lib/Array");

var _Either = require("fp-ts/lib/Either");

var _Eq = require("fp-ts/lib/Eq");

var _IO = require("fp-ts/lib/IO");

var _Option = require("fp-ts/lib/Option");

var _Array2 = require("../Array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
describe('concat', () => {
  it('should concatenate arrays correctly', () => {
    const actual = (0, _Array2.concat)([0])([1]);

    const expected = _Array.array.alt([0], [1]);

    expect(actual).toEqual(expected);
  });
});
describe('concatFlipped should concatenate arrays correctly', () => {
  it('should concatenate arrays correctly', () => {
    const actual = (0, _Array2.concatFlipped)([1])([0]);

    const expected = _Array.array.alt([1], [0]);

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
describe('liftOption2', () => {
  it('should lift a function of 2 args into the context of Option', () => {
    const add = x => y => x + y;

    const addOpt = (0, _Array2.liftOption2)(add);
    const actual = addOpt((0, _Option.some)(3))((0, _Option.some)(5)).getOrElse(0);
    const expected = 8;
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
      const ios = [new _IO.IO(() => {
        mut += 1;
      }), new _IO.IO(() => {
        mut += 3;
      }), new _IO.IO(() => {
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
      _fastCheck.default.assert(_fastCheck.default.property(_fastCheck.default.array(_fastCheck.default.integer()), xs => {
        return arrNumEq.equals(numXor(xs, []), xs) && arrNumEq.equals(numXor([], xs), xs);
      }));
    });
    test('self inverse', () => {
      _fastCheck.default.assert(_fastCheck.default.property(_fastCheck.default.array(_fastCheck.default.integer()), xs => {
        return arrNumEq.equals(numXor(xs, xs), []);
      }));
    });
    test('combined inputs contain the result', () => {
      _fastCheck.default.assert(_fastCheck.default.property(_fastCheck.default.array(_fastCheck.default.integer()), _fastCheck.default.array(_fastCheck.default.integer()), (xs, ys) => {
        const combined = [...xs, ...ys];
        return numXor(xs, ys).every(n => combined.includes(n));
      }));
    });
    test('commutative', () => {
      _fastCheck.default.assert(_fastCheck.default.property(_fastCheck.default.array(_fastCheck.default.integer()), _fastCheck.default.array(_fastCheck.default.integer()), (xs, ys) => {
        return arrNumEq.equals(numXor(xs, ys).sort(), numXor(ys, xs).sort());
      }));
    });
    test('associative', () => {
      _fastCheck.default.assert(_fastCheck.default.property(_fastCheck.default.array(_fastCheck.default.integer()), _fastCheck.default.array(_fastCheck.default.integer()), _fastCheck.default.array(_fastCheck.default.integer()), (xs, ys, zs) => {
        return arrNumEq.equals(numXor(numXor(xs, ys), zs), numXor(xs, numXor(ys, zs)));
      }));
    });
  });
});