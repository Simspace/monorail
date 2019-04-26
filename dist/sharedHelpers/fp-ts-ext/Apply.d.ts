/**
 * sequence utility for a tuple containing Options of mixed value types
 */
export declare const sequenceOptionsTuple: import("fp-ts/lib/Apply").SequenceT1<"Option">;
/**
 * sequence utility for a tuple containing Eithers of mixed value types
 */
export declare const sequenceEithersTuple: import("fp-ts/lib/Apply").SequenceT2<"Either">;
/**
 * sequence utility for a tuple containing Tasks of mixed value types
 */
export declare const sequenceTasksTuple: import("fp-ts/lib/Apply").SequenceT1<"Task">;
/**
 * sequence utility for a tuple containing TaskEithers of mixed value types
 */
export declare const sequenceTaskEithersTuple: import("fp-ts/lib/Apply").SequenceT2<"TaskEither">;
/**
 * sequence utility for structs (interfaces/objects) containing Options of mixed value types
 */
export declare const sequenceOptionsStruct: <R extends Record<string, import("fp-ts/lib/Option").Option<any>>>(r: keyof R extends never ? never : R) => import("fp-ts/lib/Option").Option<{ [K in keyof R]: [R[K]] extends [import("fp-ts/lib/Option").Option<infer A>] ? A : never; }>;
/**
 * sequence utility for structs (interfaces/objects) containing Eithers of mixed value types
 */
export declare const sequenceEithersStruct: <L, R extends Record<string, import("fp-ts/lib/Either").Either<L, any>>>(r: (keyof R extends never ? never : R) & Record<string, import("fp-ts/lib/Either").Either<L, any>>) => import("fp-ts/lib/Either").Either<L, { [K in keyof R]: [R[K]] extends [import("fp-ts/lib/Either").Either<any, infer A>] ? A : never; }>;
/**
 * sequence utility for structs (interfaces/objects) containing Tasks of mixed value types
 */
export declare const sequenceTasksStruct: <R extends Record<string, import("fp-ts/lib/Task").Task<any>>>(r: keyof R extends never ? never : R) => import("fp-ts/lib/Task").Task<{ [K in keyof R]: [R[K]] extends [import("fp-ts/lib/Task").Task<infer A>] ? A : never; }>;
/**
 * sequence utility for structs (interfaces/objects) containing TaskEithers of mixed value types
 */
export declare const sequenceTaskEithersStruct: <L, R extends Record<string, import("fp-ts/lib/TaskEither").TaskEither<L, any>>>(r: (keyof R extends never ? never : R) & Record<string, import("fp-ts/lib/TaskEither").TaskEither<L, any>>) => import("fp-ts/lib/TaskEither").TaskEither<L, { [K in keyof R]: [R[K]] extends [import("fp-ts/lib/TaskEither").TaskEither<any, infer A>] ? A : never; }>;
