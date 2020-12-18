import { Iso } from 'monocle-ts'

import { coerce as coerceFromNewtype, Const } from './newtypes'

export type Named<A, N> = Const<A, N>

export const name = <A>(a: A) => <T>(f: <N>(namedA: Named<A, N>) => T): T =>
  f((a as unknown) as Named<A, unknown>)

export const the = coerceFromNewtype

export const coerce = <A, N extends Named<A, unknown>>(a: A) =>
  (a as unknown) as N

export const iso = <T, N>() => new Iso<Named<T, N>, T>(the, coerce)
