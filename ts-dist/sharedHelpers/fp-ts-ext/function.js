export const constVoid = () => { };
/**
 * Flips the order of the arguments to an uncurried function taking two
 * arguments. Like `flip`, but for uncurried, not curried, functions.
 */
export const flip_ = (f) => (b, a) => f(a, b);
/**
 * Simple binary composition. Also known as `compose2`
 */
export const o = (f, g) => (x) => f(g(x));
/**
 * Utility for constructing tuples with proper inference
 */
export const tuple = (...args) => args;
/**
 * Flips the position of each item in a 2-tuple
 */
export const swap = ([x, y]) => [y, x];
//# sourceMappingURL=function.js.map