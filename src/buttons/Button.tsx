import React, { Component, MouseEvent } from 'react'
import styled, { css } from 'styled-components'

import {
  baseChromelessStyles,
  baseDisabledStyles,
  baseFocusStyles,
  baseOutlineStyles,
  basePrimaryStyles,
  baseSecondaryStyles,
  borderRadius,
  buttonTransition,
  Colors,
  colors,
  flexFlow,
  FontSizes,
  typography,
} from '@monorail/CommonStyles'
import { ButtonDisplay, ButtonSize } from '@monorail/buttons/buttonTypes'
import { Icon } from '@monorail/icon/Icon'
import { CommonComponentType } from '@monorail/types'
import { LinkProps } from '@monorail/list/List'

export const buttonDisplayCss = {
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

export const buttonSizeCss = {
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

const CCButton = styled.button<ButtonProps>(
  ({ disabled, size, display, cssOverrides }) => css`
    ${buttonDisplayCss[display]};
    ${buttonSizeCss[size]};
    ${disabled && baseDisabledStyles};

    ${typography(700, FontSizes.Title5)};
    ${borderRadius()};
    ${flexFlow('row')};

    align-items: center;
    cursor: pointer;
    flex-shrink: 0;
    outline: none;
    text-transform: uppercase;
    user-select: none;
    justify-content: center;

    ${buttonTransition};

    ${Icon} {
      color: currentColor;
      margin: auto 4px auto - 4px;
    }

    ${baseFocusStyles()};

    ${cssOverrides};
  `,
)

export type ButtonProps = CommonComponentType &
  LinkProps & {
    size: ButtonSize
    display: ButtonDisplay
    disabled?: boolean
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
    type: 'button' | 'reset' | 'submit'
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
