import * as t from 'io-ts';
export declare type JsonPayload<A> = {
    tag: 'json';
    value: A;
};
export declare const jsonPayloadC: <A>(codecA: t.Type<A, A, unknown>) => t.Type<JsonPayload<A>, JsonPayload<A>, unknown>;
