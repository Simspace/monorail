"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mkActionsUnion = exports.mkTaggedUnion = exports.mkTaggedUnionCustom = exports.mkGuards = exports.mkFold = exports.mkConstructors = exports.__ = void 0;
// switch to this after updating to redux > 4.0
// import { Action } from 'redux'
const __ = '__';
exports.__ = __;

const mkConstructors = () => (tag, memberTagRecord) => {
  const result = {};

  for (const memberTag of Object.keys(memberTagRecord)) {
    // TODO: any cast due to TS 3.5 upgrade. Not sure how to type better. -dan
    // tslint:disable-next-line: no-any
    ;

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
    // TODO: any cast due to TS 3.5 upgrade. Not sure how to type better. -dan
    // tslint:disable-next-line: no-any
    ;

    result[memberTag] = member => member[tag] === memberTag;
  }

  return { ...result,
    memberOfUnion: action => {
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

const mkActionsUnion = () => memberTagsRecord => mkTaggedUnionCustom()('type', memberTagsRecord);

exports.mkActionsUnion = mkActionsUnion;