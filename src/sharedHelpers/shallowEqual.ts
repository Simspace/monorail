/**
 * Statically typed shallow equality function for objects
 * NOTE: This is adapted from Facebook's implementation found here:
 * `https://github.com/facebook/react/blob/master/packages/react-dom/src` +
 * `/__tests__/ReactCompositeComponent-test.js`
 */
export const shallowEqual = <
  A extends object,
  B extends object,
  KA extends keyof A,
  KB extends keyof B
>(
  objA: A,
  objB: B,
): boolean => {
  if (Object.is(objA, objB)) {
    return true
  }
  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false
  }
  const keysA = Object.keys(objA) as Array<KA>
  const keysB = Object.keys(objB) as Array<KB>
  if (keysA.length !== keysB.length) {
    return false
  }
  for (let i = 0; i < keysA.length; i++) {
    if (
      !Object.prototype.hasOwnProperty.call(objB, keysA[i]) ||
      !Object.is(objA[keysA[i]], objB[((keysA as unknown) as Array<KB>)[i]])
    ) {
      return false
    }
  }
  return true
}
