import * as Array from 'fp-ts/lib/Array';
/**
 * Makes an unsafe type-cast of ReadonlyArray<A> to Array<A>
 */
export declare const unsafeCoerceToArray: <A>(readonlyArray: readonly A[]) => A[];
export declare const isEmpty: <A>(readonlyArray: readonly A[]) => readonlyArray is readonly never[];
export declare const reduce: <A, B>(b: B, f: (b: B, a: A) => B) => (fa: readonly A[]) => B;
//# sourceMappingURL=ReadonlyArray.d.ts.map