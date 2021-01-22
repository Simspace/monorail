import { Lens } from 'monocle-ts';
export declare const tupleLens: <A extends readonly unknown[]>() => <I extends keyof A & number>(i: I) => Lens<A, A[I]>;
