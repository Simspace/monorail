"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = exports.HeaderTitle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _appName = require("../../helpers/appName");

var _color = require("../../helpers/color");

var _flex = require("../../helpers/flex");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _theme = require("../../helpers/theme");

var _typography = require("../../helpers/typography");

var _AppIcon = require("../appIcon/AppIcon");

var _Icon = require("../icon/Icon");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HeaderRow =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "Header__HeaderRow",
  componentId: "f4cius-0"
})(["", ";align-items:center;color:", ";flex-shrink:0;height:48px;padding:0 16px;"], (0, _flex.flexFlow)('row'), (0, _theme.getThemeColor)(_theme.ThemeColors.Text1000));

const HeaderContainer =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "Header__HeaderContainer",
  componentId: "f4cius-1"
})([""]);

const HeaderTitle =
/*#__PURE__*/
_styledComponents2.default.h1.withConfig({
  displayName: "Header__HeaderTitle",
  componentId: "f4cius-2"
})(["", ";"], (0, _typography.typography)(500, _typography.FontSizes.Title3));

exports.HeaderTitle = HeaderTitle;
const iconLeftCss =
/*#__PURE__*/
(0, _styledComponents2.css)(["color:", ";flex-shrink:0;margin-right:12px;"], (0, _theme.getThemeColor)(_theme.ThemeColors.Text1000));
const Header =
/*#__PURE__*/
(0, _styledComponents2.default)(({
  actions,
  appIcon,
  children,
  cssHeaderRow,
  cssTitle,
  iconLeft,
  noBorder = false,
  title,
  ...domProps
}) => _react.default.createElement(HeaderContainer, domProps, _react.default.createElement(_StyledHeaderRow, {
  _css: cssHeaderRow
}, appIcon && _react.default.createElement(_StyledAppIcon, {
  appName: appIcon
}), iconLeft && _react.default.createElement(_StyledIcon, {
  icon: iconLeft
}), _react.default.createElement(_StyledHeaderTitle, {
  _css2: cssTitle
}, title), actions), children))(({
  noBorder,
  appIcon
}) => (0, _styledComponents2.css)(["", ";", ";position:relative;flex-shrink:0;"], !noBorder && (0, _styledComponents2.css)(["&::after{content:'';background:", ";bottom:0;height:1px;left:0;position:absolute;right:0;}"], appIcon ? (0, _color.getColor)((0, _appName.convertAppNameToColor)(appIcon)) : '#ebebeb'), (0, _flex.flexFlow)()));
exports.Header = Header;

var _StyledHeaderRow = (0, _styledComponents.default)(HeaderRow)`${p => p._css}`;

var _StyledAppIcon = (0, _styledComponents.default)(_AppIcon.AppIcon)`${iconLeftCss}`;

var _StyledIcon = (0, _styledComponents.default)(_Icon.Icon)`${iconLeftCss}`;

var _StyledHeaderTitle = (0, _styledComponents.default)(HeaderTitle)`${p => p._css2}`;