import { AppIcon } from '@monorail/appIcon/AppIcon'
import { IconButtonDisplay } from '@monorail/buttons/buttonTypes'
import { IconButton } from '@monorail/buttons/IconButton'
import {
  AppOrAuthSubAppName,
  Colors,
  colors,
  convertAppNameToColor,
  flexFlow,
  FontSizes,
  typography,
} from '@monorail/CommonStyles'
import { Icon } from '@monorail/icon/Icon'
import { CommonComponentType } from '@monorail/types'
import React, { ReactNode } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

const HeaderRow = styled.div<CommonComponentType>`
  color: ${colors(Colors.BrandDarkBlue)};
  ${flexFlow('row')};
  ${typography(500, FontSizes.Title3)};

  align-items: center;
  flex-shrink: 0;
  height: 48px;
  padding: 0 16px;
`

const iconRightCss = css`
  color: ${colors(Colors.BrandDarkBlue)};
  flex-shrink: 0;
  margin-right: 12px;
`

const iconLeftCss = css`
  color: ${colors(Colors.BrandDarkBlue)};
  flex-shrink: 0;
  margin-left: 12px;
`

type Props = CommonComponentType & {
  actions?: ReactNode
  appIcon?: AppOrAuthSubAppName
  cssHeaderRow?: SimpleInterpolation
  iconLeft?: { icon: string; onClick?: (e: React.MouseEvent<Element>) => void }
  iconRight?: { icon: string; onClick?: (e: React.MouseEvent<Element>) => void }
  noBorder?: boolean
  title: string
}

export const Header = styled<Props>(
  ({
    actions,
    appIcon,
    children,
    css: cssOverrides,
    cssHeaderRow,
    iconLeft,
    iconRight,
    noBorder = false,
    title,
    ...otherProps
  }) => (
    <div {...otherProps}>
      <HeaderRow css={cssHeaderRow}>
        {appIcon && <AppIcon css={iconRightCss} appName={appIcon} />}
        {iconLeft &&
          (iconLeft.onClick ? (
            <IconButton
              css={iconRightCss}
              icon={iconLeft.icon}
              onClick={iconLeft.onClick}
              display={IconButtonDisplay.Chromeless}
            />
          ) : (
            <Icon
              css={iconRightCss}
              icon={iconLeft.icon}
              onClick={iconLeft.onClick}
            />
          ))}
        {title}
        {actions}
        {iconRight &&
          (iconRight.onClick ? (
            <IconButton
              css={iconLeftCss}
              icon={iconRight.icon}
              onClick={iconRight.onClick}
              display={IconButtonDisplay.Chromeless}
            />
          ) : (
            <Icon
              css={iconLeftCss}
              icon={iconRight.icon}
              onClick={iconRight.onClick}
            />
          ))}
      </HeaderRow>

      {children}
    </div>
  ),
)`
  ${({ noBorder, appIcon, css: cssOverride }) => css`
    ${!noBorder &&
      css`
        &::after {
          content: '';
          background: ${appIcon
            ? colors(convertAppNameToColor(appIcon))
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

    ${cssOverride};
  `};
`
