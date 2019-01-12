import React, { ChangeEvent, Component } from "react";
import styled, { css, SimpleInterpolation } from "styled-components";

import {
  borderRadius,
  buttonTransiton,
  Colors,
  colors,
  flexFlow,
  FontSizes,
  typography
} from "CommonStyles";
import { Icon } from "icon/Icon";

/*
 * Styles
 */

const BBTextFieldContainer = styled<TextFieldProps, "label">("label")`
  ${flexFlow()};

  float: none;
  max-width: 256px;
  width: 100%;
  position: relative; /* position: relative; so that the icons can be absolutely positioned. */

  ${({ css: cssOverrides }) => cssOverrides};
`;

export const BBTextFieldLabel = styled("p")`
  ${typography(500, FontSizes.Title5)};
  margin: 4px 0;
`;

const baseIconStyles = css`
  position: absolute;
  bottom: 4px;
`;

const StyledLeftIcon = styled(Icon)`
  ${baseIconStyles};

  left: 8px;
`;
const StyledRightIcon = styled(Icon)`
  ${baseIconStyles};

  right: 8px;
`;

const BBTextFieldInput = styled<BBTextFieldInputProps, "input">("input")`
  ${typography(400, FontSizes.Title5)};
  ${borderRadius()};

  border: 1px solid ${colors(Colors.Black, 0.12)};
  box-sizing: border-box;
  color: ${colors(Colors.Black89)};
  height: 24px;
  outline: none;
  padding: 4px ${({ iconRight }) => (iconRight ? 30 : 6)}px 4px
    ${({ iconLeft }) => (iconLeft ? 30 : 6)}px;
  width: 100%;

  ${buttonTransiton};

  ::placeholder {
    color: ${colors(Colors.Black54)};
    font-style: italic;
  }

  &:hover {
    border-color: ${colors(Colors.Black, 0.3)};
  }

  &:focus,
  &:active {
    border-color: ${colors(Colors.BrandLightBlue)};
  }
`;

// TODO: Much duplication from TextInput
const BBTextAreaInput = styled<BBTextFieldInputProps, "textarea">("textarea")`
  ${typography(400, FontSizes.Title5)};
  ${borderRadius()};

  border: 1px solid ${colors(Colors.Black, 0.12)};
  box-sizing: border-box;
  color: ${colors(Colors.Black89)};
  height: 5em;
  outline: none;
  padding: 4px ${({ iconRight }) => (iconRight ? 30 : 6)}px 4px
    ${({ iconLeft }) => (iconLeft ? 30 : 6)}px;
  width: 100%;

  ${buttonTransiton};

  ::placeholder {
    color: ${colors(Colors.Black54)};
    font-style: italic;
  }

  &:hover {
    border-color: ${colors(Colors.Black, 0.3)};
  }

  &:focus,
  &:active {
    border-color: ${colors(Colors.BrandLightBlue)};
  }
`;

/*
 * Types
 */

type BBTextFieldContainerProps = {
  css?: SimpleInterpolation;
};

type BBTextFieldInputProps = {
  iconLeft?: string;
  iconRight?: string;
  label?: string | number;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  type?: string;
};

type TextFieldProps = BBTextFieldContainerProps & BBTextFieldInputProps & {};

/*
 * Component
 */

export class TextField extends Component<TextFieldProps> {
  render() {
    const {
      css: cssOverrides,
      iconLeft,
      iconRight,
      label,
      onChange,
      placeholder,
      value,
      disabled,
      readOnly,
      required,
      type,
      ...otherProps
    } = this.props;

    return (
      <BBTextFieldContainer css={cssOverrides}>
        {label !== undefined && <BBTextFieldLabel>{label}</BBTextFieldLabel>}
        {iconLeft && <StyledLeftIcon icon={iconLeft} />}
        {iconRight && <StyledRightIcon icon={iconRight} />}
        <BBTextFieldInput
          className="new-input"
          iconLeft={iconLeft}
          iconRight={iconRight}
          onChange={onChange}
          placeholder={placeholder}
          type={type || "string"}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          {...otherProps}
        />
      </BBTextFieldContainer>
    );
  }
}

// TODO: Much duplication from TextInput
export class TextArea extends Component<TextFieldProps> {
  render() {
    const {
      css,
      iconLeft,
      iconRight,
      label,
      onChange,
      placeholder,
      value,
      disabled,
      readOnly,
      required,
      type,
      ...otherProps
    } = this.props;

    return (
      <BBTextFieldContainer css={css}>
        {label != undefined && <BBTextFieldLabel>{label}</BBTextFieldLabel>}
        {iconLeft && <StyledLeftIcon icon={iconLeft} />}
        {iconRight && <StyledRightIcon icon={iconRight} />}
        <BBTextAreaInput
          className="new-input"
          iconLeft={iconLeft}
          iconRight={iconRight}
          onChange={onChange}
          placeholder={placeholder}
          type={type || "string"}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          {...otherProps}
        />
      </BBTextFieldContainer>
    );
  }
}
