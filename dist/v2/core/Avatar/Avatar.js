"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = Avatar;
exports.StyledAvatar = exports.getAvatarInitials = void 0;

var _react = _interopRequireDefault(require("react"));

var MUI = _interopRequireWildcard(require("@material-ui/core"));

var _exports = require("../../../helpers/exports");

var _styledComponents = _interopRequireWildcard(require("../../../helpers/styled-components"));

var _IconButton = require("../IconButton/IconButton");

var _helpers = require("../../shared/helpers");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEFAULT_SIZE = 24;
const FONT_SCALE = 9.89 / DEFAULT_SIZE;

const getAvatarInitials = fullName => {
  const initials = fullName.match(/\b\w/g) || [];
  return [initials.shift() || '', initials.pop() || ''];
}; // Essentially an Enum


exports.getAvatarInitials = getAvatarInitials;
const DISPLAY = {
  Default: 'default',
  Team: 'team'
}; // Union of "Enum" values

const displayCss = {
  [DISPLAY.Default]: (0, _styledComponents.css)`
    ${(0, _exports.borderRadius)(_exports.BorderRadius.Round)};
    background: ${({
    theme
  }) => theme.v2.ActionPrimary};
  `,
  [DISPLAY.Team]: (0, _styledComponents.css)`
    ${(0, _exports.borderRadius)()};
    background: ${({
    theme
  }) => theme.v2.Accent2};
  `
};
const StyledAvatar = (0, _styledComponents.default)(MUI.Avatar).withConfig((0, _helpers.propBlockerConfig)(['display', 'size'])) // Provide defaults
.attrs(props => {
  var _props$size, _props$display;

  return {
    size: (_props$size = props.size) !== null && _props$size !== void 0 ? _props$size : DEFAULT_SIZE,
    display: (_props$display = props.display) !== null && _props$display !== void 0 ? _props$display : DISPLAY.Default,
    // When `onClick` is passed in, use a button as its component (instead of a div)
    component: props.onClick ? _IconButton.IconButton : undefined
  };
})`
    font-weight: 900;
    text-transform: uppercase;
    font-size: ${({
  size
}) => size * FONT_SCALE}px;
    line-height: ${({
  size
}) => size}px;
    height: ${({
  size
}) => size}px;
    width: ${({
  size
}) => size}px;
    ${({
  display
}) => displayCss[display]}
`;
/**
 * - [Avatar | Material-UI](https://material-ui.com/components/avatars/#avatar)
 * - [Avatar | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=953%3A7904)
 */

exports.StyledAvatar = StyledAvatar;

function Avatar(props) {
  return /*#__PURE__*/_react.default.createElement(StyledAvatar, props);
}

;
Avatar.muiName = MUI.Avatar.muiName; // eslint-disable-line