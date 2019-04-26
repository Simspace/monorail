import { Function2 } from 'fp-ts/lib/function';
export declare const constVoid: () => void;
/**
 * Flips the order of the arguments to an uncurried function taking two
 * arguments.
 */
export declare const flip_: <A, B, C>(f: Function2<A, B, C>) => Function2<B, A, C>;
/**
 * Simple binary composition. Also known as `compose2`
 */
export declare const o: <A, B, C>(f: (y: B) => C, g: (x: A) => B) => (x: A) => C;
