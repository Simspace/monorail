"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarBack = exports.SideBarMenuHeader = exports.SideBarMenuDivider = exports.SidebarMenuItemDropDownToggle = exports.SidebarMenuContainer = exports.SidebarContainer = exports.SidebarContainerAnimationPose = exports.sideBarCollapsedTransition = exports.sideBarCollapsedTransitionDuration = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _reactPose = _interopRequireDefault(require("react-pose"));

var _exports = require("../../helpers/exports");

var _zIndex = require("../../helpers/zIndex");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _BaseLink = require("../hyperLink/BaseLink");

var _ScrollAnimation = require("../layout/ScrollAnimation");

var _List = require("../list/List");

var _Text = require("../typography/Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const sideBarCollapsedTransitionDuration = 150;
exports.sideBarCollapsedTransitionDuration = sideBarCollapsedTransitionDuration;

const sideBarCollapsedTransition = ({
  properties = ['all'],
  isSideBarCollapsed
}) => (0, _exports.transition)({
  properties,
  easing: (0, _exports.ease)(isSideBarCollapsed),
  duration: sideBarCollapsedTransitionDuration
});

exports.sideBarCollapsedTransition = sideBarCollapsedTransition;
let SidebarContainerAnimationPose;
/* eslint-disable no-unexpected-multiline */

exports.SidebarContainerAnimationPose = SidebarContainerAnimationPose;

(function (SidebarContainerAnimationPose) {
  SidebarContainerAnimationPose["Open"] = "open";
  SidebarContainerAnimationPose["Collapsed"] = "collapsed";
})(SidebarContainerAnimationPose || (exports.SidebarContainerAnimationPose = SidebarContainerAnimationPose = {}));

const SidebarContainer =
/*#__PURE__*/
(0, _styledComponents.default)(_reactPose.default.div({
  [SidebarContainerAnimationPose.Open]: {
    width: 248,
    transition: {
      duration: sideBarCollapsedTransitionDuration,
      ease: 'easeIn'
    }
  },
  [SidebarContainerAnimationPose.Collapsed]: {
    width: 64,
    transition: {
      duration: sideBarCollapsedTransitionDuration,
      ease: 'easeOut'
    }
  }
})).withConfig({
  displayName: "SideBarComponents__SidebarContainer",
  componentId: "sc-1afcl1g-0"
})(["", ";", ";", ";background:#f4f4f7;box-sizing:border-box;flex-shrink:0;position:relative;will-change:width;&::after{background:linear-gradient( to right,rgba(0,0,0,0.1) 0px,rgba(0,0,0,0.1) 1px,rgba(0,0,0,0.05) 1px,rgba(0,0,0,0) 100% );bottom:0;content:'';position:absolute;right:-3px;top:0;width:3px;}"], (0, _exports.flexFlow)(), _exports.gothamFontFamily, (0, _zIndex.zIndex)(_zIndex.ZIndexNodeName.SidebarContainer));
/* eslint-enable no-unexpected-multiline */

exports.SidebarContainer = SidebarContainer;
const SidebarMenuContainer =
/*#__PURE__*/
(0, _styledComponents.default)(_ScrollAnimation.ScrollAnimation).withConfig({
  displayName: "SideBarComponents__SidebarMenuContainer",
  componentId: "sc-1afcl1g-1"
})(({
  isSideBarCollapsed
}) => (0, _styledComponents.css)(["padding:0 12px;", "{margin-left:0;margin-right:0;}", ";"], SideBarMenuDivider, isSideBarCollapsed && (0, _styledComponents.css)(["", "{margin-left:-12px;margin-right:-12px;}"], SideBarMenuDivider)));
exports.SidebarMenuContainer = SidebarMenuContainer;

var _StyledListItemGraphic =
/*#__PURE__*/
(0, _styledComponents.default)(_List.ListItemGraphic).withConfig({
  displayName: "SideBarComponents___StyledListItemGraphic",
  componentId: "sc-1afcl1g-2"
})(["color:currentColor;transform:translateX(", "px);transition:all ease 75ms,transform ", " ", "ms;"], p => p._css, p => p._css2, sideBarCollapsedTransitionDuration);

var _StyledListItemSecondaryText =
/*#__PURE__*/
(0, _styledComponents.default)(_List.ListItemSecondaryText).withConfig({
  displayName: "SideBarComponents___StyledListItemSecondaryText",
  componentId: "sc-1afcl1g-3"
})(["", ""], p => p._css3);

var _StyledListItemGraphic2 =
/*#__PURE__*/
(0, _styledComponents.default)(_List.ListItemGraphic).withConfig({
  displayName: "SideBarComponents___StyledListItemGraphic2",
  componentId: "sc-1afcl1g-4"
})(["transform:translateX(", "px);transition:all ease 75ms,transform ", " ", "ms;"], p => p._css4, p => p._css5, sideBarCollapsedTransitionDuration);

const SidebarMenuItemDropDownToggle =
/*#__PURE__*/
(0, _styledComponents.default)(({
  title,
  subtitle,
  iconName,
  isActive,
  isSideBarCollapsed,
  ...domProps
}) => _react.default.createElement(_List.ListItem, _extends({
  size: _exports.Sizes.DP40
}, domProps), _react.default.createElement(_StyledListItemGraphic, {
  icon: iconName,
  _css: isSideBarCollapsed ? -10 : 0,
  _css2: (0, _exports.ease)(isSideBarCollapsed)
}), _react.default.createElement(_List.ListItemText, null, _react.default.createElement(_List.ListItemPrimaryText, null, title), _react.default.createElement(_StyledListItemSecondaryText, {
  _css3: isActive && (0, _styledComponents.css)(["color:", ";"], (0, _exports.getColor)(_exports.Colors.AccentPurple700))
}, subtitle)), _react.default.createElement(_StyledListItemGraphic2, {
  icon: isActive ? 'arrow_drop_up' : 'arrow_drop_down',
  _css4: isSideBarCollapsed ? -24 : 0,
  _css5: (0, _exports.ease)(isSideBarCollapsed)
}))).withConfig({
  displayName: "SideBarComponents__SidebarMenuItemDropDownToggle",
  componentId: "sc-1afcl1g-5"
})(({
  isActive,
  isSideBarCollapsed,
  cssOverrides,
  disabled
}) => (0, _styledComponents.css)(["", ";", ";background:", ";margin:0 12px 8px;border:1px solid ", ";color:", ";&:hover,&:active{background:", ";}&:hover{border-color:", ";}&:active{border-color:", ";color:", ";}&:active,&:active ", "{color:", ";}", "{", ";", ";}", ";"], disabled && _exports.baseDisabledStyles, (0, _exports.borderRadius)(_exports.BorderRadius.Medium), (0, _exports.getColor)(_exports.Colors.White), isActive ? (0, _exports.getColor)(_exports.Colors.AccentPurple700) : (0, _exports.getColor)(_exports.Colors.White), isActive ? (0, _exports.getColor)(_exports.Colors.AccentPurple700) : (0, _exports.getColor)(_exports.Colors.BrandDarkBlue), (0, _exports.getColor)(_exports.Colors.White), !isActive && (0, _exports.getColor)(_exports.Colors.AccentPurple500), (0, _exports.getColor)(_exports.Colors.AccentPurple700), (0, _exports.getColor)(_exports.Colors.AccentPurple700), _List.ListItemGraphic, (0, _exports.getColor)(_exports.Colors.AccentPurple700), _List.ListItemText, (0, _exports.visible)(!isSideBarCollapsed), sideBarCollapsedTransition({
  isSideBarCollapsed
}), cssOverrides));
exports.SidebarMenuItemDropDownToggle = SidebarMenuItemDropDownToggle;

const SideBarMenuDivider =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "SideBarComponents__SideBarMenuDivider",
  componentId: "sc-1afcl1g-6"
})(({
  isSideBarCollapsed = false
}) => (0, _styledComponents.css)(["background:", ";height:1px;margin:15px 12px 16px;flex-shrink:0;transition:margin ", " ", "ms;", ";"], (0, _exports.getColor)(_exports.Colors.Grey90), (0, _exports.ease)(isSideBarCollapsed), sideBarCollapsedTransitionDuration, isSideBarCollapsed && (0, _styledComponents.css)(["margin-left:0px;margin-right:0px;"])));

