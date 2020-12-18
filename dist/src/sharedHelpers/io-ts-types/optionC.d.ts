import * as t from 'io-ts';
import * as O from 'fp-ts/lib/Option';
/**
 * Codec for converting null or undefined members to/from Option
 * @param typeC
 */
export declare const optionC: <T, TO>(typeC: t.Type<T, TO, unknown>) => t.Type<O.Option<T>, TO | null | undefined, unknown>;
