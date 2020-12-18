import { eqString } from 'fp-ts/Eq'
import { constant, pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'

import { alterAt } from '../Map'

describe('Map', () => {
  describe('alterAt', () => {
    const map = new Map([
      ['foo', 1],
      ['bar', 2],
    ])

    it('should modify a map', () => {
      const actual = pipe(
        map,
        alterAt(eqString)(
          'foo',
          O.map(x => x + 2),
        ),
      )
      expect(actual).not.toBe(map)
      expect(actual).toEqual(
        new Map([
          ['foo', 3],
          ['bar', 2],
        ]),
      )
    })

    it('should remove entries from a map', () => {
      const actual = pipe(
        map,
        alterAt(eqString)('foo', constant<O.Option<number>>(O.none)),
      )
      expect(actual).not.toBe(map)
      expect(actual).toEqual(new Map([['bar', 2]]))
    })

    it('should insert entries into a map', () => {
      const actual = pipe(
        map,
        alterAt(eqString)('baz', () => O.some(3)),
      )
      expect(actual).not.toBe(map)
      expect(actual).toEqual(
        new Map([
          ['foo', 1],
          ['bar', 2],
          ['baz', 3],
        ]),
      )
    })
  })
})
