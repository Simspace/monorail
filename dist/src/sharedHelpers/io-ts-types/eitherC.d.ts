import * as t from 'io-ts';
import { E } from '@monorail/sharedHelpers/fp-ts-imports';
export declare const eitherRightC: <A>(codecA: t.Type<A, A, unknown>) => t.Type<E.Right<A>, E.Right<A>, unknown>;
export declare const eitherLeftC: <A>(codecA: t.Type<A, A, unknown>) => t.Type<E.Left<A>, E.Left<A>, unknown>;
