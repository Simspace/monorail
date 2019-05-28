"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionHeader = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _AppIcon = require("../appIcon/AppIcon");

var _exports = require("../helpers/exports");

var _Icon = require("../icon/Icon");

var _typeGuards = require("../sharedHelpers/typeGuards");

var _Text = require("./Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const SectionHeaderContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "SectionHeader__SectionHeaderContainer",
  componentId: "jqmo3c-0"
})(["", ";", ";align-items:center;color:", ";flex-shrink:0;height:40px;padding:0 16px;"], (0, _exports.flexFlow)('row'), (0, _exports.typography)(700, _exports.FontSizes.Title5), (0, _exports.getColor)(_exports.Colors.Black74));

const iconLeftStyle =
/*#__PURE__*/
(0, _styledComponents.css)(["margin-right:8px;"]);
const iconRightStyle =
/*#__PURE__*/
(0, _styledComponents.css)(["margin-left:8px;"]);

const SectionHeader = ({
  children,
  iconLeft,
  iconRight,
  title,
  ...otherProps
}) => _react.default.createElement(SectionHeaderContainer, otherProps, !(0, _typeGuards.isEmptyString)(iconLeft) && ((0, _exports.isAppName)(iconLeft) ? _react.default.createElement(_AppIcon.AppIcon, {
  appName: iconLeft,
  cssOverrides: iconLeftStyle
}) : _react.default.createElement(_StyledIcon, {
  icon: iconLeft
})), _react.default.createElement(_Text.Text, {
  fontWeight: 700,
  fontSize: _exports.FontSizes.Title5,
  as: "h1"
}, title), !(0, _typeGuards.isEmptyString)(iconRight) && ((0, _exports.isAppName)(iconRight) ? _react.default.createElement(_AppIcon.AppIcon, {
  appName: iconRight,
  cssOverrides: iconRightStyle
}) : _react.default.createElement(_StyledIcon2, {
  icon: iconRight
})), children);

exports.SectionHeader = SectionHeader;
SectionHeader.defaultProps = {
  iconLeft: '',
  iconRight: ''
};

var _StyledIcon = (0, _styledComponents.default)(_Icon.Icon)`${iconLeftStyle}`;

var _StyledIcon2 = (0, _styledComponents.default)(_Icon.Icon)`${iconRightStyle}`;