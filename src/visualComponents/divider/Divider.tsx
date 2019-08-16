import React from 'react'

import { Colors, getColor } from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'

/*
 * Types
 */

export type DividerProps = {
  isVertical?: boolean
}

/*
 * Styles
 */

export const Divider = styled.div<DividerProps>(
  ({ isVertical = false }) => css`
    ${isVertical
      ? css`
          width: 1px;
          height: 100%;
        `
      : css`
          width: 100%;
          height: 1px;
        `};

    background: ${getColor(Colors.Grey94)};
  `,
)
