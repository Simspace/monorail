"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mkReduxActionsUnion = exports.mkReducer = exports.mkTaggedUnion = exports.mkTaggedUnionCustom = exports.mkGuards = exports.mkFold = exports.mkConstructors = exports.MemberTag = void 0;
// switch to this after updating to redux > 4.0
// import { Action } from 'redux'
const MemberTag = 'MemberTag';
exports.MemberTag = MemberTag;

const mkConstructors = () => (tag, memberTagRecord) => {
  const result = {};

  for (const memberTag of Object.keys(memberTagRecord)) {
    result[memberTag] = x => {
      const tagPair = {
        [tag]: memberTag
      };
      return x === undefined ? tagPair : { ...tagPair,
        ...x
      };
    };
  }

  return result;
};

exports.mkConstructors = mkConstructors;

const mkFold = () => tag => memberTagHandlerRecord => a => {
  const dataConstructorName = a[tag];
  return memberTagHandlerRecord[dataConstructorName](a);
};

exports.mkFold = mkFold;

const mkGuards = () => (tag, memberTagRecord) => {
  const result = {};

  for (const memberTag of Object.keys(memberTagRecord)) {
    result[memberTag] = member => member[tag] === memberTag;
  }

  return { ...result,
    MemberOfUnion: action => {
      const guards = Object.values(result);

      if (!(tag in action)) {
        return false;
      }

      for (const guard of guards) {
        if (guard(action)) {
          return true;
        }

        continue;
      }

      return false;
    }
  };
};

exports.mkGuards = mkGuards;

const mkTaggedUnionCustom = () => (tag, memberTagsRecord) => {
  const constructors = mkConstructors()(tag, memberTagsRecord);
  const is = mkGuards()(tag, memberTagsRecord);
  const fold = mkFold()(tag);
  const tags = Object.keys(memberTagsRecord);
  return { ...constructors,
    is,
    fold,
    tags
  };
};

exports.mkTaggedUnionCustom = mkTaggedUnionCustom;

const mkTaggedUnion = () => memberTagsRecord => mkTaggedUnionCustom()('tag', memberTagsRecord);

exports.mkTaggedUnion = mkTaggedUnion;

const mkReducer = reduxActionsUnionExt => init => updateLogic => (state = init, action) => reduxActionsUnionExt.is.MemberOfUnion(action) ? reduxActionsUnionExt.fold(updateLogic(state))(action) : state;

exports.mkReducer = mkReducer;

const mkReduxActionsUnion = () => memberTagsRecord => {
  const reduxActionsUnionExt = mkTaggedUnionCustom()('type', memberTagsRecord);
  const reducer = mkReducer(reduxActionsUnionExt);
  return { ...reduxActionsUnionExt,
    reducer
  };
};

exports.mkReduxActionsUnion = mkReduxActionsUnion;