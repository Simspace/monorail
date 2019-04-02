import { Predicate } from 'fp-ts/lib/function'
import { Prism } from 'monocle-ts'
import { Newtype, iso, prism, unsafeCoerce } from 'newtype-ts'
import { isUndefined } from './typeGuards'

export interface Optimistic<A extends string>
  extends Newtype<
      {
        readonly Optimistic: unique symbol
        phantom: A
      },
      string
    > {}

export interface Request<A extends string>
  extends Newtype<
      {
        readonly Request: unique symbol
        phantom: A
      },
      string
    > {}

export interface Failure<A extends string>
  extends Newtype<
      {
        readonly Failure: unique symbol
        phantom: A
      },
      string
    > {}

export interface Success<A extends string>
  extends Newtype<
      {
        readonly Success: unique symbol
        phantom: A
      },
      string
    > {}

export type ApiActionType<A extends string> =
  | Optimistic<A>
  | Request<A>
  | Failure<A>
  | Success<A>

// this is safe, because we know ApiActionType is a union of newtypes,
// and we know each of those newtypes is actually a string at runtime
export const coerceApiActionTypeToString = <A extends string>(
  x: ApiActionType<A>,
): string => unsafeCoerce<ApiActionType<A>, string>(x)

export type ApiActionTypes<A extends string> = {
  types: {
    optimistic: Optimistic<A>
    request: Request<A>
    failure: Failure<A>
    success: Success<A>
  }
  guards: {
    isOptimistic: (x: ApiActionType<A>) => x is Optimistic<A>
    isRequest: (x: ApiActionType<A>) => x is Request<A>
    isFailure: (x: ApiActionType<A>) => x is Failure<A>
    isSuccess: (x: ApiActionType<A>) => x is Success<A>
  }
  prisms: {
    optimistic: Prism<string, Optimistic<A>>
    request: Prism<string, Request<A>>
    failure: Prism<string, Failure<A>>
    success: Prism<string, Success<A>>
  }
}

export const mkApiActionTypes = <A extends string>(
  pathPrefix: A,
): ApiActionTypes<A> => {
  const isoOptimistic = iso<Optimistic<A>>()
  const isoRequest = iso<Request<A>>()
  const isoFailure = iso<Failure<A>>()
  const isoSuccess = iso<Success<A>>()

  const pathOptimistic = `${pathPrefix}_OPTIMISTIC`
  const optimistic = isoOptimistic.wrap(pathOptimistic)

  const pathRequest = `${pathPrefix}_REQUEST`
  const request = isoRequest.wrap(pathRequest)

  const pathFailure = `${pathPrefix}_FAILURE`
  const failure = isoFailure.wrap(pathFailure)

  const pathSuccess = `${pathPrefix}_SUCCESS`
  const success = isoSuccess.wrap(pathSuccess)

  const isOptimistic = (x: ApiActionType<A>): x is Optimistic<A> =>
    coerceApiActionTypeToString(x) === pathOptimistic

  const isRequest = (x: ApiActionType<A>): x is Request<A> =>
    coerceApiActionTypeToString(x) === pathRequest

  const isFailure = (x: ApiActionType<A>): x is Failure<A> =>
    coerceApiActionTypeToString(x) === pathFailure

  const isSuccess = (x: ApiActionType<A>): x is Success<A> =>
    coerceApiActionTypeToString(x) === pathSuccess

  const isOptimistic_: Predicate<string> = x => x === pathOptimistic
  const isRequest_: Predicate<string> = x => x === pathRequest
  const isFailure_: Predicate<string> = x => x === pathFailure
  const isSuccess_: Predicate<string> = x => x === pathSuccess

  const prismOptimistic = prism<Optimistic<A>>(isOptimistic_)
  const prismRequest = prism<Request<A>>(isRequest_)
  const prismFailure = prism<Failure<A>>(isFailure_)
  const prismSuccess = prism<Success<A>>(isSuccess_)

  return {
    types: {
      optimistic,
      request,
      failure,
      success,
    },
    guards: {
      isOptimistic,
      isRequest,
      isFailure,
      isSuccess,
    },
    prisms: {
      optimistic: prismOptimistic,
      request: prismRequest,
      failure: prismFailure,
      success: prismSuccess,
    },
  }
}

export type GeneratedApiAction<Type, Payload, Meta> = Payload extends undefined
  ? (Meta extends undefined ? { type: Type } : { type: Type; meta: Meta })
  : (Meta extends undefined
      ? { type: Type; payload: Payload }
      : { type: Type; payload: Payload; meta: Meta })

export const mkApiAction = <
  A extends string,
  Type extends ApiActionType<A>,
  Payload = undefined,
  Meta = undefined
>(
  type: Type,
  payload?: Payload,
  meta?: Meta,
): GeneratedApiAction<Type, Payload, Meta> =>
  (isUndefined(payload)
    ? isUndefined(meta)
      ? { type }
      : { type, meta }
    : isUndefined(meta)
      ? { type, payload }
      : { type, payload, meta }) as GeneratedApiAction<Type, Payload, Meta>
