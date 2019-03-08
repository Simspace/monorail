import { Primitive } from './type-level';
/**
 * Utility for constructing tuples with proper inference
 */
export declare const tuple: <A extends Primitive[]>(...args: A) => A;
/**
 * Flips the position of each item in a 2-tuple
 */
export declare const swap: <A, B>([x, y]: [A, B]) => [B, A];
/**
 * sequence utility for a tuple of Options
 */
export declare const sequenceTupleOptions: import("fp-ts/lib/Apply").SequenceT1<"Option">;
/**
 * sequence utility for a tuple of Eithers
 */
export declare const sequenceTupleEithers: import("fp-ts/lib/Apply").SequenceT2<"Either">;
/**
 * sequence utility for a tuple of Task
 */
export declare const sequenceTupleTasks: import("fp-ts/lib/Apply").SequenceT1<"Task">;
/**
 * sequence utility for a tuple of TaskEithers
 */
export declare const sequenceTupleTaskEithers: import("fp-ts/lib/Apply").SequenceT2<"TaskEither">;
