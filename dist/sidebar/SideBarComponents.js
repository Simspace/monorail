"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideBarMenuDivider = exports.SidebarMenuContextRibbon = exports.SidebarMenuItemDropDownToggle = exports.SidebarMenuContainer = exports.SidebarContainer = exports.SidebarContainerAnimationPose = exports.sideBarCollapsedTransition = exports.sideBarCollapsedTransitionDuration = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

var _List = require("../list/List");

var _reactPose = _interopRequireDefault(require("react-pose"));

var _zindex = require("../commonStyles/zindex");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const sideBarCollapsedTransitionDuration = 150;
exports.sideBarCollapsedTransitionDuration = sideBarCollapsedTransitionDuration;

const sideBarCollapsedTransition = ({
  properties = ['all'],
  isSideBarCollapsed
}) => (0, _CommonStyles.transition)({
  properties,
  easing: (0, _CommonStyles.ease)(isSideBarCollapsed),
  duration: sideBarCollapsedTransitionDuration
});

exports.sideBarCollapsedTransition = sideBarCollapsedTransition;
let SidebarContainerAnimationPose;
exports.SidebarContainerAnimationPose = SidebarContainerAnimationPose;

(function (SidebarContainerAnimationPose) {
  SidebarContainerAnimationPose["Open"] = "open";
  SidebarContainerAnimationPose["Collapsed"] = "collapsed";
})(SidebarContainerAnimationPose || (exports.SidebarContainerAnimationPose = SidebarContainerAnimationPose = {}));

const SidebarContainer =
/*#__PURE__*/
(0, _styledComponents.default)(_reactPose.default.div({
  [SidebarContainerAnimationPose.Open]: {
    width: 224,
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
  componentId: "u2fke3-0"
})(["", ";", ";", ";background:#f4f4f7;box-sizing:border-box;flex-shrink:0;position:relative;will-change:width;&::after{background:linear-gradient( to right,rgba(0,0,0,0.1) 0px,rgba(0,0,0,0.1) 1px,rgba(0,0,0,0.05) 1px,rgba(0,0,0,0) 100% );bottom:0;content:'';position:absolute;right:-3px;top:0;width:3px;}"], (0, _CommonStyles.flexFlow)(), _CommonStyles.gothamFontFamily, (0, _zindex.zIndex)(_zindex.ZIndexNodeName.SidebarContainer));
exports.SidebarContainer = SidebarContainer;

const SidebarMenuContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "SideBarComponents__SidebarMenuContainer",
  componentId: "u2fke3-1"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";flex:1;overflow-y:auto;padding:0 8px;", ";"], (0, _CommonStyles.flexFlow)(), cssOverrides));

exports.SidebarMenuContainer = SidebarMenuContainer;
const SidebarMenuItemDropDownToggle =
/*#__PURE__*/
(0, _styledComponents.default)(({
  title,
  subtitle,
  iconName,
  isOpen,
  cssOverrides,
  isSideBarCollapsed,
  ...otherProps
}) => _react.default.createElement(_List.ListItem, _extends({
  cssOverrides: (0, _styledComponents.css)(["", ";", ";"], (0, _CommonStyles.borderRadius)(_CommonStyles.BorderRadius.Medium), cssOverrides),
  size: _CommonStyles.Sizes.DP40
}, otherProps), _react.default.createElement(_List.ListItemGraphic, {
  icon: iconName,
  cssOverrides: (0, _styledComponents.css)(["color:currentColor;transform:translateX(", "px);transition:all ease 75ms,transform ", " ", "ms;"], isSideBarCollapsed ? -6 : 0, (0, _CommonStyles.ease)(isSideBarCollapsed), sideBarCollapsedTransitionDuration)
}), _react.default.createElement(_List.ListItemText, null, _react.default.createElement(_List.ListItemPrimaryText, null, title), _react.default.createElement(_List.ListItemSecondaryText, {
  cssOverrides: isOpen && (0, _styledComponents.css)(["color:", ";"], (0, _CommonStyles.colors)(_CommonStyles.Colors.AccentPurple700))
}, subtitle)), _react.default.createElement(_List.ListItemGraphic, {
  icon: isOpen ? 'arrow_drop_up' : 'arrow_drop_down',
  cssOverrides: (0, _styledComponents.css)(["transform:translateX(", "px);transition:all ease 75ms,transform ", " ", "ms;"], isSideBarCollapsed ? -18 : 0, (0, _CommonStyles.ease)(isSideBarCollapsed), sideBarCollapsedTransitionDuration)
})))(({
  isOpen,
  isSideBarCollapsed,
  cssOverrides,
  disabled
}) => (0, _styledComponents.css)(["", ";background:", ";margin:0 8px 8px;border:1px solid ", ";color:", ";&:hover,&:active{background:", ";}&:hover{border-color:", ";}&:active{border-color:", ";color:", ";}&:active,&:active ", "{color:", ";}", "{", ";", ";}", ";"], disabled && _CommonStyles.baseDisabledStyles, (0, _CommonStyles.colors)(_CommonStyles.Colors.White), isOpen ? (0, _CommonStyles.colors)(_CommonStyles.Colors.AccentPurple700) : (0, _CommonStyles.colors)(_CommonStyles.Colors.White), isOpen ? (0, _CommonStyles.colors)(_CommonStyles.Colors.AccentPurple700) : (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandDarkBlue), (0, _CommonStyles.colors)(_CommonStyles.Colors.White), !isOpen && (0, _CommonStyles.colors)(_CommonStyles.Colors.AccentPurple500), (0, _CommonStyles.colors)(_CommonStyles.Colors.AccentPurple700), (0, _CommonStyles.colors)(_CommonStyles.Colors.AccentPurple700), _List.ListItemGraphic, (0, _CommonStyles.colors)(_CommonStyles.Colors.AccentPurple700), _List.ListItemText, (0, _CommonStyles.visible)(!isSideBarCollapsed), sideBarCollapsedTransition({
  isSideBarCollapsed
}), cssOverrides));
exports.SidebarMenuItemDropDownToggle = SidebarMenuItemDropDownToggle;

const SidebarMenuContextRibbon =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "SideBarComponents__SidebarMenuContextRibbon",
  componentId: "u2fke3-2"
})(["", ";color:", ";"], (0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title5, '12px 12px 13px 20px'), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black62));

exports.SidebarMenuContextRibbon = SidebarMenuContextRibbon;

const SideBarMenuDivider =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "SideBarComponents__SideBarMenuDivider",
  componentId: "u2fke3-3"
})(["background:#e2e4ea;height:1px;margin:15px 8px 16px;flex-shrink:0;"]);

exports.SideBarMenuDivider = SideBarMenuDivider;