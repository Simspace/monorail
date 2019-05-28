"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = exports.TextField = exports.defaultTextAreaProps = exports.defaultTextFieldProps = exports.BBTextFieldLabel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../helpers/exports");

var _Icon = require("../icon/Icon");

var _typeGuards = require("../sharedHelpers/typeGuards");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Styles
 */
const BBTextFieldContainer =
/*#__PURE__*/
_styledComponents.default.label.withConfig({
  displayName: "TextField__BBTextFieldContainer",
  componentId: "sc-1nq70vt-0"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";float:none;width:256px;position:relative;", ";"], (0, _exports.flexFlow)(), cssOverrides));

const BBTextFieldLabel =
/*#__PURE__*/
_styledComponents.default.p.withConfig({
  displayName: "TextField__BBTextFieldLabel",
  componentId: "sc-1nq70vt-1"
})(["", ";"], (0, _exports.typography)(500, _exports.FontSizes.Title5));

exports.BBTextFieldLabel = BBTextFieldLabel;
const baseIconStyles =
/*#__PURE__*/
(0, _styledComponents.css)(["position:absolute;bottom:4px;"]);
const StyledLeftIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "TextField__StyledLeftIcon",
  componentId: "sc-1nq70vt-2"
})(["", ";left:8px;"], baseIconStyles);
const StyledRightIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "TextField__StyledRightIcon",
  componentId: "sc-1nq70vt-3"
})(["", ";right:8px;"], baseIconStyles);

const BBTextFieldInput =
/*#__PURE__*/
_styledComponents.default.input.withConfig({
  displayName: "TextField__BBTextFieldInput",
  componentId: "sc-1nq70vt-4"
})(({
  chromeless,
  iconLeft,
  iconRight,
  disabled
}) => (0, _styledComponents.css)(["", ";", ";", ";border:", ";box-sizing:border-box;color:", ";height:24px;flex:1;outline:none;padding:4px ", "px 4px ", "px;width:100%;", ";&[type='number']{&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{opacity:1;}}::placeholder{color:", ";font-style:italic;}&:hover{border-color:", ";}&:focus,&:active{border-color:", ";}"], disabled && _exports.baseDisabledStyles, (0, _exports.typography)(400, _exports.FontSizes.Title5), (0, _exports.borderRadius)(), chromeless ? `1px solid transparent` : `1px solid ${(0, _exports.getColor)(_exports.Colors.Black, 0.12)}`, (0, _exports.getColor)(_exports.Colors.Black89), iconRight ? 30 : 6, iconLeft ? 30 : 6, _exports.buttonTransition, (0, _exports.getColor)(_exports.Colors.Black54), (0, _exports.getColor)(_exports.Colors.Black, 0.3), (0, _exports.getColor)(_exports.Colors.BrandLightBlue))); // TODO: Much duplication from TextInput


const BBTextAreaInput =
/*#__PURE__*/
_styledComponents.default.textarea.withConfig({
  displayName: "TextField__BBTextAreaInput",
  componentId: "sc-1nq70vt-5"
})(({
  iconLeft,
  iconRight
}) => (0, _styledComponents.css)(["", ";", ";border:1px solid ", ";box-sizing:border-box;color:", ";outline:none;resize:none;padding:4px ", "px 4px ", "px;flex:1;height:56px;margin-top:4px;", ";::placeholder{color:", ";font-style:italic;}&:hover{border-color:", ";}&:focus,&:active{border-color:", ";}"], (0, _exports.typography)(400, _exports.FontSizes.Title5), (0, _exports.borderRadius)(), (0, _exports.getColor)(_exports.Colors.Black, 0.12), (0, _exports.getColor)(_exports.Colors.Black89), iconRight ? 30 : 6, iconLeft ? 30 : 6, _exports.buttonTransition, (0, _exports.getColor)(_exports.Colors.Black54), (0, _exports.getColor)(_exports.Colors.Black, 0.3), (0, _exports.getColor)(_exports.Colors.BrandLightBlue)));
/*
 * Types
 */


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
  type: 'text',
  min: 0,
  max: 9999,
  className: ''
};
exports.defaultTextFieldProps = defaultTextFieldProps;
const defaultTextAreaProps = {
  cssOverrides: '',
  iconLeft: '',
  iconRight: '',
  label: '',
  onChange: () => {},
  placeholder: '',
  value: '',
  disabled: false,
  readOnly: false,
  required: false,
  type: 'text',
  className: ''
  /*
   * Component
   */

};
exports.defaultTextAreaProps = defaultTextAreaProps;

class TextField extends _react.Component {
  render() {
    const {
      chromeless,
      cssOverrides,
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
      min,
      max,
      className,
      ...otherProps
    } = this.props;
    return _react.default.createElement(BBTextFieldContainer, {
      className: className,
      cssOverrides: cssOverrides
    }, !(0, _typeGuards.isEmptyString)(label) && _react.default.createElement(BBTextFieldLabel, null, label), !(0, _typeGuards.isEmptyString)(iconLeft) && _react.default.createElement(StyledLeftIcon, {
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
      placeholder: placeholder,
      type: type,
      value: value,
      disabled: disabled,
      readOnly: readOnly,
      required: required,
      min: min,
      max: max
    }, otherProps)));
  }

} // TODO: Much duplication from TextInput


exports.TextField = TextField;
TextField.defaultProps = defaultTextFieldProps;

class TextArea extends _react.Component {
  render() {
    const {
      cssOverrides,
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
      className,
      ...otherProps
    } = this.props;
    return _react.default.createElement(BBTextFieldContainer, {
      className: className,
      cssOverrides: cssOverrides
    }, !(0, _typeGuards.isEmptyString)(label) && _react.default.createElement(BBTextFieldLabel, null, label), !(0, _typeGuards.isEmptyString)(iconLeft) && _react.default.createElement(StyledLeftIcon, {
      icon: iconLeft
    }), !(0, _typeGuards.isEmptyString)(iconRight) && _react.default.createElement(StyledRightIcon, {
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
TextArea.defaultProps = defaultTextAreaProps;