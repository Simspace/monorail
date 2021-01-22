import { Either } from 'fp-ts/lib/Either'
import { Task } from 'fp-ts/lib/Task'
import * as TE from 'fp-ts/lib/TaskEither'

export * from 'fp-ts/lib/TaskEither'

/**
 * TaskEither constructor function
 *
 */
export const newTaskEither = <L, A>(
  task: Task<Either<L, A>>,
): TE.TaskEither<L, A> => task

/**
 * Runs a TaskEither
 */
export const runTaskEither = <L, A>(
  x: TE.TaskEither<L, A>,
): Promise<Either<L, A>> => x()
