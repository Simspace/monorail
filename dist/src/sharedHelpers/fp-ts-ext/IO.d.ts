import { Lazy } from 'fp-ts/lib/function';
import { IO } from 'fp-ts/lib/IO';
/**
 * Run IO
 */
export declare const runIO: <A>(x: IO<A>) => A;
/**
 * Returns the run function for an IO<A>
 */
export declare const constRunIO: <A>(x: IO<A>) => Lazy<A>;
/**
 * IO constructor function
 *
 */
export declare const newIO: <A>(f: Lazy<A>) => IO<A>;
/**
 * noOp IO function
 */
export declare const noOpIO: IO<void>;
export declare const logIO: <T>(cb: (value: T) => unknown, logLevel?: 'error' | 'info' | 'log' | 'warn') => (value: T) => T;
export declare const tapIO: <T>(logIO_: (value: T) => IO<void>) => (value: T) => T;
