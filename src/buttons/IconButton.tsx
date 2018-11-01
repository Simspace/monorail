import React, { Component, MouseEvent } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import {
  baseChromelessStyles,
  baseOutlineStyles,
  basePrimaryStyles,
  BorderRadius,
  borderRadius,
  buttonTransiton,
  Colors,
  colors,
  flexFlow,
} from 'CommonStyles'
import { Icon } from 'icon/Icon'

const primaryStyles = css`
  ${basePrimaryStyles()};

  border: 0;
`

const secondaryStyles = css`
  background: ${colors(Colors.BrandLightBlue, 0.08)};
  border: 0;
  color: ${colors(Colors.BrandLightBlue)};

  &:hover {
    background: ${colors(Colors.BrandLightBlue, 0.16)};
  }

  &:active {
    background: ${colors(Colors.BrandLightBlue, 0.24)};
  }
`

const outlineStyles = css`
  ${baseOutlineStyles()};
`

const chromelessStyles = css`
  ${baseChromelessStyles()};
  border: 0;
  color: ${colors(Colors.Black74)};
`

const circleStyles = css`
  background: ${colors(Colors.Black24)};
  border: 0;

  ${Icon} {
    color: ${colors(Colors.White)};
  }

  &:hover {
    background: ${colors(Colors.Black54)};
  }

  &:active {
    background: ${colors(Colors.Black24)};
  }
`

const largeStyles = css`
  height: 32px;
  width: 32px;

  ${Icon} {
    font-size: 24px;
  }
`
const denseStyles = css`
  height: 16px;
  width: 16px;

  ${Icon} {
    font-size: 12px;
  }
`
const defaultStyles = css`
  height: 24px;
  width: 24px;
`

type CCIconButtonProps = {
  chromeless?: boolean
  css?: SimpleInterpolation
  darkMode?: boolean
  dense?: boolean
  iconCss?: SimpleInterpolation
  large?: boolean
  onClick?: (event: MouseEvent<Element>) => void
  outline?: boolean
  secondary?: boolean
  circle?: boolean
  type?: string
}

const CCIconButton = styled<CCIconButtonProps, 'button'>('button')`
  ${({ chromeless, outline, secondary, circle }) => {
    if (outline) {
      return outlineStyles
    } else if (chromeless) {
      return chromelessStyles
    } else if (circle) {
      return circleStyles
    } else if (secondary) {
      return secondaryStyles
    } else {
      return primaryStyles
    }
  }};

  ${({ large, dense }) => {
    if (large) {
      return largeStyles
    } else if (dense) {
      return denseStyles
    } else {
      return defaultStyles
    }
  }};

  ${flexFlow()};
  ${({ circle }) =>
    circle
      ? borderRadius(BorderRadius.Round)
      : borderRadius(BorderRadius.Medium)};

  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  justify-content: center;
  outline: none;
  padding: 0;
  text-transform: uppercase;
  user-select: none;

  ${buttonTransiton};

  ${Icon} {
    ${({ darkMode }) =>
      darkMode &&
      css`
        color: ${colors(Colors.White)};
      `};
    ${({ iconCss }) => iconCss};
  }

  ${({ css: cssOverrides }) => cssOverrides};
`

type IconButtonProps = CCIconButtonProps & {
  icon: string
}

export class IconButton extends Component<IconButtonProps> {
  render() {
    const { icon, ...otherProps } = this.props

    return (
      <CCIconButton className="new-button" {...otherProps}>
        <Icon icon={icon} />
      </CCIconButton>
    )
  }
}
