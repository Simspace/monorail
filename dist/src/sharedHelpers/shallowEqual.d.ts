/**
 * Statically typed shallow equality function for objects
 * NOTE: This is adapted from Facebook's implementation found here:
 * `https://github.com/facebook/react/blob/master/packages/react-dom/src` +
 * `/__tests__/ReactCompositeComponent-test.js`
 */
export declare const shallowEqual: <A extends object, B extends object, KA extends keyof A, KB extends keyof B>(objA: A, objB: B) => boolean;
