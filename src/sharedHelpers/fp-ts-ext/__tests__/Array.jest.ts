import fc from 'fast-check'
import { array, getEq } from 'fp-ts/lib/Array'
import { Either, left, right } from 'fp-ts/lib/Either'
import { eqNumber, eqString } from 'fp-ts/lib/Eq'
import { IO } from 'fp-ts/lib/IO'
import { some } from 'fp-ts/lib/Option'

import {
  all,
  any,
  concat,
  concatFlipped,
  contains,
  forEach,
  forEachWithIndex,
  intersperse,
  intersperseMap,
  intersperseMapWithIndex,
  LeftsAndRights,
  leftsAndRights,
  len,
  liftOption2,
  map,
  notAny,
  runIOs,
  sortByAlpha,
  sortByNumeric,
  xor,
} from '../Array'

const isGreaterThanZero = (x: number): boolean => x > 0

describe('all', () => {
  it('should return false when a member of the array does not hold true for a predicate', () => {
    const actual = all([-1, 0, 1, 2, 3], isGreaterThanZero)
    const expected = false
    expect(actual).toBe(expected)
  })

  it('should return true when a predicate holds true for all members of an array', () => {
    const actual = all([1, 2, 3, 4, 5], isGreaterThanZero)
    const expected = true
    expect(actual).toBe(expected)
  })
})

describe('any', () => {
  it('should return true when a predicate holds true for any member of an array', () => {
    const actual = any([-5, 0, -3, 2], isGreaterThanZero)
    const expected = true
    expect(actual).toBe(expected)
  })

  it('should return false when a predicate holds true for no members of an array', () => {
    const actual = any([-5, -4, -3, -2, -1], isGreaterThanZero)
    const expected = false
    expect(actual).toBe(expected)
  })
})

describe('concat', () => {
  it('should concatenate arrays correctly', () => {
    const actual = concat([0])([1])
    const expected = array.alt([0], [1])
    expect(actual).toEqual(expected)
  })
})

describe('concatFlipped should concatenate arrays correctly', () => {
  it('should concatenate arrays correctly', () => {
    const actual = concatFlipped([1])([0])
    const expected = array.alt([1], [0])
    expect(actual).toEqual(expected)
  })
})

describe('contains', () => {
  it('should return true when an array contains an element', () => {
    const actual = contains(0)([0, 1, 2])
    const expected = true
    expect(actual).toBe(expected)
  })

  it('should return false when an array does not contain an element', () => {
    const actual = contains(5)([0, 1, 2])
    const expected = false
    expect(actual).toBe(expected)
  })
})

describe('forEach', () => {
  it('should perform a side-effect using each elem of the array', () => {
    const getActual = (seed: number) => {
      let mut = seed
      forEach([0, 1, 2, 3, 4], x => (mut += x))
      return mut
    }
    const actual = getActual(0)
    const expected = 10
    expect(actual).toBe(expected)
  })
})

describe('forEachWithIndex', () => {
  it('should perform a side-effect using each elem & index of the array', () => {
    const getActual = (seed: number) => {
      let mut = seed
      forEachWithIndex([0, 1, 2, 3, 4], (x, i) => (mut += x + i))
      return mut
    }
    const actual = getActual(0)
    const expected = 20
    expect(actual).toBe(expected)
  })
})

describe('intersperse', () => {
  it('should insert a value in between all elements of an array', () => {
    const actual = intersperse('_', ['a', 'b', 'c'])
    const expected = ['a', '_', 'b', '_', 'c']
    expect(actual).toEqual(expected)
  })
})

describe('intersperseMap', () => {
  it('should insert the value returned by a function in between all elements of an array', () => {
    const actual = intersperseMap(x => `${x}_`, ['a', 'b', 'c'])
    const expected = ['a', 'a_', 'b', 'b_', 'c']
    expect(actual).toEqual(expected)
  })
})

describe('intersperseMapWithIndex', () => {
  it('should insert the value returned by a function in between all elements of an array', () => {
    const actual = intersperseMapWithIndex((x, i) => `${i}_`, ['a', 'b', 'c'])
    const expected = ['a', '0_', 'b', '1_', 'c']
    expect(actual).toEqual(expected)
  })
})

describe('leftsAndRights', () => {
  it('should separate & extract the lefts & rights in an array of eithers', () => {
    const eithers: Array<Either<string, number>> = [
      left('error'),
      right(0),
      right(5),
    ]
    const actual = leftsAndRights(eithers)
    const expected: LeftsAndRights<string, number> = {
      lefts: ['error'],
      rights: [0, 5],
    }
    expect(actual).toEqual(expected)
  })
})

describe('sortByAlpha', () => {
  it('should sort a list of strings alphabetically', () => {
    const actual = sortByAlpha(['blueberry', 'apple', 'cranberry'])
    const expected = ['apple', 'blueberry', 'cranberry']
    expect(actual).toEqual(expected)
  })
})

