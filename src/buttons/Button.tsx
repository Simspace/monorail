import React, { MouseEvent, ReactType } from 'react'

import {
  ButtonDisplay,
  ButtonMode,
  ButtonSize,
} from '@monorail/buttons/buttonTypes'
import {
  baseButtonBarStyles,
  baseChromelessStyles,
  baseDisabledStyles,
  baseFocusStyles,
  baseOutlineStyles,
  basePrimaryStyles,
  baseSecondaryStyles,
  baseToolBarStyles,
  borderRadius,
  buttonTransition,
  Colors,
  flexFlow,
  floatingOutlineStyles,
  FontSizes,
  getColor,
  typography,
} from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { getThemeColor, ThemeColors } from '@monorail/helpers/theme'
import { Icon } from '@monorail/icon/Icon'
import { FCwDP } from '@monorail/sharedHelpers/react'
import { isEmptyString } from '@monorail/sharedHelpers/typeGuards'
import { CommonComponentType, LinkProps } from '@monorail/types'

export const buttonDisplayCss = {
  [ButtonDisplay.Primary]: basePrimaryStyles(),
  [ButtonDisplay.Secondary]: baseSecondaryStyles(),
  [ButtonDisplay.Outline]: baseOutlineStyles(),
  [ButtonDisplay.Chromeless]: css`
    ${baseChromelessStyles()};

    color: ${getThemeColor(ThemeColors.ActionSecondary)};
    line-height: 25px;
  `,
  [ButtonDisplay.ButtonBar]: css`
    ${floatingOutlineStyles()};
    ${baseButtonBarStyles()};
  `,
  [ButtonDisplay.Toolbar]: css`
    ${baseButtonBarStyles()};
  `,
}

export const buttonPressedDisplayCss = {
  [ButtonDisplay.Primary]: basePrimaryStyles(
    ThemeColors.ActivePrimary,
    ThemeColors.ActiveSecondary,
  ),
  [ButtonDisplay.Secondary]: basePrimaryStyles(),
  [ButtonDisplay.Outline]: basePrimaryStyles(),
  [ButtonDisplay.Chromeless]: basePrimaryStyles(),
  [ButtonDisplay.ButtonBar]: css`
    ${basePrimaryStyles()};

    color: ${getColor(Colors.White)};

    &:active {
      color: ${getColor(Colors.White)};
    }

    &:hover {
      color: ${getColor(Colors.White)};
    }
  `,
  [ButtonDisplay.Toolbar]: baseToolBarStyles(),
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

const iconLeftStyles = {
  [ButtonSize.Dense]: css`
    color: inherit;
  `,
  [ButtonSize.Compact]: css`
    color: inherit;
    margin-left: -2px;
    margin-right: 4px;
  `,
  [ButtonSize.Default]: css`
    color: inherit;
    margin-left: -6px;
    margin-right: 4px;
  `,
  [ButtonSize.Large]: css`
    color: inherit;
    margin-left: -6px;
    margin-right: 8px;
  `,
}

const iconRightStyles = {
  [ButtonSize.Dense]: css`
    color: inherit;
  `,
  [ButtonSize.Compact]: css`
    color: inherit;
    margin-right: -7px;
  `,
  [ButtonSize.Default]: css`
    color: inherit;
    margin-right: -8px;
    margin-left: 4px;
  `,
  [ButtonSize.Large]: css`
    color: inherit;
    margin-right: -8px;
    margin-left: 8px;
  `,
}

export const StyledButton = styled.button<StyleProps>(
  ({ disabled, size, display, mode, pressed, cssOverrides }) => css`
    ${mode === ButtonMode.Push && pressed
      ? buttonPressedDisplayCss[display]
      : buttonDisplayCss[display]};
    ${buttonSizeCss[size]};
    ${disabled && baseDisabledStyles};

    ${typography(700, FontSizes.Title5)};
    ${borderRadius()};
    ${flexFlow('row')};

    cursor: pointer;
    flex-shrink: 0;
    outline: none;
    text-transform: uppercase;
    user-select: none;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    margin: 0;
    overflow: hidden;

    ${buttonTransition};

    ${baseFocusStyles()};

    ${cssOverrides};
  `,
)

type IconProps = {
  iconLeft: string
  iconRight: string
}

export type OnClick = (event: MouseEvent<HTMLButtonElement>) => void

type FunctionalProps = {
  className: string
  disabled: boolean
  display: ButtonDisplay
  isActive: boolean
  mode: ButtonMode
  onClick: OnClick
  onMouseDown?: OnClick
  onMouseUp?: OnClick
  pressed: boolean
  size: ButtonSize
  title?: string
  type: 'button' | 'reset' | 'submit'
}

type DefaultProps = IconProps & FunctionalProps
type CommonProps = CommonComponentType &
  LinkProps & {
    passedAs?: ReactType
  }

type StyleProps = CommonProps & FunctionalProps

export type ButtonProps = CommonProps & DefaultProps

export const buttonDefaultProps: DefaultProps = {
  className: '',
  disabled: false,
  display: ButtonDisplay.Primary,
  iconLeft: '',
  iconRight: '',
  isActive: false,
  mode: ButtonMode.Default,
  onClick: () => {},
  pressed: false,
  size: ButtonSize.Default,
  type: 'button',
}

export const Button: FCwDP<CommonProps, DefaultProps> = ({
  children,
  className,
  iconLeft,
  iconRight,
  size,
  passedAs,
  ...domProps
}) => (
  <StyledButton
    as={passedAs}
    className={`new-button ${className}`}
    size={size}
    {...domProps}
  >
    {!isEmptyString(iconLeft) && (
      <Icon icon={iconLeft} css={iconLeftStyles[size]} size={16} />
    )}
    {children}
    {!isEmptyString(iconRight) && (
      <Icon icon={iconRight} css={iconRightStyles[size]} size={16} />
    )}
  </StyledButton>
)

Button.defaultProps = buttonDefaultProps
