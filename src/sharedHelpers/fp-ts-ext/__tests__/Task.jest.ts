import { Task } from 'fp-ts/lib/Task'

import { constRunTask, newTask, runTask } from '../Task'

describe('constRunTask', () => {
  const numTask = new Task(() => Promise.resolve(3))
  it('should return the run function for a Task<A>', () => {
    const actual = constRunTask(numTask)()
    const expected = numTask.run()
    expect(actual).toEqual(expected)
    expect(actual).toEqual(Promise.resolve(3))
  })
})

describe('newTask', () => {
  const numTask = new Task(() => Promise.resolve(5))
  const numTask_ = newTask(() => Promise.resolve(5))
  it('should create a Task<A>', () => {
    const actual = numTask.run()
    const expected = numTask_.run()
    expect(actual).toEqual(expected)
    expect(actual).toEqual(Promise.resolve(5))
  })
})

describe('runTask', () => {
  it('should run a Task', () => {
    const t = new Task(() => Promise.resolve(2))
    const actual = runTask(t)
    const expected = t.run()
    expect(actual).toEqual(expected)
    expect(actual).toEqual(Promise.resolve(2))
  })
})
