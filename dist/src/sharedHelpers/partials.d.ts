import { Eq } from 'fp-ts/lib/Eq';
export declare const hasPartialEquals: <S extends string, A>(keys: Iterable<S>, E: Eq<A>) => (d1: Partial<Record<S, A>>, d2: Partial<Record<S, A>>) => boolean;
