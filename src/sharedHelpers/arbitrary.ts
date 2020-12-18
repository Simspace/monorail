import fc, { Arbitrary } from 'fast-check'
import { Monad1 } from 'fp-ts/lib/Monad'

export const URI = 'Arbitrary'
export type URI = typeof URI

declare module 'fp-ts/lib/HKT' {
  interface URItoKind<A> {
    Arbitrary: Arbitrary<A>
  }
}

export const arbitrary: Monad1<URI> = {
  URI,
  of<A>(a: A) {
    return fc.constant(a)
  },
  map<A, B>(fa: Arbitrary<A>, f: (a: A) => B) {
    return fa.map(f)
  },
  ap<A, B>(fab: Arbitrary<(a: A) => B>, fa: Arbitrary<A>) {
    return fab.chain(ab => fa.map(ab))
  },
  chain<A, B>(fa: Arbitrary<A>, f: (a: A) => Arbitrary<B>) {
    return fa.chain(f)
  },
}
