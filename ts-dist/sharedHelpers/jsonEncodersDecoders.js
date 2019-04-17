import * as t from 'io-ts';
import { None, Some, none, fromEither } from 'fp-ts/lib/Option';
import { error } from 'fp-ts/lib/Console';
import { IO } from 'fp-ts/lib/IO';
import { constant } from 'fp-ts/lib/function';
import { constVoid } from '@monorail/sharedHelpers/fp-ts-ext/function';
/**
 * JSONNone constructor
 */
export const jsonNone = { _tag: 'None' };
/**
 * JSONSome constructor
 */
export const jsonSome = (value) => {
    return { _tag: 'Some', value };
};
/**
 * Type guard for isJSONNone
 */
export const isJSONNone = (x) => x._tag === 'None';
/**
 * Type guard for isJSONSome
 */
export const isJSONSome = (x) => x._tag === 'Some';
/**
 * Fold function for JSONOption<A>
 */
export const fold = (fa, onNone, onSome) => (isJSONNone(fa) ? onNone : onSome(fa.value));
/**
 * Helper utility for creating a codec for Option<A> <- -> JSONOption<A>
 */
export const createOptionFromJSON = (codec, name = `Option<${codec.name}>`) => {
    /** create an io-ts representation of JSONNone | JSONSome<A> */
    const JSONOption_ = t.taggedUnion('_tag', [
        t.type({ _tag: t.literal('None') }),
        t.type({ _tag: t.literal('Some'), value: codec }),
    ]);
    /** create a codec for Option<A> <- -> JSONOption<A> */
    return new t.Type(
    /** a unique name for this codec */
    name, 
    /** a type guard for determining the type A of some Option<A> */
    (u) => u instanceof None || (u instanceof Some && codec.is(u.value)), 
    /** succeeds if input can be decoded to a value of type Option<t.TypeOf<C>> */
    (u, c) => JSONOption_.validate(u, c).chain(o => t.success(fold(o, none, a => fromEither(codec.decode(a))))), 
    /**
     * converts a value of type Option<t.TypeOf<C>> to a value of type
     * JSONOption<t.OutputOf<C>>
     */
    o => o.fold(jsonNone, a => jsonSome(codec.encode(a))));
};
/**
 * Helper utility for creating selectors that automatically handle decoding
 * JSONOptions back into Options when given a codec and a lens
 */
export const mkJSONOptionDecoderSelector = (codec) => (getter) => (s) => {
    const encoded = getter.get(s);
    const decoded = codec.decode(encoded);
    const noOpIO = new IO(constVoid);
    const constNoOpIO = constant(noOpIO);
    // TODO: consider better error handling
    const logErrorIO = decoded.fold(errs => error({
        message: `Error decoding ${codec.name}`,
        validationErrors: errs,
    }), constNoOpIO);
    // if Right, get Right (Option<B>), else get none
    const decodedOpt = decoded.getOrElse(none);
    const constDecodedOpt = constant(decodedOpt);
    const toOptionIO = new IO(constDecodedOpt);
    const constToOptionIO = constant(toOptionIO);
    // log error & then convert to options + continue on like nothing happened
    return logErrorIO.chain(constToOptionIO).run();
};
export function transformDecodeError(errs) {
    const errors = errs.reduce((acc, err) => {
        // err.context is a read-only array so doesn't work with fp-ts/lib/Array
        if (err.context && err.context[1] && err.context[1].key) {
            const key = err.context[1].key;
            acc.push(key);
        }
        return acc;
    }, []);
    return `The following keys erred when decoding: ${errors.join(', ')}.`;
}
//# sourceMappingURL=jsonEncodersDecoders.js.map