import { O } from '@monorail/sharedHelpers/fp-ts-imports'

import {
  headAndTailS,
  headAndTailT,
  initAndLastS,
  initAndLastT,
} from '@monorail/sharedHelpers/fp-ts-ext/ReadonlyArray'

describe.each([
  { input: [], expected: O.none },
  { input: [42], expected: O.some({ head: 42, tail: [] }) },
  { input: [42, 43], expected: O.some({ head: 42, tail: [43] }) },
  { input: [42, 43, 44], expected: O.some({ head: 42, tail: [43, 44] }) },
])('headAndTailS', ({ input, expected }) => {
  it(`should split the array ${JSON.stringify(input)} into ${JSON.stringify(
    expected,
  )}`, () => {
    expect(headAndTailS(input)).toEqual(expected)
  })
})

describe.each([
  { input: [], expected: O.none },
  { input: [42], expected: O.some([42, []]) },
  { input: [42, 43], expected: O.some([42, [43]]) },
  { input: [42, 43, 44], expected: O.some([42, [43, 44]]) },
])('headAndTailT', ({ input, expected }) => {
  it(`should split the array ${JSON.stringify(input)} into ${JSON.stringify(
    expected,
  )}`, () => {
    expect(headAndTailT(input)).toEqual(expected)
  })
})

describe.each([
  { input: [], expected: O.none },
  { input: [42], expected: O.some({ init: [], last: 42 }) },
  { input: [42, 43], expected: O.some({ init: [42], last: 43 }) },
  { input: [42, 43, 44], expected: O.some({ init: [42, 43], last: 44 }) },
])('initAndLastS', ({ input, expected }) => {
  it(`should split the array ${JSON.stringify(input)} into ${JSON.stringify(
    expected,
  )}`, () => {
    expect(initAndLastS(input)).toEqual(expected)
  })
})

describe.each([
  { input: [], expected: O.none },
  { input: [42], expected: O.some([[], 42]) },
  { input: [42, 43], expected: O.some([[42], 43]) },
  { input: [42, 43, 44], expected: O.some([[42, 43], 44]) },
])('initAndLastT', ({ input, expected }) => {
  it(`should split the array ${JSON.stringify(input)} into ${JSON.stringify(
    expected,
  )}`, () => {
    expect(initAndLastT(input)).toEqual(expected)
  })
})
