import {
  fromOption as fromOption_,
  remoteData,
  RemoteData,
  RemoteProgress,
  RemoteFailure,
  RemoteSuccess,
  RemotePending,
  RemoteInitial,
} from '@devexperts/remote-data-ts'
import { pipeable } from 'fp-ts/lib/pipeable'
import { Eq } from 'fp-ts/lib/Eq'
import { Option } from 'fp-ts/lib/Option'
import { Predicate } from 'fp-ts/lib/function'
import { Either } from 'fp-ts/lib/Either'
import { RD } from '@monorail/sharedHelpers/fp-ts-imports'

export { fromEither } from '@devexperts/remote-data-ts'

export const {
  alt,
  ap,
  apFirst,
  apSecond,
  bimap,
  chain,
  chainFirst,
  duplicate,
  extend,
  flatten,
  foldMap,
  map,
  mapLeft,
  reduce,
  reduceRight,
} = pipeable(remoteData)

/**
 * Compare values and returns `true` if they are identical, otherwise returns
 * `false`. `Left` part will return `false`. `RemoteSuccess` will call
 * `Eq.equals`.
 *
 * If you want to compare `RemoteData}'s values better use `getEq`
 * or `getOrd` helpers.
 *
 */
export const elem = RD.elem

/**
 * Takes a predicate and apply it to `RemoteSuccess` value.
 * `Left` part will return `false`.
 */
export const exists = RD.exists

/**
 * Needed for "unwrap" value from `RemoteData` "container".
 * It applies a function to each case in the data structure.
 *
 * @example
 * const onInitial = "it's initial"
 * const onPending = "it's pending"
 * const onFailure = (err) => "it's failure"
 * const onSuccess = (data) => `${data + 1}`
 * const f = fold(onInitial, onPending, onFailure, onSuccess)
 *
 * f(initial) // "it's initial"
 * f(pending) // "it's pending"
 * f(failure(new Error('error text'))) // "it's failure"
 * f(success(21)) // '22'
 */
export const fold = RD.fold

export const fromOption = <E>(onNone: () => E) => <A>(o: Option<A>) =>
  fromOption_(o, onNone)

export const getEq: <L, A>(EL: Eq<L>, EA: Eq<A>) => Eq<RemoteData<L, A>> =
  RD.getEq

/**
 * Takes a default value as an argument. If this `RemoteData` is "Left"
 * part it will return default value. If this `RemoteData` is
 * `RemoteSuccess` it will return it's value ("wrapped" value, not default
 * value)
 *
 * Note: Default value should be the same type as `RemoteData` (internal)
 * value, if you want to pass different type as default, use `fold`.
 *
 * @example
 * getOrElse(() => 999)(some(1)) // 1
 * getOrElseValue(() => 999)(initial) // 999
 */
export const getOrElse = RD.getOrElse

/**
 * Returns true only if `RemoteData` is `RemoteFailure`
 */
export const isFailure = RD.isFailure

/**
 * Returns true only if `RemoteData` is `RemoteInitial`
 */
export const isInitial = RD.isInitial

/**
 * Returns true only if `RemoteData} is `RemotePending`
 */
export const isPending = RD.isPending

/**
 * Returns true only if `RemoteData` is `RemoteSuccess`
 */
export const isSuccess = RD.isSuccess

/**
 * Maps this `RemoteFailure` error into `RemoteSuccess` if passed
 * function `f` returns `Some` value, otherwise returns self
 */
export const recover = RD.recover

/**
 * Recovers `RemoteFailure` also mapping `RemoteSuccess` case
 * @see `recover`
 */
export const recoverMap = RD.recoverMap

/**
 * Convert `RemoteData` to `Either`.
 * `Left` part will be converted to `Left<L>`.
 * Since `RemoteInitial} and `RemotePending` do not have `L` values,
 * you must provide a value of type `L` that will be used to construct
 * the `Left<L>` for those two cases.
 * `RemoteSuccess` will be converted to `Right<R>`.
 *
 * @example:
 * const f = toEither(
 * 		() => new Error('Data not fetched'),
 * 		() => new Error('Data is fetching')
 * )
 * f(success(2)) // right(2)
 * f(initial) // right(Error('Data not fetched'))
 * f(pending) // right(Error('Data is fetching'))
 * f(failure(new Error('error text'))) // right(Error('error text'))
 */
export const toEither = RD.toEither

/**
 * One more way to fold (unwrap) value from `RemoteData`.
 * `Left` part will return `null`.
 * `RemoteSuccess` will return value.
 *
 * For example:
 *
 * `toNullable(success(2))` will return `2`
 *
 * `toNullable(initial)` will return `null`
 *
 * `toNullable(pending)` will return `null`
 *
 * `toNullable(failure(new Error('error text')))` will return `null`
 *
 */
export const toNullable = RD.toNullable

/**
 * Convert `RemoteData` to `Option`
 * `Left` part will be converted to `None`.
 * `RemoteSuccess} will be converted to `Some`.
 *
 * @example
 * toOption(success(2)) // some(2)
 * toOption(initial) // none
 * toOption(pending) // none
 * toOption(failure(new Error('error text'))) // none
 */
export const toOption = RD.toOption
