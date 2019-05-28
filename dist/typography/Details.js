"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Details = void 0;

var _react = _interopRequireDefault(require("react"));

var _exports = require("../helpers/exports");

var _styledComponents = _interopRequireWildcard(require("../helpers/styled-components"));

var _theme = require("../helpers/theme");

var _typeGuards = require("../sharedHelpers/typeGuards");

var _Tag = require("../tags/Tag");

var _detailsTypes = require("./detailsTypes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Property Styles
const propertySizeStyles = {
  [_detailsTypes.DetailsSize.Compact]: (0, _styledComponents.css)(["", ";color:", ";text-transform:uppercase;"], (0, _exports.typography)(500, _exports.FontSizes.Content), (0, _theme.getThemeColor)(_theme.ThemeColors.Text500)),
  [_detailsTypes.DetailsSize.Default]: (0, _styledComponents.css)(["", ";color:", ";"], (0, _exports.typography)(500, _exports.FontSizes.Content), (0, _theme.getThemeColor)(_theme.ThemeColors.Text700)),
  [_detailsTypes.DetailsSize.Large]: (0, _styledComponents.css)(["", ";color:", ";"], (0, _exports.typography)(700, _exports.FontSizes.Content), (0, _theme.getThemeColor)(_theme.ThemeColors.Text700))
};

const DetailsProperty =
/*#__PURE__*/
_styledComponents.default.h2.withConfig({
  displayName: "Details__DetailsProperty",
  componentId: "xo061-0"
})(({
  size
}) => (0, _styledComponents.css)(["", ";margin:0;"], propertySizeStyles[size])); // Value Styles


const valueSizeStyles = {
  [_detailsTypes.DetailsSize.Compact]: (0, _styledComponents.css)(["", ";color:", ";"], (0, _exports.typography)(600, _exports.FontSizes.Title5), (0, _theme.getThemeColor)(_theme.ThemeColors.Text700)),
  [_detailsTypes.DetailsSize.Default]: (0, _styledComponents.css)(["", ";color:", ";"], (0, _exports.typography)(200, _exports.FontSizes.Title3), (0, _theme.getThemeColor)(_theme.ThemeColors.Text900)),
  [_detailsTypes.DetailsSize.Large]: (0, _styledComponents.css)(["", ";color:", ";"], (0, _exports.typography)(200, _exports.FontSizes.Title1), (0, _theme.getThemeColor)(_theme.ThemeColors.Text900))
};

const DetailsValue =
/*#__PURE__*/
_styledComponents.default.h1.withConfig({
  displayName: "Details__DetailsValue",
  componentId: "xo061-1"
})(({
  size
}) => (0, _styledComponents.css)(["", ";margin:0;"], valueSizeStyles[size]));

const DetailsContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Details__DetailsContainer",
  componentId: "xo061-2"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", "{margin-top:6px;}", ";"], (0, _exports.flexFlow)(), _Tag.TagContainer, cssOverrides));

const Details = ({
  children,
  cssOverrides,
  size,
  property,
  value
}) => _react.default.createElement(DetailsContainer, {
  cssOverrides: cssOverrides
}, _react.default.createElement(DetailsProperty, {
  size: size
}, property), !(0, _typeGuards.isNil)(value) && _react.default.createElement(DetailsValue, {
  size: size
}, value), children);

exports.Details = Details;
Details.defaultProps = {
  size: _detailsTypes.DetailsSize.Default
};