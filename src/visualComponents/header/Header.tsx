import React, { ReactNode } from 'react'

import {
  AppOrAuthSubAppName,
  convertAppNameToColor,
} from '@monorail/helpers/appName'
import { getColor } from '@monorail/helpers/color'
import { flexFlow } from '@monorail/helpers/flex'
import styled, { css, CSSProp } from '@monorail/helpers/styled-components'
import { getThemeColor, ThemeColors } from '@monorail/helpers/theme'
import { FontSizes, typographyFont } from '@monorail/helpers/typography'
import { AppIcon } from '@monorail/visualComponents/appIcon/AppIcon'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { IconType } from '@monorail/visualComponents/icon/IconType'
import {
  IconButton,
  IconButtonProps,
} from '@monorail/visualComponents/buttons/IconButton'

const HeaderRow = styled.div`
  ${flexFlow('row')};

  align-items: center;
  color: ${getThemeColor(ThemeColors.Text1000)};
  flex-shrink: 0;
  height: 48px;
  padding: 0 16px;
`

const HeaderContainer = styled.div``

export const HeaderTitle = styled.h1`
  ${typographyFont(500, FontSizes.Title3)};
`

const iconLeftCss = css`
  color: ${getThemeColor(ThemeColors.Text1000)};
  flex-shrink: 0;
  margin-right: 12px;
`

export type HeaderProps = {
  actions?: ReactNode
  appIcon?: AppOrAuthSubAppName
  children?: ReactNode
  cssHeaderRow?: CSSProp
  cssTitle?: CSSProp
  iconLeft?: IconType | React.ReactElement
  noBorder?: boolean
  title: ReactNode
}

export const Header = styled(
  ({
    actions,
    appIcon,
    children,
    cssHeaderRow,
    cssTitle,
    iconLeft,
    noBorder = false,
    title,
    ...domProps
  }: HeaderProps) => (
    <HeaderContainer {...domProps}>
      <HeaderRow css={cssHeaderRow}>
        {appIcon && <AppIcon css={iconLeftCss} appName={appIcon} />}
        {iconLeft &&
          (typeof iconLeft === 'string' ? (
            <Icon css={iconLeftCss} icon={iconLeft} />
          ) : (
            iconLeft
          ))}
        <HeaderTitle css={cssTitle}>{title}</HeaderTitle>
        {actions}
      </HeaderRow>

      {children}
    </HeaderContainer>
  ),
)<HeaderProps>(
  ({ noBorder, appIcon }) => css`
    ${!noBorder &&
      css`
        &::after {
          content: '';
          background: ${appIcon
            ? getColor(convertAppNameToColor(appIcon))
            : '#ebebeb'};
          bottom: 0;
          height: 1px;
          left: 0;
          position: absolute;
          right: 0;
        }
      `};

    ${flexFlow()};
    position: relative;
    flex-shrink: 0;
  `,
)
