import { RemoteData } from '@devexperts/remote-data-ts';
import { Eq } from 'fp-ts/lib/Eq';
declare global {
    namespace jest {
        interface Matchers<R> {
            toBeRemoteInitial: R extends RemoteData<infer E, infer A> ? () => R : never;
            toBeRemotePending: R extends RemoteData<infer E, infer A> ? () => R : never;
            toBeRemoteFailure: R extends RemoteData<infer E, infer A> ? () => R : never;
            toBeRemoteSuccess: R extends RemoteData<infer E, infer A> ? () => R : never;
            toEqualRemoteFailure: R extends RemoteData<infer E, infer A> ? (equalTo: E, eq?: Eq<E>) => R : never;
            toEqualRemoteSuccess: R extends RemoteData<infer E, infer A> ? (equalTo: A, eq?: Eq<A>) => R : never;
        }
    }
}
//# sourceMappingURL=jest.remote-data-matchers.d.ts.map