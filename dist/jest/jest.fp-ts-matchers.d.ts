import * as E from 'fp-ts/lib/Either';
import { Eq } from 'fp-ts/lib/Eq';
import * as O from 'fp-ts/lib/Option';
declare global {
    namespace jest {
        interface Matchers<R> {
            toBeNone: R extends O.Option<unknown> ? () => R : never;
            toBeSome: R extends O.Option<unknown> ? () => R : never;
            toEqualSome: R extends O.Option<infer A> ? (equalTo: A, eq?: Eq<A>) => R : never;
            toBeLeft: R extends E.Either<unknown, unknown> ? () => R : never;
            toEqualLeft: R extends E.Either<infer L, unknown> ? (equalTo: L, eq?: Eq<L>) => R : never;
            toBeRight: R extends E.Either<unknown, unknown> ? () => R : never;
            toEqualRight: R extends E.Either<unknown, infer A> ? (equalTo: A, eq?: Eq<A>) => R : never;
        }
    }
}
//# sourceMappingURL=jest.fp-ts-matchers.d.ts.map