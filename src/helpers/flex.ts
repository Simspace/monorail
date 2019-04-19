import { css } from 'styled-components'

export const flexFlow = (
  direction: 'column' | 'column-reverse' | 'row' | 'row-reverse' = 'column',
  wrap: 'wrap' | 'nowrap' | 'wrap-reverse' = 'nowrap',
) => css`
  display: flex;
  flex-flow: ${direction} ${wrap};
`
