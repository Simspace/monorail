import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { Icon } from '@monorail/icon/Icon'
import { AppIcon } from '@monorail/appIcon/AppIcon'
import {
  AppName,
  Colors,
  colors,
  flexFlow,
  FontSizes,
  typography,
  isAppName,
} from '@monorail/CommonStyles'
import { CommonComponentType } from '@monorail/types'

const CCSectionHeader = styled.div<CommonComponentType>(
  ({ cssOverrides }) => css`
    ${flexFlow('row')};
    ${typography(700, FontSizes.Title5)} align-items: center;
    color: ${colors(Colors.Black74)};
    flex-shrink: 0;
    height: 40px;
    padding: 0 16px;

    ${cssOverrides};
  `,
)

const Title = styled.h1`
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

type SectionHeaderProps = CommonComponentType & {
  iconLeft?: string | AppName
  iconRight?: string | AppName
  title: string
}

export class SectionHeader extends Component<SectionHeaderProps> {
  render() {
    const { title, iconLeft, iconRight, cssOverrides, children } = this.props

    return (
      <CCSectionHeader cssOverrides={cssOverrides}>
        {iconLeft &&
          (isAppName(iconLeft) ? (
            <AppIcon appName={iconLeft} cssOverrides={iconLeftStyle} />
          ) : (
            <StyledIconLeft icon={iconLeft} />
          ))}
        <Title>{title}</Title>
        {iconRight &&
          (isAppName(iconRight) ? (
            <AppIcon appName={iconRight} cssOverrides={iconRightStyle} />
          ) : (
            <StyledIconRight icon={iconRight} />
          ))}
        {children}
      </CCSectionHeader>
    )
  }
}
