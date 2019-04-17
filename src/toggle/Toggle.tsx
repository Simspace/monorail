import React, { Component } from 'react'
import { Icon, IconProps } from '@monorail/icon/Icon'
import {
  Colors,
  getColor,
  ElevationRange,
  getElevation,
  visible,
  flexFlow,
} from '@monorail/helpers/exports'
import { ToggleSize } from '@monorail/toggle/toggleTypes'
import styled, { css, SimpleInterpolation } from 'styled-components'

const toggleWidth = 18
const toggleHeight = 10
const iconSize = 8

const toggleSizeCss = {
  [ToggleSize.Default]: css`
    height: ${toggleHeight}px;
    width: ${toggleWidth}px;
    border: 1px solid;
    border-radius: ${toggleHeight + 2 / 2}px;
  `,
  [ToggleSize.Large]: css`
    height: ${toggleHeight * 1.5}px;
    width: ${toggleWidth * 1.5}px;
    border: 1px solid;
    border-radius: ${toggleHeight * 1.5 + 3 / 2}px;
  `,
  [ToggleSize.Xlarge]: css`
    height: ${toggleHeight * 2}px;
    width: ${toggleWidth * 2}px;
    border: 2px solid;
    border-radius: ${toggleHeight * 2 + 4 / 2}px;
  `,
}

const sliderSizeCss = {
  [ToggleSize.Default]: css`
    width: 10px;
    height: 10px;
  `,
  [ToggleSize.Large]: css`
    width: 15px;
    height: 15px;
  `,
  [ToggleSize.Xlarge]: css`
    width: 20px;
    height: 20px;
  `,
}

const inputSizeCss = {
  [ToggleSize.Default]: css`
    transform: translateX(8px);
  `,
  [ToggleSize.Large]: css`
    transform: translateX(12px);
  `,
  [ToggleSize.Xlarge]: css`
    transform: translateX(16px);
  `,
}

const iconSizeCss = {
  [ToggleSize.Default]: css`
    font-size: ${iconSize}px;
  `,
  [ToggleSize.Large]: css`
    font-size: ${iconSize * 1.5}px;
  `,
  [ToggleSize.Xlarge]: css`
    font-size: ${iconSize * 2}px;
  `,
}

const CCToggle = styled.label<ToggleProps>(
  ({ toggleSize, checked, cssOverrides }) => css`
    ${toggleSizeCss[toggleSize]};

    box-sizing: content-box;
    cursor: pointer;
    display: inline-block;
    position: relative; /* Slider is pos:abs to this element */

    transition: all ease-in 150ms;

    /* Change Slider BG/Border Color */
    ${checked
      ? css`
          background-color: ${getColor(Colors.BrandLightBlue)};
          border-color: ${getColor(Colors.BrandLightBlue)};
        `
      : css`
          background-color: ${getColor(Colors.White)};
          border-color: ${getColor(Colors.Black, 0.06)};
        `};

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

    color: ${getColor(Colors.Black24)};
    position: absolute; /* give z-index so ::before bg is behind icon */

    transition: all ease-in 75ms;
  `,
)

export const Slider = styled.div<Slider>(
  ({ toggleSize }) => css`
    ${sliderSizeCss[toggleSize]};
    ${getElevation(ElevationRange.Elevation1)};
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
    const { cssOverrides, checked, onChange, toggleSize } = this.props

    return (
      <CCToggle
        cssOverrides={cssOverrides}
        checked={checked}
        toggleSize={toggleSize}
      >
        <Input
          type="checkbox"
          checked={checked}
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

//
