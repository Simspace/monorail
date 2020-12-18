"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideBarMenuHeader = exports.SideBarMenuDivider = exports.SidebarMenuItemDropDownToggle = exports.SidebarMenuContainer = exports.SidebarMenuContainerFullWidth = exports.SidebarBack = exports.SidebarContainer = exports.SidebarContainerAnimationPose = exports.sideBarCollapsedTransition = exports.sideBarCollapsedTransitionDuration = void 0;

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

const SidebarContainer = /*#__PURE__*/(0, _styledComponents.default)(_reactPose.default.div({
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
})(["", ";", ";", ";background-color:#f4f4f7;", ";box-sizing:border-box;flex-shrink:0;position:relative;will-change:width;&::after{background:linear-gradient( to right,rgba(0,0,0,0.1) 0px,rgba(0,0,0,0.1) 1px,rgba(0,0,0,0.05) 1px,rgba(0,0,0,0) 100% );bottom:0;content:'';position:absolute;right:-3px;top:0;width:3px;}"], (0, _exports.flexFlow)(), _exports.gothamFontFamily, (0, _zIndex.zIndex)(_zIndex.ZIndexNodeName.SidebarContainer), props => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return props.backgroundColor;
});
/* eslint-enable no-unexpected-multiline */

exports.SidebarContainer = SidebarContainer;

var _StyledListItem = /*#__PURE__*/(0, _styledComponents.default)(_List.ListItem).withConfig({
  displayName: "SideBarComponents___StyledListItem",
  componentId: "sc-1afcl1g-1"
})(["padding:0 20px;"]);

var _StyledIconButton = /*#__PURE__*/(0, _styledComponents.default)(_IconButton.IconButton).withConfig({
  displayName: "SideBarComponents___StyledIconButton",
  componentId: "sc-1afcl1g-2"
})(["margin-right:4px;"]);

var _StyledListItemText = /*#__PURE__*/(0, _styledComponents.default)(_List.ListItemText).withConfig({
  displayName: "SideBarComponents___StyledListItemText",
  componentId: "sc-1afcl1g-3"
})(["margin-left:0;"]);

const SidebarBack = ({
  to,
  title,
  byline,
  display = _buttonTypes.ButtonDisplay.Secondary,
  shape = _buttonTypes.IconButtonShape.Square,
  ...domProps
}) => /*#__PURE__*/_react.default.createElement(_StyledListItem, domProps, /*#__PURE__*/_react.default.createElement(_StyledIconButton, {
  icon: "circle_arrow_left",
  passedAs: _BaseLink.BaseLink,
  to: to,
  display: display,
  shape: shape
}), /*#__PURE__*/_react.default.createElement(_StyledListItemText, null, /*#__PURE__*/_react.default.createElement(_List.ListItemPrimaryText, null, title), /*#__PURE__*/_react.default.createElement(_List.ListItemSecondaryText, null, byline)));

exports.SidebarBack = SidebarBack;

const SidebarMenuContainerFullWidth = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "SideBarComponents__SidebarMenuContainerFullWidth",
  componentId: "sc-1afcl1g-4"
})(() => (0, _styledComponents.css)(["height:unset;padding:0;flex:0;", "{margin:0;}"], SideBarMenuDivider));

exports.SidebarMenuContainerFullWidth = SidebarMenuContainerFullWidth;
const SidebarMenuContainer = /*#__PURE__*/(0, _styledComponents.default)(_ScrollAnimation.ScrollAnimation).withConfig({
  displayName: "SideBarComponents__SidebarMenuContainer",
  componentId: "sc-1afcl1g-5"
})(({
  isSideBarCollapsed
}) => (0, _styledComponents.css)(["padding:0 12px;", "{margin-left:0;margin-right:0;}", ";"], SideBarMenuDivider, isSideBarCollapsed && (0, _styledComponents.css)(["", "{margin-left:-12px;margin-right:-12px;}"], SideBarMenuDivider)));
exports.SidebarMenuContainer = SidebarMenuContainer;

