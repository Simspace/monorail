import { Arbitrary } from 'fast-check';
import { Monad1 } from 'fp-ts/lib/Monad';
export declare const URI = "Arbitrary";
export declare type URI = typeof URI;
declare module 'fp-ts/lib/HKT' {
    interface URItoKind<A> {
        Arbitrary: Arbitrary<A>;
    }
}
export declare const arbitrary: Monad1<URI>;
