"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents2 = require("../../helpers/styled-components");

var _typography = require("../../helpers/typography");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _inputTypes = require("./inputTypes");

var _Text = require("../typography/Text");

var _Icon = require("../icon/Icon");

var _Tooltip = require("../tooltips/Tooltip");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _StyledIcon = /*#__PURE__*/(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "Label___StyledIcon",
  componentId: "ma0g1z-0"
})(["cursor:pointer;margin-left:8px;position:relative;top:4px;"]);

const Label = ({
  label,
  required,
  err,
  details,
  display = _inputTypes.DisplayType.View,
  ...domProps
}) => {
  return !(0, _typeGuards.isNil)(label) && !(0, _typeGuards.isEmptyString)(label) ? /*#__PURE__*/_react.default.createElement(_Text.Text, _extends({
    fontWeight: 500,
    fontSize: _typography.FontSizes.Title5,
    color: err ? _exports.Colors.Red : _exports.Colors.Black89a,
    margin: "0 0 8px"
  }, domProps), label, required && display === _inputTypes.DisplayType.Edit && '*', details && /*#__PURE__*/_react.default.createElement(_Tooltip.TooltipMonorail, {
    label: details
  }, trigger => /*#__PURE__*/_react.default.createElement("span", trigger, /*#__PURE__*/_react.default.createElement(_StyledIcon, {
    icon: "info",
    color: _exports.Colors.Gray54
  })))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
};

exports.Label = Label;