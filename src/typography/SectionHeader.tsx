import React, { Component } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import { Icon } from '@monorail/icon/Icon'
import { AppIcon } from '@monorail/appIcon/AppIcon'
import {
  AppName,
  Colors,
  colors,
  flexFlow,
  FontSizes,
  typography,
} from '@monorail/CommonStyles'

type CCSectionHeaderProps = {
  css?: SimpleInterpolation
}

const CCSectionHeader = styled<CCSectionHeaderProps, 'div'>('div')`
  ${flexFlow('row')} align-items: center;
  flex-shrink: 0;
  height: 40px;
  padding: 0 16px;
   ${typography(700, FontSizes.Title5)}
  color: ${colors(Colors.Black74)};

  ${({ css: cssOverrides }) => cssOverrides};
`

const Title = styled('h1')`
  ${typography(700, FontSizes.Title5)}
  color: ${colors(Colors.Black74)};
  flex: 1;
`

const iconLeftStyle = css`
  margin-right: 8px;
`

const StyledIconLeft = styled(Icon)`
  ${iconLeftStyle};
`

const iconRightStyle = css`
  margin-left: 8px;
`

const StyledIconRight = styled(Icon)`
  ${iconRightStyle};
`

type SectionHeaderProps = CCSectionHeaderProps & {
  iconLeft?: string | AppName
  iconRight?: string | AppName
  title: string
}

type IconPropType = string | AppName

function isAppName(iconName: IconPropType): iconName is AppName {
  return Object.values(AppName).includes(iconName)
}

export class SectionHeader extends Component<SectionHeaderProps> {
  render() {
    const {
      title,
      iconLeft,
      iconRight,
      css: cssOverrides,
      children,
    } = this.props

    return (
      <CCSectionHeader css={cssOverrides}>
        {iconLeft &&
          (isAppName(iconLeft) ? (
            <AppIcon appName={iconLeft} css={iconLeftStyle} />
          ) : (
            <StyledIconLeft icon={iconLeft} />
          ))}
        <Title>{title}</Title>
        {iconRight &&
          (isAppName(iconRight) ? (
            <AppIcon appName={iconRight} css={iconRightStyle} />
          ) : (
            <StyledIconRight icon={iconRight} />
          ))}
        {children}
      </CCSectionHeader>
    )
  }
}
