import { visible } from '@monorail/helpers/animation'
import { Colors, getColor } from '@monorail/helpers/color'
import { css } from '@monorail/helpers/styled-components'
import { getThemeColor, Mode, ThemeColors } from '@monorail/helpers/theme'
import { CssOverridesType } from '@monorail/types'

export const baseFocusStyles: (
  addPositionToParent?: boolean,
) => CssOverridesType = (addPositionToParent = true) => css`
  ${addPositionToParent &&
    css`
      position: relative;
    `};

  &::after {
    ${visible(false)};

    border-radius: inherit;
    border: 1px solid
      ${({ theme: { mode } }) =>
        getColor(mode === Mode.Dark ? Colors.White : Colors.BrandLightBlue)};
    bottom: 0;
    content: '';
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
  }

  &:focus {
    opacity: 0.85;
    outline: none;

    &::after {
      ${visible(true)};
    }
  }
`

export const floatingOutlineStyles = (color: string = 'currentColor') => css`
  /**
  * Using inner element for border to avoid width issue when compared with other base buttons styles
  */
  &:before {
    border-radius: inherit;
    border: 1px solid ${color};
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`

export const floatingBackgroundStyles = (color: string = 'currentColor') => css`
  /**
  * Using inner element for border to avoid width issue when compared with other base buttons styles
  */
  &:before {
    background: ${color};
    border-radius: inherit;
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`

export const baseOutlineStyles = (
  color: Colors = Colors.BrandLightBlue,
  focusColor: Colors = Colors.BrandDarkBlue,
) => css`
  background: transparent;
  border: 0;
  color: ${getColor(color)};

  ${floatingOutlineStyles()};

  &:focus {
    &:after {
      border-color: ${getColor(focusColor)};
    }
  }

  &:hover {
    background: ${getColor(color, 0.16)};
  }

  &:active {
    background: ${getColor(color, 0.24)};
  }
`

export const baseChromelessStyles = (
  color: ThemeColors = ThemeColors.ActionSecondary,
) => css`
  background: transparent;
  border: 0;

  &:hover {
    background: ${getThemeColor(color, 0.1)};
  }

  &.is-active,
  &:active {
    background: ${getThemeColor(color, 0.2)};
  }
`

export const baseIconButtonChromelessStyles = (
  isActive: boolean = false,
) => css`
  background: ${isActive
    ? getThemeColor(ThemeColors.PrimaryColor, 0.12)
    : 'transparent'};
  color: ${getThemeColor(isActive ? ThemeColors.Text900 : ThemeColors.Text600)};
  border: 0;

  &:hover {
    background: ${getThemeColor(ThemeColors.PrimaryColor, 0.06)};
    color: ${getThemeColor(
      isActive ? ThemeColors.Text900 : ThemeColors.Text700,
    )};
  }

  &:active {
    background: ${getThemeColor(ThemeColors.PrimaryColor, 0.16)};
    color: ${getThemeColor(
      isActive ? ThemeColors.Text900 : ThemeColors.Text700,
    )};
  }

  &.is-active {
    background: ${getThemeColor(ThemeColors.PrimaryColor, 0.12)};
  }
`

export const baseSecondaryStyles = (
  color: ThemeColors = ThemeColors.ActionSecondary,
) => css`
  background: ${getThemeColor(color, 0.12)};
  border: 0;
  color: ${getThemeColor(color)};

  &:hover {
    background: ${getThemeColor(color, 0.18)};
  }

  &:active {
    background: ${getThemeColor(color, 0.22)};
  }
`

export const basePrimaryStyles = (
  backgroundColor: ThemeColors = ThemeColors.ActionPrimary,
  color: ThemeColors = ThemeColors.BackgroundSecondary,
) => css`
  background: ${getThemeColor(backgroundColor)};
  border: 0;
  color: ${getThemeColor(color)};
  position: relative;

  &:focus {
    &:after {
      border-color: ${getThemeColor(color, 0.3)};
    }
  }

  &:hover {
    ${props => floatingBackgroundStyles(getThemeColor(color, 0.15)(props))};
  }

  &:active {
    ${props => floatingBackgroundStyles(getThemeColor(color, 0.3)(props))};
  }
`

export const baseButtonBarStyles = (color: Colors = Colors.Black) => css`
  background: transparent;
  border: 0;
  color: ${getColor(color, 0.32)};

  &:hover {
    background: ${getColor(color, 0.04)};
    color: ${getColor(color, 0.54)};
  }

  &:active {
    background: ${getColor(color, 0.08)};
    color: ${getColor(color, 0.54)};
  }
`

export const baseToolBarStyles = (color: Colors = Colors.Black) => css`
  background-color: ${getColor(color, 0.14)};
  border: 0;
  color: ${getColor(color, 0.74)};

  &:hover {
    background-color: ${getColor(Colors.Black, 0.2)};
    color: ${getColor(color, 0.89)};
  }

  &:active {
    background-color: ${getColor(Colors.Black, 0.12)};
    color: ${getColor(color, 0.74)};
  }
`

export const baseDisabledStyles = css`
  cursor: default;
  opacity: 0.4;
  pointer-events: none;

  &:hover,
  &:focus,
  &:active {
    border-color: ${getColor(Colors.Black, 0.12)};
  }
`

export const baseErrorBorderStyles = css`
  border-color: ${getColor(Colors.Red)};

  &:hover {
    border-color: ${getColor(Colors.Red)};
  }

  &:focus,
  &:active {
    border-color: ${getColor(Colors.Red)};
  }
`

export const baseErrorBackgroundStyles = css`
  background: ${getColor(Colors.Red, 0.1)};

  &:hover,
  &:focus,
  &:active {
    background: ${getColor(Colors.Red, 0.1)};
  }
`

export const baseHyperLinkStyles = (
  color: ThemeColors = ThemeColors.ActionPrimary,
) => css`
  color: ${getThemeColor(color)};

  &:hover {
    color: ${getThemeColor(color, 0.8)};
  }

  &:active {
    color: ${getThemeColor(color, 0.7)};
  }

  &:visited {
    color: ${getThemeColor(color)};
  }
`
