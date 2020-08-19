"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAvatarInitials = exports.Avatar = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _pipeable = require("fp-ts/lib/pipeable");

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _size = require("../../helpers/size");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Icon = require("../icon/Icon");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const defaultSize = _size.Sizes.DP24;
const fontScale = 9.89 / defaultSize;
const iconScale = 10 / 16;

const AvatarContainer = _styledComponents2.default.div(({
  team,
  size = defaultSize
}) => (0, _styledComponents2.css)`
    ${team ? (0, _styledComponents2.css)`
          ${(0, _exports.borderRadius)()};

          background: ${(0, _exports.getColor)(_exports.Colors.BrandDarkBlue)};
        ` : (0, _styledComponents2.css)`
          ${(0, _exports.borderRadius)(_exports.BorderRadius.Round)};

          background: ${(0, _exports.getColor)(_exports.Colors.BrandLightBlue)};
        `};

    align-items: center;
    color: ${(0, _exports.getColor)(_exports.Colors.White)};
    display: flex;
    flex-shrink: 0;
    font-size: ${size * fontScale}px;
    font-weight: 900;
    height: ${size}px;
    justify-content: center;
    line-height: ${size}px;
    text-align: center;
    text-transform: uppercase;
    user-select: none;
    width: ${size}px;
  `);

var _StyledIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "Avatar___StyledIcon",
  componentId: "sc-1nz3kf0-0"
})(["color:", ";"], p => p._css);

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
}) : _react.default.createElement(_react.default.Fragment, null, (0, _pipeable.pipe)(first, O.fromNullable, O.fold(() => '', f => f.charAt(0))), (0, _pipeable.pipe)(last, O.fromNullable, O.fold(() => '', f => f.charAt(0)))));

exports.Avatar = Avatar;

const getAvatarInitials = fullName => {
  const initials = fullName.match(/\b\w/g) || [];
  return {
    first: initials.shift() || '',
    last: initials.pop() || ''
  };
};

exports.getAvatarInitials = getAvatarInitials;