import { fromNullable } from 'fp-ts/lib/Option'
import React, { StatelessComponent } from 'react'

import {
  BorderRadius,
  borderRadius,
  Colors,
  getColor,
} from '@monorail/helpers/exports'
import { Sizes } from '@monorail/helpers/size'
import styled, { css } from '@monorail/helpers/styled-components'
import { isNil } from '@monorail/sharedHelpers/typeGuards'
import { Icon } from '@monorail/visualComponents/icon/Icon'

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
  icon?: string
}

export const Avatar: StatelessComponent<AvatarProps> = ({
  first,
  last,
  team,
  size = defaultSize,
  icon,
  ...domProps
}) => (
  <AvatarContainer team={team} size={size} {...domProps}>
    {!isNil(icon) ? (
      <Icon
        icon={icon}
        size={iconScale * size}
        css={css`
          color: ${getColor(Colors.White)};
        `}
      />
    ) : (
      <>
        {fromNullable(first).fold('', f => f.charAt(0))}
        {fromNullable(last).fold('', f => f.charAt(0))}
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
