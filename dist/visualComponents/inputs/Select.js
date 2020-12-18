"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../../helpers/exports");

var _inputTypes = require("./inputTypes");

var _Label = require("./Label");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SelectGroupWrapper = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "Select__SelectGroupWrapper",
  componentId: "sc-13rwoh4-0"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";border:0;margin:0;padding:0;width:256px;", ";"], (0, _exports.flexFlow)('column'), cssOverrides));

const SelectElementWrapper = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "Select__SelectElementWrapper",
  componentId: "sc-13rwoh4-1"
})(({
  err
}) => (0, _styledComponents.css)(["background-color:white;width:100%;height:24px;border:1px solid #e5e5e5;padding:0 0 0 0;border-radius:3px;&:hover{cursor:pointer;}", ";"], err && _exports.baseErrorBorderStyles));

const SelectElement = /*#__PURE__*/_styledComponents.default.select.withConfig({
  displayName: "Select__SelectElement",
  componentId: "sc-13rwoh4-2"
})(["width:calc(100% - 8px);height:22px;background:transparent;border:none;outline:none;cursor:pointer;&:disabled{opacity:0.6;}"]);

const Select = props => {
  const {
    cssOverrides,
    disabled,
    display = _inputTypes.DisplayType.View,
    err,
    label,
    name,
    onBlur,
    onChange,
    onSelect,
    options,
    placeholder,
    required,
    value,
    ...domProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(SelectGroupWrapper, _extends({
    cssOverrides: cssOverrides
  }, domProps), /*#__PURE__*/_react.default.createElement(_Label.Label, {
    label: label,
    required: required,
    display: display
  }), /*#__PURE__*/_react.default.createElement(SelectElementWrapper, {
    err: err
  }, /*#__PURE__*/_react.default.createElement(SelectElement, {
    disabled: disabled,
    name: name,
    value: value,
    onBlur: onBlur,
    onChange: e => {
      onChange && onChange(e);
      onSelect && onSelect(e.target.value);
    }
  }, placeholder ?
  /*#__PURE__*/
  // NOTE: native <select> elements do not have a placeholder prop
  _react.default.createElement("option", {
    value: "placeholder",
    disabled: true,
    hidden: true
  }, placeholder) : /*#__PURE__*/_react.default.createElement("option", {
    value: "placeholder",
    disabled: true,
    hidden: true
  }, "Select"), options.map((o, key) => /*#__PURE__*/_react.default.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)))));
};

exports.Select = Select;