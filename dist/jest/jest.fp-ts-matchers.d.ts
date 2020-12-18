import * as E from 'fp-ts/lib/Either';
import { Eq } from 'fp-ts/lib/Eq';
import * as O from 'fp-ts/lib/Option';
declare global {
    namespace jest {
        interface Matchers<R, T = {}> {
            toBeNone: T extends O.Option<unknown> ? () => T : never;
            toBeSome: T extends O.Option<unknown> ? () => T : never;
            toEqualSome: T extends O.Option<infer A> ? (equalTo: A, eq?: Eq<A>) => T : never;
            toBeLeft: T extends E.Either<unknown, unknown> ? () => T : never;
            toEqualLeft: T extends E.Either<infer L, unknown> ? (equalTo: L, eq?: Eq<L>) => T : never;
            toBeRight: T extends E.Either<unknown, unknown> ? () => T : never;
            toEqualRight: T extends E.Either<unknown, infer A> ? (equalTo: A, eq?: Eq<A>) => T : never;
        }
    }
}
