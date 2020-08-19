import React from 'react'

import { BorderRadius, borderRadius } from '@monorail/helpers/borderRadius'
import { Colors, getColor } from '@monorail/helpers/color'
import styled, { css } from '@monorail/helpers/styled-components'
import { zIndex, ZIndexNodeName } from '@monorail/helpers/zIndex'
import { Icon, IconProps } from '@monorail/visualComponents/icon/Icon'

type Props = { frameColor: Colors; isArchived?: boolean } & IconProps
export const FramedIcon = styled(
  ({ frameColor, isArchived, icon, ...otherProps }: Props) => (
    <Icon icon={isArchived ? 'archive' : icon} {...otherProps} />
  ),
)<Props>(
  ({ frameColor, isArchived }) => css`
    ${zIndex(ZIndexNodeName.FramedIcon)};

    position: relative;
    color: ${getColor(Colors.White)};

    &::after {
      ${zIndex(ZIndexNodeName.FramedIconBackground)};
      ${borderRadius(BorderRadius.Small)};

      background: ${getColor(isArchived ? Colors.Gray38 : frameColor)};
      content: '';
      position: absolute;
      top: -2px;
      right: -2px;
      bottom: -2px;
      left: -2px;
    }
  `,
)
