"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mkApiAction = exports.mkApiActionTypes = exports.coerceApiActionTypeToString = void 0;

var _newtypeTs = require("newtype-ts");

var _typeGuards = require("./typeGuards");

// this is safe, because we know ApiActionType is a union of newtypes,
// and we know each of those newtypes is actually a string at runtime
const coerceApiActionTypeToString = x => (0, _newtypeTs.unsafeCoerce)(x);

exports.coerceApiActionTypeToString = coerceApiActionTypeToString;

const mkApiActionTypes = pathPrefix => {
  const isoOptimistic = (0, _newtypeTs.iso)();
  const isoRequest = (0, _newtypeTs.iso)();
  const isoFailure = (0, _newtypeTs.iso)();
  const isoSuccess = (0, _newtypeTs.iso)();
  const pathOptimistic = `${pathPrefix}_OPTIMISTIC`;
  const optimistic = isoOptimistic.wrap(pathOptimistic);
  const pathRequest = `${pathPrefix}_REQUEST`;
  const request = isoRequest.wrap(pathRequest);
  const pathFailure = `${pathPrefix}_FAILURE`;
  const failure = isoFailure.wrap(pathFailure);
  const pathSuccess = `${pathPrefix}_SUCCESS`;
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

exports.mkApiActionTypes = mkApiActionTypes;

const mkApiAction = (type, payload, meta) => (0, _typeGuards.isUndefined)(payload) ? (0, _typeGuards.isUndefined)(meta) ? {
  type
} : {
  type,
  meta
} : (0, _typeGuards.isUndefined)(meta) ? {
  type,
  payload
} : {
  type,
  payload,
  meta
};

exports.mkApiAction = mkApiAction;