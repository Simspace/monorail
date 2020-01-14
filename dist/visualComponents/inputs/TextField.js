"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = exports.StyledInput = exports.IconsAndInputContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _exports = require("../../helpers/exports");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Icon = require("../icon/Icon");

var _inputTypes = require("./inputTypes");

var _Label = require("./Label");

var _StdErr = require("./StdErr");

var _ViewInput = require("./ViewInput");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Styles
 */
const Container =
/*#__PURE__*/
_styledComponents.default.label.withConfig({
  displayName: "TextField__Container",
  componentId: "mvo1xj-0"
})(({
  cssOverrides,
  display,
  hideStdErr
}) => (0, _styledComponents.css)(["", ";float:none;width:256px;position:relative;", " ", ""], (0, _exports.flexFlow)(), display !== _inputTypes.DisplayType.Edit && !hideStdErr && `margin-bottom: 24px;`, cssOverrides));

const IconsAndInputContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "TextField__IconsAndInputContainer",
  componentId: "mvo1xj-1"
})(["", ";flex:1;position:relative;"], (0, _exports.flexFlow)('column'));

exports.IconsAndInputContainer = IconsAndInputContainer;
const baseIconStyles =
/*#__PURE__*/
(0, _styledComponents.css)(["position:absolute;top:50%;transform:translateY(-50%);"]);

var _StyledIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "TextField___StyledIcon",
  componentId: "mvo1xj-2"
})(["", ""], p => p._css);

const StyledLeftIcon =
/*#__PURE__*/
(0, _styledComponents.default)(({
  canToggleVisibility,
  err,
  msg,
  ...iconProps
}) => _react.default.createElement(_StyledIcon, _extends({}, iconProps, {
  _css: err ? `color: ${(0, _exports.getColor)(_exports.Colors.Red)};` : ''
}))).withConfig({
  displayName: "TextField__StyledLeftIcon",
  componentId: "mvo1xj-3"
})(["", ";left:8px;"], baseIconStyles);

var _StyledIcon2 =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "TextField___StyledIcon2",
  componentId: "mvo1xj-4"
})(["", ""], p => p._css2);

const StyledRightIcon =
/*#__PURE__*/
(0, _styledComponents.default)(({
  canToggleVisibility,
  err,
  msg,
  ...iconProps
}) => _react.default.createElement(_StyledIcon2, _extends({}, iconProps, {
  _css2: err ? `color: ${(0, _exports.getColor)(_exports.Colors.Red)};` : ''
}))).withConfig({
  displayName: "TextField__StyledRightIcon",
  componentId: "mvo1xj-5"
})(({
  canToggleVisibility
}) => (0, _styledComponents.css)(["", ";right:", ";"], baseIconStyles, canToggleVisibility ? '32px' : '8px'));
const StyledVisibilityIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "TextField__StyledVisibilityIcon",
  componentId: "mvo1xj-6"
})(["", ";cursor:pointer;right:8px;"], baseIconStyles);

const StyledInput =
/*#__PURE__*/
_styledComponents.default.input.withConfig({
  displayName: "TextField__StyledInput",
  componentId: "mvo1xj-7"
})(({
  chromeless,
  iconLeft,
  iconRight,
  disabled,
  canToggleVisibility,
  err
}) => (0, _styledComponents.css)(["", ";", ";", ";border-color:", ";border-style:solid;border-width:1px;box-sizing:border-box;color:", ";height:24px;min-height:24px;flex:1;outline:none;padding:4px ", "px 4px ", "px;width:100%;", ";&[htmlType='number']{&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{opacity:1;}}&:hover{border-color:", ";}&:focus,&:active{border-color:", ";}::placeholder{color:", ";font-style:italic;}", ";:-moz-ui-invalid{box-shadow:none;}", ";", ";"], disabled && _exports.baseDisabledStyles, (0, _exports.typography)(400, _exports.FontSizes.Title5), (0, _exports.borderRadius)(), (0, _exports.getColor)(_exports.Colors.Black, 0.12), (0, _exports.getColor)(_exports.Colors.Black89), iconRight ? canToggleVisibility ? 56 : 30 : canToggleVisibility ? 30 : 6, iconLeft ? 30 : 6, _exports.buttonTransition, (0, _exports.getColor)(_exports.Colors.Black, 0.3), (0, _exports.getColor)(_exports.Colors.BrandLightBlue), (0, _exports.getColor)(_exports.Colors.Black54), chromeless && (0, _styledComponents.css)(["border-color:transparent;"]), err && _exports.baseErrorBorderStyles, disabled && _exports.baseDisabledStyles));
/*
 * Types
 */


exports.StyledInput = StyledInput;

/*
 * Component
 */
const TextField = (0, _react.forwardRef)((props, ref) => {
  const [hide, setHide] = (0, _react.useState)(true);
  const {
    autoFocus = false,
    canToggleVisibility = false,
    chromeless = false,
    cssOverrides = '',
    htmlValidation = true,
    iconLeft = '',
    iconRight = '',
    label = '',
    onChange = () => {},
    onBlur,
    placeholder = '',
    value,
    disabled = false,
    display = _inputTypes.DisplayType.Edit,
    readOnly = false,
    required = false,
    htmlType = canToggleVisibility && hide ? 'password' : 'text',
    min = 0,
    max = 9999,
    maxLength = 1000,
    className = '',
    err = false,
    msg = '',
    hideStdErr = false,
    ...otherProps
  } = props;
  return _react.default.createElement(Container, {
    className: className,
    cssOverrides: cssOverrides,
    display: display,
    hideStdErr: hideStdErr
  }, display === _inputTypes.DisplayType.Edit ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Label.Label, {
    label: label,
    required: required,
    err: err,
    display: display
  }), _react.default.createElement(IconsAndInputContainer, null, !(0, _typeGuards.isEmptyString)(iconLeft) && _react.default.createElement(StyledLeftIcon, {
    icon: iconLeft,
    err: err
  }), _react.default.createElement(StyledInput, _extends({
    "data-lpignore": "true" // 🖕 u LastPass: https://goo.gl/Ez3eS1
    ,
    canToggleVisibility: canToggleVisibility,
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
    required: htmlValidation && required,
    min: min,
    max: max,
    maxLength: maxLength,
    err: err,
    ref: ref
  }, otherProps)), !(0, _typeGuards.isEmptyString)(iconRight) && _react.default.createElement(StyledRightIcon, {
    icon: iconRight,
    canToggleVisibility: canToggleVisibility,
    err: err
  }), canToggleVisibility && _react.default.createElement(StyledVisibilityIcon, {
    icon: hide ? 'visibility' : 'visibility_off',
    onClick: () => setHide(!hide)
  })), !hideStdErr && _react.default.createElement(_StdErr.StdErr, {
    err: err,
    msg: msg
  })) : htmlType !== 'password' ? _react.default.createElement(_ViewInput.ViewInput, {
    label: label,
    value: value
  }) : _react.default.createElement(_react.default.Fragment, null));
});
exports.TextField = TextField;