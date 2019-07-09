import * as logger from 'fp-ts/lib/Console'
import { constVoid, Lazy } from 'fp-ts/lib/function'
import { IO, io } from 'fp-ts/lib/IO'

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

export const logIO = <T>(
  cb: (value: T) => unknown,
  logLevel: 'error' | 'info' | 'log' | 'warn' = 'log',
) => (value: T): T => io.map(logger[logLevel](cb(value)), () => value).run()

export const tapIO = <T>(logIO_: (value: T) => IO<void>) => (value: T): T =>
  io.map(logIO_(value), () => value).run()
