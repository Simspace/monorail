import { IO } from 'fp-ts/lib/IO';
import { constVoid } from './function';
/**
 * Run IO
 */
export const runIO = (x) => x.run();
/**
 * Returns the run function for an IO<A>
 */
export const constRunIO = (x) => x.run;
/**
 * IO constructor function
 *
 */
export const newIO = (f) => new IO(f);
/**
 * noOp IO function
 */
export const noOpIO = new IO(constVoid);
//# sourceMappingURL=IO.js.map