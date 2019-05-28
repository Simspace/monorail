import { Either, right } from 'fp-ts/lib/Either'
import { none, Option, some } from 'fp-ts/lib/Option'
import * as t from 'io-ts'

import { createOptionFromJSON } from '@monorail/sharedHelpers/jsonEncodersDecoders'

type RoundTripTest<A> = {
  result: Either<t.Errors, Option<A>>
  expected: Either<t.Errors, Option<A>>
}

const roundTrip = <A>(codec: t.Type<A>) => {
  const OptionFromJSON = createOptionFromJSON(codec)

  return (ma: Option<A>): RoundTripTest<A> => {
    const stringified = JSON.stringify(ma)
    const parsed = JSON.parse(stringified)
    const result = OptionFromJSON.decode(parsed)
    const expected = right<t.Errors, Option<A>>(ma)
    return { result, expected }
  }
}

const roundTripTest = roundTrip(t.number)

describe('createOptionFromJSON', () => {
  it('properly encodes and decodes Some', () => {
    const numOpt = some(1)
    const { result, expected } = roundTripTest(numOpt)
    expect(result).toEqual(expected)
  })
  it('properly encodes and decodes None', () => {
    const { result, expected } = roundTripTest(none)
    expect(result).toEqual(expected)
  })
})
