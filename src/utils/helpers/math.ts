export const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n))

export const roundToPrecision = (n: number, precision: number) =>
  Number(n.toFixed(precision))
