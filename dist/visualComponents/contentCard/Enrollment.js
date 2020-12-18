"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Enrollment = void 0;

var _react = _interopRequireDefault(require("react"));

var _color = require("../../helpers/color");

var _exports = require("../../helpers/exports");

var _Text = require("../typography/Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Enrollment = props => /*#__PURE__*/_react.default.createElement(_Text.Text, {
  color: _color.Colors.Gray54,
  fontSize: _exports.FontSizes.Title5,
  fontWeight: _exports.FontWeights.Bold,
  margin: "0"
}, props.selfEnroll ? 'Self-Enroll' : 'Manager-Led');

exports.Enrollment = Enrollment;