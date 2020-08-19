import React, { FC, ReactNode } from 'react'

import {
  borderRadius,
  Colors,
  flexFlow,
  floatingOutlineStyles,
  getColor,
} from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { Mode } from '@monorail/helpers/theme'
import { CommonComponentType } from '@monorail/types'
import {
  ButtonProps,
  StyledButton,
} from '@monorail/visualComponents/buttons/Button'
import {
  ButtonDisplay,
  ButtonMode,
  ButtonsBarMode,
  ButtonSize,
  IconButtonShape,
} from '@monorail/visualComponents/buttons/buttonTypes'
import { Icon } from '@monorail/visualComponents/icon/Icon'

/**
 * Buttons Bar - Children button Wrapper
 */
type ButtonWrapperProps = {
  mode: ButtonsBarMode
  pressed?: boolean
}

const StyledButtonWrapper = styled.div<ButtonWrapperProps>(
  ({ mode, theme }) => css`
    position: relative;

    ${mode === ButtonsBarMode.Toolbar
      ? css`
          ${StyledButton} {
            margin: 0 2px;
          }
        `
      : css`
          border-radius: inherit;
          flex: 1 1 auto;

          &:not(:first-child) {
            ${floatingOutlineStyles(getColor(Colors.Black, 0.16))};

            border-left: 1px solid ${getColor(Colors.White)};
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;

            &:before {
              border-width: 0 0 0 1px;
              left: -1px;
            }
          }

          &:not(:last-child) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }

          ${StyledButton} {
            border-radius: inherit;
            min-width: 100%;
            min-height: 100%;

            &:before {
              border-width: 0;
            }
          }
        `};

    ${Icon} {
      ${theme.mode !== Mode.Dark && 'color: inherit;'};
    }
  `,
)

/**
 * Buttons Bar Props
 */
type ButtonsBarProps = CommonComponentType & {
  // Overrides default ButtonBar display styling
  display?: ButtonDisplay

  // Regular Button sizing
  size?: ButtonSize

  // Group or Toolbar mode
  mode?: ButtonsBarMode
}

type ButtonsBarContainerProps = CommonComponentType & {
  // Group or Toolbar mode
  mode: ButtonsBarMode
}

export const ButtonsBarContainer = styled.div<ButtonsBarContainerProps>(
  ({ cssOverrides, mode }) => css`
    ${mode === ButtonsBarMode.Default &&
      css`
        ${floatingOutlineStyles(getColor(Colors.Black, 0.16))};
        ${borderRadius()};
      `}

    ${flexFlow('row')};

    overflow: hidden;
    position: relative;
    vertical-align: middle;

    ${cssOverrides};
  `,
)

/**
 * ToolbarsContainer
 * Use this container for displaying multiple Toolbars in a single row
 */
export const ToolbarsContainer = styled.div`
  display: flex;
  vertical-align: middle;

  ${ButtonsBarContainer} {
    border-radius: 0;
    display: inline-flex;

    &:not(:first-child) {
      border-left: 1px solid ${getColor(Colors.Black, 0.16)};
      margin-left: 4px;
      padding-left: 4px;
    }
  }
`

/**
 * Buttons Bar
 */
export const ButtonsBar: FC<ButtonsBarProps> = props => {
  const {
    children,
    size = ButtonSize.Large,
    mode = ButtonsBarMode.Default,
    display = ButtonDisplay.ButtonBar,
    ...domProps
  } = props

  const renderBar = () =>
    React.Children.map(children, (child: ReactNode, index: number) => {
      if (React.isValidElement<ButtonProps>(child)) {
        const buttonDisplay: ButtonDisplay =
          mode === ButtonsBarMode.Toolbar ? ButtonDisplay.Toolbar : display

        const childProps = {
          ...child.props,
          display: buttonDisplay,
          size,
          mode: ButtonMode.Push,
          shape: IconButtonShape.Square,
        }

        return (
          <StyledButtonWrapper mode={mode} pressed={childProps.pressed}>
            {React.cloneElement(child, childProps)}
          </StyledButtonWrapper>
        )
      } else {
        return false
      }
    })

  return (
    <ButtonsBarContainer mode={mode} {...domProps}>
      {renderBar()}
    </ButtonsBarContainer>
  )
}
