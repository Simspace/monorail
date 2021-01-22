"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trim = trim;
exports.removeSpaces = removeSpaces;
exports.join = join;
exports.matchStringP = exports.elemLocaleLowerCase = exports.safeParseInt = exports.splitAt = exports.padStart = exports.repeat = exports.drop = exports.take = exports.addTrailingSlash = exports.camelCaseToTitleCase = exports.titleCase = exports.unwords = exports.words = exports.startsWithNonCase = exports.capitalizeWords = exports.capitalizeFirstLetter = exports.includesNoncase = exports.includes = exports.truncateArray = exports.truncate = exports.toLocaleLower = exports.toLower = exports.findIndex = exports.splitName = exports.replace = exports.split = void 0;

var A = _interopRequireWildcard(require("fp-ts/lib/Array"));

var _function = require("fp-ts/lib/function");

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _pipeable = require("fp-ts/lib/pipeable");

var _typeGuards = require("./typeGuards");

var _Option2 = require("./fp-ts-ext/Option");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Given a string or RegExp separator and a string, splits a string into an
 * array of strings
 */
const split = sep => xs => xs.split(sep);
/**
 * Replaces text in a string, using an object that supports replacement within a string.
 */


exports.split = split;

const replace = (searchValue, replaceValue) => xs => xs.replace(searchValue, replaceValue);
/**
 * Translates a space separated name string into a first & last name record
 */


exports.replace = replace;

const splitName = name => {
  const xs = split(' ')(name);

  const safeGetVia = f => (0, _function.flow)(f, _Option2.getOrEmptyString)(xs);

  return {
    first: safeGetVia(A.head),
    last: safeGetVia(A.last)
  };
};
/**
 * Returns the position of the first occurrence of a substring wrapped in a Some
 * or returns a None if the substring is not found
 */


exports.splitName = splitName;

const findIndex = substring => xs => {
  const i = xs.indexOf(substring);
  return i === -1 ? O.none : O.some(i);
};
/**
 * Converts all the alphabetic characters in a string to lowercase.
 */


exports.findIndex = findIndex;

const toLower = x => x.toLowerCase();
/**
 * Converts all alphabetic characters to local lower case
 */


exports.toLower = toLower;

const toLocaleLower = target => target.toLocaleLowerCase();
/**
 * Takes a string and removes the spaces at the end of strings
 */


exports.toLocaleLower = toLocaleLower;

function trim(str) {
  return str.trim();
}
/**
 * Find and remove all space characters within a string. This may be useful for
 * filtering numeric text (given some user input) where spaces don't matter.
 *
 * includesNoncase(removeSpaces('2/10'))(removeSpaces('2 / 10')) // true
 */


function removeSpaces(str) {
  return str.split(' ').join('');
}

function join(separator, arr) {
  return arr ? arr.join(separator) : as => as.join(separator);
}

const truncate = maxLength => value => {
  return value.length > maxLength ? value.slice(0, maxLength).trim().concat('...') : value;
};
/**
 * Converts an Array<A> to a string by showing the first {maxCount} items joined with {delimiter}
 * and adding a suffix like (+{n} more) where {n} is the count of items that were not shown.
 */


exports.truncate = truncate;

const truncateArray = show => (maxCount, delimiter = ', ') => values => {
  if (maxCount < 0) {
    return '';
  } else if (values.length <= maxCount) {
    return values.map(show.show).join(delimiter);
  } else {
    const suffix = values.length > maxCount ? ` (+${values.length - maxCount} more)` : ``;
    return (0, _pipeable.pipe)(values, A.takeLeft(maxCount), A.map(show.show)).join(', ') + suffix;
  }
};

exports.truncateArray = truncateArray;

const includes = target => source => {
  return source.includes(target);
};

exports.includes = includes;

const includesNoncase = target => source => {
  return source.trim().toLowerCase().includes(target.trim().toLowerCase());
};

exports.includesNoncase = includesNoncase;

const capitalizeFirstLetter = str => {
  return (0, _pipeable.pipe)(str[0], O.fromNullable, O.fold(() => '', firstLetter => firstLetter.toUpperCase() + str.slice(1).toLowerCase()));
};

