import React from 'react'
import styled, { css } from 'styled-components'
import { Colors, colors } from '@monorail/CommonStyles'
import { CommonComponentType } from '@monorail/types'

/*
* Styles
*/

export const Divider = styled<CCDividerProps, 'div'>('div')`
  ${({ isVertical = false }) =>
    isVertical
      ? css`
        width: 1px
        height: 100%;
      `
      : css`
          width: 100%;
          height: 1px;
        `};

  background: ${colors(Colors.Grey94)};
`

Divider.defaultProps = {
  isVertical: false,
}

/*
* Types
*/

type CCDividerProps = CommonComponentType & {
  isVertical?: boolean
}
