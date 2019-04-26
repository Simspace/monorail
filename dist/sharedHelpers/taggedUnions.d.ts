import { Exact, Omit } from 'typelevel-ts';
import { Lazy } from 'fp-ts/lib/function';
export declare type Action<A extends string> = {
    type: A;
};
export declare type StringIndexed<A extends object> = A & {
    [key: string]: unknown;
};
export declare type Tagged<A = string> = {
    tag: A;
};
export interface MinReduxAction<A extends string> extends Action<A> {
}
export interface MinTaggedType<A extends string> extends Tagged<A> {
}
export declare type TagKeyOf<A extends object> = keyof A & string;
export declare type DataConstructorTagValue<A extends object, DataConstructorTagKey extends TagKeyOf<A>> = A[DataConstructorTagKey] & string;
export declare type TaggedType<A extends object, DataConstructorTagKey extends TagKeyOf<A>, Value extends DataConstructorTagValue<A, DataConstructorTagKey>> = Extract<A, {
    [K in DataConstructorTagKey]: Value;
}>;
export declare type TaggedUnionMember<A extends object, DataConstructorTagKey extends TagKeyOf<A>, Value extends DataConstructorTagValue<A, DataConstructorTagKey>> = TaggedType<A, DataConstructorTagKey, Value>;
export declare const __ = "__";
export declare type __ = typeof __;
export declare type Constructors<A extends object, DataConstructorTagKey extends TagKeyOf<A>> = {
    [K in DataConstructorTagValue<A, DataConstructorTagKey>]: Omit<TaggedUnionMember<A, DataConstructorTagKey, K>, DataConstructorTagKey> extends Exact<Pick<unknown, never>, Omit<TaggedUnionMember<A, DataConstructorTagKey, K>, DataConstructorTagKey>> ? Lazy<A> : (x: Omit<TaggedUnionMember<A, DataConstructorTagKey, K>, DataConstructorTagKey>) => A;
};
export declare const mkConstructors: <A extends object>() => <DataConstructorTagKey extends TagKeyOf<A>>(tag: DataConstructorTagKey, memberTagRecord: { [K in DataConstructorTagValue<A, DataConstructorTagKey>]: "__"; }) => Constructors<A, DataConstructorTagKey>;
export declare type Fold<A extends object, DataConstructorTagKey extends TagKeyOf<A>> = A[DataConstructorTagKey] extends string ? (<B>(memberTagHandlerRecord: {
    [K in DataConstructorTagValue<A, DataConstructorTagKey>]: (x: TaggedUnionMember<A, DataConstructorTagKey, K>) => B;
}) => (a: A) => B) : never;
export declare const mkFold: <A extends object>() => <DataConstructorTagKey extends TagKeyOf<A>>(tag: DataConstructorTagKey) => Fold<A, DataConstructorTagKey>;
export declare type Guards<A extends object, DataConstructorTagKey extends TagKeyOf<A>> = {
    [K in DataConstructorTagValue<A, DataConstructorTagKey>]: (x: A) => x is TaggedUnionMember<A, DataConstructorTagKey, K>;
} & {
    memberOfUnion: (action: object) => action is A;
};
export declare const mkGuards: <A extends object>() => <DataConstructorTagKey extends TagKeyOf<A>>(tag: DataConstructorTagKey, memberTagRecord: { [K in DataConstructorTagValue<A, DataConstructorTagKey>]: "__"; }) => Guards<A, DataConstructorTagKey>;
export declare type TaggedUnionExt<DataConstructorTagKey extends TagKeyOf<A>, A extends object> = Constructors<A, DataConstructorTagKey> & {
    is: Guards<A, DataConstructorTagKey>;
} & {
    fold: Fold<A, DataConstructorTagKey>;
} & {
    tags: Array<string>;
};
export declare const mkTaggedUnionCustom: <A extends object>() => <DataConstructorTagKey extends TagKeyOf<A>, MemberTagsRecord extends Exact<{ [K in DataConstructorTagValue<A, DataConstructorTagKey>]: "__"; }, MemberTagsRecord>>(tag: DataConstructorTagKey, memberTagsRecord: MemberTagsRecord) => TaggedUnionExt<DataConstructorTagKey, A>;
export interface MinimalTaggedUnionMember {
    tag: string;
}
export declare const mkTaggedUnion: <A extends MinimalTaggedUnionMember>() => <DataConstructorTagKey extends keyof A & "tag", MemberTagsRecord extends Exact<{ [K in DataConstructorTagValue<A, DataConstructorTagKey>]: "__"; }, MemberTagsRecord>>(memberTagsRecord: MemberTagsRecord) => TaggedUnionExt<DataConstructorTagKey, A>;
export declare const mkActionsUnion: <A extends MinReduxAction<DataConstructorTagValue<A, DataConstructorTagKey>>, DataConstructorTagKey extends keyof A & "type" = keyof A & "type">() => <MemberTagsRecord extends Exact<{ [K in DataConstructorTagValue<A, DataConstructorTagKey>]: "__"; }, MemberTagsRecord>>(memberTagsRecord: MemberTagsRecord) => TaggedUnionExt<DataConstructorTagKey, A>;
