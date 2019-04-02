import styled, { css } from 'styled-components'
import { CommonComponentType } from '@monorail/types'
import {
  BorderRadius,
  borderRadius,
  colors,
  Colors,
  flexFlow,
} from '@monorail/CommonStyles'

export const Tile = styled.div<
  CommonComponentType & { direction?: 'row' | 'column' }
>(
  ({ direction = 'column', cssOverrides }) => css`
    ${flexFlow(direction)};
    ${borderRadius(BorderRadius.Medium)};

    background: ${colors(Colors.White)};
    border: 1px solid ${colors(Colors.Grey96)};
    box-sizing: border-box;
    flex-shrink: 0;
    justify-content: space-between;

    ${cssOverrides};
  `,
)
