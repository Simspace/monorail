import React, { FC } from 'react'
import { SimpleInterpolation } from 'styled-components'

import { baseIconButtonChromelessStyles } from '@monorail/helpers/baseStyles'
import { BorderRadius, borderRadius } from '@monorail/helpers/borderRadius'
import styled, { css } from '@monorail/helpers/styled-components'
import { getThemeColor, Mode, ThemeColors } from '@monorail/helpers/theme'
import { CssOverridesType } from '@monorail/types'
import {
  Button,
  ButtonProps,
  StyledButtonProps,
} from '@monorail/visualComponents/buttons/Button'
import {
  ButtonDisplay,
  ButtonMode,
  ButtonSize,
  IconButtonShape,
} from '@monorail/visualComponents/buttons/buttonTypes'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { IconType } from '@monorail/visualComponents/icon/IconType'

const iconButtonSizeCss = {
  [ButtonSize.Dense]: css`
    width: 16px;

    ${Icon} {
      font-size: 12px;
    }
  `,
  [ButtonSize.Compact]: css`
    width: 24px;
  `,
  [ButtonSize.Default]: css`
    width: 24px;
  `,
  [ButtonSize.Large]: css`
    width: 32px;

    ${Icon} {
      font-size: 24px;
    }
  `,
}

const iconButtonDisplayCss = (display: ButtonDisplay, isActive: boolean) => {
  if (display === ButtonDisplay.Chromeless) {
    return baseIconButtonChromelessStyles(isActive)
  }

  return css``
}

const iconButtonShapeCss = {
  [IconButtonShape.Default]: borderRadius(BorderRadius.Round),
  [IconButtonShape.Square]: borderRadius(BorderRadius.Medium),
}

const iconButtonCSS = ({
  display,
  size,
  shape,
  cssOverrides,
  isActive,
}: {
  display: ButtonDisplay
  size: ButtonSize
  shape: IconButtonShape
  cssOverrides: CssOverridesType
  isActive: boolean
}) => css`
  ${iconButtonDisplayCss(display, isActive)};
  ${iconButtonSizeCss[size]};
  ${iconButtonShapeCss[shape]};

  padding: 0;

  ${Icon} {
    ${({ theme: { mode } }) =>
      mode === Mode.Dark
        ? css`
            color: ${getThemeColor(ThemeColors.Text900)};
          `
        : css`
            color: currentColor;
          `};

    margin: auto;
  }

  ${cssOverrides};
`

export const StyledIconButton = styled(Button)<StyledButtonProps>``

export type IconButtonProps = Omit<ButtonProps, 'leftIcon' | 'rightIcon'> & {
  shape?: IconButtonShape
  iconCss?: SimpleInterpolation
  icon: IconType
}

export const IconButton: FC<IconButtonProps> = props => {
  const {
    className = '',
    disabled = false,
    display = ButtonDisplay.Primary,
    isActive = false,
    mode = ButtonMode.Default,
    onClick = () => {},
    pressed = false,
    size = ButtonSize.Default,
    type = 'button',
    cssOverrides = '',
    icon = '',
    iconCss = css``,
    passedAs,
    shape = IconButtonShape.Default,
    status,
    ...domProps
  } = props

  return (
    <StyledIconButton
      {...domProps}
      className={className}
      disabled={disabled}
      passedAs={passedAs}
      display={display}
      isActive={isActive}
      mode={mode}
      onClick={onClick}
      pressed={isActive || pressed}
      size={size}
      status={status}
      type={type}
      css={iconButtonCSS({
        display,
        size,
        shape,
        cssOverrides,
        isActive,
      })}
    >
      <Icon
        icon={icon}
        cssOverrides={css`
          ${iconCss}
        `}
      />
    </StyledIconButton>
  )
}
