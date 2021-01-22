import { pipe, Refinement } from 'fp-ts/lib/function'
import { monoidAll, monoidAny } from 'fp-ts/lib/Monoid'
import { A } from '@monorail/sharedHelpers/fp-ts-imports'

// borrowed from https://stackoverflow.com/a/50375286
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UnionToIntersection<U> = (U extends any
? (k: U) => void
: never) extends (k: infer I) => void
  ? I
  : never

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ExtractNarrowed<N> = N extends (u: any) => u is infer X ? X : never

type ResultOfNarrowers<NS extends Array<Refinement<unknown, unknown>>> = {
  [K in keyof NS]: ExtractNarrowed<NS[K]>
}[number]

type ExtractNarrowerParameter<N> = N extends (u: infer X) => unknown ? X : never
type InFromNarrowers<
  NS extends Array<Refinement<unknown, unknown>>
> = UnionToIntersection<
  {
    [K in keyof NS]: ExtractNarrowerParameter<NS[K]>
  }[number]
>

/**
 * Allows the combination of refinements, which spits out a larger union of the refinememnt results
 * The combination is another Refinement which returns true if **_any_** of the refinements match
 *
 * ```ts
 * const isFoo: Refinement<string, 'foo'> = ...
 * const isBar: Refinement<string, 'bar'> = ...
 *
 * const isFooOrBar = oneOf(
 *   isFoo,
 *   isBar
 * ) // is Refinement<string, 'foo' | 'bar'>
 * ```
 *
 * A slightly more complicated example shows how the narrowers are combined:
 * ```ts
 * const isFoo: Refinement<{ foo: string }, { foo: 'foo' }> = ...
 * const isBar: Refinement<{ bar: string }, { bar: 'bar' }> = ...
 *
 * const isFooOrBar = oneOf(
 *   isFoo,
 *   isBar
 * ) // is Refinement<
 *   //   { foo: string; } & { bar: string; },
 *   //   { foo: 'foo'; } | { bar: 'bar'; }
 *   // >
 * ```
 *
 * @param refinements the list of Refinements to combine
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const oneOf = <RS extends Array<Refinement<any, unknown>>>(
  ...refinements: RS
) =>
  // @ts-ignore Because these types are mapped separately, TS cannot resolve that they are related
  (a: InFromNarrowers<RS>): a is ResultOfNarrowers<RS> =>
    pipe(
      refinements,
      A.foldMap(monoidAny)(refinement => refinement(a)),
    )

/**
 * Allows the combination of refinements, which spits out an intersection of the refinememnt results
 * The combination is another Refinement which returns true if **_all_** of the refinements match
 *
 * A slightly more complicated example shows how the narrowers are combined:
 * ```ts
 * const isFoo: Refinement<{ foo: string }, { foo: 'foo' }> = ...
 * const isBar: Refinement<{ bar: string }, { bar: 'bar' }> = ...
 *
 * const isFooOrBar = allOf(
 *   isFoo,
 *   isBar
 * ) // is Refinement<
 *   //   { foo: string, bar: string },
 *   //   { foo: 'foo', bar: 'bar' }
 *   // >
 * ```
 *
 * Note that some seemingly simple usages may result in counter-intuitive results,
 * for example:
 * ```ts
 * const isFoo: Refinement<string, 'foo'> = ...
 * const isBar: Refinement<string, 'bar'> = ...
 *
 * const isFooOrBar = allOf(
 *   isFoo,
 *   isBar
 * ) // is Refinement<string, never>
 * ```
 * results in a Refinement<string, never>, since if that refinement
 * returned true, the value would be 'foo' & 'bar', which is
 * not possible.
 *
 * @param refinements the list of Refinements to combine
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const allOf = <RS extends Array<Refinement<any, unknown>>>(
  ...refinements: RS
) => (
  a: InFromNarrowers<RS>,
  // @ts-ignore Because these types are mapped separately, TS cannot resolve that they are related
): a is UnionToIntersection<ResultOfNarrowers<RS>> =>
  pipe(
    refinements,
    A.foldMap(monoidAll)(refinement => refinement(a)),
  )
