import React, { Component, MouseEvent } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { Icon } from '@monorail/icon/Icon'
import {
  baseChromelessStyles,
  baseDisabledStyles,
  baseFocusStyles,
  baseOutlineStyles,
  basePrimaryStyles,
  BorderRadius,
  borderRadius,
  buttonTransition,
  Colors,
  colors,
  flexFlow,
} from '@monorail/CommonStyles'
import {
  ButtonSize,
  ButtonDisplay,
  IconButtonShape,
} from '@monorail/buttons/buttonTypes'

const iconButtonDisplayCss = {
  [ButtonDisplay.Primary]: css`
    ${basePrimaryStyles()};

    border: 0;
  `,
  [ButtonDisplay.Secondary]: css`
    background: ${colors(Colors.BrandLightBlue, 0.08)};
    border: 0;
    color: ${colors(Colors.BrandLightBlue)};

    &:hover {
      background: ${colors(Colors.BrandLightBlue, 0.16)};
    }

    &:active {
      background: ${colors(Colors.BrandLightBlue, 0.24)};
    }
  `,
  [ButtonDisplay.Outline]: css`
    ${baseOutlineStyles()};
  `,
  [ButtonDisplay.Chromeless]: css`
    ${baseChromelessStyles()};

    border: 0;
    color: ${colors(Colors.Black74)};

    &:focus {
      background: ${colors(Colors.BrandLightBlue, 0.16)};
    }
  `,
}

const iconButtonSizeCss = {
  [ButtonSize.Dense]: css`
    height: 16px;
    width: 16px;
    padding: 0 7px;

    ${Icon} {
      font-size: 12px;
    }
  `,
  [ButtonSize.Compact]: css`
    height: 24px;
    padding: 0 7px;
  `,
  [ButtonSize.Default]: css`
    height: 24px;
    width: 24px;
  `,
  [ButtonSize.Large]: css`
    height: 32px;
    width: 32px;

    ${Icon} {
      font-size: 24px;
    }
  `,
}

export const CCIconButton = styled.button<CCIconButtonProps>(
  ({ disabled, display, size, shape, cssOverrides, darkMode, iconCss }) => css`
    ${iconButtonDisplayCss[display]};
    ${iconButtonSizeCss[size]};
    ${disabled && baseDisabledStyles};
    ${borderRadius(
      shape === IconButtonShape.Default
        ? BorderRadius.Round
        : BorderRadius.Medium,
    )};

    ${flexFlow()};

    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    flex-shrink: 0;
    justify-content: center;
    outline: none;
    padding: 0;
    text-transform: uppercase;
    user-select: none;

    ${buttonTransition};

    ${Icon} {
      ${darkMode
        ? css`
            color: ${colors(Colors.White)};
          `
        : css`
            color: currentColor;
          `};

      ${iconCss};
    }

    ${baseFocusStyles()};

    ${cssOverrides};
  `,
)

type CCIconButtonProps = {
  cssOverrides?: SimpleInterpolation
  darkMode?: boolean
  disabled?: boolean
  display: ButtonDisplay
  shape?: IconButtonShape
  iconCss?: SimpleInterpolation
  onClick?: (event: MouseEvent<Element>) => void
  size: ButtonSize
  type: 'button' | 'reset' | 'submit'
  className?: string
}

export type IconButtonProps = CCIconButtonProps & {
  icon: string
}

export class IconButton extends Component<IconButtonProps> {
  static defaultProps = {
    display: ButtonDisplay.Primary,
    size: ButtonSize.Default,
    shape: IconButtonShape.Default,
    type: 'button',
  }

  render() {
    const { icon, className, ...otherProps } = this.props
    return (
      <CCIconButton className={`new-button ${className}`} {...otherProps}>
        <Icon icon={icon} />
      </CCIconButton>
    )
  }
}
