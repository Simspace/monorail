import React from 'react'

import { BorderRadius, borderRadius } from '@monorail/helpers/borderRadius'
import { Colors, getColor } from '@monorail/helpers/color'
import { flexFlow } from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { Icon, IconProps } from '@monorail/visualComponents/icon/Icon'

type FrameProps = {
  isArchived?: boolean
  frameColor: Colors
  frameSize?: number
}

type Props = FrameProps & IconProps

const Frame = styled.div<FrameProps>(
  ({ frameColor, isArchived, frameSize }) => css`
    ${borderRadius(BorderRadius.Small)};
    ${flexFlow('row')}

    align-items: center;
    background: ${getColor(isArchived ? Colors.Gray38 : frameColor)};
    flex-shrink: 0;
    height: ${frameSize}px;
    justify-content: center;
    width: ${frameSize}px;
  `,
)

/** @deprecated see `v2/IconFrame` */
export const FramedIcon = (props: Props) => {
  const { frameColor, isArchived, icon, frameSize = 20, ...otherProps } = props

  return (
    <Frame
      frameColor={frameColor}
      isArchived={isArchived}
      frameSize={frameSize}
      {...otherProps}
    >
      <Icon
        size={frameSize - 4}
        icon={isArchived ? 'archive' : icon}
        color={Colors.White}
      />
    </Frame>
  )
}
