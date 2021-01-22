import * as Show from 'fp-ts/lib/Show';
export * from 'fp-ts/lib/Show';
/**
 * This attempts to provide some useful output on most common (possibly
 * higher-kinded) types. Due to the nature of fp-ts, this can only handle types
 * it specifically knows about, which currently includes
 *
 * - Option
 * - Either
 * - RemoteData
 * - Function
 *
 * Everything else gets shoved into a string template, which will work for
 * native types and maybe even some others.
 *
 * This should probably only be used for debugging and nothing else.
 */
export declare const showUnknown: Show.Show<unknown>;
