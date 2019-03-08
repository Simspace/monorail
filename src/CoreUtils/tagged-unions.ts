import { Exact, Omit } from 'typelevel-ts'
import { Lazy } from 'fp-ts/lib/function'
// switch to this after updating to redux > 4.0
// import { Action } from 'redux'

export type Action<A extends string> = { type: A }

export type StringIndexed<A extends object> = A & { [key: string]: unknown }

export type Tagged<A = string> = { tag: A }

export interface MinimalReduxAction<A extends string> extends Action<A> {}

export interface MinimalTaggedType<A extends string> extends Tagged<A> {}

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

export const MemberTag = 'MemberTag'
export type MemberTag = typeof MemberTag

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
    [K in DataConstructorTagValue<A, DataConstructorTagKey>]: MemberTag
  },
): Constructors<A, DataConstructorTagKey> => {
  const result = {} as StringIndexed<Constructors<A, DataConstructorTagKey>>

  for (const memberTag of Object.keys(memberTagRecord)) {
    result[memberTag] = (
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
  MemberOfUnion: (action: object) => action is A
}

export const mkGuards = <A extends object>() => <
  DataConstructorTagKey extends TagKeyOf<A>
>(
  tag: DataConstructorTagKey,
  memberTagRecord: {
    [K in DataConstructorTagValue<A, DataConstructorTagKey>]: MemberTag
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
      MemberOfUnion: (action: NonNullable<unknown>) => action is A
    }
  >
  for (const memberTag of Object.keys(memberTagRecord)) {
    result[memberTag] = (
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
    MemberOfUnion: (
      action:
        | A
        | {
            [K in DataConstructorTagKey]: DataConstructorTagValue<
              A,
              DataConstructorTagKey
            >
          },
    ): action is A => {
      const guards = Object.values(result) as GuardFunction[]

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
  tags: string[]
}

export const mkTaggedUnionCustom = <A extends object>() => <
  DataConstructorTagKey extends TagKeyOf<A>,
  MemberTagsRecord extends Exact<
    { [K in DataConstructorTagValue<A, DataConstructorTagKey>]: MemberTag },
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
    {
      [K in DataConstructorTagValue<
        A,
        DataConstructorTagKey
      >]: DataConstructorTagValue<A, DataConstructorTagKey>
    },
    MemberTagsRecord
  >
>(
  memberTagsRecord: MemberTagsRecord,
): TaggedUnionExt<DataConstructorTagKey, A> =>
  mkTaggedUnionCustom<A>()('tag' as DataConstructorTagKey, memberTagsRecord)

export type ReduxActionsUnionExt<
  DataConstructorTagKey extends TagKeyOf<A> & 'type',
  A extends MinimalReduxAction<
    DataConstructorTagValue<A, DataConstructorTagKey>
  >
> = Constructors<A, DataConstructorTagKey> & {
  is: Guards<A, DataConstructorTagKey>
} & {
  fold: Fold<A, DataConstructorTagKey>
} & {
  tags: string[]
} & {
  reducer: Reducer<A, DataConstructorTagKey>
}

type Reducer<
  A extends MinimalReduxAction<
    DataConstructorTagValue<A, DataConstructorTagKey>
  >,
  DataConstructorTagKey extends TagKeyOf<A> & 'type'
> = <S>(
  init: S,
) => (
  updateLogic: (
    s: S,
  ) => {
    [K in DataConstructorTagValue<A, DataConstructorTagKey>]: (
      x: TaggedUnionMember<A, DataConstructorTagKey, K>,
    ) => S
  },
) => (state: S | undefined, action: A) => S

export const mkReducer = <
  A extends MinimalReduxAction<
    DataConstructorTagValue<A, DataConstructorTagKey>
  >,
  DataConstructorTagKey extends TagKeyOf<A> & 'type'
>(
  reduxActionsUnionExt: TaggedUnionExt<DataConstructorTagKey, A>,
): Reducer<A, DataConstructorTagKey> => init => updateLogic => (
  state = init,
  action,
) =>
  reduxActionsUnionExt.is.MemberOfUnion(action)
    ? reduxActionsUnionExt.fold<typeof init>(updateLogic(state))(action)
    : state

export const mkReduxActionsUnion = <
  A extends MinimalReduxAction<
    DataConstructorTagValue<A, DataConstructorTagKey>
  >,
  DataConstructorTagKey extends TagKeyOf<A> & 'type' = TagKeyOf<A> & 'type'
>() => <
  MemberTagsRecord extends Exact<
    { [K in DataConstructorTagValue<A, DataConstructorTagKey>]: MemberTag },
    MemberTagsRecord
  >
>(
  memberTagsRecord: MemberTagsRecord,
): ReduxActionsUnionExt<DataConstructorTagKey, A> => {
  const reduxActionsUnionExt = mkTaggedUnionCustom<A>()(
    'type' as DataConstructorTagKey,
    memberTagsRecord,
  )

  const reducer = mkReducer(reduxActionsUnionExt)

  return { ...reduxActionsUnionExt, reducer }
}
