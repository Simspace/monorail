"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propBlocker = propBlocker;
exports.propBlockerConfig = propBlockerConfig;
exports.logger = logger;
exports.visuallyHidden = exports.undefinedStyleError = void 0;

var _exports = require("../../exports");

var _typeGuards = require("../../sharedHelpers/typeGuards");

const undefinedStyleError = () => {
  logger(({
    error
  }) => error('\n🚝🚝🚝🚝🚝🚝🚝🚝🚝🚝🚝\nUndefined Monorail style used! Please check implemenation file.\n🚝🚝🚝🚝🚝🚝🚝🚝🚝🚝🚝\n'));
  return undefined;
};
/**
 *  Returns filter function for `prop`s not in `items`
 */


exports.undefinedStyleError = undefinedStyleError;

function propBlocker(items) {
  const blockList = new Set(items);
  return prop => !blockList.has(prop);
}
/**
 *  Use inside style-component's `withConfig()` to prevent passing certain props to the Material UI component
 */


function propBlockerConfig(items) {
  return {
    shouldForwardProp: propBlocker(items)
  };
} // #region Logger


const LOG_LEVELS_MAP = {
  INFO: 400,
  LOG: 300,
  WARN: 200,
  ERROR: 100
};
const LOG_LEVEL_KEY = __DEBUG__ ? 'INFO' : (0, _typeGuards.isNotNil)(sessionStorage.debug) ? 'INFO' : 'ERROR';
const LOG_LEVEL = LOG_LEVELS_MAP[LOG_LEVEL_KEY];
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

function logger(cb) {
  /* eslint-disable no-console */
  cb({
    // Use `bind` so that the console.log statements print the original source code line instead of `tsHelpers`.
    // If adjusting this code, make sure to return a _bound_ function, so that the stack trace's final entry is the
    // caller's file, and not this file.
    info: LOG_LEVEL >= LOG_LEVELS_MAP.INFO ? console.log.bind(null, `💬`) : () => {},
    log: LOG_LEVEL >= LOG_LEVELS_MAP.LOG ? console.log.bind(null, `ℹ️`) : () => {},
    warn: LOG_LEVEL >= LOG_LEVELS_MAP.WARN ? console.warn.bind(null, `⚠️`) : () => {},
    error: LOG_LEVEL >= LOG_LEVELS_MAP.ERROR ? console.error.bind(null, `🛑`) : () => {}
    /* eslint-enable no-console */

  });
} // #endregion Logger


const visuallyHidden = (0, _exports.css)`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;
exports.visuallyHidden = visuallyHidden;