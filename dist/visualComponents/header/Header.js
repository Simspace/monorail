"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = exports.HeaderTitle = void 0;

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

var _theme = require("../../helpers/theme");

var _AppIcon = require("../appIcon/AppIcon");

var _Icon = require("../icon/Icon");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any
const HeaderRow =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Header__HeaderRow",
  componentId: "f4cius-0"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";align-items:center;color:", ";flex-shrink:0;height:48px;padding:0 16px;", ";"], (0, _exports.flexFlow)('row'), (0, _theme.getThemeColor)(_theme.ThemeColors.Text1000), cssOverrides));

const HeaderContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Header__HeaderContainer",
  componentId: "f4cius-1"
})([""]);

const HeaderTitle =
/*#__PURE__*/
_styledComponents.default.h1.withConfig({
  displayName: "Header__HeaderTitle",
  componentId: "f4cius-2"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";"], (0, _exports.typography)(500, _exports.FontSizes.Title3), cssOverrides));

exports.HeaderTitle = HeaderTitle;
const iconLeftCss =
/*#__PURE__*/
(0, _styledComponents.css)(["color:", ";flex-shrink:0;margin-right:12px;"], (0, _theme.getThemeColor)(_theme.ThemeColors.Text1000));
const Header =
/*#__PURE__*/
(0, _styledComponents.default)(({
  actions,
  appIcon,
  children,
  cssOverrides,
  cssHeaderRow,
  cssTitle,
  iconLeft,
  noBorder = false,
  title,
  ...domProps
}) => _react.default.createElement(HeaderContainer, domProps, _react.default.createElement(HeaderRow, {
  cssOverrides: cssHeaderRow
}, appIcon && _react.default.createElement(_AppIcon.AppIcon, {
  cssOverrides: iconLeftCss,
  appName: appIcon
}), iconLeft && _react.default.createElement(_Icon.Icon, {
  cssOverrides: iconLeftCss,
  icon: iconLeft
}), _react.default.createElement(HeaderTitle, {
  cssOverrides: cssTitle
}, title), actions), children))(({
  noBorder,
  appIcon,
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";position:relative;flex-shrink:0;", ";"], !noBorder && (0, _styledComponents.css)(["&::after{content:'';background:", ";bottom:0;height:1px;left:0;position:absolute;right:0;}"], appIcon ? (0, _exports.getColor)((0, _exports.convertAppNameToColor)(appIcon)) : '#ebebeb'), (0, _exports.flexFlow)(), cssOverrides)); // tslint:enable

exports.Header = Header;