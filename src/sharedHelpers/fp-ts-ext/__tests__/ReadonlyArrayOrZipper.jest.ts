import { Eq, O, Show } from '@monorail/sharedHelpers/fp-ts-imports'

import * as RAOZ from '@monorail/sharedHelpers/fp-ts-ext/ReadonlyArrayOrZipper'
import * as RAZ from '@monorail/sharedHelpers/fp-ts-ext/ReadonlyArrayZipper'

const js = JSON.stringify

describe.each([
  {
    input: [42, 43, 44],
    expected: { tag: 'isReadonlyArray', value: [42, 43, 44] },
  },
])('makeWithNoFocus', ({ input, expected }) => {
  it(`should construct from ${js(input)} to ${js(expected)}`, () => {
    expect(RAOZ.makeWithNoFocus(input)).toEqual(expected)
  })
})

describe.each([
  {
    input: RAZ.make([40, 41], 42, [43, 44]),
    expected: {
      tag: 'isReadonlyArrayZipper',
      value: RAZ.make([40, 41], 42, [43, 44]),
    },
  },
])('makeWithFocus', ({ input, expected }) => {
  it(`should construct from ${js(input)} to ${js(expected)}`, () => {
    expect(RAOZ.makeWithFocus(input)).toEqual(expected)
  })
})

describe.each([
  { input: 42, expected: RAOZ.makeWithFocus(RAZ.make([], 42, [])) },
])('of', ({ input, expected }) => {
  it(`should construct from ${js(input)} to ${js(expected)}`, () => {
    expect(RAOZ.of(input)).toEqual(expected)
  })
})

describe.each([
  {
    input: RAOZ.makeWithFocus(RAZ.make([40, 41], 42, [43, 44])),
    expected: [
      { value: 40, isFocus: false },
      { value: 41, isFocus: false },
      { value: 42, isFocus: true },
      { value: 43, isFocus: false },
      { value: 44, isFocus: false },
    ],
  },
])('toReadonlyArrayWithFocusFlag', ({ input, expected }) => {
  it(`should convert from ${js(input)} to ${js(expected)}`, () => {
    expect(RAOZ.toReadonlyArrayWithFocusFlag(input)).toEqual(expected)
  })
})

describe.each([
  {
    input: RAOZ.makeWithFocus(RAZ.make([40, 41], 42, [43, 44])),
    expected: [40, 41, 42, 43, 44],
  },
])('toReadonlyArray', ({ input, expected }) => {
  it(`should convert from ${js(input)} to ${js(expected)}`, () => {
    expect(RAOZ.toReadonlyArray(input)).toEqual(expected)
  })
})

describe.each([
  {
    input: RAOZ.makeWithFocus(RAZ.make([40, 41], 42, [43, 44])),
    expected: RAOZ.makeWithNoFocus([40, 41, 42, 43, 44]),
  },
  {
    input: RAOZ.makeWithNoFocus([40, 41, 42, 43, 44]),
    expected: RAOZ.makeWithNoFocus([40, 41, 42, 43, 44]),
  },
])('clearFocus', ({ input, expected }) => {
  it(`should clear focus from ${js(input)} to ${js(expected)}`, () => {
    expect(RAOZ.clearFocus(input)).toEqual(expected)
  })
})

describe.each([
  {
    input: RAOZ.makeWithFocus(RAZ.make([40, 41], 42, [43, 44])),
    item: 39,
    expected: O.none,
  },
  {
    input: RAOZ.makeWithFocus(RAZ.make([40, 41], 42, [43, 44])),
    item: 41,
    expected: O.some(RAOZ.makeWithFocus(RAZ.make([40], 41, [42, 43, 44]))),
  },
  {
    input: RAOZ.makeWithFocus(RAZ.make([40, 41], 42, [43, 44])),
    item: 42,
    expected: O.some(RAOZ.makeWithFocus(RAZ.make([40, 41], 42, [43, 44]))),
  },
  {
    input: RAOZ.makeWithFocus(RAZ.make([40, 41], 42, [43, 44])),
    item: 44,
    expected: O.some(RAOZ.makeWithFocus(RAZ.make([40, 41, 42, 43], 44, []))),
  },
  {
    input: RAOZ.makeWithFocus(RAZ.make([2, 2], 3, [2, 2])),
    item: 3,
    expected: O.some(RAOZ.makeWithFocus(RAZ.make([2, 2], 3, [2, 2]))),
  },
  {
    input: RAOZ.makeWithFocus(RAZ.make([2, 2], 3, [2, 2])),
    item: 2,
    expected: O.some(RAOZ.makeWithFocus(RAZ.make([2], 2, [3, 2, 2]))),
  },
  {
    input: RAOZ.makeWithFocus(RAZ.make([1, 1], 3, [2, 2])),
    item: 2,
    expected: O.some(RAOZ.makeWithFocus(RAZ.make([1, 1, 3], 2, [2]))),
  },
])('find', ({ input, item, expected }) => {
  it(`should find ${item} in ${js(input)} to ${js(expected)}`, () => {
    expect(RAOZ.find(Eq.eqNumber)(item)(input)).toEqual(expected)
  })
})

