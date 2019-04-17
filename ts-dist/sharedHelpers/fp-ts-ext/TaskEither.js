import { TaskEither } from 'fp-ts/lib/TaskEither';
/**
 * TaskEither constructor function
 *
 */
export const newTaskEither = (task) => new TaskEither(task);
/**
 * Run a TaskEither
 */
export const runTaskEither = (x) => x.run();
/**
 * Returns the run function for a TaskEither<L, A>
 */
export const constRunTaskEither = (x) => x.value.run;
//# sourceMappingURL=TaskEither.js.map