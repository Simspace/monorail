"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiCheckboxGroup = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _Array = require("fp-ts/lib/Array");

var _Eq = require("fp-ts/lib/Eq");

var _exports = require("../../helpers/exports");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Choice = require("./Choice");

var _inputTypes = require("./inputTypes");

var _Label = require("./Label");

var _StdErr = require("./StdErr");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Container = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "MultiCheckboxGroup__Container",
  componentId: "pyfdp3-0"
})(({
  display,
  hideStdErr,
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", " ", ";"], (0, _exports.flexFlow)('column'), display !== _inputTypes.DisplayType.Edit && !hideStdErr && `margin-bottom: 24px;`, cssOverrides));

const MultiCheckboxGroupWrapper = /*#__PURE__*/_styledComponents.default.fieldset.withConfig({
  displayName: "MultiCheckboxGroup__MultiCheckboxGroupWrapper",
  componentId: "pyfdp3-1"
})(({
  err
}) => (0, _styledComponents.css)(["", ";margin:0;padding:0;border-style:solid;border-width:1px;border-color:transparent;", ";"], (0, _exports.borderRadius)(), err && (0, _styledComponents.css)(["", " border-top:none;border-top-left-radius:0 0;border-top-right-radius:0 0;"], _exports.baseErrorBorderStyles)));

const BorderJoiner = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "MultiCheckboxGroup__BorderJoiner",
  componentId: "pyfdp3-2"
})(["border-style:solid;border-width:1px;border-top:none;border-bottom:none;border-left:none;border-color:", ";height:8px;margin-top:-7px;"], (0, _exports.getColor)(_exports.Colors.Red));

const errorStyles = /*#__PURE__*/(0, _styledComponents.css)(["", " overflow:hidden;white-space:nowrap;&:after{content:'';display:block;width:100%;height:6px;position:relative;border-right:1px solid ", ";border-top:1px solid ", ";border-top-right-radius:3px;margin:auto 0 auto 8px;top:3px;}"], (0, _exports.flexFlow)('row'), (0, _exports.getColor)(_exports.Colors.Red), (0, _exports.getColor)(_exports.Colors.Red));

const InfoText = /*#__PURE__*/_styledComponents.default.p.withConfig({
  displayName: "MultiCheckboxGroup__InfoText",
  componentId: "pyfdp3-3"
})(["", ";margin-left:32px;"], (0, _exports.typographyFont)(300, _exports.FontSizes.Title5));

const defaultOptions = {
  label: '',
  key: '',
  info: '',
  disabled: false,
  'data-test-id': '',
  htmlValidation: true
};
const isSelectedKey = (0, _Array.elem)(_Eq.eqString); // This is just a modified version of RadioGroup used to get a feature done.
// It's not intended to be the long-term solution for checkbox groups.

var _StyledLabel = /*#__PURE__*/(0, _styledComponents.default)(_Label.Label).withConfig({
  displayName: "MultiCheckboxGroup___StyledLabel",
  componentId: "pyfdp3-4"
})(["", ""], p => p._css);

const MultiCheckboxGroup = props => {
  const {
    label = '',
    options,
    onChange,
    values = [],
    required = false,
    htmlValidation = true,
    err = false,
    msg = '',
    name,
    className = '',
    hideStdErr = false,
    display = _inputTypes.DisplayType.Edit,
    ...otherProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(Container, {
    className: className,
    display: display,
    hideStdErr: hideStdErr,
    "aria-invalid": err
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_StyledLabel, {
    label: label,
    required: required,
    err: err,
    display: display,
    _css: err ? errorStyles : `${(0, _exports.flexFlow)('row')}`
  }), err && /*#__PURE__*/_react.default.createElement(BorderJoiner, null), /*#__PURE__*/_react.default.createElement(MultiCheckboxGroupWrapper, _extends({}, otherProps, {
    err: err
  }), options.map((o = defaultOptions, k) => {
    const isChecked = isSelectedKey(o.key)(values);
    const isDisabled = o.disabled;
    const isReadOnly = display === _inputTypes.DisplayType.View;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: o.key
    }, /*#__PURE__*/_react.default.createElement(_Choice.Choice, {
      type: "checkbox",
      name: name || label,
      "data-test-id": o['data-test-id'],
      checked: isChecked,
      value: o.key,
      onClick: e => {
        onChange && onChange(o.key, values, // This assertion is required due to the
        // incorrect Event typings in Choice
        e);
      },
      required: htmlValidation && required,
      readOnly: isReadOnly,
      disabled: isDisabled
    }, o.label), /*#__PURE__*/_react.default.createElement(InfoText, null, isSelectedKey(o.key)(values) && !(0, _typeGuards.isEmptyString)(o.info)));
  })), !hideStdErr && /*#__PURE__*/_react.default.createElement(_StdErr.StdErr, {
    err: err,
    msg: msg
  })));
};

exports.MultiCheckboxGroup = MultiCheckboxGroup;