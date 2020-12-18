import * as Eq from 'fp-ts/lib/Eq'
import * as O from 'fp-ts/lib/Option'

import { keys } from '@monorail/sharedHelpers/fp-ts-ext/Record'

export const difference = <A extends object>(
  eqStruct: {
    [P in keyof A]: Eq.Eq<A[P]>
  },
) => (x: A, y: A): O.Option<Partial<A>> =>
  O.fromPredicate((o: object) => Object.keys(o).length > 0)(
    keys(eqStruct).reduce(
      (acc, cur) => ({
        ...acc,
        ...(!eqStruct[cur].equals(x[cur], y[cur]) ? { [cur]: x[cur] } : {}),
      }),
      {},
    ),
  )
