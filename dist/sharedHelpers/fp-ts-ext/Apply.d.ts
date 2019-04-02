/**
 * sequence utility for a tuple containing Options of mixed value types
 */
export declare const sequenceOptionsTuple: <T extends import("fp-ts/lib/Option").Option<any>[]>(...t: T & {
    0: import("fp-ts/lib/Option").Option<any>;
}) => import("fp-ts/lib/Option").Option<{ [K in keyof T]: T[K] extends import("fp-ts/lib/Option").Option<infer A> ? A : never; }>;
/**
 * sequence utility for a tuple containing Eithers of mixed value types
 */
export declare const sequenceEithersTuple: <L, T extends import("fp-ts/lib/Either").Either<L, any>[]>(...t: T & {
    0: import("fp-ts/lib/Either").Either<L, any>;
}) => import("fp-ts/lib/Either").Either<L, { [K in keyof T]: T[K] extends import("fp-ts/lib/Either").Either<L, infer A> ? A : never; }>;
/**
 * sequence utility for a tuple containing Tasks of mixed value types
 */
export declare const sequenceTasksTuple: <T extends import("fp-ts/lib/Task").Task<any>[]>(...t: T & {
    0: import("fp-ts/lib/Task").Task<any>;
}) => import("fp-ts/lib/Task").Task<{ [K in keyof T]: T[K] extends import("fp-ts/lib/Task").Task<infer A> ? A : never; }>;
/**
 * sequence utility for a tuple containing TaskEithers of mixed value types
 */
export declare const sequenceTaskEithersTuple: <L, T extends import("fp-ts/lib/TaskEither").TaskEither<L, any>[]>(...t: T & {
    0: import("fp-ts/lib/TaskEither").TaskEither<L, any>;
}) => import("fp-ts/lib/TaskEither").TaskEither<L, { [K in keyof T]: T[K] extends import("fp-ts/lib/TaskEither").TaskEither<L, infer A> ? A : never; }>;
/**
 * sequence utility for structs (interfaces/objects) containing Options of mixed value types
 */
export declare const sequenceOptionsStruct: <R extends Record<string, import("fp-ts/lib/Option").Option<any>>>(r: keyof R extends never ? never : R) => import("fp-ts/lib/Option").Option<{ [K in keyof R]: R[K] extends import("fp-ts/lib/Option").Option<infer A> ? A : never; }>;
/**
 * sequence utility for structs (interfaces/objects) containing Eithers of mixed value types
 */
export declare const sequenceEithersStruct: <L, R extends Record<string, import("fp-ts/lib/Either").Either<L, any>>>(r: (keyof R extends never ? never : R) & Record<string, import("fp-ts/lib/Either").Either<L, any>>) => import("fp-ts/lib/Either").Either<L, { [K in keyof R]: R[K] extends import("fp-ts/lib/Either").Either<any, infer A> ? A : never; }>;
/**
 * sequence utility for structs (interfaces/objects) containing Tasks of mixed value types
 */
export declare const sequenceTasksStruct: <R extends Record<string, import("fp-ts/lib/Task").Task<any>>>(r: keyof R extends never ? never : R) => import("fp-ts/lib/Task").Task<{ [K in keyof R]: R[K] extends import("fp-ts/lib/Task").Task<infer A> ? A : never; }>;
/**
 * sequence utility for structs (interfaces/objects) containing TaskEithers of mixed value types
 */
export declare const sequenceTaskEithersStruct: <L, R extends Record<string, import("fp-ts/lib/TaskEither").TaskEither<L, any>>>(r: (keyof R extends never ? never : R) & Record<string, import("fp-ts/lib/TaskEither").TaskEither<L, any>>) => import("fp-ts/lib/TaskEither").TaskEither<L, { [K in keyof R]: R[K] extends import("fp-ts/lib/TaskEither").TaskEither<any, infer A> ? A : never; }>;
