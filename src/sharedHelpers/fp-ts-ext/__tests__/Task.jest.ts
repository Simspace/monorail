import { Task } from 'fp-ts/lib/Task'

import { constRunTask, newTask, runTask } from '../Task'

describe('constRunTask', () => {
  const numTask = newTask(() => Promise.resolve(3))
  it('should return the run function for a Task<A>', () => {
    const actual = constRunTask(numTask)()
    const expected = numTask()
    expect(actual).toEqual(expected)
    expect(actual).toEqual(Promise.resolve(3))
  })
})

describe('newTask', () => {
  const numTask = newTask(() => Promise.resolve(5))
  const numTask_ = newTask(() => Promise.resolve(5))
  it('should create a Task<A>', () => {
    const actual = numTask()
    const expected = numTask_()
    expect(actual).toEqual(expected)
    expect(actual).toEqual(Promise.resolve(5))
  })
})

describe('runTask', () => {
  it('should run a Task', () => {
    const t = newTask(() => Promise.resolve(2))
    const actual = runTask(t)
    const expected = t()
    expect(actual).toEqual(expected)
    expect(actual).toEqual(Promise.resolve(2))
  })
})
