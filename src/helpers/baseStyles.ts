import { visible } from '@monorail/helpers/animation'
import { Colors, getColor } from '@monorail/helpers/color'
import { css, SimpleInterpolation } from 'styled-components'

export const baseFocusStyles: (
  addPositionToParent?: boolean,
) => SimpleInterpolation = (addPositionToParent = true) => css`
  ${addPositionToParent &&
    css`
      position: relative;
    `};

  &::after {
    ${visible(false)};

    border-radius: inherit;
    border: 1px solid ${getColor(Colors.BrandLightBlue)};
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
  color: Colors = Colors.BrandLightBlue,
) => css`
  background: transparent;
  border: 0;

  &:hover {
    background: ${getColor(color, 0.1)};
  }

  &.is-active,
  &:active {
    background: ${getColor(color, 0.2)};
  }
`

export const baseSecondaryStyles = (
  color: Colors = Colors.BrandLightBlue,
) => css`
  background: ${getColor(color, 0.08)};
  border: 0;
  color: ${getColor(color)};

  &:hover {
    background: ${getColor(color, 0.16)};
  }

  &:active {
    background: ${getColor(color, 0.24)};
  }
`

export const basePrimaryStyles = (
  color: Colors = Colors.BrandLightBlue,
  backgroundColor: Colors = Colors.White,
) => css`
  background: ${getColor(color)};
  border: 0;
  color: ${getColor(Colors.White)};
  position: relative;

  &:focus {
    &:after {
      border-color: ${getColor(backgroundColor, 0.3)};
    }
  }

  &:hover {
    ${floatingBackgroundStyles(getColor(backgroundColor, 0.15))};
  }

  &:active {
    ${floatingBackgroundStyles(getColor(backgroundColor, 0.3))};
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
`
