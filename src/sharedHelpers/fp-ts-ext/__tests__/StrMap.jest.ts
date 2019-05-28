import { StrMap } from 'fp-ts/lib/StrMap'

import { newStrMap } from '../StrMap'

describe('newStrMap', () => {
  it('should create a StrMap<A>', () => {
    const actualA = newStrMap({
      a: 0,
      b: 1,
      c: 2,
    })
    const expectedA = new StrMap({
      a: 0,
      b: 1,
      c: 2,
    })
    expect(actualA).toEqual(expectedA)
    expect(actualA.value).toEqual({
      a: 0,
      b: 1,
      c: 2,
    })
  })
})
