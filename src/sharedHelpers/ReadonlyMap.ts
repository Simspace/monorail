// These utilities are copied from fp-ts 2.x ::
// https://github.com/gcanti/fp-ts/blob/3f7fa3b5f398c84ce3f2f692389720cb82e1bcf9/src/ReadonlyMap.ts#L30-L44

export function unsafeCoerceFromMap<K, A>(m: Map<K, A>): ReadonlyMap<K, A> {
  return new Map(m)
}

export function unsafeCoerceToMap<K, A>(m: ReadonlyMap<K, A>): Map<K, A> {
  return new Map(m)
}
