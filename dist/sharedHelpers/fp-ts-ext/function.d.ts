import { Function2 } from 'fp-ts/lib/function';
import { Primitive } from '../typeLevel';
export declare const constVoid: () => void;
/**
 * Flips the order of the arguments to an uncurried function taking two
 * arguments. Like `flip`, but for uncurried, not curried, functions.
 */
export declare const flip_: <A, B, C>(f: Function2<A, B, C>) => Function2<B, A, C>;
/**
 * Simple binary composition. Also known as `compose2`
 */
export declare const o: <A, B, C>(f: (y: B) => C, g: (x: A) => B) => (x: A) => C;
/**
 * Utility for constructing tuples with proper inference
 */
export declare const tuple: <A extends Primitive[]>(...args: A) => A;
/**
 * Flips the position of each item in a 2-tuple
 */
export declare const swap: <A, B>([x, y]: [A, B]) => [B, A];
