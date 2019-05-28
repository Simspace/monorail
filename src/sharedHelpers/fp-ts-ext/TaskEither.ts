import { Either } from 'fp-ts/lib/Either'
import { Lazy } from 'fp-ts/lib/function'
import { Task } from 'fp-ts/lib/Task'
import { TaskEither } from 'fp-ts/lib/TaskEither'

/**
 * TaskEither constructor function
 *
 */
export const newTaskEither = <L, A>(
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
): Lazy<Promise<Either<L, A>>> => x.value.run
