/**
 * [2021/04/05 SF]  These were extracted whole-cloth out of range.helpers since there
 * were many uses across the codebase. Additionally, there are re-implementations of very similar ones throughout the code.
 *
 * Upcoming improvements to this should be:
 * - support for TB, PB, ZB
 * - Ord instead of array index access
 *
 * See, add support cases, and replace usages in manage resources, attack designer, hardhat, reports and analytics,
 */

import { clamp, roundToPrecision } from './math.js'

export enum Unit {
  BYTE = 'BYTE',
  KB = 'KB',
  MB = 'MB',
  GB = 'GB',
}

export type Size = {
  value: number
  unit: Unit
}

export const showUnit = (unit: Unit) => {
  switch (unit) {
    case Unit.BYTE:
      return Unit.BYTE
    case Unit.KB:
      return Unit.KB
    case Unit.MB:
      return Unit.MB
    case Unit.GB:
      return Unit.GB
    default:
      return ''
  }
}

const numberToUnitMap = [Unit.BYTE, Unit.KB, Unit.MB, Unit.GB]

/**
 * Helper function to turn bytes into a size with precision
 * @param  {Number} bytes Number of bytes
 * @param  {Number} [precision=1] Places after the decimal to keep, will only include if present
 * @type { value: number, unit: string }
 */
export function bytesToSize(
  bytes: number,
  precision = 1,
): {
  value: number
  unit: Unit
} {
  if (bytes === 0) {
    return { value: 0, unit: Unit.BYTE }
  }
  const i = clamp(
    Math.round(Math.floor(Math.log(bytes) / Math.log(1024))),
    0,
    3,
  )

  return {
    value: roundToPrecision(bytes / Math.pow(1024, i), precision),
    unit: numberToUnitMap[i],
  }
}

export function sizeToBytes(size: Size) {
  const i = numberToUnitMap.indexOf(size.unit)
  if (i <= 0) {
    return size.value
  } else {
    return size.value * Math.pow(1024, i)
  }
}

/**
 * Ensures a given size is in the largest unit possible
 * @return {Size}
 */
export function asLargestUnit(size: Size): Size {
  if (size.value > 1024 && size.unit !== Unit.GB) {
    return bytesToSize(sizeToBytes(size))
  } else {
    return size
  }
}

/**
 * Function to convert a given size to GBs with a precision
 * @param {Size} size The size to convert
 * @param {Number} precision The number of places after the decimals to keep
 * returns a new size in GBs
 */
export function sizeInGBs(size: Size, precision = 0) {
  if (size.unit === Unit.GB) {
    return size
  } else {
    const bytes = sizeToBytes(size)
    return {
      value: roundToPrecision(bytes / Math.pow(1024, 3), precision),
      unit: Unit.GB,
    }
  }
}

/**
 * Formats a given size into a human readable string
 */
export const formatSize = (size: Size) => `${size.value} ${showUnit(size.unit)}`
