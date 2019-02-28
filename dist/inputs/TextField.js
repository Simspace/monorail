"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = exports.TextField = exports.BBTextFieldLabel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CommonStyles = require("../../CommonStyles");

var _Icon = require("../../icon/Icon");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
* Styles
*/
const BBTextFieldContainer = (0, _styledComponents.default)('label')`
  ${(0, _CommonStyles.flexFlow)()};

  float: none;
  max-width: 256px;
  width: 100%;
  position: relative; /* position: relative; so that the icons can be absolutely positioned. */

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
const BBTextFieldLabel = (0, _styledComponents.default)('p')`
  ${(0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title5)};
  margin: 4px 0;
`;
exports.BBTextFieldLabel = BBTextFieldLabel;
const baseIconStyles = _styledComponents.css`
  position: absolute;
  bottom: 4px;
`;
const StyledLeftIcon = (0, _styledComponents.default)(_Icon.Icon)`
  ${baseIconStyles};

  left: 8px;
`;
const StyledRightIcon = (0, _styledComponents.default)(_Icon.Icon)`
  ${baseIconStyles};

  right: 8px;
`;
const BBTextFieldInput = (0, _styledComponents.default)('input')`
  ${(0, _CommonStyles.typography)(400, _CommonStyles.FontSizes.Title5)};
  ${(0, _CommonStyles.borderRadius)()};

  border: ${({
  chromeless
}) => chromeless ? `1px solid transparent` : `1px solid ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black, 0.12)}`};
  box-sizing: border-box;
  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black89)};
  height: 24px;
  outline: none;
  padding: 4px ${({
  iconRight
}) => iconRight ? 30 : 6}px 4px
    ${({
  iconLeft
}) => iconLeft ? 30 : 6}px;
  width: 100%;

  ${_CommonStyles.buttonTransition};

  &[type='number'] {
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      opacity: 1;
    }
  }

  ::placeholder {
    color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black54)};
    font-style: italic;
  }

  &:hover {
    border-color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black, 0.3)};
  }

  &:focus,
  &:active {
    border-color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue)};
  }
`; // TODO: Much duplication from TextInput

const BBTextAreaInput = (0, _styledComponents.default)('textarea')`
  ${(0, _CommonStyles.typography)(400, _CommonStyles.FontSizes.Title5)};
  ${(0, _CommonStyles.borderRadius)()};

  border: 1px solid ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black, 0.12)};
  box-sizing: border-box;
  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black89)};
  height: 5em;
  outline: none;
  padding: 4px ${({
  iconRight
}) => iconRight ? 30 : 6}px 4px
    ${({
  iconLeft
}) => iconLeft ? 30 : 6}px;
  width: 100%;

  ${_CommonStyles.buttonTransition};

  ::placeholder {
    color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black54)};
    font-style: italic;
  }

  &:hover {
    border-color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black, 0.3)};
  }

  &:focus,
  &:active {
    border-color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue)};
  }
`;
/*
* Types
*/

/*
* Component
*/
class TextField extends _react.Component {
  render() {
    const {
      chromeless,
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
    return _react.default.createElement(BBTextFieldContainer, {
      css: cssOverrides
    }, label !== undefined && _react.default.createElement(BBTextFieldLabel, null, label), iconLeft && _react.default.createElement(StyledLeftIcon, {
      icon: iconLeft
    }), iconRight && _react.default.createElement(StyledRightIcon, {
      icon: iconRight
    }), _react.default.createElement(BBTextFieldInput, _extends({
      "data-lpignore": "true" // 🖕 u LastPass: https://goo.gl/Ez3eS1
      ,
      chromeless: chromeless,
      className: "new-input",
      iconLeft: iconLeft,
      iconRight: iconRight,
      onChange: onChange,
      placeholder: placeholder,
      type: type,
      value: value,
      disabled: disabled,
      readOnly: readOnly,
      required: required
    }, otherProps)));
  }

} // TODO: Much duplication from TextInput


exports.TextField = TextField;

class TextArea extends _react.Component {
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
    return _react.default.createElement(BBTextFieldContainer, {
      css: cssOverrides
    }, label !== undefined && _react.default.createElement(BBTextFieldLabel, null, label), iconLeft && _react.default.createElement(StyledLeftIcon, {
      icon: iconLeft
    }), iconRight && _react.default.createElement(StyledRightIcon, {
      icon: iconRight
    }), _react.default.createElement(BBTextAreaInput, _extends({
      className: "new-textarea",
      iconLeft: iconLeft,
      iconRight: iconRight,
      onChange: onChange,
      placeholder: placeholder,
      type: type || 'string',
      value: value,
      disabled: disabled,
      readOnly: readOnly,
      required: required
    }, otherProps)));
  }

}

exports.TextArea = TextArea;