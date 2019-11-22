import { Prism } from 'monocle-ts';
import { Newtype } from 'newtype-ts';
export interface Optimistic<A extends string> extends Newtype<{
    readonly Optimistic: unique symbol;
    phantom: A;
}, string> {
}
export interface Request<A extends string> extends Newtype<{
    readonly Request: unique symbol;
    phantom: A;
}, string> {
}
export interface Failure<A extends string> extends Newtype<{
    readonly Failure: unique symbol;
    phantom: A;
}, string> {
}
export interface Success<A extends string> extends Newtype<{
    readonly Success: unique symbol;
    phantom: A;
}, string> {
}
export declare type ApiActionType<A extends string> = Optimistic<A> | Request<A> | Failure<A> | Success<A>;
export declare const coerceApiActionTypeToString: <A extends string>(x: ApiActionType<A>) => string;
export declare type ApiActionTypes<A extends string> = {
    types: {
        optimistic: Optimistic<A>;
        request: Request<A>;
        failure: Failure<A>;
        success: Success<A>;
    };
    guards: {
        isOptimistic: (x: ApiActionType<A>) => x is Optimistic<A>;
        isRequest: (x: ApiActionType<A>) => x is Request<A>;
        isFailure: (x: ApiActionType<A>) => x is Failure<A>;
        isSuccess: (x: ApiActionType<A>) => x is Success<A>;
    };
    prisms: {
        optimistic: Prism<string, Optimistic<A>>;
        request: Prism<string, Request<A>>;
        failure: Prism<string, Failure<A>>;
        success: Prism<string, Success<A>>;
    };
};
export declare const mkApiActionTypes: <A extends string>(pathPrefix: A) => ApiActionTypes<A>;
export declare type GeneratedApiAction<Type, Payload, Meta> = Payload extends undefined ? Meta extends undefined ? {
    type: Type;
} : {
    type: Type;
    meta: Meta;
} : Meta extends undefined ? {
    type: Type;
    payload: Payload;
} : {
    type: Type;
    payload: Payload;
    meta: Meta;
};
export declare const mkApiAction: <A extends string, Type extends ApiActionType<A>, Payload = undefined, Meta = undefined>(type: Type, payload?: Payload | undefined, meta?: Meta | undefined) => GeneratedApiAction<Type, Payload, Meta>;
