/** Keeps idx within the bounds of [0, length), looping back to 0 when over, and length-1 when under  */
export function boundedIdx(idx: number, length: number) {
  return ((idx % length) + length) % length
}
