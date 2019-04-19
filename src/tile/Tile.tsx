import styled, { css } from 'styled-components'
import { CommonComponentType } from '@monorail/types'
import {
  BorderRadius,
  borderRadius,
  getColor,
  Colors,
  flexFlow,
} from '@monorail/helpers/exports'

export const Tile = styled.div<
  CommonComponentType & { direction?: 'row' | 'column' }
>(
  ({ direction = 'column', cssOverrides }) => css`
    ${flexFlow(direction)};
    ${borderRadius(BorderRadius.Medium)};

    background: ${getColor(Colors.White)};
    border: 1px solid ${getColor(Colors.Grey96)};
    box-sizing: border-box;
    flex-shrink: 0;
    justify-content: space-between;

    ${cssOverrides};
  `,
)
