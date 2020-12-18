"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Duration = void 0;

var _react = _interopRequireDefault(require("react"));

var _color = require("../../helpers/color");

var _exports = require("../../helpers/exports");

var _Text = require("../typography/Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const formatMinutes = minutes => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return hours > 0 ? `${hours}h ${remainingMinutes}m` : `${remainingMinutes}m`;
};

const Duration = props => /*#__PURE__*/_react.default.createElement(_Text.Text, {
  color: _color.Colors.Gray54,
  fontSize: _exports.FontSizes.Title5,
  fontWeight: _exports.FontWeights.Medium
}, formatMinutes(props.durationMin));

exports.Duration = Duration;