exports.SideBarMenuDivider = SideBarMenuDivider;

var _StyledText =
/*#__PURE__*/
(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "SideBarComponents___StyledText",
  componentId: "sc-1afcl1g-7"
})(["", " justify-content:center;transition:margin ", " ", "ms;margin-left:", "px;margin-right:", "px;"], p => p._css6, p => p._css7, sideBarCollapsedTransitionDuration, p => p._css8, p => p._css9);

var _StyledSpan =
/*#__PURE__*/
_styledComponents.default.span.withConfig({
  displayName: "SideBarComponents___StyledSpan",
  componentId: "sc-1afcl1g-8"
})(["display:inline-flex;margin:0 auto;pointer-events:none;overflow:hidden;transition:flex ", " ", "ms;flex-grow:", ";"], p => p._css10, sideBarCollapsedTransitionDuration, p => p._css11);

var _StyledSpan2 =
/*#__PURE__*/
_styledComponents.default.span.withConfig({
  displayName: "SideBarComponents___StyledSpan2",
  componentId: "sc-1afcl1g-9"
})(["overflow:hidden;transition:all ", " ", "ms;", " ", ""], p => p._css12, sideBarCollapsedTransitionDuration, p => p._css13, p => p._css14);

const SideBarMenuHeader = ({
  header,
  isSideBarCollapsed
}) => _react.default.createElement(_StyledText, {
  fontSize: _exports.FontSizes.Title5,
  fontWeight: 500,
  margin: "0 0 16px",
  color: _exports.Colors.Black62,
  title: isSideBarCollapsed ? header : '',
  _css6: (0, _exports.flexFlow)('row'),
  _css7: (0, _exports.ease)(isSideBarCollapsed),
  _css8: isSideBarCollapsed ? '0' : '14',
  _css9: isSideBarCollapsed ? '0' : '14'
}, _react.default.createElement(_StyledSpan, {
  _css10: (0, _exports.ease)(isSideBarCollapsed),
  _css11: isSideBarCollapsed ? '0' : '1'
}, header.split(' ').map((word, index, list) => {
  return _react.default.createElement(_react.Fragment, {
    key: index
  }, _react.default.createElement("span", null, word.charAt(0)), _react.default.createElement(_StyledSpan2, {
    _css12: (0, _exports.ease)(isSideBarCollapsed),
    _css13: index < list.length - 1 && (0, _styledComponents.css)(["padding-right:0.5em;"]),
    _css14: isSideBarCollapsed && (0, _styledComponents.css)(["opacity:0;padding-right:0;text-indent:-150px;"])
  }, word.slice(1)));
})));

