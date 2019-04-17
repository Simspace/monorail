import React from 'react'
import styled, { css } from 'styled-components'
import { Colors, getColor } from '@monorail/helpers/exports'
import { CommonComponentType } from '@monorail/types'

/*
* Styles
*/

export const Divider = styled.div<CCDividerProps>(
  ({ isVertical }) => css`
    ${isVertical
      ? css`
        width: 1px
        height: 100%;
      `
      : css`
          width: 100%;
          height: 1px;
        `};

    background: ${getColor(Colors.Grey94)};
  `,
)

Divider.defaultProps = {
  isVertical: false,
}

/*
* Types
*/

type CCDividerProps = CommonComponentType & {
  isVertical?: boolean
}
