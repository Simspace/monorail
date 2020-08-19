import React, { Component } from 'react'
import { SimpleInterpolation } from 'styled-components'

import {
  Colors,
  ElevationRange,
  flexFlow,
  getColor,
  getElevationShadow,
  visible,
} from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { getThemeColor, Mode, ThemeColors } from '@monorail/helpers/theme'
import { Icon, IconProps } from '@monorail/visualComponents/icon/Icon'
import { ToggleSize } from '@monorail/visualComponents/toggle/toggleTypes'

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any

const toggleWidth = 18
const toggleHeight = 10
const slideSize = 10
const iconSize = 8

const factorBySize = {
  [ToggleSize.Default]: 1,
  [ToggleSize.Large]: 1.5,
  [ToggleSize.Xlarge]: 2,
}

const scaleBySize = (n: number, size: ToggleSize) => {
  const factor = Math.floor(n * factorBySize[size])
  return factor % 2 === 0 ? factor : factor + 1
}

const toggleSizeCss = {
  [ToggleSize.Default]: css`
    height: ${scaleBySize(toggleHeight, ToggleSize.Default)}px;
    width: ${scaleBySize(toggleWidth, ToggleSize.Default)}px;
    border: 1px solid;
    border-radius: ${scaleBySize(toggleHeight, ToggleSize.Default) + 2 / 2}px;
  `,
  [ToggleSize.Large]: css`
    height: ${scaleBySize(toggleHeight, ToggleSize.Large)}px;
    width: ${scaleBySize(toggleWidth, ToggleSize.Large)}px;
    border: 1px solid;
    border-radius: ${scaleBySize(toggleHeight, ToggleSize.Large) + 2 / 2}px;
  `,
  [ToggleSize.Xlarge]: css`
    height: ${scaleBySize(toggleHeight, ToggleSize.Xlarge)}px;
    width: ${scaleBySize(toggleWidth, ToggleSize.Xlarge)}px;
    border: 2px solid;
    border-radius: ${scaleBySize(toggleHeight, ToggleSize.Xlarge) + 4 / 2}px;
  `,
}

const sliderSizeCss = {
  [ToggleSize.Default]: css`
    width: ${scaleBySize(slideSize, ToggleSize.Default)}px;
    height: ${scaleBySize(slideSize, ToggleSize.Default)}px;
  `,
  [ToggleSize.Large]: css`
    width: ${scaleBySize(slideSize, ToggleSize.Large)}px;
    height: ${scaleBySize(slideSize, ToggleSize.Large)}px;
  `,
  [ToggleSize.Xlarge]: css`
    width: ${scaleBySize(slideSize, ToggleSize.Xlarge)}px;
    height: ${scaleBySize(slideSize, ToggleSize.Xlarge)}px;
  `,
}

const inputSizeCss = {
  [ToggleSize.Default]: css`
    transform: translateX(${scaleBySize(iconSize, ToggleSize.Default)}px);
  `,
  [ToggleSize.Large]: css`
    transform: translateX(${scaleBySize(iconSize, ToggleSize.Large)}px);
  `,
  [ToggleSize.Xlarge]: css`
    transform: translateX(${scaleBySize(iconSize, ToggleSize.Xlarge)}px);
  `,
}

const iconSizeCss = {
  [ToggleSize.Default]: css`
    font-size: ${scaleBySize(iconSize, ToggleSize.Default)}px;
  `,
  [ToggleSize.Large]: css`
    font-size: ${scaleBySize(iconSize, ToggleSize.Large)}px;
  `,
  [ToggleSize.Xlarge]: css`
    font-size: ${scaleBySize(iconSize, ToggleSize.Xlarge)}px;
  `,
}

