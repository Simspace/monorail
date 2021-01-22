import { Either } from 'fp-ts/lib/Either';
import { Task } from 'fp-ts/lib/Task';
import * as TE from 'fp-ts/lib/TaskEither';
export * from 'fp-ts/lib/TaskEither';
/**
 * TaskEither constructor function
 *
 */
export declare const newTaskEither: <L, A>(task: Task<Either<L, A>>) => TE.TaskEither<L, A>;
/**
 * Runs a TaskEither
 */
export declare const runTaskEither: <L, A>(x: TE.TaskEither<L, A>) => Promise<Either<L, A>>;
