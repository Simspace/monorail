import React, { ReactType } from 'react'
import { SimpleInterpolation } from 'styled-components'
import { Omit } from 'typelevel-ts'

import { baseIconButtonChromelessStyles } from '@monorail/helpers/baseStyles'
import { BorderRadius, borderRadius } from '@monorail/helpers/borderRadius'
import styled, { css } from '@monorail/helpers/styled-components'
import { getThemeColor, Mode, ThemeColors } from '@monorail/helpers/theme'
import { FCwDP } from '@monorail/sharedHelpers/react'
import { CssOverridesType } from '@monorail/types'
import {
  Button,
  buttonDefaultProps,
  ButtonProps,
} from '@monorail/visualComponents/buttons/Button'
import {
  ButtonDisplay,
  ButtonSize,
  IconButtonShape,
} from '@monorail/visualComponents/buttons/buttonTypes'
import { Icon } from '@monorail/visualComponents/icon/Icon'

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

export const StyledIconButton = styled(Button)``

type Props = {
  icon: string
  passedAs?: ReactType
}

type DefaultProps = Omit<ButtonProps, 'leftIcon' | 'rightIcon'> & {
  shape: IconButtonShape
  iconCss: SimpleInterpolation
}

export type IconButtonProps = Props & DefaultProps & Pick<ButtonProps, 'status'>

export const IconButton: FCwDP<Props, DefaultProps> = ({
  cssOverrides,
  display,
  icon,
  iconCss,
  isActive,
  passedAs,
  pressed,
  shape,
  size,
  status,
  ...domProps
}) => (
  <StyledIconButton
    {...domProps}
    as={passedAs}
    display={display}
    pressed={isActive || pressed}
    size={size}
    status={status}
    cssOverrides={iconButtonCSS({
      display,
      size,
      shape,
      cssOverrides,
      isActive,
    })}
  >
    <Icon
      icon={icon}
      css={css`
        ${iconCss}
      `}
    />
  </StyledIconButton>
)

IconButton.defaultProps = {
  ...buttonDefaultProps,
  shape: IconButtonShape.Default,
  iconCss: css``,
}
