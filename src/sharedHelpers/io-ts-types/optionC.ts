import * as t from 'io-ts'
import * as E from 'fp-ts/lib/Either'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'

import { isOption, opTraverse } from '@monorail/sharedHelpers/fp-ts-ext/Option'

/**
 * Codec for converting null or undefined members to/from Option
 * @param typeC
 */
export const optionC = <T, TO>(
  typeC: t.Type<T, TO>,
): t.Type<O.Option<T>, TO | undefined | null, unknown> =>
  new t.Type<O.Option<T>, TO | undefined | null, unknown>(
    `Option<${typeC.name}>`,
    (input: unknown): input is O.Option<T> =>
      isOption(input) &&
      pipe(
        input,
        O.fold(() => true, typeC.is),
      ),
    (input, context) =>
      pipe(O.fromNullable(input), opTraverse(E.either)(typeC.decode)),
    O.fold(() => null, typeC.encode),
  )
