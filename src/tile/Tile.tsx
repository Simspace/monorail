import styled from 'styled-components'
import { CommonComponentType } from '@monorail/types'
import {
  BorderRadius,
  borderRadius,
  colors,
  Colors,
  flexFlow,
} from '@monorail/CommonStyles'

export const Tile = styled<
  CommonComponentType & { direction?: 'row' | 'column' },
  'div'
>('div')`
  ${({ direction = 'column' }) => flexFlow(direction)};
  ${borderRadius(BorderRadius.Medium)};

  background: ${colors(Colors.White)};
  border: 1px solid ${colors(Colors.Grey96)};
  box-sizing: border-box;
  flex-shrink: 0;
  justify-content: space-between;

  ${({ css: cssOverride }) => cssOverride};
`
