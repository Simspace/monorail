import { left, right } from 'fp-ts/lib/Either'

import { newTask } from '@monorail/sharedHelpers/fp-ts-ext/Task'

import { newTaskEither, runTaskEither } from '../TaskEither'

describe('newTaskEither', () => {
  it('should create a TaskEither<L, A>', () => {
    const te = newTaskEither(
      newTask(() => Promise.resolve(left<string, number>('error'))),
    )
    const te_ = newTaskEither(
      newTask(() => Promise.resolve(left<string, number>('error'))),
    )
    const actual = te()
    const expected = te_()
    expect(actual).toEqual(expected)
    expect(actual).toEqual(Promise.resolve(left<string, number>('error')))
  })
})

describe('runTaskEither', () => {
  it('should run a TaskEither<L, A>', () => {
    const te = newTaskEither(
      newTask(() => Promise.resolve(right<string, number>(2))),
    )
    const actual = runTaskEither(te)
    const expected = te()
    expect(actual).toEqual(expected)
    expect(actual).toEqual(Promise.resolve(right<string, number>(2)))
  })
})
