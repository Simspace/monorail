import * as t from 'io-ts'
import { Option, None, Some, none, fromEither } from 'fp-ts/lib/Option'
import { error } from 'fp-ts/lib/Console'
import { IO } from 'fp-ts/lib/IO'
import { Getter, Lens } from 'monocle-ts'
import { constant } from 'fp-ts/lib/function'
import { constVoid } from '@monorail/sharedHelpers/fp-ts-ext/function'

export type JSONNone = { _tag: 'None' }
export type JSONSome<A> = { _tag: 'Some'; value: A }

export type JSONOption<A> = JSONNone | JSONSome<A>

/**
 * JSONNone constructor
 */
export const jsonNone: JSONOption<never> = { _tag: 'None' }

/**
 * JSONSome constructor
 */
export const jsonSome = <A>(value: A): JSONOption<A> => {
  return { _tag: 'Some', value }
}

/**
 * Type guard for isJSONNone
 */
export const isJSONNone = <A>(x: JSONOption<A>): x is JSONNone =>
  x._tag === 'None'

/**
 * Type guard for isJSONSome
 */
export const isJSONSome = <A>(x: JSONOption<A>): x is JSONSome<A> =>
  x._tag === 'Some'

/**
 * Fold function for JSONOption<A>
 */
export const fold = <A, R>(
  fa: JSONOption<A>,
  onNone: R,
  onSome: (value0: A) => R,
): R => (isJSONNone(fa) ? onNone : onSome(fa.value))

/**
 * Helper utility for creating a codec for Option<A> <- -> JSONOption<A>
 */
export const createOptionFromJSON = <C extends t.Mixed>(
  codec: C,
  name: string = `Option<${codec.name}>`,
): t.Type<Option<t.TypeOf<C>>, JSONOption<t.OutputOf<C>>, t.mixed> => {
  /** create an io-ts representation of JSONNone | JSONSome<A> */
  const JSONOption_ = t.taggedUnion('_tag', [
    t.type({ _tag: t.literal('None') }),
    t.type({ _tag: t.literal('Some'), value: codec }),
  ])

  /** create a codec for Option<A> <- -> JSONOption<A> */
  return new t.Type<Option<t.TypeOf<C>>, JSONOption<t.OutputOf<C>>, t.mixed>(
    /** a unique name for this codec */
    name,
    /** a type guard for determining the type A of some Option<A> */
    (u): u is Option<t.TypeOf<C>> =>
      u instanceof None || (u instanceof Some && codec.is(u.value)),
    /** succeeds if input can be decoded to a value of type Option<t.TypeOf<C>> */
    (u, c) =>
      JSONOption_.validate(u, c).chain(o =>
        t.success(fold(o, none, a => fromEither(codec.decode(a)))),
      ),
    /**
     * converts a value of type Option<t.TypeOf<C>> to a value of type
     * JSONOption<t.OutputOf<C>>
     */
    o => o.fold(jsonNone, a => jsonSome(codec.encode(a))),
  )
}

/**
 * Helper utility for creating selectors that automatically handle decoding
 * JSONOptions back into Options when given a codec and a lens
 */
export const mkJSONOptionDecoderSelector = <A>(
  codec: t.Type<Option<A>, JSONOption<A>, t.mixed>,
) => <S>(getter: Getter<S, JSONOption<A>> | Lens<S, JSONOption<A>>) => (
  s: S,
): Option<A> => {
  const encoded = getter.get(s)
  const decoded = codec.decode(encoded)

  const noOpIO = new IO(constVoid)
  const constNoOpIO = constant(noOpIO)

  // TODO: consider better error handling
  const logErrorIO = decoded.fold(
    errs =>
      error({
        message: `Error decoding ${codec.name}`,
        validationErrors: errs,
      }),
    constNoOpIO,
  )

  // if Right, get Right (Option<B>), else get none
  const decodedOpt = decoded.getOrElse(none)
  const constDecodedOpt = constant(decodedOpt)
  const toOptionIO = new IO(constDecodedOpt)
  const constToOptionIO = constant(toOptionIO)

  // log error & then convert to options + continue on like nothing happened
  return logErrorIO.chain(constToOptionIO).run()
}

export function transformDecodeError(errs: t.Errors) {
  const errors = errs.reduce((acc: Array<string>, err: t.ValidationError) => {
    // err.context is a read-only array so doesn't work with fp-ts/lib/Array
    if (err.context && err.context[1] && err.context[1].key) {
      const key = err.context[1].key
      acc.push(key)
    }
    return acc
  }, [])

  return `The following keys erred when decoding: ${errors.join(', ')}.`
}
