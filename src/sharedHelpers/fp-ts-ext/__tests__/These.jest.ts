import { Lens } from 'monocle-ts'
import { O, Th } from '@monorail/sharedHelpers/fp-ts-imports'

import {
  getATraversal,
  getBothPrism,
  getETraversal,
  getLeftPrism,
  getRightPrism,
} from '@monorail/sharedHelpers/fp-ts-ext/These'

type TestType = {
  these: Th.These<number, string>
}

const testTypeToTheseLens = Lens.fromProp<TestType>()('these')
const testTypeToLeftPrism = testTypeToTheseLens.composePrism(getLeftPrism())
const testTypeToRightPrism = testTypeToTheseLens.composePrism(getRightPrism())
const testTypeToBothPrism = testTypeToTheseLens.composePrism(getBothPrism())
const testTypeToETraversal = testTypeToTheseLens.composeTraversal(
  getETraversal(),
)
const testTypeToATraversal = testTypeToTheseLens.composeTraversal(
  getATraversal(),
)

describe('These', () => {
  describe('getLeftPrism', () => {
    test.each([
      { input: { these: Th.left(42) }, expected: O.some(42) },
      { input: { these: Th.right('hi') }, expected: O.none },
      { input: { these: Th.both(42, 'hi') }, expected: O.none },
    ])('get', ({ input, expected }) => {
      expect(testTypeToLeftPrism.getOption(input)).toEqual(expected)
    })

    test.each([
      { input: { these: Th.left(42) }, expected: { these: Th.left(100) } },
      { input: { these: Th.right('hi') }, expected: { these: Th.right('hi') } },
      {
        input: { these: Th.both(42, 'hi') },
        expected: { these: Th.both(42, 'hi') },
      },
    ])('set', ({ input, expected }) => {
      expect(testTypeToLeftPrism.set(100)(input)).toEqual(expected)
    })

    test.each([
      { input: { these: Th.left(42) }, expected: { these: Th.left(84) } },
      { input: { these: Th.right('hi') }, expected: { these: Th.right('hi') } },
      {
        input: { these: Th.both(42, 'hi') },
        expected: { these: Th.both(42, 'hi') },
      },
    ])('modify', ({ input, expected }) => {
      expect(testTypeToLeftPrism.modify(x => x * 2)(input)).toEqual(expected)
    })
  })

  describe('getRightPrism', () => {
    test.each([
      { input: { these: Th.left(42) }, expected: O.none },
      { input: { these: Th.right('hi') }, expected: O.some('hi') },
      { input: { these: Th.both(42, 'hi') }, expected: O.none },
    ])('get', ({ input, expected }) => {
      expect(testTypeToRightPrism.getOption(input)).toEqual(expected)
    })

    test.each([
      { input: { these: Th.left(42) }, expected: { these: Th.left(42) } },
      {
        input: { these: Th.right('hi') },
        expected: { these: Th.right('abc') },
      },
      {
        input: { these: Th.both(42, 'hi') },
        expected: { these: Th.both(42, 'hi') },
      },
    ])('set', ({ input, expected }) => {
      expect(testTypeToRightPrism.set('abc')(input)).toEqual(expected)
    })

    test.each([
      { input: { these: Th.left(42) }, expected: { these: Th.left(42) } },
      {
        input: { these: Th.right('hi') },
        expected: { these: Th.right('hihi') },
      },
      {
        input: { these: Th.both(42, 'hi') },
        expected: { these: Th.both(42, 'hi') },
      },
    ])('modify', ({ input, expected }) => {
      expect(testTypeToRightPrism.modify(x => x + x)(input)).toEqual(expected)
    })
  })

  describe('getBothPrism', () => {
    test.each([
      { input: { these: Th.left(42) }, expected: O.none },
      { input: { these: Th.right('hi') }, expected: O.none },
      { input: { these: Th.both(42, 'hi') }, expected: O.some([42, 'hi']) },
    ])('get', ({ input, expected }) => {
      expect(testTypeToBothPrism.getOption(input)).toEqual(expected)
    })

    test.each([
      { input: { these: Th.left(42) }, expected: { these: Th.left(42) } },
      {
        input: { these: Th.right('hi') },
        expected: { these: Th.right('hi') },
      },
      {
        input: { these: Th.both(42, 'hi') },
        expected: { these: Th.both(100, 'abc') },
      },
    ])('set', ({ input, expected }) => {
      expect(testTypeToBothPrism.set([100, 'abc'])(input)).toEqual(expected)
    })

    test.each([
      { input: { these: Th.left(42) }, expected: { these: Th.left(42) } },
      {
        input: { these: Th.right('hi') },
        expected: { these: Th.right('hi') },
      },
      {
        input: { these: Th.both(42, 'hi') },
        expected: { these: Th.both(84, 'hihi') },
      },
    ])('modify', ({ input, expected }) => {
      expect(
        testTypeToBothPrism.modify(([a, b]) => [a * 2, b + b])(input),
      ).toEqual(expected)
    })
  })

  describe('getETraversal', () => {
    test.each([
      {
        input: { these: Th.left(10) },
        expected: { these: Th.left(42) },
      },
      {
        input: { these: Th.both(10, 'hi') },
        expected: { these: Th.both(42, 'hi') },
      },
      {
        input: { these: Th.right('hi') },
        expected: { these: Th.right('hi') },
      },
    ])('set', ({ input, expected }) => {
      const actual = testTypeToETraversal.set(42)(input)
      expect(actual).toEqual(expected)
    })

    test.each([
      {
        input: { these: Th.left(10) },
        expected: { these: Th.left(50) },
      },
      {
        input: { these: Th.both(10, 'hi') },
        expected: { these: Th.both(50, 'hi') },
      },
      {
        input: { these: Th.right('hi') },
        expected: { these: Th.right('hi') },
      },
    ])('modify', ({ input, expected }) => {
      const actual = testTypeToETraversal.modify(x => x * 5)(input)
      expect(actual).toEqual(expected)
    })
  })

  describe('getATraversal', () => {
    test.each([
      {
        input: { these: Th.left(10) },
        expected: { these: Th.left(10) },
      },
      {
        input: { these: Th.both(10, 'hi') },
        expected: { these: Th.both(10, 'abc') },
      },
      {
        input: { these: Th.right('hi') },
        expected: { these: Th.right('abc') },
      },
    ])('set', ({ input, expected }) => {
      const actual = testTypeToATraversal.set('abc')(input)
      expect(actual).toEqual(expected)
    })

    test.each([
      {
        input: { these: Th.left(10) },
        expected: { these: Th.left(10) },
      },
      {
        input: { these: Th.both(10, 'hi') },
        expected: { these: Th.both(10, 'hihi') },
      },
      {
        input: { these: Th.right('hi') },
        expected: { these: Th.right('hihi') },
      },
    ])('modify', ({ input, expected }) => {
      const actual = testTypeToATraversal.modify(x => x + x)(input)
      expect(actual).toEqual(expected)
    })
  })
})
