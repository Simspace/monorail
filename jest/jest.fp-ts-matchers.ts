import * as E from 'fp-ts/lib/Either'
import { Eq } from 'fp-ts/lib/Eq'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'

import { isTrue } from '@monorail/sharedHelpers/typeGuards'

interface EqMeta<T> {
  isType(value: unknown): value is T
  target: T
  eq: Eq<T>
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R, T = {}> {
      // Option
      toBeNone: T extends O.Option<unknown> ? () => T : never
      toBeSome: T extends O.Option<unknown> ? () => T : never
      toEqualSome: T extends O.Option<infer A>
        ? (equalTo: A, eq?: Eq<A>) => T
        : never

      // Either
      toBeLeft: T extends E.Either<unknown, unknown> ? () => T : never
      toEqualLeft: T extends E.Either<infer L, unknown>
        ? (equalTo: L, eq?: Eq<L>) => T
        : never
      toBeRight: T extends E.Either<unknown, unknown> ? () => T : never
      toEqualRight: T extends E.Either<unknown, infer A>
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
  toBeNone: (received: O.Option<unknown>) =>
    pipe(
      received,
      O.fold(
        () => result(true, received, 'a None'),
        a => result(false, received, 'a None'),
      ),
    ),

  toBeSome: (received: O.Option<unknown>) =>
    pipe(
      received,
      O.fold(
        () => result(false, received, 'a Some'),
        a => result(true, received, 'a Some'),
      ),
    ),

  toEqualSome<A>(
    this: jest.MatcherUtils,
    received: O.Option<A>,
    equalTo: A,
    eq?: Eq<A>,
  ) {
    return pipe(
      received,
      E.fromOption(() => ''),
      E.chain(a =>
        pipe(
          eq,
          E.fromNullable(''),
          E.map(eq_ => eq_.equals),
          E.alt(() => E.right(this.equals)),
          E.map(fn => fn(equalTo, a)),
          E.chain(
            E.fromPredicate(isTrue, () => `some(${JSON.stringify(equalTo)})`),
          ),
          E.map(_ => a),
        ),
      ),
      E.fold(
        l => result(false, received, l),
        a => result(true, received, `some(${JSON.stringify(a)})`),
      ),
    )
  },

  toBeLeft: (received: E.Either<unknown, unknown>) =>
    pipe(
      received,
      E.fold(
        _ => result(true, received, 'a Left'),
        _ => result(false, received, 'a Left'),
      ),
    ),

  toEqualLeft<L>(
    this: jest.MatcherUtils,
    received: E.Either<L, unknown>,
    equalTo: L,
    eq?: Eq<L>,
  ) {
    return pipe(
      received,
      E.fromPredicate(E.isLeft, () => 'a Left'),
      E.chain(({ left: l }) =>
        pipe(
          eq,
          E.fromNullable(''),
          E.map(eq_ => eq_.equals),
          E.alt(() => E.right(this.equals)),
          E.map(fn => fn(equalTo, l)),
          E.chain(
            E.fromPredicate(isTrue, () => `left(${JSON.stringify(equalTo)})`),
          ),
          E.map(_ => l),
        ),
      ),
      E.fold(
        e => result(false, received, e),
        l => result(true, received, `left(${JSON.stringify(l)})`),
      ),
    )
  },

  toBeRight: (received: E.Either<unknown, unknown>) =>
    pipe(
      received,
      E.fold(
        _ => result(false, received, 'a Right'),
        _ => result(true, received, 'a Right'),
      ),
    ),

  toEqualRight<A>(
    this: jest.MatcherUtils,
    received: E.Either<unknown, A>,
    equalTo: A,
    eq?: Eq<A>,
  ) {
    return pipe(
      received,
      E.mapLeft(_ => 'a Right'),
      E.chain(a =>
        pipe(
          eq,
          E.fromNullable(''),
          E.map(eq_ => eq_.equals),
          E.alt(() => E.right(this.equals)),
          E.map(fn => fn(equalTo, a)),
          E.chain(
            E.fromPredicate(isTrue, () => `right(${JSON.stringify(equalTo)})`),
          ),
          E.map(_ => a),
        ),
      ),
      E.fold(
        l => result(false, received, l),
        a => result(true, received, `right(${JSON.stringify(a)})`),
      ),
    )
  },
})
