import { Lens } from 'monocle-ts'

export const tupleLens = <A extends ReadonlyArray<unknown>>() => <
  I extends keyof A & number
>(
  i: I,
) =>
  new Lens(
    (as: A) => as[i],
    (a: A[I]) => (as: A) =>
      ([...as.slice(0, i), a, ...as.slice(i + 1)] as const) as A,
  )
