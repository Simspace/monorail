import React, { ReactNode } from 'react'

import { ButtonProps, StyledButton } from '@monorail/buttons/Button'
import {
  ButtonDisplay,
  ButtonMode,
  ButtonsBarMode,
  ButtonSize,
  IconButtonShape,
} from '@monorail/buttons/buttonTypes'
import {
  borderRadius,
  Colors,
  flexFlow,
  floatingOutlineStyles,
  getColor,
} from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { Mode } from '@monorail/helpers/theme'
import { Icon } from '@monorail/icon/Icon'
import { FCwDP } from '@monorail/sharedHelpers/react'
import { CommonComponentType } from '@monorail/types'

/**
 * Buttons Bar - Children button Wrapper
 */
type ButtonWrapperProps = {
  mode: ButtonsBarMode
  pressed: boolean
}

const StyledButtonWrapper = styled.div<ButtonWrapperProps>(
  ({ mode, theme }) => css`
    position: relative;

    ${mode === ButtonsBarMode.Toolbar
      ? css`
          ${StyledButton} {
            margin: 2px;
          }
        `
      : css`
          border-radius: inherit;

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
type ButtonsBarProps = {
  // Overrides default ButtonBar display styling
  display: ButtonDisplay

  // Regular Button sizing
  size: ButtonSize

  // Group or Toolbar mode
  mode: ButtonsBarMode
}

type ButtonsBarContainerProps = CommonComponentType & {
  // Group or Toolbar mode
  mode: ButtonsBarMode
}

export const ButtonsBarContainer = styled.div<ButtonsBarContainerProps>(
  ({ cssOverrides, mode }) => css`
    ${mode === ButtonsBarMode.Default &&
      floatingOutlineStyles(getColor(Colors.Black, 0.16))};

    ${flexFlow('row')};
    ${borderRadius()};

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
export const ButtonsBar: FCwDP<CommonComponentType, ButtonsBarProps> = ({
  children,
  size,
  mode,
  display,
  ...domProps
}) => {
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

ButtonsBar.defaultProps = {
  display: ButtonDisplay.ButtonBar,
  size: ButtonSize.Large,
  mode: ButtonsBarMode.Default,
}
