import { Lazy } from 'fp-ts/lib/function'
import { Task } from 'fp-ts/lib/Task'

/**
 * Task constructor function
 *
 */
export const newTask = <A>(f: () => Promise<A>): Task<A> => f

/**
 * Run a Task (a lazy Promise)
 */
export const runTask = <A>(x: Task<A>): Promise<A> => x()

/**
 * Returns the run function for a Task<A>
 */
export const constRunTask = <A>(x: Task<A>): Lazy<Promise<A>> => x

/**
 * A function that returns a noop Task
 */
export const noOpTask = newTask(async () => {})
