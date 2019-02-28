"use strict";

var _newtypeTs = require("newtype-ts");

// this is safe, because we know ApiActionType is a union of newtypes,
// and we know each of those newtypes is actually a string at runtime
const coerceApiActionTypeToString = x => (0, _newtypeTs.unsafeCoerce)(x);

const mkApiActionTypes = pathPrefix => {
  const isoOptimistic = (0, _newtypeTs.iso)();
  const isoRequest = (0, _newtypeTs.iso)();
  const isoFailure = (0, _newtypeTs.iso)();
  const isoSuccess = (0, _newtypeTs.iso)();
  const pathOptimistic = `${pathPrefix}_OPTIMISTIC`;
  const optimistic = isoOptimistic.wrap(pathOptimistic);
  const pathRequest = `${pathPrefix}/_REQUEST`;
  const request = isoRequest.wrap(pathRequest);
  const pathFailure = `${pathPrefix}/_FAILURE`;
  const failure = isoFailure.wrap(pathFailure);
  const pathSuccess = `${pathPrefix}/_SUCCESS`;
  const success = isoSuccess.wrap(pathSuccess);

  const isOptimistic = x => coerceApiActionTypeToString(x) === pathOptimistic;

  const isRequest = x => coerceApiActionTypeToString(x) === pathRequest;

  const isFailure = x => coerceApiActionTypeToString(x) === pathFailure;

  const isSuccess = x => coerceApiActionTypeToString(x) === pathSuccess;

  const isOptimistic_ = x => x === pathOptimistic;

  const isRequest_ = x => x === pathRequest;

  const isFailure_ = x => x === pathFailure;

  const isSuccess_ = x => x === pathSuccess;

  const prismOptimistic = (0, _newtypeTs.prism)(isOptimistic_);
  const prismRequest = (0, _newtypeTs.prism)(isRequest_);
  const prismFailure = (0, _newtypeTs.prism)(isFailure_);
  const prismSuccess = (0, _newtypeTs.prism)(isSuccess_);
  return {
    types: {
      optimistic,
      request,
      failure,
      success
    },
    guards: {
      isOptimistic,
      isRequest,
      isFailure,
      isSuccess
    },
    prisms: {
      optimistic: prismOptimistic,
      request: prismRequest,
      failure: prismFailure,
      success: prismSuccess
    }
  };
};

const isUndefined = x => x === undefined;

const mkApiAction = (type, payload, meta) => isUndefined(payload) ? isUndefined(meta) ? {
  type
} : {
  type,
  meta
} : isUndefined(meta) ? {
  type,
  payload
} : {
  type,
  payload,
  meta
};

const test = mkApiActionTypes('a/path/in/my/app/SOME_API_ACTION'); // => { type: Failure<"a/path/in/my/app/SOME_API_ACTION">; payload: Error; meta: string }

const testActionA = mkApiAction(test.types.failure, new Error('Oops!'), Date.now().toLocaleString()); // => true

const testGuardA = test.guards.isFailure(testActionA.type); // type error -- the arg given to isFailure is a string, but it needs to be an
// ApiActionType<"a/path/in/my/app/SOME_API_ACTION">
// const testGuardB = test.guards.isFailure('a/path/in/my/app/SOME_API_ACTION_FAILURE')
// => { type: Request<"a/path/in/my/app/SOME_API_ACTION"> }

const testActionB = mkApiAction(test.types.request); // => { type: Optimistic<"a/path/in/my/app/SOME_API_ACTION">; payload: { data: string } }

const testActionC = mkApiAction(test.types.success, {
  data: 'Some received data'
}); // => Option<Request<"a/path/in/my/app/SOME_API_ACTION">>
// (it's a Some<Request<"a/path/in/my/app/SOME_API_ACTION">> in this case)

const requestOption = test.prisms.request.getOption('a/path/in/my/app/SOME_API_ACTION_REQUEST');