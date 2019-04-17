import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { isEmptyString } from '@monorail/sharedHelpers/typeGuards';
import { borderRadius, buttonTransition, Colors, getColor, flexFlow, FontSizes, typography, baseDisabledStyles, } from '@monorail/helpers/exports';
import { Icon } from '@monorail/icon/Icon';
/*
* Styles
*/
const BBTextFieldContainer = styled.label(({ cssOverrides }) => css `
    ${flexFlow()};

    float: none;
    width: 256px;
    position: relative; /* position: relative; so that the icons can be absolutely positioned. */

    ${cssOverrides};
  `);
export const BBTextFieldLabel = styled.p `
  ${typography(500, FontSizes.Title5)};
`;
const baseIconStyles = css `
  position: absolute;
  bottom: 4px;
`;
const StyledLeftIcon = styled(Icon) `
  ${baseIconStyles};

  left: 8px;
`;
const StyledRightIcon = styled(Icon) `
  ${baseIconStyles};

  right: 8px;
`;
const BBTextFieldInput = styled.input(({ chromeless, iconLeft, iconRight, disabled }) => css `
    ${disabled && baseDisabledStyles};
    ${typography(400, FontSizes.Title5)};
    ${borderRadius()};

    border: ${chromeless
    ? `1px solid transparent`
    : `1px solid ${getColor(Colors.Black, 0.12)}`};
    box-sizing: border-box;
    color: ${getColor(Colors.Black89)};
    height: 24px;
    flex: 1;
    outline: none;
    padding: 4px ${iconRight ? 30 : 6}px 4px ${iconLeft ? 30 : 6}px;
    width: 100%;

    ${buttonTransition};

    &[type='number'] {
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        opacity: 1;
      }
    }

    ::placeholder {
      color: ${getColor(Colors.Black54)};
      font-style: italic;
    }

    &:hover {
      border-color: ${getColor(Colors.Black, 0.3)};
    }

    &:focus,
    &:active {
      border-color: ${getColor(Colors.BrandLightBlue)};
    }
  `);
// TODO: Much duplication from TextInput
const BBTextAreaInput = styled.textarea(({ iconLeft, iconRight }) => css `
    ${typography(400, FontSizes.Title5)};
    ${borderRadius()};

    border: 1px solid ${getColor(Colors.Black, 0.12)};
    box-sizing: border-box;
    color: ${getColor(Colors.Black89)};
    outline: none;
    resize: none;
    padding: 4px ${iconRight ? 30 : 6}px 4px ${iconLeft ? 30 : 6}px;
    flex: 1;
    height: 56px;
    margin-top: 4px;

    ${buttonTransition};

    ::placeholder {
      color: ${getColor(Colors.Black54)};
      font-style: italic;
    }

    &:hover {
      border-color: ${getColor(Colors.Black, 0.3)};
    }

    &:focus,
    &:active {
      border-color: ${getColor(Colors.BrandLightBlue)};
    }
  `);
export const defaultTextFieldProps = {
    cssOverrides: '',
    chromeless: false,
    iconLeft: '',
    iconRight: '',
    label: '',
    onChange: () => { },
    placeholder: '',
    value: '',
    disabled: false,
    readOnly: false,
    required: false,
    type: 'text',
    min: 0,
    max: 9999,
    className: '',
};
export const defaultTextAreaProps = {
    cssOverrides: '',
    iconLeft: '',
    iconRight: '',
    label: '',
    onChange: () => { },
    placeholder: '',
    value: '',
    disabled: false,
    readOnly: false,
    required: false,
    type: 'text',
    className: '',
};
/*
* Component
*/
export class TextField extends Component {
    render() {
        const { chromeless, cssOverrides, iconLeft, iconRight, label, onChange, placeholder, value, disabled, readOnly, required, type, min, max, className, ...otherProps } = this.props;
        return (React.createElement(BBTextFieldContainer, { className: className, cssOverrides: cssOverrides },
            !isEmptyString(label) && React.createElement(BBTextFieldLabel, null, label),
            !isEmptyString(iconLeft) && React.createElement(StyledLeftIcon, { icon: iconLeft }),
            !isEmptyString(iconRight) && React.createElement(StyledRightIcon, { icon: iconRight }),
            React.createElement(BBTextFieldInput, Object.assign({ "data-lpignore": "true" // 🖕 u LastPass: https://goo.gl/Ez3eS1
                , chromeless: chromeless, className: "new-input", iconLeft: iconLeft, iconRight: iconRight, onChange: onChange, placeholder: placeholder, type: type, value: value, disabled: disabled, readOnly: readOnly, required: required, min: min, max: max }, otherProps))));
    }
}
TextField.defaultProps = defaultTextFieldProps;
// TODO: Much duplication from TextInput
export class TextArea extends Component {
    render() {
        const { cssOverrides, iconLeft, iconRight, label, onChange, placeholder, value, disabled, readOnly, required, type, className, ...otherProps } = this.props;
        return (React.createElement(BBTextFieldContainer, { className: className, cssOverrides: cssOverrides },
            !isEmptyString(label) && React.createElement(BBTextFieldLabel, null, label),
            !isEmptyString(iconLeft) && React.createElement(StyledLeftIcon, { icon: iconLeft }),
            !isEmptyString(iconRight) && React.createElement(StyledRightIcon, { icon: iconRight }),
            React.createElement(BBTextAreaInput, Object.assign({ className: "new-textarea", iconLeft: iconLeft, iconRight: iconRight, onChange: onChange, placeholder: placeholder, type: type || 'string', value: value, disabled: disabled, readOnly: readOnly, required: required }, otherProps))));
    }
}
TextArea.defaultProps = defaultTextAreaProps;
//# sourceMappingURL=TextField.js.map