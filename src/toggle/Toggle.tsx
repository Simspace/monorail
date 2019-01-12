import React, { Component } from "react";
import { Icon, IconProps } from "icon/Icon";
import {
  Colors,
  colors,
  ElevationRange,
  getElevation,
  visible
} from "CommonStyles";
import styled, { css, SimpleInterpolation } from "styled-components";

const toggleWidth = 18;
const toggleHeight = 10;
const iconSize = 8;

const CCToggle = styled<ToggleProps, "label">("label")`
  border-radius: ${toggleHeight + 2 / 2}px;
  border: 1px solid;
  cursor: pointer;
  display: inline-block;
  height: ${toggleHeight}px;
  position: relative; /* Slider is pos:abs to this element */
  width: ${toggleWidth}px;

  transition: all ease-in 150ms;

  /* Change Slider BG/Border Color */
  ${({ checked }) =>
    checked
      ? css`
          background-color: ${colors(Colors.BrandLightBlue)};
          border-color: ${colors(Colors.BrandLightBlue)};
        `
      : css`
          background-color: ${colors(Colors.White)};
          border-color: ${colors(Colors.Black, 0.06)};
        `};

  ${({ css: cssOverrides }) => cssOverrides};
`;

const StyledIconChecked = styled<{ checked: boolean } & IconProps>(
  ({ checked, ...otherProps }) => <Icon {...otherProps} />
)`
  ${({ checked }) => visible(checked)};

  color: ${colors(Colors.BrandLightBlue)};
  font-size: ${iconSize}px;
  margin: 1px 1px;
  position: absolute; /* give z-index so ::before bg is behind icon */

  transition: all ease-in 75ms;
`;

const StyledIconNotChecked = styled<{ checked: boolean } & IconProps>(
  ({ checked, ...otherProps }) => <Icon {...otherProps} />
)`
  ${({ checked }) => visible(!checked)};

  color: ${colors(Colors.Black24)};
  font-size: ${iconSize}px;
  margin: 1px 1px;
  position: absolute; /* give z-index so ::before bg is behind icon */

  transition: all ease-in 75ms;
`;

const Slider = styled<Slider, "div">("div")`
  ${getElevation(ElevationRange.Elevation1)};
  background-color: ${colors(Colors.White)};
  border-radius: 50%;
  bottom: 0;
  content: "";
  height: 10px;
  left: 0;
  position: absolute;
  width: 10px;

  transition: all ease-in 75ms;
`;

const Input = styled.input`
  display: none; /* Hide default HTML checkbox */

  /* Move Slider Circle */
  &:checked + ${/* sc-selector */ Slider} {
    transform: translateX(8px);
  }

  /* Change Icon: 'check' | Change Color: Blue */
  &:checked
    + ${/* sc-selector */ Slider}
    > ${/* sc-selector */ StyledIconChecked} {
    ${visible(false)};
    color: ${colors(Colors.BrandLightBlue)};
  }
`;

type Slider = {};

type ToggleProps = {
  checked: boolean;
  css?: SimpleInterpolation;
  onChange?: (checked: boolean) => void;
};

export class Toggle extends Component<ToggleProps> {
  render() {
    const { css: cssOverrides, checked, onChange } = this.props;

    return (
      <CCToggle css={cssOverrides} checked={checked}>
        <Input
          type="checkbox"
          checked={checked}
          onChange={event => {
            onChange && onChange(event.currentTarget.checked);
          }}
        />
        <Slider>
          <StyledIconChecked icon="check" checked={checked} />
          <StyledIconNotChecked icon="close" checked={checked} />
        </Slider>
      </CCToggle>
    );
  }
}

//
