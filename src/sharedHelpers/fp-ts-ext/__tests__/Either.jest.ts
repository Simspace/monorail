import { fold } from '../Either'
import { left, right } from 'fp-ts/lib/Either'

describe('fold (Either)', () => {
  const f = (l: string) => `Error: ${l}`
  const g = (r: number) => `Value: ${r}`
  it('should properly fold Eithers -- left', () => {
    const actual = fold(left<string, number>('invalid'), f, g)
    const expected = 'Error: invalid'
    expect(actual).toBe(expected)
  })

  it('should properly fold Eithers -- left', () => {
    const actual = fold(right<string, number>(9), f, g)
    const expected = 'Value: 9'
    expect(actual).toBe(expected)
  })
})
