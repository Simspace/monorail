"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = exports.defaultTextFieldProps = exports.BBTextFieldInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../../helpers/exports");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Icon = require("../icon/Icon");

var _Label = require("./Label");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Styles
 */
const BBTextFieldContainer =
/*#__PURE__*/
_styledComponents.default.label.withConfig({
  displayName: "TextField__BBTextFieldContainer",
  componentId: "mvo1xj-0"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";float:none;width:256px;position:relative;", ""], (0, _exports.flexFlow)(), cssOverrides));

const baseIconStyles =
/*#__PURE__*/
(0, _styledComponents.css)(["position:absolute;bottom:4px;"]);
const StyledLeftIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "TextField__StyledLeftIcon",
  componentId: "mvo1xj-1"
})(["", ";left:8px;"], baseIconStyles);
const StyledRightIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "TextField__StyledRightIcon",
  componentId: "mvo1xj-2"
})(["", ";right:8px;"], baseIconStyles);

const BBTextFieldInput =
/*#__PURE__*/
_styledComponents.default.input.withConfig({
  displayName: "TextField__BBTextFieldInput",
  componentId: "mvo1xj-3"
})(({
  chromeless,
  iconLeft,
  iconRight,
  disabled
}) => (0, _styledComponents.css)(["", ";", ";", ";border:", ";box-sizing:border-box;color:", ";height:24px;min-height:24px;flex:1;outline:none;padding:4px ", "px 4px ", "px;width:100%;", ";&[htmlType='number']{&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{opacity:1;}}::placeholder{color:", ";font-style:italic;}&:hover{border-color:", ";}&:focus,&:active{border-color:", ";}"], disabled && _exports.baseDisabledStyles, (0, _exports.typography)(400, _exports.FontSizes.Title5), (0, _exports.borderRadius)(), chromeless ? `1px solid transparent` : `1px solid ${(0, _exports.getColor)(_exports.Colors.Black, 0.12)}`, (0, _exports.getColor)(_exports.Colors.Black89), iconRight ? 30 : 6, iconLeft ? 30 : 6, _exports.buttonTransition, (0, _exports.getColor)(_exports.Colors.Black54), disabled ? '' : (0, _exports.getColor)(_exports.Colors.Black, 0.3), (0, _exports.getColor)(_exports.Colors.BrandLightBlue)));
/*
 * Types
 */


exports.BBTextFieldInput = BBTextFieldInput;
const defaultTextFieldProps = {
  cssOverrides: '',
  chromeless: false,
  iconLeft: '',
  iconRight: '',
  label: '',
  onChange: () => {},
  placeholder: '',
  value: '',
  disabled: false,
  readOnly: false,
  required: false,
  htmlType: 'text',
  min: 0,
  max: 9999,
  maxLength: 1000,
  className: '',
  autoFocus: false
  /*
   * Component
   */

};
exports.defaultTextFieldProps = defaultTextFieldProps;

class TextField extends _react.Component {
  render() {
    const {
      chromeless,
      cssOverrides,
      iconLeft,
      iconRight,
      label,
      onChange,
      onBlur,
      placeholder,
      value,
      disabled,
      readOnly,
      required,
      htmlType,
      min,
      max,
      maxLength,
      className,
      ...otherProps
    } = this.props;
    return _react.default.createElement(BBTextFieldContainer, {
      className: className,
      cssOverrides: cssOverrides
    }, _react.default.createElement(_Label.Label, {
      label: label,
      required: required
    }), !(0, _typeGuards.isEmptyString)(iconLeft) && _react.default.createElement(StyledLeftIcon, {
      icon: iconLeft
    }), !(0, _typeGuards.isEmptyString)(iconRight) && _react.default.createElement(StyledRightIcon, {
      icon: iconRight
    }), _react.default.createElement(BBTextFieldInput, _extends({
      "data-lpignore": "true" // 🖕 u LastPass: https://goo.gl/Ez3eS1
      ,
      chromeless: chromeless,
      className: "new-input",
      iconLeft: iconLeft,
      iconRight: iconRight,
      onChange: onChange,
      onBlur: onBlur,
      placeholder: placeholder,
      type: htmlType,
      value: value,
      disabled: disabled,
      readOnly: readOnly,
      required: required,
      min: min,
      max: max,
      maxLength: maxLength
    }, otherProps)));
  }

}

exports.TextField = TextField;
TextField.defaultProps = defaultTextFieldProps;