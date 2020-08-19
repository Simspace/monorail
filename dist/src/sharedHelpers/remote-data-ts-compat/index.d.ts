import { RemoteData } from '@devexperts/remote-data-ts';
import { Eq } from 'fp-ts/lib/Eq';
import { Option } from 'fp-ts/lib/Option';
export { fromEither } from '@devexperts/remote-data-ts';
export declare const alt: any, ap: any, apFirst: any, apSecond: any, bimap: any, chain: any, chainFirst: any, duplicate: any, extend: any, flatten: any, foldMap: any, map: any, mapLeft: any, reduce: any, reduceRight: any;
/**
 * Compare values and returns `true` if they are identical, otherwise returns
 * `false`. `Left` part will return `false`. `RemoteSuccess` will call
 * `Eq.equals`.
 *
 * If you want to compare `RemoteData}'s values better use `getEq`
 * or `getOrd` helpers.
 *
 */
export declare const elem: any;
/**
 * Takes a predicate and apply it to `RemoteSuccess` value.
 * `Left` part will return `false`.
 */
export declare const exists: any;
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
export declare const fold: any;
export declare const fromOption: <E>(onNone: () => E) => <A>(o: Option<A>) => any;
export declare const getEq: <L, A>(EL: Eq<L>, EA: Eq<A>) => Eq<RemoteData<L, A>>;
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
export declare const getOrElse: any;
/**
 * Returns true only if `RemoteData` is `RemoteFailure`
 */
export declare const isFailure: any;
/**
 * Returns true only if `RemoteData` is `RemoteInitial`
 */
export declare const isInitial: any;
/**
 * Returns true only if `RemoteData} is `RemotePending`
 */
export declare const isPending: any;
/**
 * Returns true only if `RemoteData` is `RemoteSuccess`
 */
export declare const isSuccess: any;
/**
 * Maps this `RemoteFailure` error into `RemoteSuccess` if passed
 * function `f` returns `Some` value, otherwise returns self
 */
export declare const recover: any;
/**
 * Recovers `RemoteFailure` also mapping `RemoteSuccess` case
 * @see `recover`
 */
export declare const recoverMap: any;
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
export declare const toEither: any;
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
export declare const toNullable: any;
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
export declare const toOption: any;
//# sourceMappingURL=index.d.ts.map