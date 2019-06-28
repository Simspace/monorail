import { remoteData } from '@devexperts/remote-data-ts'
import { sequenceS, sequenceT } from 'fp-ts/lib/Apply'
import { either } from 'fp-ts/lib/Either'
import { option } from 'fp-ts/lib/Option'
import { task } from 'fp-ts/lib/Task'
import { taskEither } from 'fp-ts/lib/TaskEither'

/**
 * sequence utility for a tuple containing Options of mixed value types
 */
export const sequenceOptionsTuple = sequenceT(option)

/**
 * sequence utility for a tuple containing Eithers of mixed value types
 */
export const sequenceEithersTuple = sequenceT(either)

/**
 * sequence utility for a tuple containing Tasks of mixed value types
 */
export const sequenceTasksTuple = sequenceT(task)

/**
 * sequence utility for a tuple containing TaskEithers of mixed value types
 */
export const sequenceTaskEithersTuple = sequenceT(taskEither)

/**
 * sequence utility for structs (interfaces/objects) containing Options of mixed value types
 */
export const sequenceOptionsStruct = sequenceS(option)

/**
 * sequence utility for structs (interfaces/objects) containing Eithers of mixed value types
 */
export const sequenceEithersStruct = sequenceS(either)

/**
 * sequence utility for structs (interfaces/objects) containing Tasks of mixed value types
 */
export const sequenceTasksStruct = sequenceS(task)

/**
 * sequence utility for structs (interfaces/objects) containing TaskEithers of mixed value types
 */
export const sequenceTaskEithersStruct = sequenceS(taskEither)

/**
 * sequence utility for structs (interfaces/objects) containing RemoteData of mixed value types
 */
export const sequenceRemoteDataStruct = sequenceS(remoteData)
