import { css } from 'styled-components'

export enum BorderRadius {
  Small = 3,
  Medium = 4,
  Large = 6,
  XLarge = 8,
  Round = 1000,
}

export const borderRadius = (
  borderRadius2: BorderRadius = BorderRadius.Small,
) =>
  css`
    border-radius: ${borderRadius2}px;
  `
