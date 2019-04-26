"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tag = exports.TagContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../helpers/exports");

var _Icon = require("../icon/Icon");

var _typeGuards = require("../sharedHelpers/typeGuards");

var _Text = require("../typography/Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const tagHeight = 24;
const circleWidth = tagHeight - 4;
const circleRadius = circleWidth / 2;
const iconSize = tagHeight / 2;

const TagContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Tag__TagContainer",
  componentId: "rxfsom-0"
})(({
  doesntHaveLabel
}) => (0, _styledComponents.css)(["", ";", ";display:inline-flex;align-items:center;background:", ";border-radius:", "px;height:", "px;position:relative;text-transform:uppercase;user-select:none;&::before{background:", ";border-radius:", "px;bottom:2px;content:'';left:2px;position:absolute;top:2px;width:", "px;}"], doesntHaveLabel && (0, _styledComponents.css)(["width:", "px;"], tagHeight), (0, _exports.flexFlow)('row'), (0, _exports.getColor)(_exports.Colors.Black, 0.07), tagHeight / 2, tagHeight, (0, _exports.getColor)(_exports.Colors.White), circleRadius, circleWidth));

exports.TagContainer = TagContainer;
const iconStyles =
/*#__PURE__*/
(0, _styledComponents.css)(["color:", ";margin:0 ", "px;position:relative;"], (0, _exports.getColor)(_exports.Colors.BrandLightBlue), iconSize / 2);
const labelStyles =
/*#__PURE__*/
(0, _styledComponents.css)(["color:", ";margin:0 10px 0 2px;"], (0, _exports.getColor)(_exports.Colors.Black89));

const Tag = ({
  label,
  icon,
  ...otherProps
}) => _react.default.createElement(TagContainer, _extends({
  doesntHaveLabel: (0, _typeGuards.isEmptyString)(label)
}, otherProps), _react.default.createElement(_StyledIcon, {
  icon: icon,
  size: iconSize
}), !(0, _typeGuards.isEmptyString)(label) && _react.default.createElement(_StyledText, {
  fontSize: _exports.FontSizes.Content,
  fontWeight: 700
}, label));

exports.Tag = Tag;
Tag.defaultProps = {
  label: ''
};

var _StyledIcon = (0, _styledComponents.default)(_Icon.Icon)`${iconStyles}`;

var _StyledText = (0, _styledComponents.default)(_Text.Text)`${labelStyles}`;