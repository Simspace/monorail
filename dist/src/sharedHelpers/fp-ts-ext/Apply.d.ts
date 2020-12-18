/**
 * sequence utility for a tuple containing Options of mixed value types
 */
export declare const sequenceOptionsTuple: <T extends import("fp-ts/lib/Option").Option<any>[]>(...t: T & {
    readonly 0: import("fp-ts/lib/Option").Option<any>;
}) => import("fp-ts/lib/Option").Option<{ [K in keyof T]: [T[K]] extends [import("fp-ts/lib/Option").Option<infer A>] ? A : never; }>;
/**
 * sequence utility for a tuple containing Eithers of mixed value types
 */
export declare const sequenceEithersTuple: <E, T extends import("fp-ts/lib/Either").Either<E, any>[]>(...t: T & {
    readonly 0: import("fp-ts/lib/Either").Either<E, any>;
}) => import("fp-ts/lib/Either").Either<E, { [K in keyof T]: [T[K]] extends [import("fp-ts/lib/Either").Either<E, infer A>] ? A : never; }>;
/**
 * sequence utility for a tuple containing Tasks of mixed value types
 */
export declare const sequenceTasksTuple: <T extends import("fp-ts/lib/Task").Task<any>[]>(...t: T & {
    readonly 0: import("fp-ts/lib/Task").Task<any>;
}) => import("fp-ts/lib/Task").Task<{ [K in keyof T]: [T[K]] extends [import("fp-ts/lib/Task").Task<infer A>] ? A : never; }>;
/**
 * sequence utility for a tuple containing TaskEithers of mixed value types
 */
export declare const sequenceTaskEithersTuple: <E, T extends import("fp-ts/lib/TaskEither").TaskEither<E, any>[]>(...t: T & {
    readonly 0: import("fp-ts/lib/TaskEither").TaskEither<E, any>;
}) => import("fp-ts/lib/TaskEither").TaskEither<E, { [K in keyof T]: [T[K]] extends [import("fp-ts/lib/TaskEither").TaskEither<E, infer A>] ? A : never; }>;
/**
 * sequence utility for structs (interfaces/objects) containing Options of mixed value types
 */
export declare const sequenceOptionsStruct: <NER extends Record<string, import("fp-ts/lib/Option").Option<any>>>(r: keyof NER extends never ? never : NER) => import("fp-ts/lib/Option").Option<{ [K in keyof NER]: [NER[K]] extends [import("fp-ts/lib/Option").Option<infer A>] ? A : never; }>;
/**
 * sequence utility for structs (interfaces/objects) containing Eithers of mixed value types
 */
export declare const sequenceEithersStruct: <E, NER extends Record<string, import("fp-ts/lib/Either").Either<E, any>>>(r: (keyof NER extends never ? never : NER) & Record<string, import("fp-ts/lib/Either").Either<E, any>>) => import("fp-ts/lib/Either").Either<E, { [K in keyof NER]: [NER[K]] extends [import("fp-ts/lib/Either").Either<any, infer A>] ? A : never; }>;
/**
 * sequence utility for structs (interfaces/objects) containing Tasks of mixed value types
 */
export declare const sequenceTasksStruct: <NER extends Record<string, import("fp-ts/lib/Task").Task<any>>>(r: keyof NER extends never ? never : NER) => import("fp-ts/lib/Task").Task<{ [K in keyof NER]: [NER[K]] extends [import("fp-ts/lib/Task").Task<infer A>] ? A : never; }>;
/**
 * sequence utility for structs (interfaces/objects) containing TaskEithers of mixed value types
 */
export declare const sequenceTaskEithersStruct: <E, NER extends Record<string, import("fp-ts/lib/TaskEither").TaskEither<E, any>>>(r: (keyof NER extends never ? never : NER) & Record<string, import("fp-ts/lib/TaskEither").TaskEither<E, any>>) => import("fp-ts/lib/TaskEither").TaskEither<E, { [K in keyof NER]: [NER[K]] extends [import("fp-ts/lib/TaskEither").TaskEither<any, infer A>] ? A : never; }>;
/**
 * sequence utility for structs (interfaces/objects) containing RemoteData of mixed value types
 */
export declare const sequenceRemoteDataStruct: <S, R, E, NER extends Record<string, never>>(r: (keyof NER extends never ? never : NER) & Record<string, never>) => never;