exports.SideBarMenuHeader = SideBarMenuHeader;

var _StyledListItem =
/*#__PURE__*/
(0, _styledComponents.default)(_List.ListItem).withConfig({
  displayName: "SideBarComponents___StyledListItem",
  componentId: "sc-1afcl1g-10"
})(["padding:0 20px;"]);

var _StyledIconButton =
/*#__PURE__*/
(0, _styledComponents.default)(_IconButton.IconButton).withConfig({
  displayName: "SideBarComponents___StyledIconButton",
  componentId: "sc-1afcl1g-11"
})(["margin-right:4px;"]);

var _StyledListItemText =
/*#__PURE__*/
(0, _styledComponents.default)(_List.ListItemText).withConfig({
  displayName: "SideBarComponents___StyledListItemText",
  componentId: "sc-1afcl1g-12"
})(["margin-left:0;"]);

const SidebarBack = ({
  to,
  title,
  byline,
  ...domProps
}) => _react.default.createElement(_StyledListItem, domProps, _react.default.createElement(_StyledIconButton, {
  icon: "circle_arrow_left",
  passedAs: _BaseLink.BaseLink,
  to: to,
  display: _buttonTypes.ButtonDisplay.Secondary,
  shape: _buttonTypes.IconButtonShape.Square
}), _react.default.createElement(_StyledListItemText, null, _react.default.createElement(_List.ListItemPrimaryText, null, title), _react.default.createElement(_List.ListItemSecondaryText, null, byline))); // tslint:enable


exports.SidebarBack = SidebarBack;