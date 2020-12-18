/**
 * Prevent usage of these props unless devs really need to opt-in to them, in which case they may do something
 * explicit or sneaky to access them.
 */
export declare type BannedMuiProps = 'centerRipple' | 'classes' | 'color' | 'disableElevation' | 'disableFocusRipple' | 'disableRipple' | 'disableTouchRipple' | 'focusRipple' | 'size' | 'TouchRippleProps' | 'variant' | 'component' | 'underline' | 'maxWidth';
export declare type OmitBannedProps<T> = Omit<T, BannedMuiProps>;
export declare const undefinedStyleError: () => undefined;
/**
 *  Returns filter function for `prop`s not in `items`
 */
export declare function propBlocker<T>(items: Array<keyof T>): (prop: unknown) => boolean;
/**
 *  Use inside style-component's `withConfig()` to prevent passing certain props to the Material UI component
 */
export declare function propBlockerConfig<T>(items: Array<keyof T>): {
    shouldForwardProp: (prop: unknown) => boolean;
};
declare type ConsoleBag = {
    info: typeof console.log;
    log: typeof console.log;
    warn: typeof console.log;
    error: typeof console.log;
};
/**
 * Logging utility for long-lived log statements with log levels. Can be enabled in production if `sessionStorage.debug`
 * is present.
 *
 * Usage:
 *
 * ```
 * logger(({ log, warn, error }) => warn('My message'))
 * ```
 */
export declare function logger(cb: (bag: ConsoleBag) => void): void;
export declare const visuallyHidden: import("styled-components").FlattenSimpleInterpolation;
export {};
