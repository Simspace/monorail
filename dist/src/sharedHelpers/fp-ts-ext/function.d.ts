/**
 * Flips the order of the arguments of a binary function.
 *
 * Curried version of `flip` from 'fp-ts/lib/function'
 */
export declare function flip<A, B, C>(f: (a: A) => (b: B) => C): (b: B) => (a: A) => C;
/**
 * Simple binary composition. Also known as `compose2`
 */
export declare const o: <A, B, C>(f: (y: B) => C, g: (x: A) => B) => (x: A) => C;
/**
 * Flips the position of each item in a 2-tuple
 */
export declare const swap: <A, B>([x, y]: [A, B]) => [B, A];
//# sourceMappingURL=function.d.ts.map