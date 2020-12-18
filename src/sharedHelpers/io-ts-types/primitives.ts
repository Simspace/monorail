import { failure, success, Type } from 'io-ts'
import { identity } from 'fp-ts/lib/function'

export class TrueType extends Type<true> {
  readonly _tag: 'TrueType' = 'TrueType'
  constructor() {
    super(
      'true',
      (u): u is true => typeof u === 'boolean' && u === true,
      (u, c) => (this.is(u) ? success(u) : failure(u, c)),
      identity,
    )
  }
}

export const booleanTrue: TrueType = new TrueType()

export class FalseType extends Type<false> {
  readonly _tag: 'FalseType' = 'FalseType'
  constructor() {
    super(
      'false',
      (u): u is false => typeof u === 'boolean' && u === false,
      (u, c) => (this.is(u) ? success(u) : failure(u, c)),
      identity,
    )
  }
}

export const booleanFalse: FalseType = new FalseType()
