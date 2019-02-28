import { sequenceT } from 'fp-ts/lib/Apply'
import { either } from 'fp-ts/lib/Either'
import { option } from 'fp-ts/lib/Option'
import { task } from 'fp-ts/lib/Task'
import { taskEither } from 'fp-ts/lib/TaskEither'

import { Primitive } from './type-level'

/**
 * Utility for constructing tuples with proper inference
 */
export const tuple = <A extends Primitive[]>(...args: A) => args

/**
 * Flips the position of each item in a 2-tuple
 */
export const swap = <A, B>([x, y]: [A, B]): [B, A] => [y, x]

/**
 * sequence utility for a tuple of Options
 */
export const sequenceTupleOptions = sequenceT(option)

/**
 * sequence utility for a tuple of Eithers
 */
export const sequenceTupleEithers = sequenceT(either)

/**
 * sequence utility for a tuple of Task
 */
export const sequenceTupleTasks = sequenceT(task)

/**
 * sequence utility for a tuple of TaskEithers
 */
export const sequenceTupleTaskEithers = sequenceT(taskEither)
