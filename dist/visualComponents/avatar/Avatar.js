"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAvatarInitials = exports.Avatar = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _size = require("../../helpers/size");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Icon = require("../icon/Icon");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const defaultSize = _size.Sizes.DP24;
const fontScale = 9.89 / defaultSize;
const iconScale = 10 / 16;

const AvatarContainer =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "Avatar__AvatarContainer",
  componentId: "sc-1nz3kf0-0"
})(({
  team,
  size = defaultSize
}) => (0, _styledComponents2.css)(["", ";align-items:center;color:", ";display:flex;flex-shrink:0;font-size:", "px;font-weight:900;height:", "px;justify-content:center;line-height:", "px;text-align:center;text-transform:uppercase;user-select:none;width:", "px;"], team ? (0, _styledComponents2.css)(["", ";background:", ";"], (0, _exports.borderRadius)(), (0, _exports.getColor)(_exports.Colors.BrandDarkBlue)) : (0, _styledComponents2.css)(["", ";background:", ";"], (0, _exports.borderRadius)(_exports.BorderRadius.Round), (0, _exports.getColor)(_exports.Colors.BrandLightBlue)), (0, _exports.getColor)(_exports.Colors.White), size * fontScale, size, size, size));

const Avatar = ({
  first,
  last,
  team,
  size = defaultSize,
  icon,
  ...domProps
}) => _react.default.createElement(AvatarContainer, _extends({
  team: team,
  size: size
}, domProps), !(0, _typeGuards.isNil)(icon) ? _react.default.createElement(_StyledIcon, {
  icon: icon,
  size: iconScale * size,
  _css: (0, _exports.getColor)(_exports.Colors.White)
}) : _react.default.createElement(_react.default.Fragment, null, first.charAt(0), last.charAt(0)));

exports.Avatar = Avatar;

const getAvatarInitials = fullName => {
  const initials = fullName.match(/\b\w/g) || [];
  return {
    first: initials.shift() || '',
    last: initials.pop() || ''
  };
};

exports.getAvatarInitials = getAvatarInitials;

var _StyledIcon = (0, _styledComponents.default)(_Icon.Icon)`color:${p => p._css};`;