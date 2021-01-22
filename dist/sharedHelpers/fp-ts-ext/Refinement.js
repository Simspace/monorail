"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allOf = exports.oneOf = void 0;

var _function = require("fp-ts/lib/function");

var _Monoid = require("fp-ts/lib/Monoid");

var _fpTsImports = require("../fp-ts-imports");

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
const oneOf = (...refinements) => // @ts-ignore Because these types are mapped separately, TS cannot resolve that they are related
a => (0, _function.pipe)(refinements, _fpTsImports.A.foldMap(_Monoid.monoidAny)(refinement => refinement(a)));
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


exports.oneOf = oneOf;

const allOf = (...refinements) => a => (0, _function.pipe)(refinements, _fpTsImports.A.foldMap(_Monoid.monoidAll)(refinement => refinement(a)));

exports.allOf = allOf;