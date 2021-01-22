import { Task } from 'fp-ts/lib/Task'

export * from 'fp-ts/lib/Task'

/**
 * Task constructor function
 *
 */
export const newTask = <A>(f: () => Promise<A>): Task<A> => f

/**
 * Runs a Task. This will construct and effectively start the execution of the underlying Promise<A>.
 */
export const runTask = <A>(x: Task<A>): Promise<A> => x()

/**
 * A function that returns a noop Task
 */
export const noOpTask = newTask(async () => {})
