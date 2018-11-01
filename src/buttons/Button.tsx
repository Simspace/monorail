import React, { Component, MouseEvent } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import {
  baseChromelessStyles,
  baseDisabledStyles,
  baseOutlineStyles,
  basePrimaryStyles,
  baseSecondaryStyles,
  borderRadius,
  buttonTransiton,
  Colors,
  colors,
  FontSizes,
  typography,
} from 'CommonStyles'
import {
  ButtonDisplay,
  ButtonSize,
} from 'buttons/buttonTypes'
import { Icon } from 'icon/Icon'

const ButtonDisplayCss = {
  [ButtonDisplay.Primary]: css`
    ${basePrimaryStyles()};

    border: 0;
  `,
  [ButtonDisplay.Secondary]: baseSecondaryStyles(),
  [ButtonDisplay.Outline]: baseOutlineStyles(),
  [ButtonDisplay.Chromeless]: css`
    ${baseChromelessStyles()};

    border: 0;
    color: ${colors(Colors.BrandLightBlue)};
    line-height: 25px;
  `,
}

const ButtonSizeCss = {
  [ButtonSize.Dense]: css`
    height: 16px;
    padding: 0 7px;
  `,
  [ButtonSize.Compact]: css`
    height: 24px;
    padding: 0 7px;
  `,
  [ButtonSize.Default]: css`
    height: 24px;
    padding: 0 11px;
  `,
  [ButtonSize.Large]: css`
    height: 32px;
    padding: 0 15px;
  `,
}

const CCButton = styled<ButtonProps, 'button'>('button')`
  ${({ display }) => ButtonDisplayCss[display]};
  ${({ size }) => ButtonSizeCss[size]};
  ${({ disabled }) => disabled && baseDisabledStyles};
  ${({ secondary }) => secondary && ButtonDisplayCss[ButtonDisplay.Secondary]};

  ${typography(700, FontSizes.Title5)};
  ${borderRadius()};

  cursor: pointer;
  flex-shrink: 0;
  outline: none;
  text-transform: uppercase;
  user-select: none;

  ${buttonTransiton};

  ${Icon} {
    color: currentColor;
    margin-left: -4px;
    margin-right: 4px;
    margin-top: -16px;
    position: relative; /* Needs position: relative; so that you can do the top hack. */
    top: 4px;
  }

  ${({ css: cssOverrides }) => cssOverrides};
`

export type ButtonProps = {
  size: ButtonSize
  display: ButtonDisplay
  css?: SimpleInterpolation
  disabled?: boolean
  secondary?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  type: string
}

export class Button extends Component<ButtonProps> {
  static defaultProps = {
    display: ButtonDisplay.Primary,
    size: ButtonSize.Default,
    type: 'button',
  }

  render() {
    const { children, ...otherProps } = this.props

    return (
      <CCButton className="new-button" {...otherProps}>
        {children}
      </CCButton>
    )
  }
}
