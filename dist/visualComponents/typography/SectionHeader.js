"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionHeader = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _AppIcon = require("../appIcon/AppIcon");

var _Icon = require("../icon/Icon");

var _Text = require("./Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SectionHeaderContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "SectionHeader__SectionHeaderContainer",
  componentId: "sc-16s6esu-0"
})(["", ";", ";align-items:center;color:", ";flex-shrink:0;height:40px;padding:0 16px;"], (0, _exports.flexFlow)('row'), (0, _exports.typography)(700, _exports.FontSizes.Title5), (0, _exports.getColor)(_exports.Colors.Black74));

const iconLeftStyle =
/*#__PURE__*/
(0, _styledComponents.css)(["margin-right:8px;"]);
const iconRightStyle =
/*#__PURE__*/
(0, _styledComponents.css)(["margin-left:8px;"]);

var _StyledAppIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_AppIcon.AppIcon).withConfig({
  displayName: "SectionHeader___StyledAppIcon",
  componentId: "sc-16s6esu-1"
})(["", ""], iconLeftStyle);

var _StyledIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "SectionHeader___StyledIcon",
  componentId: "sc-16s6esu-2"
})(["", ""], iconLeftStyle);

var _StyledAppIcon2 =
/*#__PURE__*/
(0, _styledComponents.default)(_AppIcon.AppIcon).withConfig({
  displayName: "SectionHeader___StyledAppIcon2",
  componentId: "sc-16s6esu-3"
})(["", ""], iconRightStyle);

var _StyledIcon2 =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "SectionHeader___StyledIcon2",
  componentId: "sc-16s6esu-4"
})(["", ""], iconRightStyle);

const SectionHeader = props => {
  const {
    children,
    iconLeft = '',
    iconRight = '',
    title,
    ...otherProps
  } = props;
  return _react.default.createElement(SectionHeaderContainer, otherProps, !(0, _typeGuards.isEmptyString)(iconLeft) && ((0, _exports.isAppName)(iconLeft) ? _react.default.createElement(_StyledAppIcon, {
    appName: iconLeft
  }) : _react.default.createElement(_StyledIcon, {
    icon: iconLeft
  })), _react.default.createElement(_Text.Text, {
    fontWeight: 700,
    fontSize: _exports.FontSizes.Title5,
    as: "h1"
  }, title), !(0, _typeGuards.isEmptyString)(iconRight) && ((0, _exports.isAppName)(iconRight) ? _react.default.createElement(_StyledAppIcon2, {
    appName: iconRight
  }) : _react.default.createElement(_StyledIcon2, {
    icon: iconRight
  })), children);
};

exports.SectionHeader = SectionHeader;