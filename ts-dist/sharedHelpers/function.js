export const constVoid = () => { };
/**
 * Flips the order of the arguments to an uncurried function taking two
 * arguments.
 */
export const flip_ = (f) => (b, a) => f(a, b);
/**
 * Simple binary composition. Also known as `compose2`
 */
export const o = (f, g) => (x) => f(g(x));
//# sourceMappingURL=function.js.map