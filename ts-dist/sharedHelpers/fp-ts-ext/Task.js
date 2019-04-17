import { Task } from 'fp-ts/lib/Task';
/**
 * Task constructor function
 *
 */
export const newTask = (f) => new Task(f);
/**
 * Run a Task (a lazy Promise)
 */
export const runTask = (x) => x.run();
/**
 * Returns the run function for a Task<A>
 */
export const constRunTask = (x) => x.run;
//# sourceMappingURL=Task.js.map