/**
 * Omits the given keys K from object T
 */
export function omit<T extends object, K extends keyof T>(
  object: T,
  keys: Array<K>,
): Omit<T, K> {
  const out = {} as Record<string, unknown>
  for (const k in object) {
    if (keys.includes(k as unknown as K)) {
      continue
    }
    out[k] = object[k]
  }
  return out as Omit<T, K>
}