var _StyledListItemGraphic = /*#__PURE__*/(0, _styledComponents.default)(_List.ListItemGraphic).withConfig({
  displayName: "SideBarComponents___StyledListItemGraphic",
  componentId: "sc-1afcl1g-6"
})(["color:currentColor;transform:translateX(", "px);transition:all ease 75ms,transform ", " ", "ms;"], p => p._css, p => p._css2, sideBarCollapsedTransitionDuration);

var _StyledListItemSecondaryText = /*#__PURE__*/(0, _styledComponents.default)(_List.ListItemSecondaryText).withConfig({
  displayName: "SideBarComponents___StyledListItemSecondaryText",
  componentId: "sc-1afcl1g-7"
})(["", ""], p => p._css3);

var _StyledListItemGraphic2 = /*#__PURE__*/(0, _styledComponents.default)(_List.ListItemGraphic).withConfig({
  displayName: "SideBarComponents___StyledListItemGraphic2",
  componentId: "sc-1afcl1g-8"
})(["transform:translateX(", "px);transition:all ease 75ms,transform ", " ", "ms;"], p => p._css4, p => p._css5, sideBarCollapsedTransitionDuration);

const SidebarMenuItemDropDownToggle = /*#__PURE__*/(0, _styledComponents.default)(({
  title,
  subtitle,
  iconName,
  isActive,
  isSideBarCollapsed,
  ...domProps
}) => /*#__PURE__*/_react.default.createElement(_List.ListItem, _extends({
  size: _exports.Sizes.DP40
}, domProps), /*#__PURE__*/_react.default.createElement(_StyledListItemGraphic, {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  icon: iconName,
  _css: isSideBarCollapsed ? -10 : 0,
  _css2: (0, _exports.ease)(isSideBarCollapsed)
}), /*#__PURE__*/_react.default.createElement(_List.ListItemText, null, /*#__PURE__*/_react.default.createElement(_List.ListItemPrimaryText, null, title), /*#__PURE__*/_react.default.createElement(_StyledListItemSecondaryText, {
  _css3: // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  isActive && (0, _styledComponents.css)(["color:", ";"], (0, _exports.getColor)(_exports.Colors.AccentPurple700))
}, subtitle)), /*#__PURE__*/_react.default.createElement(_StyledListItemGraphic2, {
  icon: isActive ? 'arrow_drop_up' : 'arrow_drop_down',
  _css4: isSideBarCollapsed ? -24 : 0,
  _css5: (0, _exports.ease)(isSideBarCollapsed)
}))).withConfig({
  displayName: "SideBarComponents__SidebarMenuItemDropDownToggle",
  componentId: "sc-1afcl1g-9"
})(({
  isActive,
  isSideBarCollapsed,
  cssOverrides,
  disabled
}) => (0, _styledComponents.css)(["", ";", ";background:", ";margin:0 12px 8px;border:1px solid ", ";color:", ";&:hover,&:active{background:", ";}&:hover{border-color:", ";}&:active{border-color:", ";color:", ";}&:active,&:active ", "{color:", ";}", "{", ";", ";}", ";"], disabled && _exports.baseDisabledStyles, (0, _exports.borderRadius)(_exports.BorderRadius.Medium), (0, _exports.getColor)(_exports.Colors.White), isActive ? (0, _exports.getColor)(_exports.Colors.AccentPurple700) : (0, _exports.getColor)(_exports.Colors.White), isActive ? (0, _exports.getColor)(_exports.Colors.AccentPurple700) : (0, _exports.getColor)(_exports.Colors.BrandDarkBlue), (0, _exports.getColor)(_exports.Colors.White), !isActive && (0, _exports.getColor)(_exports.Colors.AccentPurple500), (0, _exports.getColor)(_exports.Colors.AccentPurple700), (0, _exports.getColor)(_exports.Colors.AccentPurple700), _List.StyledListItemIcon, (0, _exports.getColor)(_exports.Colors.AccentPurple700), _List.ListItemText, (0, _exports.visible)(!isSideBarCollapsed),
/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
sideBarCollapsedTransition({
  isSideBarCollapsed
}), cssOverrides));
exports.SidebarMenuItemDropDownToggle = SidebarMenuItemDropDownToggle;

