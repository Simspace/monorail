import { Lazy } from 'fp-ts/lib/function'
import { Exact, Omit } from 'typelevel-ts'
// switch to this after updating to redux > 4.0
// import { Action } from 'redux'

export type Action<A extends string> = { type: A }

export type StringIndexed<A extends object> = A & { [key: string]: unknown }

export type Tagged<A = string> = { tag: A }

export interface MinReduxAction<A extends string> extends Action<A> {}

export interface MinTaggedType<A extends string> extends Tagged<A> {}

export type TagKeyOf<A extends object> = keyof A & string

export type DataConstructorTagValue<
  A extends object,
  DataConstructorTagKey extends TagKeyOf<A>
> = A[DataConstructorTagKey] & string

export type TaggedType<
  A extends object,
  DataConstructorTagKey extends TagKeyOf<A>,
  Value extends DataConstructorTagValue<A, DataConstructorTagKey>
> = Extract<A, { [K in DataConstructorTagKey]: Value }>

export type TaggedUnionMember<
  A extends object,
  DataConstructorTagKey extends TagKeyOf<A>,
  Value extends DataConstructorTagValue<A, DataConstructorTagKey>
> = TaggedType<A, DataConstructorTagKey, Value>

export const __ = '__'
export type __ = typeof __

export type Constructors<
  A extends object,
  DataConstructorTagKey extends TagKeyOf<A>
> = {
  [K in DataConstructorTagValue<A, DataConstructorTagKey>]: Omit<
    TaggedUnionMember<A, DataConstructorTagKey, K>,
    DataConstructorTagKey
  > extends Exact<
    Pick<unknown, never>,
    Omit<TaggedUnionMember<A, DataConstructorTagKey, K>, DataConstructorTagKey>
  >
    ? Lazy<A>
    : (
        x: Omit<
          TaggedUnionMember<A, DataConstructorTagKey, K>,
          DataConstructorTagKey
        >,
      ) => A
}

export const mkConstructors = <A extends object>() => <
  DataConstructorTagKey extends TagKeyOf<A>
>(
  tag: DataConstructorTagKey,
  memberTagRecord: {
    [K in DataConstructorTagValue<A, DataConstructorTagKey>]: __
  },
): Constructors<A, DataConstructorTagKey> => {
  const result = {} as StringIndexed<Constructors<A, DataConstructorTagKey>>

  for (const memberTag of Object.keys(memberTagRecord)) {
    // TODO: any cast due to TS 3.5 upgrade. Not sure how to type better. -dan
    // tslint:disable-next-line: no-any
    ;(result as any)[memberTag] = (
      x: Omit<
        TaggedUnionMember<
          A,
          DataConstructorTagKey,
          DataConstructorTagValue<A, DataConstructorTagKey>
        >,
        DataConstructorTagKey
      >,
    ) => {
      const tagPair = { [tag]: memberTag }

      return x === undefined ? tagPair : { ...tagPair, ...x }
    }
  }
  return result
}

export type Fold<
  A extends object,
  DataConstructorTagKey extends TagKeyOf<A>
> = A[DataConstructorTagKey] extends string
  ? (<B>(
      memberTagHandlerRecord: {
        [K in DataConstructorTagValue<A, DataConstructorTagKey>]: (
          x: TaggedUnionMember<A, DataConstructorTagKey, K>,
        ) => B
      },
    ) => (a: A) => B)
  : never

export const mkFold = <A extends object>() => <
  DataConstructorTagKey extends TagKeyOf<A>
>(
  tag: DataConstructorTagKey,
): Fold<A, DataConstructorTagKey> =>
  (memberTagHandlerRecord => a => {
    const dataConstructorName = a[tag] as DataConstructorTagValue<
      A,
      DataConstructorTagKey
    >
    return memberTagHandlerRecord[dataConstructorName](a as Extract<
      A,
      {
        [K in DataConstructorTagKey]: DataConstructorTagValue<
          A,
          DataConstructorTagKey
        >
      }
    >)
  }) as Fold<A, DataConstructorTagKey>

export type Guards<
  A extends object,
  DataConstructorTagKey extends TagKeyOf<A>
> = {
  [K in DataConstructorTagValue<A, DataConstructorTagKey>]: (
    x: A,
  ) => x is TaggedUnionMember<A, DataConstructorTagKey, K>
} & {
  memberOfUnion: (action: object) => action is A
}

