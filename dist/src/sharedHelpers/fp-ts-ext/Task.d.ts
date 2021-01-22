import { Task } from 'fp-ts/lib/Task';
export * from 'fp-ts/lib/Task';
/**
 * Task constructor function
 *
 */
export declare const newTask: <A>(f: () => Promise<A>) => Task<A>;
/**
 * Runs a Task. This will construct and effectively start the execution of the underlying Promise<A>.
 */
export declare const runTask: <A>(x: Task<A>) => Promise<A>;
/**
 * A function that returns a noop Task
 */
export declare const noOpTask: Task<void>;
