/**
 * Statically typed shallow equality function for objects
 * NOTE: This is adapted from Facebook's implementation found here:
 * `https://github.com/facebook/react/blob/master/packages/react-dom/src` +
 * `/__tests__/ReactCompositeComponent-test.js`
 */
export const shallowEqual = (objA, objB) => {
    if (Object.is(objA, objB)) {
        return true;
    }
    if (typeof objA !== 'object' ||
        objA === null ||
        typeof objB !== 'object' ||
        objB === null) {
        return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    for (let i = 0; i < keysA.length; i++) {
        if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) ||
            !Object.is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
};
//# sourceMappingURL=shallowEqual.js.map