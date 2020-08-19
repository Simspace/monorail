import { IO } from 'fp-ts/lib/IO'

import { constRunIO, newIO, noOpIO, runIO } from '../IO'

describe('constRunIO', () => {
  let num = 0
  const mutateNumIO = newIO(() => {
    num = 3
  })
  it('should return the run function for an IO<A>', () => {
    const actual = constRunIO(mutateNumIO)()
    const expected = mutateNumIO()
    expect(actual).toBe(expected)
    expect(num).toBe(3)
  })
})

describe('newIO', () => {
  let num = 0
  const mutateNumIO = newIO(() => {
    num = 5
  })
  const mutateNumIO_ = newIO(() => {
    num = 5
  })
  it('should create an IO<A>', () => {
    const actual = mutateNumIO()
    const expected = mutateNumIO_()
    expect(actual).toBe(expected)
    expect(num).toBe(5)
  })
})

describe('noOpIO', () => {
  it('should be a noOp function', () => {
    const actual = noOpIO.toString()
    const expected = ['function () {', '    return;', '}'].join('\n')
    expect(actual).toBe(expected)
  })

  it('should return void', () => {
    const actual = noOpIO()
    const expected = undefined
    expect(actual).toBe(expected)
  })
})

describe('runIO', () => {
  it('should run a possibly effectful function in IO', () => {
    let num = 0
    const mutateNumIO = newIO(() => {
      num = 2
    })
    const actual = runIO(mutateNumIO)
    const expected = mutateNumIO()
    expect(actual).toBe(expected)
    expect(num).toBe(2)
  })
})
