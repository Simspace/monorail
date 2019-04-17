export const __ = '__';
export const mkConstructors = () => (tag, memberTagRecord) => {
    const result = {};
    for (const memberTag of Object.keys(memberTagRecord)) {
        result[memberTag] = (x) => {
            const tagPair = { [tag]: memberTag };
            return x === undefined ? tagPair : { ...tagPair, ...x };
        };
    }
    return result;
};
export const mkFold = () => (tag) => (memberTagHandlerRecord => a => {
    const dataConstructorName = a[tag];
    return memberTagHandlerRecord[dataConstructorName](a);
});
export const mkGuards = () => (tag, memberTagRecord) => {
    const result = {};
    for (const memberTag of Object.keys(memberTagRecord)) {
        result[memberTag] = (member) => member[tag] ===
            memberTag;
    }
    return {
        ...result,
        memberOfUnion: (action) => {
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
        },
    };
};
export const mkTaggedUnionCustom = () => (tag, memberTagsRecord) => {
    const constructors = mkConstructors()(tag, memberTagsRecord);
    const is = mkGuards()(tag, memberTagsRecord);
    const fold = mkFold()(tag);
    const tags = Object.keys(memberTagsRecord);
    return { ...constructors, is, fold, tags };
};
export const mkTaggedUnion = () => (memberTagsRecord) => mkTaggedUnionCustom()('tag', memberTagsRecord);
export const mkActionsUnion = () => (memberTagsRecord) => mkTaggedUnionCustom()('type', memberTagsRecord);
//# sourceMappingURL=taggedUnions.js.map