import { flip_, o, swap, tuple } from '../function'

describe('flip_', () => {
  it('should flip the order of the arguments of an uncurried function', () => {
    const f = (x: number, y: string): string => `${x}${y}`
    const g = flip_(f)
    const num = 4
    const str = '2'
    const actual = g(str, num)
    const expected = f(num, str)
    expect(actual).toBe(expected)
  })
})

describe('o', () => {
  it('should compose 2 functions together properly', () => {
    const init = 3
    const add1 = (x: number): number => x + 1
    const showNum = (x: number): string => `${x}`
    const actual = o(showNum, add1)(init)
    const expected = showNum(add1(init))
    expect(actual).toBe(expected)
  })
})

describe('swap', () => {
  it('should swap the order of arguments in a 2-tuple', () => {
    const actual = swap([0, 1])
    const expected = [1, 0]
    expect(actual).toEqual(expected)
  })
})

describe('tuple', () => {
  it('should create a 2-tuple', () => {
    const actual = tuple(0, 1)
    const expected = [0, 1] as [0, 1]
    expect(actual).toEqual(expected)
  })

  it('should create a 3-tuple', () => {
    const actual = tuple(0, 1, 2)
    const expected = [0, 1, 2] as [0, 1, 2]
    expect(actual).toEqual(expected)
  })

  it('should create a 4-tuple', () => {
    const actual = tuple(0, 1, 2, 3)
    const expected = [0, 1, 2, 3] as [0, 1, 2, 3]
    expect(actual).toEqual(expected)
  })
})
