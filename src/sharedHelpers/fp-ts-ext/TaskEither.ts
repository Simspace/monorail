import { Either } from 'fp-ts/lib/Either'
import { Lazy } from 'fp-ts/lib/function'
import { Task } from 'fp-ts/lib/Task'
import * as TE from 'fp-ts/lib/TaskEither'

/**
 * TaskEither constructor function
 *
 */
export const newTaskEither = <L, A>(
  task: Task<Either<L, A>>,
): TE.TaskEither<L, A> => task

/**
 * Run a TaskEither
 */
export const runTaskEither = <L, A>(
  x: TE.TaskEither<L, A>,
): Promise<Either<L, A>> => x()

/**
 * Returns the run function for a TaskEither<L, A>
 */
export const constRunTaskEither = <L, A>(
  x: TE.TaskEither<L, A>,
): Lazy<Promise<Either<L, A>>> => x
