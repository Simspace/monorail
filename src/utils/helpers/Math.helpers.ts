export const clamp = (min: number, max: number) => (n: number) =>
  Math.max(min, Math.min(max, n))

export const roundToPrecision = (precision: number) => (n: number) =>
  Number(n.toFixed(precision))
