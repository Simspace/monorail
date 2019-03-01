import { Either } from 'fp-ts/lib/Either'
import { Task } from 'fp-ts/lib/Task'
import { TaskEither } from 'fp-ts/lib/TaskEither'
import { Lazy } from 'fp-ts/lib/function'

/**
 * TaskEither constructor function
 *
 */
export const mkTaskEither = <L, A>(
  task: Task<Either<L, A>>,
): TaskEither<L, A> => new TaskEither(task)

/**
 * Run a TaskEither
 */
export const runTaskEither = <L, A>(
  x: TaskEither<L, A>,
): Promise<Either<L, A>> => x.run()

/**
 * Returns the run function for a TaskEither<L, A>
 */
export const constRunTaskEither = <L, A>(
  x: TaskEither<L, A>,
): Lazy<Promise<Either<L, A>>> => x.run