export const mkGuards = <A extends object>() => <
  DataConstructorTagKey extends TagKeyOf<A>
>(
  tag: DataConstructorTagKey,
  memberTagRecord: {
    [K in DataConstructorTagValue<A, DataConstructorTagKey>]: __
  },
): Guards<A, DataConstructorTagKey> => {
  type GuardFunction = (
    member: A,
  ) => member is Extract<
    A,
    {
      [K in DataConstructorTagKey]: DataConstructorTagValue<
        A,
        DataConstructorTagKey
      >
    }
  >
  const result = {} as StringIndexed<
    Guards<A, DataConstructorTagKey> & {
      memberOfUnion: (action: NonNullable<unknown>) => action is A
    }
  >
  for (const memberTag of Object.keys(memberTagRecord)) {
    // TODO: any cast due to TS 3.5 upgrade. Not sure how to type better. -dan
    // tslint:disable-next-line: no-any
    ;(result as any)[memberTag] = (
      member: A,
    ): member is Extract<
      A,
      {
        [K in DataConstructorTagKey]: DataConstructorTagValue<
          A,
          DataConstructorTagKey
        >
      }
    > =>
      (member[tag] as DataConstructorTagValue<A, DataConstructorTagKey>) ===
      memberTag
  }

  return {
    ...result,
    memberOfUnion: (
      action:
        | A
        | {
            [K in DataConstructorTagKey]: DataConstructorTagValue<
              A,
              DataConstructorTagKey
            >
          },
    ): action is A => {
      const guards = Object.values(result) as Array<GuardFunction>

      if (!(tag in action)) {
        return false
      }

      for (const guard of guards) {
        if (guard(action as A)) {
          return true
        }
        continue
      }

      return false
    },
  }
}

export type TaggedUnionExt<
  DataConstructorTagKey extends TagKeyOf<A>,
  A extends object
> = Constructors<A, DataConstructorTagKey> & {
  is: Guards<A, DataConstructorTagKey>
} & {
  fold: Fold<A, DataConstructorTagKey>
} & {
  tags: Array<string>
}

export const mkTaggedUnionCustom = <A extends object>() => <
  DataConstructorTagKey extends TagKeyOf<A>,
  MemberTagsRecord extends Exact<
    { [K in DataConstructorTagValue<A, DataConstructorTagKey>]: __ },
    MemberTagsRecord
  >
>(
  tag: DataConstructorTagKey,
  memberTagsRecord: MemberTagsRecord,
): TaggedUnionExt<DataConstructorTagKey, A> => {
  const constructors = mkConstructors<A>()(tag, memberTagsRecord)
  const is = mkGuards<A>()(tag, memberTagsRecord)
  const fold = mkFold<A>()(tag)
  const tags = Object.keys(memberTagsRecord)

  return { ...constructors, is, fold, tags } as TaggedUnionExt<
    DataConstructorTagKey,
    A
  >
}

export interface MinimalTaggedUnionMember {
  tag: string
}

export const mkTaggedUnion = <A extends MinimalTaggedUnionMember>() => <
  DataConstructorTagKey extends keyof A & 'tag',
  MemberTagsRecord extends Exact<
    { [K in DataConstructorTagValue<A, DataConstructorTagKey>]: __ },
    MemberTagsRecord
  >
>(
  memberTagsRecord: MemberTagsRecord,
): TaggedUnionExt<DataConstructorTagKey, A> =>
  mkTaggedUnionCustom<A>()('tag' as DataConstructorTagKey, memberTagsRecord)

export const mkActionsUnion = <
  A extends MinReduxAction<DataConstructorTagValue<A, DataConstructorTagKey>>,
  DataConstructorTagKey extends TagKeyOf<A> & 'type' = TagKeyOf<A> & 'type'
>() => <
  MemberTagsRecord extends Exact<
    { [K in DataConstructorTagValue<A, DataConstructorTagKey>]: __ },
    MemberTagsRecord
  >
>(
  memberTagsRecord: MemberTagsRecord,
): TaggedUnionExt<DataConstructorTagKey, A> =>
  mkTaggedUnionCustom<A>()('type' as DataConstructorTagKey, memberTagsRecord)
