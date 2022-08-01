/**
 * Performs a filter and map in one step. If the defined callback function returns undefined,
 * the element will be dropped from the result.
 */
export function filterMap<A, B>(
  array: Array<A>,
  f: (value: A, index: number) => B | undefined,
): Array<B> {
  if (array.length === 0) {
    return []
  }

  const result: Array<B> = []
  for (let i = 0; i < array.length; i++) {
    const b = f(array[i], i)
    if (b === undefined) {
      continue
    }
    result.push(b)
  }

  return result
}
