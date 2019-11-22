"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _typography = require("../../helpers/typography");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _inputTypes = require("./inputTypes");

var _Text = require("../typography/Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Label = ({
  label,
  required,
  err,
  display = _inputTypes.DisplayType.View,
  ...domProps
}) => {
  return !(0, _typeGuards.isNil)(label) && !(0, _typeGuards.isEmptyString)(label) ? _react.default.createElement(_Text.Text, _extends({}, domProps, {
    fontWeight: 500,
    fontSize: _typography.FontSizes.Title5,
    color: err ? _exports.Colors.Red : _exports.Colors.Black89,
    margin: "0 0 8px"
  }), label, required && display === _inputTypes.DisplayType.Edit && '*') : _react.default.createElement(_react.default.Fragment, null);
};

exports.Label = Label;