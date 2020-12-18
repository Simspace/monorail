import React from 'react'

import { css } from '@monorail/exports'
import { Status, StatusProps } from '@monorail/v2/core/Status/Status'

export type CornerStatusProps = StatusProps

/**
 * Status used within a **square** button to align with the top-right.
 *
 * Can be improved to work with circle button by adding a prop that insets it by top/right 4px. Not currently necessary.
 **/
export const CornerStatus = (props: CornerStatusProps) => (
  <Status
    css={css`
      /* smaller and aligned with top right corner */
      position: absolute;
      transform: translate(50%, -50%) scale(0.75);
      top: 0;
      right: 0;

      background-color: ${({ theme }) => theme.v2.ErrorGraphic};
    `}
    {...props}
  />
)
