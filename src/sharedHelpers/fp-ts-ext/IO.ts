import { Lazy } from 'fp-ts/lib/function'
import { IO } from 'fp-ts/lib/IO'
import { constVoid } from './function'

/**
 * Run IO
 */
export const runIO = <A>(x: IO<A>): A => x.run()

/**
 * Returns the run function for an IO<A>
 */
export const constRunIO = <A>(x: IO<A>): Lazy<A> => x.run

/**
 * IO constructor function
 *
 */
export const newIO = <A>(f: Lazy<A>): IO<A> => new IO(f)

/**
 * noOp IO function
 */
export const noOpIO = new IO(constVoid)
