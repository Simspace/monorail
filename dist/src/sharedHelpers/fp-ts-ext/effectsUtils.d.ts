/**
 * A type representing an "empty" ReaderIOEither environment
 */
export interface EmptyEnv {
}
/**
 * An "empty" ReaderIOEither environment
 */
export declare const emptyEnv: EmptyEnv;
/**
 * Intersection type substraction alias
 */
export declare type Subtract<A, B extends A> = Omit<A, keyof B>;