describe('sortByNumeric', () => {
  it('should sort a list of strings numerically', () => {
    const actual = sortByNumeric([5, 3, 7, 4])
    const expected = sortByNumeric([3, 4, 5, 7])
    expect(actual).toEqual(expected)
  })
})

describe('len', () => {
  it('should return the length of an array', () => {
    const a = [0, 1, 2, 3]
    const actual = a.length
    const expected = len(a)
    expect(actual).toBe(expected)
  })
})

describe('liftOption2', () => {
  it('should lift a function of 2 args into the context of Option', () => {
    const add = (x: number) => (y: number) => x + y
    const addOpt = liftOption2(add)
    const actual = addOpt(some(3))(some(5)).getOrElse(0)
    const expected = 8
    expect(actual).toBe(expected)
  })
})

describe('map', () => {
  it('should transform the values in an array', () => {
    const a = [0, 1, 2, 3]
    const actual = map((x: number) => x + 1)(a)
    const expected = [1, 2, 3, 4]
    expect(actual).toEqual(expected)
  })
})

describe('notAny', () => {
  it('should return false when a predicate holds true for any member of an array', () => {
    const actual = notAny([-5, 0, -3, 2], isGreaterThanZero)
    const expected = false
    expect(actual).toBe(expected)
  })

  it('should return true when a predicate holds true for no members of an array', () => {
    const actual = notAny([-5, -4, -3, -2, -1], isGreaterThanZero)
    const expected = true
    expect(actual).toBe(expected)
  })
})

describe('runIOs', () => {
  it('run a series of side-effects contained within IOs', () => {
    const getActual = (seed: number) => {
      let mut = seed
      const ios: Array<IO<void>> = [
        new IO(() => {
          mut += 1
        }),
        new IO(() => {
          mut += 3
        }),
        new IO(() => {
          mut += 5
        }),
      ]
      runIOs(ios)
      return mut
    }

    const actual = getActual(0)
    const expected = 9
    expect(actual).toBe(expected)
  })
})

describe('xor', () => {
  test.each([
    [[1, 2, 3], [4, 5, 6], [1, 2, 3, 4, 5, 6]],
    [[1, 2, 3], [3, 4, 5, 6], [1, 2, 4, 5, 6]],
    [[1, 2, 3, 4], [3, 5, 6], [1, 2, 4, 5, 6]],
    [[], [], []],
    [[1], [], [1]],
    [[], [1], [1]],
    [[], [-1], [-1]],
    [[], [0], [0]],
    [[1], [1], []],
    [[1], [2], [1, 2]],
  ])('when given %p and %p, should return %p', (xs, ys, expected) => {
    const actual = xor(eqNumber)(xs, ys)
    expect(actual).toEqual(expected)
  })
  test.each([
    [['a', 'b', 'c'], ['4', '5', '6'], ['a', 'b', 'c', '4', '5', '6']],
    [['a', 'b', 'c'], ['4', '5', '6', 'c'], ['a', 'b', '4', '5', '6']],
    [['a', 'b', 'c', 'd', 'e'], ['c'], ['a', 'b', 'd', 'e']],
    [[], [], []],
    [['a'], [], ['a']],
    [['a'], ['a'], []],
    [['a'], ['b'], ['a', 'b']],
  ])('when given %p and %p, should return %p', (xs, ys, expected) => {
    const actual = xor(eqString)(xs, ys)
    expect(actual).toEqual(expected)
  })

  describe('properties', () => {
    const arrNumEq = getEq(eqNumber)
    const numXor = xor(eqNumber)

    test('identity', () => {
      fc.assert(
        fc.property(fc.array(fc.integer()), xs => {
          return (
            arrNumEq.equals(numXor(xs, []), xs) &&
            arrNumEq.equals(numXor([], xs), xs)
          )
        }),
      )
    })

    test('self inverse', () => {
      fc.assert(
        fc.property(fc.array(fc.integer()), xs => {
          return arrNumEq.equals(numXor(xs, xs), [])
        }),
      )
    })

    test('combined inputs contain the result', () => {
      fc.assert(
        fc.property(
          fc.array(fc.integer()),
          fc.array(fc.integer()),
          (xs, ys) => {
            const combined = [...xs, ...ys]
            return numXor(xs, ys).every(n => combined.includes(n))
          },
        ),
      )
    })

    test('commutative', () => {
      fc.assert(
        fc.property(
          fc.array(fc.integer()),
          fc.array(fc.integer()),
          (xs, ys) => {
            return arrNumEq.equals(numXor(xs, ys).sort(), numXor(ys, xs).sort())
          },
        ),
      )
    })

    test('associative', () => {
      fc.assert(
        fc.property(
          fc.array(fc.integer()),
          fc.array(fc.integer()),
          fc.array(fc.integer()),
          (xs, ys, zs) => {
            return arrNumEq.equals(
              numXor(numXor(xs, ys), zs).sort(),
              numXor(xs, numXor(ys, zs)).sort(),
            )
          },
        ),
      )
    })
  })
})
