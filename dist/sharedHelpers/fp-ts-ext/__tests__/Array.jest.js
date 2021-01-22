"use strict";

var _expectType = require("expect-type");

var _fastCheck = _interopRequireDefault(require("fast-check"));

var _fpTsImports = require("../../fp-ts-imports");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// tslint:disable-next-line:no-implicit-dependencies
const isGreaterThanZero = x => x > 0;

describe('all', () => {
  it('should return false when a member of the array does not hold true for a predicate', () => {
    const actual = _fpTsImports.A.all([-1, 0, 1, 2, 3], isGreaterThanZero);

    const expected = false;
    expect(actual).toBe(expected);
  });
  it('should return true when a predicate holds true for all members of an array', () => {
    const actual = _fpTsImports.A.all([1, 2, 3, 4, 5], isGreaterThanZero);

    const expected = true;
    expect(actual).toBe(expected);
  });
});
describe('any', () => {
  it('should return true when a predicate holds true for any member of an array', () => {
    const actual = _fpTsImports.A.any([-5, 0, -3, 2], isGreaterThanZero);

    const expected = true;
    expect(actual).toBe(expected);
  });
  it('should return false when a predicate holds true for no members of an array', () => {
    const actual = _fpTsImports.A.any([-5, -4, -3, -2, -1], isGreaterThanZero);

    const expected = false;
    expect(actual).toBe(expected);
  });
});
describe('compactNullable', () => {
  it('should remove all null and undefined members of an array', () => {
    const actual = _fpTsImports.A.compactNullable([1, null, 3, 4, undefined, 6, 7]);

    const expected = [1, 3, 4, 6, 7];
    expect(actual).toEqual(expected);
  });
  it('should not remove falsey items', () => {
    const actual = _fpTsImports.A.compactNullable([0, false, -1]);

    const expected = [0, false, -1];
    expect(actual).toEqual(expected);
  });
});
describe('concat', () => {
  it('should concatenate arrays correctly', () => {
    const actual = _fpTsImports.A.concat({
      suffix: [1]
    })([0]);

    const expected = [0, 1];
    expect(actual).toEqual(expected);
  });
});
describe('precat', () => {
  it('should concatenate arrays correctly with the arguments flipped', () => {
    const actual = _fpTsImports.A.precat({
      prefix: [0]
    })([1]);

    const expected = [0, 1];
    expect(actual).toEqual(expected);
  });
});
describe('append', () => {
  it('should append an item on an array correctly', () => {
    const actual = _fpTsImports.A.append(1)([0]);

    const expected = [0, 1];
    expect(actual).toEqual(expected);
  });
});
describe('prepend', () => {
  it('should prepend an item on an array correctly', () => {
    const actual = _fpTsImports.A.prepend(0)([1]);

    const expected = [0, 1];
    expect(actual).toEqual(expected);
  });
});
describe('elemP', () => {
  it('should return true when x is in xs', () => {
    const actual = _fpTsImports.A.elemP(_fpTsImports.Eq.eqNumber)(3)([3, 4, 5]);

    const expected = true;
    expect(actual).toBe(expected);
  });
  it('should return false when xs is not in xs', () => {
    const actual = _fpTsImports.A.elemP(_fpTsImports.Eq.eqNumber)(1)([4, 5, 6]);

    const expected = false;
    expect(actual).toBe(expected);
  });
});
describe('elemAny', () => {
  it('should return true when xs contains an element in ys', () => {
    const actual = _fpTsImports.A.elemAny(_fpTsImports.Eq.eqNumber)([1, 2, 3])([3, 4, 5]);

    const expected = true;
    expect(actual).toBe(expected);
  });
  it('should return false when xs does not contain an element in ys', () => {
    const actual = _fpTsImports.A.elemAny(_fpTsImports.Eq.eqNumber)([1, 2, 3])([4, 5, 6]);

    const expected = false;
    expect(actual).toBe(expected);
  });
});
describe('forEach', () => {
  it('should perform a side-effect using each elem of the array', () => {
    const getActual = seed => {
      let mut = seed;
      (0, _fpTsImports.pipe)([0, 1, 2, 3, 4], _fpTsImports.A.forEach(x => mut += x));
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
      (0, _fpTsImports.pipe)([0, 1, 2, 3, 4], _fpTsImports.A.forEachWithIndex((x, i) => mut += x + i));
      return mut;
    };

    const actual = getActual(0);
    const expected = 20;
    expect(actual).toBe(expected);
  });
});
describe('intersperse', () => {
  it('should insert a value in between all elements of an array', () => {
    const actual = _fpTsImports.A.intersperse('_')(['a', 'b', 'c']);

    const expected = ['a', '_', 'b', '_', 'c'];
    expect(actual).toEqual(expected);
  });
});
describe('intersperseMap', () => {
  it('should insert the value returned by a function in between all elements of an array', () => {
    const actual = _fpTsImports.A.intersperseMap(x => `${x}_`)(['a', 'b', 'c']);

    const expected = ['a', 'a_', 'b', 'b_', 'c'];
    expect(actual).toEqual(expected);
  });
});
describe('intersperseMapWithIndex', () => {
  it('should insert the value returned by a function in between all elements of an array', () => {
    const actual = _fpTsImports.A.intersperseMapWithIndex((_, i) => `${i}_`)(['a', 'b', 'c']);

    const expected = ['a', '0_', 'b', '1_', 'c'];
    expect(actual).toEqual(expected);
  });
});
describe('len', () => {
  it('should return the length of an array', () => {
    const a = [0, 1, 2, 3];

    const actual = _fpTsImports.A.len(a);

    const expected = 4;
    expect(actual).toBe(expected);
  });
});
describe('map', () => {
  it('should transform the values in an array', () => {
    const a = [0, 1, 2, 3];

    const actual = _fpTsImports.A.map(x => x + 1)(a);

    const expected = [1, 2, 3, 4];
    expect(actual).toEqual(expected);
  });
});
describe('notAny', () => {
  it('should return false when a predicate holds true for any member of an array', () => {
    const actual = _fpTsImports.A.notAny([-5, 0, -3, 2], isGreaterThanZero);

    const expected = false;
    expect(actual).toBe(expected);
  });
  it('should return true when a predicate holds true for no members of an array', () => {
    const actual = _fpTsImports.A.notAny([-5, -4, -3, -2, -1], isGreaterThanZero);

    const expected = true;
    expect(actual).toBe(expected);
  });
});
describe('xor', () => {
  test.each([[[1, 2, 3], [4, 5, 6], [1, 2, 3, 4, 5, 6]], [[1, 2, 3], [3, 4, 5, 6], [1, 2, 4, 5, 6]], [[1, 2, 3, 4], [3, 5, 6], [1, 2, 4, 5, 6]], [[], [], []], [[1], [], [1]], [[], [1], [1]], [[], [-1], [-1]], [[], [0], [0]], [[1], [1], []], [[1], [2], [1, 2]]])('when given %p and %p, should return %p', (xs, ys, expected) => {
    const actual = _fpTsImports.A.xor(_fpTsImports.Eq.eqNumber)(xs, ys);

    expect(actual).toEqual(expected);
  });
  test.each([[['a', 'b', 'c'], ['4', '5', '6'], ['a', 'b', 'c', '4', '5', '6']], [['a', 'b', 'c'], ['4', '5', '6', 'c'], ['a', 'b', '4', '5', '6']], [['a', 'b', 'c', 'd', 'e'], ['c'], ['a', 'b', 'd', 'e']], [[], [], []], [['a'], [], ['a']], [['a'], ['a'], []], [['a'], ['b'], ['a', 'b']]])('when given %p and %p, should return %p', (xs, ys, expected) => {
    const actual = _fpTsImports.A.xor(_fpTsImports.Eq.eqString)(xs, ys);

    expect(actual).toEqual(expected);
  });
  describe('properties', () => {
    const arrNumEq = _fpTsImports.A.getEq(_fpTsImports.Eq.eqNumber);

    const numXor = _fpTsImports.A.xor(_fpTsImports.Eq.eqNumber);

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
    expect(_fpTsImports.A.rle(_fpTsImports.Eq.eqString)('aaabba'.split(''))).toEqual([['a', 3], ['b', 2], ['a', 1]]);
    expect(_fpTsImports.A.rle(_fpTsImports.Eq.eqString)('abc'.split(''))).toEqual([['a', 1], ['b', 1], ['c', 1]]);
    expect(_fpTsImports.A.rle(_fpTsImports.Eq.eqString)([])).toEqual([]);
  });
});
describe('zip', () => {
  it('should work with arbitrarily many arguments', () => {
    const expected = [[1, 'a', 'z', 0xff], [2, 'b', 'y', 0xfe], [3, 'c', 'x', 0xfd], [4, 'd', 'w', 0xfc]];
    const original = [[1, 2, 3, 4], ['a', 'b', 'c', 'd'], ['z', 'y', 'x', 'w'], [0xff, 0xfe, 0xfd, 0xfc]];

    const actual4 = _fpTsImports.A.zip(...original);

    expect(actual4).toEqual(expected);

    const actual3 = _fpTsImports.A.zip(...original.map(x => x.slice(0, 3)));

    expect(actual3).toEqual(expected.slice(0, 3));

    const actual2 = _fpTsImports.A.zip(...original.map(x => x.slice(0, 2)));

    expect(actual2).toEqual(expected.slice(0, 2));

    const actual1 = _fpTsImports.A.zip(...original.map(x => x.slice(0, 1)));

    expect(actual1).toEqual(expected.slice(0, 1));
  });
  it('should infer tuple types from arguments', () => {
    (0, _expectType.expectTypeOf)(_fpTsImports.A.zip([1, 2, 3], ['a', 'b', 'c'])).toEqualTypeOf();
    (0, _expectType.expectTypeOf)(_fpTsImports.A.zip([1], ['a'], [true])).toEqualTypeOf();
    (0, _expectType.expectTypeOf)(_fpTsImports.A.zip([1], [2], [3], [4], [5])).toEqualTypeOf();
  });
  it('should work with no arguments', () => {
    expect(_fpTsImports.A.zip()).toEqual([]);
  });
  it('should accept empty arrays', () => {
    expect(_fpTsImports.A.zip([], [])).toEqual([]);
  });
  it('should only zip up to the shortest argument length', () => {
    expect(_fpTsImports.A.zip([1, 2], ['a', 'b', 'c'])).toEqual([[1, 'a'], [2, 'b']]);
  });
});
describe('spliceWhere', () => {
  const arr = [1, 2, 3, 4, 5];
  it('should remove elements', () => {
    const expected = [1, 2, 4, 5];
    const actual = (0, _fpTsImports.pipe)(arr, _fpTsImports.A.spliceWhere(a => a === 3)(() => []));
    expect(actual).toEqual(expected);
  });
  it('should add/modify elements', () => {
    const expected = [1, 2, 6, 9, 4, 5];
    const actual = (0, _fpTsImports.pipe)(arr, _fpTsImports.A.spliceWhere(a => a === 3)(x => [x * 2, x * 3]));
    expect(actual).toEqual(expected);
  });
});
describe('findFirstMapWithIndex', () => {
  it('should return none on no match', () => {
    const actual = _fpTsImports.A.findFirstMapWithIndex((i, _a) => _fpTsImports.O.fromPredicate(x => x === 3)(i))([0, 1, 2]);

    expect(actual).toBeNone();
  });
  it('should return some on first match', () => {
    const actual = _fpTsImports.A.findFirstMapWithIndex((i, _a) => _fpTsImports.O.fromPredicate(x => x === 0)(i))([0, 1, 2]);

    expect(actual).toEqualSome(0);
  });
});