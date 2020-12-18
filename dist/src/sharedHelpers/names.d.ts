import { Iso } from 'monocle-ts';
import { Const } from './newtypes';
export declare type Named<A, N> = Const<A, N>;
export declare const name: <A>(a: A) => <T>(f: <N>(namedA: Named<A, N>) => T) => T;
export declare const the: <N extends import("newtype-ts").AnyNewtype>(n: N) => import("./newtypes").CoerceNewtype<N>;
export declare const coerce: <A, N extends Named<A, unknown>>(a: A) => N;
export declare const iso: <T, N>() => Iso<Named<T, N>, T>;
