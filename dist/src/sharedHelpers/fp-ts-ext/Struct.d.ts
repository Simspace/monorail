import * as Eq from 'fp-ts/lib/Eq';
import * as O from 'fp-ts/lib/Option';
export declare const difference: <A extends object>(eqStruct: { [P in keyof A]: Eq.Eq<A[P]>; }) => (x: A, y: A) => O.Option<Partial<A>>;
