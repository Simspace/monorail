import { pipe } from 'fp-ts/lib/pipeable'

import { match, matchI, matchOn, matchOnI, matchS } from '../matchers'

describe('matchers', () => {
  describe('match, matchI', () => {
    type Matchable =
      | {
          tag: 'foo'
        }
      | {
          tag: 'bar'
          contents: number
        }
      | {
          tag: 'baz'
          contents: string
        }

    const getMatchable = (tag: Matchable['tag']): Matchable => {
      switch (tag) {
        case 'foo':
          return { tag: 'foo' }
        case 'bar':
          return { tag: 'bar', contents: 2 }
        case 'baz':
          return { tag: 'baz', contents: '3' }
      }
    }

    it('should match on tag in pipe with match', () => {
      expect(
        pipe(
          getMatchable('foo'),
          match({
            foo: _ => 'yes',
            bar: n => n.contents.toFixed().toString(),
            baz: s => s.contents,
          }),
        ),
      ).toEqual('yes')
    })

    it('should match on tag directly with matchI', () => {
      expect(
        matchI(getMatchable('bar'))({
          foo: _ => 'yes',
          bar: n => n.contents.toFixed().toString(),
          baz: s => s.contents,
        }),
      ).toEqual('2')
    })
  })

  describe('matchOn, matchOnI', () => {
    type Action =
      | {
          type: 'foo'
        }
      | {
          type: 'bar'
          payload: number
        }
      | {
          type: 'baz'
          payload: string
        }

    const getAction = (type: Action['type']): Action => {
      switch (type) {
        case 'foo':
          return { type: 'foo' }
        case 'bar':
          return { type: 'bar', payload: 2 }
        case 'baz':
          return { type: 'baz', payload: '3' }
      }
    }

    it('should match on whatever key is given in pipe with matchOn', () => {
      expect(
        pipe(
          getAction('foo'),
          matchOn('type')({
            foo: _ => 'yes',
            bar: n => n.payload.toFixed().toString(),
            baz: s => s.payload,
          }),
        ),
      ).toEqual('yes')
    })

    it('should match on whatever key is given directly with matchOnI', () => {
      expect(
        matchOnI('type')(getAction('bar'))({
          foo: _ => 'yes',
          bar: n => n.payload.toFixed().toString(),
          baz: s => s.payload,
        }),
      ).toEqual('2')
    })
  })

  describe('matchS', () => {
    it('should match on string unions', () => {
      type SU = 'foo' | 'bar' | 'baz'
      const su: SU = 'foo' as SU
      const expected = 'abc'
      const actual = matchS(su)({
        foo: () => 'abc',
        bar: () => 'def',
        baz: () => 'ghi',
      })
      expect(actual).toEqual(expected)
    })

    it('should match on string enums', () => {
      enum SU {
        foo = 'foo',
        bar = 'bar',
        baz = 'baz',
      }
      const su: SU = SU.foo as SU
      const expected = 'abc'
      const actual = matchS(su)({
        foo: () => 'abc',
        bar: () => 'def',
        baz: () => 'ghi',
      })
      expect(actual).toEqual(expected)
    })

    it('should error if missing or extra matches', () => {
      type SU = 'foo' | 'bar' | 'baz'
      const su: SU = 'foo' as SU
      matchS(su)(
        // @ts-expect-error
        {
          foo: () => 'abc',
          baz: () => 'ghi',
        },
      )
      matchS(su)({
        foo: () => 'abc',
        bar: () => 'def',
        baz: () => 'ghi',
        // @ts-expect-error
        quux: () => 'jkl',
      })
    })
  })
})
