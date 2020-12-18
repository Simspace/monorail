import { fold, left, right } from 'fp-ts/lib/Either'

describe('fold (Either)', () => {
  const f = (l: string) => `Error: ${l}`
  const g = (r: number) => `Value: ${r}`
  it('should properly fold Eithers -- left', () => {
    const actual = fold(f, g)(left<string, number>('invalid'))
    const expected = 'Error: invalid'
    expect(actual).toBe(expected)
  })

  it('should properly fold Eithers -- left', () => {
    const actual = fold(f, g)(right<string, number>(9))
    const expected = 'Value: 9'
    expect(actual).toBe(expected)
  })
})
