import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import { partition } from 'fp-ts/lib/Set'

export * from 'fp-ts/lib/Set'

/**
 * Returns one element of a set, or `none` if the set is empty.
 *
 * Strictly speaking this is roughly the same as `head`, since ES Sets are
 * actually OrderedSets.
 */
export const one = <T>(ts: Set<T>): O.Option<T> =>
  pipe(ts.values().next(), t => (t.done ? O.none : O.some(t.value)))

/**
 * Partitions a set of objects by the values of some property of that object.
 *
 * @example
 * const objs = new Set([{ foo: 1 }, { foo: 2 }, { foo: 1 }])
 * partitionBy('foo')(objs) => [Set([{foo: 1}, {foo:1}]), Set([{foo:2}])]
 */
export const partitionBy = <K extends string>(key: K) => <
  V,
  T extends { [k in K]: V }
>(
  ts: Set<T>,
): Array<Set<T>> =>
  pipe(
    ts,
    one,
    O.map(t =>
      pipe(
        ts,
        partition((u): u is T => t[key] === u[key]),
        ({ left, right }) => [right, ...partitionBy(key)(left)],
      ),
    ),
    O.getOrElse<Array<Set<T>>>(() => []),
  )
