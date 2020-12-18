import { left, right } from 'fp-ts/lib/Either'
import { Task } from 'fp-ts/lib/Task'
import { TaskEither } from 'fp-ts/lib/TaskEither'

import { newTask } from '@monorail/sharedHelpers/fp-ts-ext/Task'

import { constRunTaskEither, newTaskEither, runTaskEither } from '../TaskEither'

describe('constRunTaskEither', () => {
  it('should return the run function for a TaskEither<L, A>', () => {
    const te = newTaskEither(
      newTask(() => Promise.resolve(right<string, number>(3))),
    )
    const actual = constRunTaskEither(te)()
    const expected = te()
    expect(actual).toEqual(expected)
    expect(actual).toEqual(Promise.resolve(right<string, number>(3)))
  })
})

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
