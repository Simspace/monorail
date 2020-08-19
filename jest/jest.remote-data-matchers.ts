import {
  isFailure,
  isInitial,
  isPending,
  isSuccess,
  RemoteData,
} from '@devexperts/remote-data-ts'
import { Eq } from 'fp-ts/lib/Eq'
import { pipe } from 'fp-ts/lib/pipeable'

import * as RDC from '@monorail/sharedHelpers/remote-data-ts-compat'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R> {
      toBeRemoteInitial: R extends RemoteData<infer E, infer A>
        ? () => R
        : never
      toBeRemotePending: R extends RemoteData<infer E, infer A>
        ? () => R
        : never
      toBeRemoteFailure: R extends RemoteData<infer E, infer A>
        ? () => R
        : never
      toBeRemoteSuccess: R extends RemoteData<infer E, infer A>
        ? () => R
        : never
      toEqualRemoteFailure: R extends RemoteData<infer E, infer A>
        ? (equalTo: E, eq?: Eq<E>) => R
        : never
      toEqualRemoteSuccess: R extends RemoteData<infer E, infer A>
        ? (equalTo: A, eq?: Eq<A>) => R
        : never
    }
  }
}

const result = (pass: boolean, received: unknown, expected: string) => ({
  pass,
  message: () => `expected ${received} ${pass ? 'not ' : ''}to be ${expected}`,
})

expect.extend({
  toBeRemoteInitial: <E, A>(received: RemoteData<E, A>) =>
    result(isInitial(received), received, 'a RemoteInitial'),

  toBeRemotePending: <E, A>(received: RemoteData<E, A>) =>
    result(isPending(received), received, 'a RemotePending'),

  toBeRemoteFailure: <E, A>(received: RemoteData<E, A>) =>
    result(isFailure(received), received, 'a RemoteFailure'),
  toBeRemoteSuccess: <E, A>(received: RemoteData<E, A>) =>
    result(isSuccess(received), received, 'a RemoteSuccess'),

  toEqualRemoteFailure<E, A>(
    this: jest.MatcherUtils,
    received: RemoteData<E, A>,
    equalTo: E,
    eq: Eq<E> = this,
  ) {
    const fail = result(false, received, 'a RemoteFailure')
    return pipe(
      received,
      RDC.fold(
        () => fail,
        () => fail,
        e => ({
          pass: eq.equals(e, equalTo),
          message: () =>
            `RemoteFailure value mismatch\n${this.utils.diff(equalTo, e)}`,
        }),
        () => fail,
      ),
    )
  },

  toEqualRemoteSuccess<E, A>(
    this: jest.MatcherUtils,
    received: RemoteData<E, A>,
    equalTo: A,
    eq: Eq<A> = this,
  ) {
    const fail = result(false, received, 'a RemoteSuccess')
    return pipe(
      received,
      RDC.fold(
        () => fail,
        () => fail,
        () => fail,
        e => ({
          pass: eq.equals(e, equalTo),
          message: () =>
            `RemoteSuccess value mismatch\n${this.utils.diff(equalTo, e)}`,
        }),
      ),
    )
  },
})
