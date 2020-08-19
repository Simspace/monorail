import React from 'react'

import styled, { css } from '@monorail/helpers/styled-components'
import { IconProps } from '@monorail/visualComponents/icon/Icon'
import { PulseAnimation } from '@monorail/visualComponents/icon/custom/InProgress'
import { BypassEmpty } from '@monorail/visualComponents/icon/custom/BypassEmpty'
import { CommonComponentType } from '@monorail/types'
import { ZIndexNodeName, zIndex } from '@monorail/helpers/zIndex'

const IconContainer = styled.div<{ size: number } & CommonComponentType>(
  ({ size = 16, cssOverrides }) => css`
    font-size: ${size}px;
    display: inline-flex;
    position: relative;
    ${zIndex(ZIndexNodeName.FramedIconBackground)}

    ${PulseAnimation()}

    ${cssOverrides}
  `,
)

export const BypassInProgress = styled(
  ({ size = 16, icon, ...otherProps }: IconProps) => {
    return (
      <IconContainer size={size}>
        <BypassEmpty
          css={`
            display: inline-block;

            height: 1em;
            width: 1em;
          `}
          size={size}
          {...otherProps}
        />
      </IconContainer>
    )
  },
)<IconProps>``
