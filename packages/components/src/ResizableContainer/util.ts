/* eslint-disable no-console */

export function parseBoundValue(
  input: string | number | undefined,
): number | null {
  if (input === undefined) {
    return null
  }
  if (typeof input === 'string') {
    if (input.endsWith('%')) {
      const parsed = parseFloat(input.substring(0, input.length - 1))
      if (isNaN(parsed)) {
        console.error(
          `Monorail: Could not parse value ${input}, using default.`,
        )
        return null
      }
      return parsed / 100
    }
    const parsed = parseFloat(input)
    if (isNaN(parsed)) {
      console.error(`Monorail: Could not parse value ${input}, using default.`)
      return null
    } else {
      return parsed
    }
  } else {
    return input
  }
}

export function getFinalSize(container: number, input: number): number {
  return input <= 1 && input !== 0 ? container * input : input
}
