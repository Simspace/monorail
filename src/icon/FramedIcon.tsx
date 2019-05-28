import React from 'react'

import { BorderRadius, borderRadius } from '@monorail/helpers/borderRadius'
import { Colors, getColor } from '@monorail/helpers/color'
import styled, { css } from '@monorail/helpers/styled-components'
import { zIndex, ZIndexNodeName } from '@monorail/helpers/zIndex'
import { Icon, IconProps } from '@monorail/icon/Icon'

type Props = { frameColor: Colors } & IconProps
export const FramedIcon = styled(({ frameColor, ...otherProps }: Props) => (
  <Icon {...otherProps} />
))<Props>(
  ({ frameColor }) => css`
    ${zIndex(ZIndexNodeName.FramedIcon)};

    position: relative;
    color: ${getColor(Colors.White)};

    &::after {
      ${zIndex(ZIndexNodeName.FramedIconBackground)};
      ${borderRadius(BorderRadius.Small)};

      background: ${getColor(frameColor)};
      content: '';
      position: absolute;
      top: -2px;
      right: -2px;
      bottom: -2px;
      left: -2px;
    }
  `,
)
