import { iso, prism, unsafeCoerce } from 'newtype-ts';
import { isUndefined } from './typeGuards';
// this is safe, because we know ApiActionType is a union of newtypes,
// and we know each of those newtypes is actually a string at runtime
export const coerceApiActionTypeToString = (x) => unsafeCoerce(x);
export const mkApiActionTypes = (pathPrefix) => {
    const isoOptimistic = iso();
    const isoRequest = iso();
    const isoFailure = iso();
    const isoSuccess = iso();
    const pathOptimistic = `${pathPrefix}_OPTIMISTIC`;
    const optimistic = isoOptimistic.wrap(pathOptimistic);
    const pathRequest = `${pathPrefix}_REQUEST`;
    const request = isoRequest.wrap(pathRequest);
    const pathFailure = `${pathPrefix}_FAILURE`;
    const failure = isoFailure.wrap(pathFailure);
    const pathSuccess = `${pathPrefix}_SUCCESS`;
    const success = isoSuccess.wrap(pathSuccess);
    const isOptimistic = (x) => coerceApiActionTypeToString(x) === pathOptimistic;
    const isRequest = (x) => coerceApiActionTypeToString(x) === pathRequest;
    const isFailure = (x) => coerceApiActionTypeToString(x) === pathFailure;
    const isSuccess = (x) => coerceApiActionTypeToString(x) === pathSuccess;
    const isOptimistic_ = x => x === pathOptimistic;
    const isRequest_ = x => x === pathRequest;
    const isFailure_ = x => x === pathFailure;
    const isSuccess_ = x => x === pathSuccess;
    const prismOptimistic = prism(isOptimistic_);
    const prismRequest = prism(isRequest_);
    const prismFailure = prism(isFailure_);
    const prismSuccess = prism(isSuccess_);
    return {
        types: {
            optimistic,
            request,
            failure,
            success,
        },
        guards: {
            isOptimistic,
            isRequest,
            isFailure,
            isSuccess,
        },
        prisms: {
            optimistic: prismOptimistic,
            request: prismRequest,
            failure: prismFailure,
            success: prismSuccess,
        },
    };
};
export const mkApiAction = (type, payload, meta) => (isUndefined(payload)
    ? isUndefined(meta)
        ? { type }
        : { type, meta }
    : isUndefined(meta)
        ? { type, payload }
        : { type, payload, meta });
//# sourceMappingURL=apiActions.js.map