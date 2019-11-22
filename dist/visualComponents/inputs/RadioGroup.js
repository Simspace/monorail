"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroup = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Array = require("fp-ts/lib/Array");

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Choice = require("./Choice");

var _inputTypes = require("./inputTypes");

var _Label = require("./Label");

var _StdErr = require("./StdErr");

var _ViewInput = require("./ViewInput");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Container =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "RadioGroup__Container",
  componentId: "hjdmb5-0"
})(({
  display,
  hideStdErr,
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", " ", ";"], (0, _exports.flexFlow)('column'), display !== _inputTypes.DisplayType.Edit && !hideStdErr && `margin-bottom: 24px;`, cssOverrides));

const RadioGroupWrapper =
/*#__PURE__*/
_styledComponents.default.fieldset.withConfig({
  displayName: "RadioGroup__RadioGroupWrapper",
  componentId: "hjdmb5-1"
})(({
  err
}) => (0, _styledComponents.css)(["", ";margin:0;padding:0;border-style:solid;border-width:1px;border-color:transparent;", ";"], (0, _exports.borderRadius)(), err && (0, _styledComponents.css)(["", " border-top:none;border-top-left-radius:0 0;border-top-right-radius:0 0;"], _exports.baseErrorBorderStyles)));

const BorderJoiner =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "RadioGroup__BorderJoiner",
  componentId: "hjdmb5-2"
})(["border-style:solid;border-width:1px;border-top:none;border-bottom:none;border-left:none;border-color:", ";height:8px;margin-top:-7px;"], (0, _exports.getColor)(_exports.Colors.Red));

const errorStyles =
/*#__PURE__*/
(0, _styledComponents.css)(["", " overflow:hidden;white-space:nowrap;&:after{content:'';display:block;width:100%;height:6px;position:relative;border-right:1px solid ", ";border-top:1px solid ", ";border-top-right-radius:3px;margin:auto 0 auto 8px;top:3px;}"], (0, _exports.flexFlow)('row'), (0, _exports.getColor)(_exports.Colors.Red), (0, _exports.getColor)(_exports.Colors.Red));

const InfoText =
/*#__PURE__*/
_styledComponents.default.p.withConfig({
  displayName: "RadioGroup__InfoText",
  componentId: "hjdmb5-3"
})(["", ";margin-left:32px;"], (0, _exports.typography)(300, _exports.FontSizes.Title5));

const defaultOptions = {
  label: '',
  key: '',
  info: '',
  disabled: false,
  'data-test-id': '',
  htmlValidation: true
};

var _StyledLabel =
/*#__PURE__*/
(0, _styledComponents.default)(_Label.Label).withConfig({
  displayName: "RadioGroup___StyledLabel",
  componentId: "hjdmb5-4"
})(["", ""], p => p._css);

const RadioGroup = props => {
  const {
    label = '',
    options,
    onSelect,
    value = '',
    required = false,
    htmlValidation = true,
    err = false,
    msg = '',
    className = '',
    hideStdErr = false,
    display = _inputTypes.DisplayType.Edit,
    ...otherProps
  } = props;
  return _react.default.createElement(Container, {
    className: className,
    display: display,
    hideStdErr: hideStdErr
  }, display === _inputTypes.DisplayType.Edit ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_StyledLabel, {
    label: label,
    required: required,
    err: err,
    display: display,
    _css: err ? errorStyles : `${(0, _exports.flexFlow)('row')}`
  }), err && _react.default.createElement(BorderJoiner, null), _react.default.createElement(RadioGroupWrapper, _extends({}, otherProps, {
    err: err
  }), options.map((o = defaultOptions, k) => _react.default.createElement("div", {
    key: k + o.label
  }, _react.default.createElement(_Choice.Choice, {
    type: "radio",
    name: label,
    "data-test-id": o['data-test-id'],
    checked: o.key === value,
    value: o.key,
    onChange: e => {
      onSelect && onSelect(o.key, e);
    },
    required: htmlValidation && required,
    readOnly: false,
    disabled: o.disabled
  }, o.label), _react.default.createElement(InfoText, null, o.key === value && !(0, _typeGuards.isEmptyString)(o.info))))), !hideStdErr && _react.default.createElement(_StdErr.StdErr, {
    err: err,
    msg: msg
  })) : _react.default.createElement(_ViewInput.ViewInput, {
    label: label,
    value: (0, _Array.findFirst)(o => o.key === value)(options).map(o => o.label).toUndefined()
  }));
};

exports.RadioGroup = RadioGroup;