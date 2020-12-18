import { css } from '@monorail/exports'
import { isNotNil } from '@monorail/sharedHelpers/typeGuards'

/**
 * Prevent usage of these props unless devs really need to opt-in to them, in which case they may do something
 * explicit or sneaky to access them.
 */
export type BannedMuiProps =
  | 'centerRipple'
  | 'classes'
  | 'color'
  | 'disableElevation'
  | 'disableFocusRipple'
  | 'disableRipple'
  | 'disableTouchRipple'
  | 'focusRipple'
  | 'size'
  | 'TouchRippleProps'
  | 'variant'
  // Polymorphic as-component causes much type complexity and headaches. Instead, opt for creating an explicit component
  | 'component'
  | 'underline'
  | 'maxWidth'

export type OmitBannedProps<T> = Omit<T, BannedMuiProps>

export const undefinedStyleError = () => {
  logger(({ error }) =>
    error(
      '\n🚝🚝🚝🚝🚝🚝🚝🚝🚝🚝🚝\nUndefined Monorail style used! Please check implemenation file.\n🚝🚝🚝🚝🚝🚝🚝🚝🚝🚝🚝\n',
    ),
  )
  return undefined
}

/**
 *  Returns filter function for `prop`s not in `items`
 */
export function propBlocker<T>(items: Array<keyof T>) {
  const blockList: Set<unknown> = new Set<keyof T>(items)

  return (prop: unknown) => !blockList.has(prop)
}

/**
 *  Use inside style-component's `withConfig()` to prevent passing certain props to the Material UI component
 */
export function propBlockerConfig<T>(items: Array<keyof T>) {
  return {
    shouldForwardProp: propBlocker<T>(items),
  }
}

// #region Logger
type ConsoleBag = {
  info: typeof console.log
  log: typeof console.log
  warn: typeof console.log
  error: typeof console.log
}

const LOG_LEVELS_MAP = {
  INFO: 400,
  LOG: 300,
  WARN: 200,
  ERROR: 100,
}

const LOG_LEVEL_KEY: keyof typeof LOG_LEVELS_MAP = __DEBUG__
  ? 'INFO'
  : isNotNil(sessionStorage.debug)
  ? 'INFO'
  : 'ERROR'

const LOG_LEVEL = LOG_LEVELS_MAP[LOG_LEVEL_KEY]

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
export function logger(cb: (bag: ConsoleBag) => void): void {
  /* eslint-disable no-console */
  cb({
    // Use `bind` so that the console.log statements print the original source code line instead of `tsHelpers`.
    // If adjusting this code, make sure to return a _bound_ function, so that the stack trace's final entry is the
    // caller's file, and not this file.
    info:
      LOG_LEVEL >= LOG_LEVELS_MAP.INFO
        ? console.log.bind(null, `💬`)
        : () => {},
    log:
      LOG_LEVEL >= LOG_LEVELS_MAP.LOG ? console.log.bind(null, `ℹ️`) : () => {},
    warn:
      LOG_LEVEL >= LOG_LEVELS_MAP.WARN
        ? console.warn.bind(null, `⚠️`)
        : () => {},
    error:
      LOG_LEVEL >= LOG_LEVELS_MAP.ERROR
        ? console.error.bind(null, `🛑`)
        : () => {},
    /* eslint-enable no-console */
  })
}
// #endregion Logger

export const visuallyHidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`
