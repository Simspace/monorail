import React, { FC, MouseEvent, ReactNode, ReactType } from 'react'

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
  visible,
} from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { getThemeColor, ThemeColors } from '@monorail/helpers/theme'
import { isEmptyString } from '@monorail/sharedHelpers/typeGuards'
import { CommonComponentType, LinkProps } from '@monorail/types'
import {
  ButtonDisplay,
  ButtonMode,
  ButtonSize,
} from '@monorail/visualComponents/buttons/buttonTypes'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { Loading, LoaderType } from '@monorail/visualComponents/loading/Loading'

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

export const StyledButton = styled.button<StyledButtonProps>(
  ({ disabled, size, display, mode, pressed, cssOverrides, status }) => css`
    ${mode === ButtonMode.Push && pressed
      ? buttonPressedDisplayCss[display]
      : buttonDisplayCss[display]};
    ${buttonSizeCss[size]};
    ${disabled && baseDisabledStyles};

    ${typography(700, FontSizes.Title5)};
    ${borderRadius()};
    ${flexFlow('row')};

    ${status ? `overflow: visible;` : `overflow: hidden;`}

    cursor: pointer;
    flex-shrink: 0;
    outline: none;
    text-transform: uppercase;
    user-select: none;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    margin: 0;
    position: relative;

    ${buttonTransition};

    ${baseFocusStyles()};

    ${cssOverrides};
  `,
)

export type StyledButtonProps = {
  disabled: boolean
  display: ButtonDisplay
  mode: ButtonMode
  pressed: boolean
  size: ButtonSize
  status?: (props: { style: React.CSSProperties }) => ReactNode
  cssOverrides: CommonComponentType['cssOverrides']
  as?: CommonComponentType['as']
  className: string
  type: 'button' | 'reset' | 'submit'
  onClick: OnClick
  isActive: boolean
}

type IconProps = {
  iconLeft?: string
  iconRight?: string
  iconSize?: number
}

export type OnClick = (event: MouseEvent<HTMLButtonElement>) => void

type FunctionalProps = {
  className?: string
  disabled?: boolean
  display?: ButtonDisplay
  isActive?: boolean
  isLoading?: boolean
  mode?: ButtonMode
  onClick?: OnClick
  onMouseDown?: OnClick
  onMouseUp?: OnClick
  pressed?: boolean
  size?: ButtonSize
  status?: (props: { style: React.CSSProperties }) => ReactNode
  title?: string
  type?: 'button' | 'reset' | 'submit'
}

type CommonProps = CommonComponentType &
  LinkProps & {
    passedAs?: ReactType
  }

export type ButtonProps = CommonProps & IconProps & FunctionalProps

export const Button: FC<ButtonProps> = props => {
  const {
    children,
    className = '',
    cssOverrides = '',
    disabled = false,
    display = ButtonDisplay.Primary,
    iconLeft = '',
    iconRight = '',
    iconSize = 16,
    isActive = false,
    isLoading = false,
    mode = ButtonMode.Default,
    onClick = () => {},
    passedAs,
    pressed = false,
    size = ButtonSize.Default,
    status,
    type = 'button',
    ...domProps
  } = props

  const buttonContent = (
    <>
      {typeof status === 'function' &&
        status({
          style: {
            position: 'absolute',
          },
        })}
      {!isEmptyString(iconLeft) && (
        <Icon icon={iconLeft} css={iconLeftStyles[size]} size={iconSize} />
      )}
      {children}
      {!isEmptyString(iconRight) && (
        <Icon icon={iconRight} css={iconRightStyles[size]} size={iconSize} />
      )}
    </>
  )

  return (
    <StyledButton
      {...domProps}
      as={passedAs}
      className={`new-button ${className}`}
      cssOverrides={cssOverrides}
      mode={mode}
      type={type}
      display={display}
      iconSize={iconSize}
      size={size}
      onClick={onClick}
      pressed={pressed}
      disabled={disabled}
      isActive={isActive}
      status={status}
    >
      {isLoading ? (
        <>
          <div css="position: absolute">
            <Loading loaderType={LoaderType.Generic} size={iconSize} />
          </div>
          <div css={visible(false)}>{buttonContent}</div>
        </>
      ) : (
        buttonContent
      )}
    </StyledButton>
  )
}
