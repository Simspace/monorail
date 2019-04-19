import React, { Component } from 'react'
import { css, SimpleInterpolation } from 'styled-components'
import { Icon } from '@monorail/icon/Icon'
import {
  BorderRadius,
  borderRadius,
  Colors,
  getColor,
} from '@monorail/helpers/exports'
import {
  ButtonDisplay,
  ButtonSize,
  IconButtonShape,
} from '@monorail/buttons/buttonTypes'
import {
  Button,
  ButtonProps,
  buttonDefaultProps,
} from '@monorail/buttons/Button'

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

const iconButtonDisplayCss = (display: ButtonDisplay) => {
  switch (display) {
    case ButtonDisplay.Chromeless:
      return css`
        color: ${getColor(Colors.Black74)};
      `
      break
  }

  return css``
}

const iconButtonCSS = (
  display: ButtonDisplay,
  size: ButtonSize,
  shape: IconButtonShape,
  darkMode: boolean,
  cssOverrides: SimpleInterpolation,
) => css`
  ${iconButtonDisplayCss(display)};
  ${iconButtonSizeCss[size]};
  ${borderRadius(
    shape === IconButtonShape.Default
      ? BorderRadius.Round
      : BorderRadius.Medium,
  )};

  ${Icon} {
    ${darkMode
      ? css`
          color: ${getColor(Colors.White)};
        `
      : css`
          color: currentColor;
        `};

    margin: 0;
  }

  ${cssOverrides};
`

type CCIconButtonProps = ButtonProps & {
  darkMode: boolean
  shape: IconButtonShape
  iconCss: SimpleInterpolation
}

export type IconButtonProps = CCIconButtonProps & {
  icon: string
}

export class IconButton extends Component<IconButtonProps> {
  static defaultProps = {
    ...buttonDefaultProps,
    darkMode: false,
    shape: IconButtonShape.Default,
    iconCss: css``,
  }

  render() {
    const {
      display,
      icon,
      darkMode,
      size,
      shape,
      cssOverrides,
      iconCss,
      ...otherProps
    } = this.props
    return (
      <Button
        {...otherProps}
        display={display}
        size={size}
        cssOverrides={iconButtonCSS(
          display,
          size,
          shape,
          darkMode,
          cssOverrides,
        )}
      >
        <Icon icon={icon} css={iconCss} />
      </Button>
    )
  }
}