exports.capitalizeFirstLetter = capitalizeFirstLetter;

const capitalizeWords = str => {
  return str.length < 1 ? '' : str.split(' ').map(capitalizeFirstLetter).join(' ');
};

exports.capitalizeWords = capitalizeWords;

const startsWithNonCase = target => source => {
  return source.trim().toLowerCase().startsWith(target.trim().toLowerCase());
};

exports.startsWithNonCase = startsWithNonCase;

const words = str => str.split(/\s/);

exports.words = words;

const unwords = str => str.join(' ');

exports.unwords = unwords;

const titleCase = str => (0, _pipeable.pipe)(str, words, A.map(capitalizeFirstLetter), unwords);

exports.titleCase = titleCase;

const camelCaseToTitleCase = str => capitalizeFirstLetter(str.replace(/([a-z0-9])([A-Z])/g, '$1 $2'));

exports.camelCaseToTitleCase = camelCaseToTitleCase;

const addTrailingSlash = path => path.endsWith('/') ? path : `${path}/`;

exports.addTrailingSlash = addTrailingSlash;

const take = n => s => s.substring(0, n);
/**
 * Removes the leading {@param n} characters from the supplied string
 * @param n the amount of characters to drop
 */


exports.take = take;

const drop = n => s => s.substring(n, s.length);
/**
 * Returns a string that contains `input` concatenated back-to-back `n` times
 */


exports.drop = drop;

const repeat = n => input => {
  if (n <= 1) {
    return input;
  } else {
    return [...new Array(Math.floor(n)).keys()].map(_ => input).join('');
  }
};
/**
 * Adds padding to the start of a string to reach a `targetLength`
 */


exports.repeat = repeat;

const padStart = (targetLength, padWith) => input => {
  // String.prototype.padStart is a thing, but it's relatively new, so not sure on Browser support
  // If we want to use that, we can remove the code below and just return `input.padStart(targetLength, padWith)`
  const inputLength = input.length;
  const padWithLength = padWith.length;

  if (inputLength > targetLength) {
    // input already longer than target length, do nothing
    return input;
  } else if (padWithLength === 0) {
    // padWith string was empty, can't do anything
    return input;
  } else {
    const padLength = targetLength - inputLength;
    const padTimes = Math.floor(padLength / padWithLength) + 1; // add one so we get one extra, which will be truncated off

    const pad = repeat(padTimes)(padWith).slice(0, padLength);
    return pad + input;
  }
};
/**
 * Splits a string at a given index
 *
 * @example
 * ```ts
 * const [before, after] = "aadd".splitAt(2)
 *
 * before // "aa"
 * after // "dd"
 * ```
 *
 * @param n the index to split the string at
 */


exports.padStart = padStart;

const splitAt = n => s => [s.substring(0, n), s.substring(n)];
/**
 * A safe version of `parseInt` that provides a default radix of `10`,
 * and checks to see if the result is NaN. Returns `None` if the result is NaN.
 */


exports.splitAt = splitAt;

const safeParseInt = (str, radix = 10) => {
  return (0, _pipeable.pipe)(parseInt(str, radix), O.fromPredicate(_typeGuards.isNotNaN));
};

exports.safeParseInt = safeParseInt;

const elemLocaleLowerCase = needle => haystack => toLocaleLower(haystack).includes(toLocaleLower(needle));
/**
 * Patially matches any string value, returning None if a match is not found
 *
 * @example
 *
 * ```ts
 * pipe(
 *   'foo',
 *   matchStringP({
 *     foo: () => 'Hello',
 *     bar: () => 'World'
 *   })
 * ) // Some('Hello')
 * ```
 *
 * ```ts
 * pipe(
 *   'asdf',
 *   matchStringP({
 *     foo: () => 'Hello',
 *     bar: () => 'World'
 *   })
 * ) // None
 * ```
 */


exports.elemLocaleLowerCase = elemLocaleLowerCase;

const matchStringP = matchObj => s => {
  if (s in matchObj) {
    return O.some(matchObj[s]());
  } else {
    return O.none;
  }
};

exports.matchStringP = matchStringP;