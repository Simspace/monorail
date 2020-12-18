import * as t from 'io-ts'
import { E } from '@monorail/sharedHelpers/fp-ts-imports'

export const eitherRightC = <A>(codecA: t.Type<A>): t.Type<E.Right<A>> =>
  t.type({ _tag: t.literal('Right'), right: codecA })

export const eitherLeftC = <A>(codecA: t.Type<A>): t.Type<E.Left<A>> =>
  t.type({ _tag: t.literal('Left'), left: codecA })