describe.each([
  {
    input: RAOZ.makeWithFocus(RAZ.make([40, 41], 42, [43, 44])),
    item: O.none,
    expected: RAOZ.makeWithNoFocus([40, 41, 42, 43, 44]),
  },
  {
    input: RAOZ.makeWithFocus(RAZ.make([40, 41], 42, [43, 44])),
    item: O.some(39),
    expected: RAOZ.makeWithFocus(RAZ.make([40, 41], 42, [43, 44])),
  },
  {
    input: RAOZ.makeWithFocus(RAZ.make([40, 41], 42, [43, 44])),
    item: O.some(41),
    expected: RAOZ.makeWithFocus(RAZ.make([40], 41, [42, 43, 44])),
  },
  {
    input: RAOZ.makeWithFocus(RAZ.make([40, 41], 42, [43, 44])),
    item: O.some(42),
    expected: RAOZ.makeWithFocus(RAZ.make([40, 41], 42, [43, 44])),
  },
  {
    input: RAOZ.makeWithFocus(RAZ.make([40, 41], 42, [43, 44])),
    item: O.some(44),
    expected: RAOZ.makeWithFocus(RAZ.make([40, 41, 42, 43], 44, [])),
  },
])('findOptionalOrKeep', ({ input, item, expected }) => {
  it(`should find ${item} in ${js(input)} to ${js(expected)}`, () => {
    expect(RAOZ.findOptionalOrKeep(Eq.eqNumber)(item)(input)).toEqual(expected)
  })
})

describe.each([
  {
    input: RAOZ.makeWithFocus(RAZ.make([40, 41], 42, [43, 44])),
    item: O.none,
    expected: RAOZ.makeWithNoFocus([40, 41, 42, 43, 44]),
  },
  {
    input: RAOZ.makeWithFocus(RAZ.make([40, 41], 42, [43, 44])),
    item: O.some(39),
    expected: RAOZ.makeWithNoFocus([40, 41, 42, 43, 44]),
  },
  {
    input: RAOZ.makeWithFocus(RAZ.make([40, 41], 42, [43, 44])),
    item: O.some(41),
    expected: RAOZ.makeWithFocus(RAZ.make([40], 41, [42, 43, 44])),
  },
  {
    input: RAOZ.makeWithFocus(RAZ.make([40, 41], 42, [43, 44])),
    item: O.some(42),
    expected: RAOZ.makeWithFocus(RAZ.make([40, 41], 42, [43, 44])),
  },
  {
    input: RAOZ.makeWithFocus(RAZ.make([40, 41], 42, [43, 44])),
    item: O.some(44),
    expected: RAOZ.makeWithFocus(RAZ.make([40, 41, 42, 43], 44, [])),
  },
])('findOptionalOrClear', ({ input, item, expected }) => {
  it(`should find ${item} in ${js(input)} to ${js(expected)}`, () => {
    expect(RAOZ.findOptionalOrClear(Eq.eqNumber)(item)(input)).toEqual(expected)
  })
})

describe.each([
  {
    input: RAOZ.empty,
    expected: 'IsReadonlyArray([])',
  },
  {
    input: RAOZ.makeWithNoFocus([42, 43, 44, 45]),
    expected: 'IsReadonlyArray([42, 43, 44, 45])',
  },
  {
    input: RAOZ.makeWithFocus(RAZ.make([42], 43, [44, 45])),
    expected: 'IsReadonlyArrayZipper(ReadonlyArrayZipper([42], 43, [44, 45]))',
  },
])('show', ({ input, expected }) => {
  it(`should show ${js(input)} as ${expected}`, () => {
    expect(RAOZ.getShow(Show.showNumber).show(input)).toEqual(expected)
  })
})
