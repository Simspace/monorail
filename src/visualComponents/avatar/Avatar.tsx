import React from 'react'

import {
  BorderRadius,
  borderRadius,
  Colors,
  getColor,
} from '@monorail/helpers/exports'
import { Sizes } from '@monorail/helpers/size'
import styled, { css } from '@monorail/helpers/styled-components'
import { isNonEmptyString } from '@monorail/sharedHelpers/typeGuards'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { IconType } from '@monorail/visualComponents/icon/IconType'

type AvatarContainerProps = {
  team?: boolean
  size?: Sizes
}

const defaultSize = Sizes.DP24
const fontScale = 9.89 / defaultSize
const iconScale = 10 / 16

const AvatarContainer = styled.div<AvatarContainerProps>(
  ({ team, size = defaultSize }) => css`
    ${team
      ? css`
          ${borderRadius()};

          background: ${getColor(Colors.BrandDarkBlue)};
        `
      : css`
          ${borderRadius(BorderRadius.Round)};

          background: ${getColor(Colors.BrandLightBlue)};
        `};

    align-items: center;
    color: ${getColor(Colors.White)};
    display: flex;
    flex-shrink: 0;
    font-size: ${size * fontScale}px;
    font-weight: 900;
    height: ${size}px;
    justify-content: center;
    line-height: ${size}px;
    text-align: center;
    text-transform: uppercase;
    user-select: none;
    width: ${size}px;
  `,
)

export type AvatarProps = AvatarContainerProps & {
  first: string
  last: string
  icon?: IconType
}

export const Avatar = ({
  first,
  last,
  team,
  size = defaultSize,
  icon,
  ...domProps
}: AvatarProps) => (
  <AvatarContainer team={team} size={size} {...domProps}>
    {/* If the icon string is empty, show initials */}
    {isNonEmptyString(icon) ? (
      <Icon
        icon={icon}
        size={iconScale * size}
        css={css`
          color: ${getColor(Colors.White)};
        `}
      />
    ) : (
      <>
        {first.charAt(0)}
        {last.charAt(0)}
      </>
    )}
  </AvatarContainer>
)

export const getAvatarInitials = (fullName: string) => {
  const initials = fullName.match(/\b\w/g) || []

  return {
    first: initials.shift() || '',
    last: initials.pop() || '',
  }
}