const CCToggle = styled.label<ToggleProps>(
  ({ toggleSize, checked, cssOverrides, theme: { mode }, disabled }) => css`
    ${toggleSizeCss[toggleSize]};

    box-sizing: content-box;
    cursor: pointer;
    display: inline-block;
    position: relative; /* Slider is pos:abs to this element */

    transition: all ease-in 150ms;

    /* Change Slider BG/Border Color */
    ${checked
      ? css`
          background-color: ${getThemeColor(ThemeColors.ActionPrimary)};
          border-color: ${getThemeColor(ThemeColors.ActionPrimary)};
        `
      : css`
          background-color: ${mode === Mode.Dark
            ? getColor(Colors.White, 0.2)
            : getColor(Colors.Grey90)};
          border-color: ${getColor(Colors.Black, 0.06)};
        `};

    ${disabled &&
      css`
        cursor: default;
        opacity: 0.4;
      `}

    ${cssOverrides};
  `,
)

const StyledIconChecked = styled(({ checked, toggleSize, ...otherProps }) => (
  <Icon {...otherProps} />
))<{ checked: boolean } & SliderIconProps>(
  ({ toggleSize, checked }: { checked: boolean } & SliderIconProps) => css`
    ${iconSizeCss[toggleSize]};
    ${visible(checked)};

    color: ${getColor(Colors.BrandLightBlue)};
    position: absolute; /* give z-index so ::before bg is behind icon */

    transition: all ease-in 75ms;
  `,
)

const StyledIconNotChecked = styled(
  ({ checked, toggleSize, ...otherProps }) => <Icon {...otherProps} />,
)<{ checked: boolean } & SliderIconProps>(
  ({ checked, toggleSize }: { checked: boolean } & SliderIconProps) => css`
    ${iconSizeCss[toggleSize]};
    ${visible(!checked)};

    color: ${getColor(Colors.Black38a)};
    position: absolute; /* give z-index so ::before bg is behind icon */

    transition: all ease-in 75ms;
  `,
)

export const Slider = styled.div<Slider>(
  ({ toggleSize }) => css`
    ${sliderSizeCss[toggleSize]};
    ${getElevationShadow(ElevationRange.Elevation1)};
    ${flexFlow('row')};

    background-color: ${getColor(Colors.White)};
    border-radius: 50%;
    bottom: 0;
    content: '';
    left: 0;
    justify-content: center;
    align-items: center;

    transition: all ease-in 75ms;
  `,
)

const Input = styled.input<InputProps>(
  ({ toggleSize }) => css`
    display: none; /* Hide default HTML checkbox */

    /* Move Slider Circle */
    &:checked + ${/* sc-selector */ Slider} {
      ${inputSizeCss[toggleSize]};
    }

    /* Change Icon: 'check' | Change Color: Blue */
    &:checked
      + ${/* sc-selector */ Slider}
      > ${/* sc-selector */ StyledIconChecked} {
      ${visible(false)};
      color: ${getColor(Colors.BrandLightBlue)};
    }
  `,
)

type Slider = {
  toggleSize: ToggleSize
}

type ToggleProps = {
  toggleSize: ToggleSize
  checked: boolean
  cssOverrides?: SimpleInterpolation
  onChange?: (checked: boolean) => void
  disabled?: boolean
}

type InputProps = {
  toggleSize: ToggleSize
}

type SliderIconProps = IconProps & {
  toggleSize: ToggleSize
}

export class Toggle extends Component<ToggleProps> {
  static defaultProps = {
    toggleSize: ToggleSize.Default,
  }

  render() {
    const {
      cssOverrides,
      checked,
      onChange,
      toggleSize,
      disabled,
      ...domProps
    } = this.props

    return (
      <CCToggle
        cssOverrides={cssOverrides}
        checked={checked}
        toggleSize={toggleSize}
        disabled={disabled}
        {...domProps}
      >
        <Input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={event => {
            onChange && onChange(event.currentTarget.checked)
          }}
          toggleSize={toggleSize}
        />
        <Slider toggleSize={toggleSize}>
          <StyledIconChecked
            icon="check"
            checked={checked}
            toggleSize={toggleSize}
          />
          <StyledIconNotChecked
            icon="close"
            checked={checked}
            toggleSize={toggleSize}
          />
        </Slider>
      </CCToggle>
    )
  }
}
// tslint:enable
