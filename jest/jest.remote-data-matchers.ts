import {
  fold,
  isFailure,
  isInitial,
  isPending,
  isSuccess,
  RemoteData,
} from '@devexperts/remote-data-ts'
import { Eq } from 'fp-ts/lib/Eq'
import { pipe } from 'fp-ts/lib/pipeable'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R, T = {}> {
      toBeRemoteInitial: T extends RemoteData<infer E, infer A>
        ? () => T
        : never
      toBeRemotePending: T extends RemoteData<infer E, infer A>
        ? () => T
        : never
      toBeRemoteFailure: T extends RemoteData<infer E, infer A>
        ? () => T
        : never
      toBeRemoteSuccess: T extends RemoteData<infer E, infer A>
        ? () => T
        : never
      toEqualRemoteFailure: T extends RemoteData<infer E, infer A>
        ? (equalTo: E, eq?: Eq<E>) => T
        : never
      toEqualRemoteSuccess: T extends RemoteData<infer E, infer A>
        ? (equalTo: A, eq?: Eq<A>) => T
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
      fold(
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
      fold(
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
