/**
 * A type representing an "empty" ReaderIOEither environment
 */
export interface EmptyEnv {}

/**
 * An "empty" ReaderIOEither environment
 */
export const emptyEnv: EmptyEnv = {}

/**
 * Intersection type substraction alias
 */
export type Subtract<A, B extends A> = Omit<A, keyof B>
