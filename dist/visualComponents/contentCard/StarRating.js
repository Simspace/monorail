"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarRating = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _color = require("../../helpers/color");

var _exports = require("../../helpers/exports");

var _Rating = require("../rating/Rating");

var _Text = require("../typography/Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _StyledDiv = /*#__PURE__*/(0, _styledComponents.default)("div").withConfig({
  displayName: "StarRating___StyledDiv",
  componentId: "sc-4r4ztn-0"
})(["display:flex;align-items:center;"]);

const StarRating = props => /*#__PURE__*/_react.default.createElement(_StyledDiv, null, /*#__PURE__*/_react.default.createElement(_Rating.Rating, {
  rating: props.rating,
  fill: _Rating.Fill.Gold,
  size: _Rating.Size.Tiny
}), /*#__PURE__*/_react.default.createElement(_Text.Text, {
  color: _color.Colors.Gray54,
  fontSize: _exports.FontSizes.Title5,
  fontWeight: _exports.FontWeights.Bold,
  margin: "0 0 0 4px"
}, props.rating.toFixed(1)));

exports.StarRating = StarRating;