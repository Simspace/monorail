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
export interface MinimalReduxAction<A extends string> extends Action<A> {
}
export interface MinimalTaggedType<A extends string> extends Tagged<A> {
}
export declare type TagKeyOf<A extends object> = keyof A & string;
export declare type DataConstructorTagValue<A extends object, DataConstructorTagKey extends TagKeyOf<A>> = A[DataConstructorTagKey] & string;
export declare type TaggedType<A extends object, DataConstructorTagKey extends TagKeyOf<A>, Value extends DataConstructorTagValue<A, DataConstructorTagKey>> = Extract<A, {
    [K in DataConstructorTagKey]: Value;
}>;
export declare type TaggedUnionMember<A extends object, DataConstructorTagKey extends TagKeyOf<A>, Value extends DataConstructorTagValue<A, DataConstructorTagKey>> = TaggedType<A, DataConstructorTagKey, Value>;
export declare const MemberTag = "MemberTag";
export declare type MemberTag = typeof MemberTag;
export declare type Constructors<A extends object, DataConstructorTagKey extends TagKeyOf<A>> = {
    [K in DataConstructorTagValue<A, DataConstructorTagKey>]: Omit<TaggedUnionMember<A, DataConstructorTagKey, K>, DataConstructorTagKey> extends Exact<Pick<unknown, never>, Omit<TaggedUnionMember<A, DataConstructorTagKey, K>, DataConstructorTagKey>> ? Lazy<A> : (x: Omit<TaggedUnionMember<A, DataConstructorTagKey, K>, DataConstructorTagKey>) => A;
};
export declare const mkConstructors: <A extends object>() => <DataConstructorTagKey extends TagKeyOf<A>>(tag: DataConstructorTagKey, memberTagRecord: { [K in DataConstructorTagValue<A, DataConstructorTagKey>]: "MemberTag"; }) => Constructors<A, DataConstructorTagKey>;
export declare type Fold<A extends object, DataConstructorTagKey extends TagKeyOf<A>> = A[DataConstructorTagKey] extends string ? (<B>(memberTagHandlerRecord: {
    [K in DataConstructorTagValue<A, DataConstructorTagKey>]: (x: TaggedUnionMember<A, DataConstructorTagKey, K>) => B;
}) => (a: A) => B) : never;
export declare const mkFold: <A extends object>() => <DataConstructorTagKey extends TagKeyOf<A>>(tag: DataConstructorTagKey) => Fold<A, DataConstructorTagKey>;
export declare type Guards<A extends object, DataConstructorTagKey extends TagKeyOf<A>> = {
    [K in DataConstructorTagValue<A, DataConstructorTagKey>]: (x: A) => x is TaggedUnionMember<A, DataConstructorTagKey, K>;
} & {
    MemberOfUnion: (action: object) => action is A;
};
export declare const mkGuards: <A extends object>() => <DataConstructorTagKey extends TagKeyOf<A>>(tag: DataConstructorTagKey, memberTagRecord: { [K in DataConstructorTagValue<A, DataConstructorTagKey>]: "MemberTag"; }) => Guards<A, DataConstructorTagKey>;
export declare type TaggedUnionExt<DataConstructorTagKey extends TagKeyOf<A>, A extends object> = Constructors<A, DataConstructorTagKey> & {
    is: Guards<A, DataConstructorTagKey>;
} & {
    fold: Fold<A, DataConstructorTagKey>;
} & {
    tags: string[];
};
export declare const mkTaggedUnionCustom: <A extends object>() => <DataConstructorTagKey extends TagKeyOf<A>, MemberTagsRecord extends Exact<{ [K in DataConstructorTagValue<A, DataConstructorTagKey>]: "MemberTag"; }, MemberTagsRecord>>(tag: DataConstructorTagKey, memberTagsRecord: MemberTagsRecord) => TaggedUnionExt<DataConstructorTagKey, A>;
export interface MinimalTaggedUnionMember {
    tag: string;
}
export declare const mkTaggedUnion: <A extends MinimalTaggedUnionMember>() => <DataConstructorTagKey extends keyof A & "tag", MemberTagsRecord extends Exact<{ [K in DataConstructorTagValue<A, DataConstructorTagKey>]: DataConstructorTagValue<A, DataConstructorTagKey>; }, MemberTagsRecord>>(memberTagsRecord: MemberTagsRecord) => TaggedUnionExt<DataConstructorTagKey, A>;
export declare type ReduxActionsUnionExt<DataConstructorTagKey extends TagKeyOf<A> & 'type', A extends MinimalReduxAction<DataConstructorTagValue<A, DataConstructorTagKey>>> = Constructors<A, DataConstructorTagKey> & {
    is: Guards<A, DataConstructorTagKey>;
} & {
    fold: Fold<A, DataConstructorTagKey>;
} & {
    tags: string[];
} & {
    reducer: Reducer<A, DataConstructorTagKey>;
};
declare type Reducer<A extends MinimalReduxAction<DataConstructorTagValue<A, DataConstructorTagKey>>, DataConstructorTagKey extends TagKeyOf<A> & 'type'> = <S>(init: S) => (updateLogic: (s: S) => {
    [K in DataConstructorTagValue<A, DataConstructorTagKey>]: (x: TaggedUnionMember<A, DataConstructorTagKey, K>) => S;
}) => (state: S | undefined, action: A) => S;
export declare const mkReducer: <A extends MinimalReduxAction<DataConstructorTagValue<A, DataConstructorTagKey>>, DataConstructorTagKey extends keyof A & "type">(reduxActionsUnionExt: TaggedUnionExt<DataConstructorTagKey, A>) => Reducer<A, DataConstructorTagKey>;
export declare const mkReduxActionsUnion: <A extends MinimalReduxAction<DataConstructorTagValue<A, DataConstructorTagKey>>, DataConstructorTagKey extends keyof A & "type" = keyof A & "type">() => <MemberTagsRecord extends Exact<{ [K in DataConstructorTagValue<A, DataConstructorTagKey>]: "MemberTag"; }, MemberTagsRecord>>(memberTagsRecord: MemberTagsRecord) => ReduxActionsUnionExt<DataConstructorTagKey, A>;
export {};
