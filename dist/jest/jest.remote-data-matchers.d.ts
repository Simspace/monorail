import { RemoteData } from '@devexperts/remote-data-ts';
import { Eq } from 'fp-ts/lib/Eq';
declare global {
    namespace jest {
        interface Matchers<R, T = {}> {
            toBeRemoteInitial: T extends RemoteData<infer E, infer A> ? () => T : never;
            toBeRemotePending: T extends RemoteData<infer E, infer A> ? () => T : never;
            toBeRemoteFailure: T extends RemoteData<infer E, infer A> ? () => T : never;
            toBeRemoteSuccess: T extends RemoteData<infer E, infer A> ? () => T : never;
            toEqualRemoteFailure: T extends RemoteData<infer E, infer A> ? (equalTo: E, eq?: Eq<E>) => T : never;
            toEqualRemoteSuccess: T extends RemoteData<infer E, infer A> ? (equalTo: A, eq?: Eq<A>) => T : never;
        }
    }
}