const SideBarMenuDivider = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "SideBarComponents__SideBarMenuDivider",
  componentId: "sc-1afcl1g-10"
})(({
  isSideBarCollapsed = false
}) => (0, _styledComponents.css)(["background:", ";height:1px;margin:15px 12px 16px;flex-shrink:0;transition:margin ", " ", "ms;", ";"], (0, _exports.getColor)(_exports.Colors.Grey90), (0, _exports.ease)(isSideBarCollapsed), sideBarCollapsedTransitionDuration, isSideBarCollapsed && (0, _styledComponents.css)(["margin-left:0px;margin-right:0px;"])));

exports.SideBarMenuDivider = SideBarMenuDivider;

var _StyledText = /*#__PURE__*/(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "SideBarComponents___StyledText",
  componentId: "sc-1afcl1g-11"
})(["", " ", ";transition:margin ", " ", "ms;margin-left:", "px;margin-right:", "px;", ""], p => p._css6, p => p._css7, p => p._css8, sideBarCollapsedTransitionDuration, p => p._css9, p => p._css10, p => p._css11);

var _StyledSpan = /*#__PURE__*/(0, _styledComponents.default)("span").withConfig({
  displayName: "SideBarComponents___StyledSpan",
  componentId: "sc-1afcl1g-12"
})(["display:inline-flex;margin:0 auto;pointer-events:none;overflow:hidden;transition:flex ", " ", "ms;flex-grow:", ";"], p => p._css12, sideBarCollapsedTransitionDuration, p => p._css13);

var _StyledSpan2 = /*#__PURE__*/(0, _styledComponents.default)("span").withConfig({
  displayName: "SideBarComponents___StyledSpan2",
  componentId: "sc-1afcl1g-13"
})(["overflow:hidden;transition:all ", " ", "ms;", " ", ""], p => p._css14, sideBarCollapsedTransitionDuration, p => p._css15, p => p._css16);

const SideBarMenuHeader = ({
  header,
  isSideBarCollapsed,
  fontSize = _exports.FontSizes.Title5,
  cssOverrides
}) => /*#__PURE__*/_react.default.createElement(_StyledText, {
  fontSize: fontSize,
  fontWeight: 500,
  margin: "0 0 16px",
  color: _exports.Colors.Black62a,
  _css6: (0, _exports.flexFlow)('row'),
  _css7: isSideBarCollapsed && `justify-content: center;`,
  _css8: (0, _exports.ease)(isSideBarCollapsed),
  _css9: isSideBarCollapsed ? '0' : '14',
  _css10: isSideBarCollapsed ? '0' : '14',
  _css11: cssOverrides
}, /*#__PURE__*/_react.default.createElement(_StyledSpan, {
  _css12: (0, _exports.ease)(isSideBarCollapsed),
  _css13: isSideBarCollapsed ? '0' : '1'
}, header.split(' ').map((word, index, list) => {
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
    key: index
  }, /*#__PURE__*/_react.default.createElement("span", null, word.charAt(0)), /*#__PURE__*/_react.default.createElement(_StyledSpan2, {
    _css14: (0, _exports.ease)(isSideBarCollapsed),
    _css15: index < list.length - 1 && (0, _styledComponents.css)(["transition:padding-right 0s ease 0s;padding-right:0.5em;"]),
    _css16: isSideBarCollapsed && (0, _styledComponents.css)(["opacity:0;padding-right:0;text-indent:-150px;"])
  }, word.slice(1)));
})));

exports.SideBarMenuHeader = SideBarMenuHeader;