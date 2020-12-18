import { Eq } from 'fp-ts/lib/Eq'

import { isNotUndefined, isUndefined } from './typeGuards'

// Like Record.isSubrecord but works for Partial<Record<K, V>>
export const hasPartialEquals = <S extends string, A>(
  keys: Iterable<S>,
  E: Eq<A>,
) => (d1: Partial<Record<S, A>>, d2: Partial<Record<S, A>>): boolean => {
  for (const k of keys) {
    const x = d1[k]
    const y = d2[k]

    if (isNotUndefined<A>(x) && isNotUndefined<A>(y)) {
      // X && Y isNot undefined, so run thru Eq.
      if (!E.equals(x, y)) {
        return false
      }
      // Unless both x,y is undefined, it's `false`
      // because it'll mean one is defined and one is undefined.
    } else if (!(isUndefined(x) && isUndefined(y))) {
      return false
    }
  }
  return true
}
