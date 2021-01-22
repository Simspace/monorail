import * as RD from '@devexperts/remote-data-ts'
import * as E from 'fp-ts/lib/Either'
import { flow, identity } from 'fp-ts/lib/function'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import * as Show from 'fp-ts/lib/Show'

import { isEither } from '@monorail/sharedHelpers/fp-ts-ext/Either'
import { isOption } from '@monorail/sharedHelpers/fp-ts-ext/Option'
import {
  hasKey,
  isFunction,
  isObject,
} from '@monorail/sharedHelpers/typeGuards'

export * from 'fp-ts/lib/Show'

/**
 * This attempts to provide some useful output on most common (possibly
 * higher-kinded) types. Due to the nature of fp-ts, this can only handle types
 * it specifically knows about, which currently includes
 *
 * - Option
 * - Either
 * - RemoteData
 * - Function
 *
 * Everything else gets shoved into a string template, which will work for
 * native types and maybe even some others.
 *
 * This should probably only be used for debugging and nothing else.
 */
export const showUnknown: Show.Show<unknown> = {
  show: x =>
    pipe(
      E.left(x),
      E.orElse(
        flow(
          E.fromPredicate(isOption, identity),
          E.map(O.getShow(showUnknown).show),
        ),
      ),
      E.orElse(
        flow(
          E.fromPredicate(isEither, identity),
          E.map(E.getShow(showUnknown, showUnknown).show),
        ),
      ),
      E.orElse(
        flow(
          E.fromPredicate(
            (a): a is RD.RemoteData<unknown, unknown> =>
              isObject(a) &&
              hasKey(a, '_tag') &&
              (a._tag === 'RemoteInitial' ||
                a._tag === 'RemotePending' ||
                a._tag === 'RemoteFailure' ||
                a._tag === 'RemoteSuccess'),
            identity,
          ),
          E.map(RD.getShow(showUnknown, showUnknown).show),
        ),
      ),
      E.orElse(
        flow(
          E.fromPredicate(isFunction, identity),
          E.map(f => `${f.name || '\u03bb'}()`),
        ),
      ),
      E.getOrElse(a => `${a}`),
    ),
}
