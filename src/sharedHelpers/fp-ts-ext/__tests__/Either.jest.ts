import { E } from '@monorail/sharedHelpers/fp-ts-imports'

describe('Either', () => {
  describe('fold', () => {
    const f = (l: string) => `Error: ${l}`
    const g = (r: number) => `Value: ${r}`
    it('should properly fold Eithers -- left', () => {
      const actual = E.fold(f, g)(E.left<string, number>('invalid'))
      const expected = 'Error: invalid'
      expect(actual).toBe(expected)
    })

    it('should properly fold Eithers -- left', () => {
      const actual = E.fold(f, g)(E.right<string, number>(9))
      const expected = 'Value: 9'
      expect(actual).toBe(expected)
    })
  })

  describe('swap', () => {
    it('should swap from right to left', () => {
      expect(E.swap(E.right(42))).toEqual(E.left(42))
    })

    it('should swap from left to right', () => {
      expect(E.swap(E.left(42))).toEqual(E.right(42))
    })
  })
})
