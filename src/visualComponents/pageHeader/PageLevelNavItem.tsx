import React, { MouseEvent } from 'react'

import { baseFocusStyles } from '@monorail/helpers/baseStyles'
import { flexFlow } from '@monorail/helpers/flex'
import styled from '@monorail/helpers/styled-components'
import { getThemeColor, ThemeColors } from '@monorail/helpers/theme'
import { FontSizes, typographyFont } from '@monorail/helpers/typography'
import { LinkProps } from '@monorail/types'
import { BaseLink } from '@monorail/visualComponents/hyperLink/BaseLink'

export type PageLevelNavItemProps = LinkProps & {
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
}

export const PageLevelNavItem = styled(BaseLink)<PageLevelNavItemProps>`
  ${baseFocusStyles()};
  ${flexFlow('row')};
  ${typographyFont(700, FontSizes.Title4)};

  color: ${getThemeColor(ThemeColors.ApplicationPrimary)};
  align-items: center;
  cursor: pointer;
  min-height: 24px;
  padding: 0 12px;
  user-select: none;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:hover {
    background: ${getThemeColor(ThemeColors.ApplicationPrimary, 0.08)};
  }

  &:active {
    background: ${getThemeColor(ThemeColors.ApplicationPrimary, 0.16)};
    color: ${getThemeColor(ThemeColors.ApplicationPrimary)};
  }
`
