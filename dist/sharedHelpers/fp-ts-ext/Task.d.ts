import { Task } from 'fp-ts/lib/Task';
import { Lazy } from 'fp-ts/lib/function';
/**
 * Task constructor function
 *
 */
export declare const newTask: <A>(f: () => Promise<A>) => Task<A>;
/**
 * Run a Task (a lazy Promise)
 */
export declare const runTask: <A>(x: Task<A>) => Promise<A>;
/**
 * Returns the run function for a Task<A>
 */
export declare const constRunTask: <A>(x: Task<A>) => Lazy<Promise<A>>;
