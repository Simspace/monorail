/**
 * Create a union of values from a struct
 */

export type UnionFromStruct<S> = S[keyof S]
