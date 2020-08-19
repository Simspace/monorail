import { Lazy } from 'fp-ts/lib/function';
import { Task } from 'fp-ts/lib/Task';
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
/**
 * A function that returns a noop Task
 */
export declare const noOpTask: Task<void>;
//# sourceMappingURL=Task.d.ts.map