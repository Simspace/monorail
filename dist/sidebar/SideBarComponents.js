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

const SidebarContainer = (0, _styledComponents.default)(_reactPose.default.div({
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
}))`
  ${(0, _CommonStyles.flexFlow)()};
  ${_CommonStyles.gothamFontFamily};

  background: #f4f4f7;
  box-sizing: border-box;
  flex-shrink: 0;
  position: relative;
  z-index: 5;

  will-change: width;

  &::after {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1) 0px,
      rgba(0, 0, 0, 0.1) 1px,
      rgba(0, 0, 0, 0.05) 1px,
      rgba(0, 0, 0, 0) 100%
    );
    bottom: 0;
    content: '';
    position: absolute;
    right: -3px;
    top: 0;
    width: 3px;
  }
`;
exports.SidebarContainer = SidebarContainer;
const SidebarMenuContainer = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.flexFlow)()};

  flex: 1;
  overflow-y: auto;
  padding: 0 8px;

  ${({
  css: cssOverride
}) => cssOverride};
`;
exports.SidebarMenuContainer = SidebarMenuContainer;
const SidebarMenuItemDropDownToggle = (0, _styledComponents.default)(({
  title,
  subtitle,
  iconName,
  isOpen,
  css: cssOverrides,
  isSideBarCollapsed,
  ...otherProps
}) => _react.default.createElement(_List.ListItem, _extends({
  css: _styledComponents.css`
        ${(0, _CommonStyles.borderRadius)(_CommonStyles.BorderRadius.Medium)};
        ${cssOverrides};
      `,
  size: _CommonStyles.Sizes.DP40
}, otherProps), _react.default.createElement(_List.ListItemGraphic, {
  icon: iconName,
  css: _styledComponents.css`
          color: currentColor;

          transform: translateX(${isSideBarCollapsed ? -6 : 0}px);

          transition: all ease 75ms,
            transform ${(0, _CommonStyles.ease)(isSideBarCollapsed)}
              ${sideBarCollapsedTransitionDuration}ms;
        `
}), _react.default.createElement(_List.ListItemText, null, _react.default.createElement(_List.ListItemPrimaryText, null, title), _react.default.createElement(_List.ListItemSecondaryText, {
  css: isOpen && _styledComponents.css`
              color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.AccentPurple700)};
            `
}, subtitle)), _react.default.createElement(_List.ListItemGraphic, {
  icon: isOpen ? 'arrow_drop_up' : 'arrow_drop_down',
  css: _styledComponents.css`
          transform: translateX(${isSideBarCollapsed ? -18 : 0}px);

          transition: all ease 75ms,
            transform ${(0, _CommonStyles.ease)(isSideBarCollapsed)}
              ${sideBarCollapsedTransitionDuration}ms;
        `
})))`
  ${({
  isOpen,
  isSideBarCollapsed,
  css: cssOverrides,
  disabled
}) => _styledComponents.css`
    ${disabled && _CommonStyles.baseDisabledStyles}

    background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
    margin: 0 8px 8px;
    border: 1px solid
      ${isOpen ? (0, _CommonStyles.colors)(_CommonStyles.Colors.AccentPurple700) : (0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
    color: ${isOpen ? (0, _CommonStyles.colors)(_CommonStyles.Colors.AccentPurple700) : (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandDarkBlue)};

    &:hover,
    &:active {
      background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
    }

    &:hover {
      border-color: ${!isOpen && (0, _CommonStyles.colors)(_CommonStyles.Colors.AccentPurple500)};
    }

    &:active {
      border-color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.AccentPurple700)};
      color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.AccentPurple700)};
    }

    &:active,
    &:active ${_List.ListItemGraphic} { /* stylelint-disable-line selector-type-no-unknown */
      color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.AccentPurple700)};
    }

    ${_List.ListItemText} {
      ${(0, _CommonStyles.visible)(!isSideBarCollapsed)};
      ${sideBarCollapsedTransition({
  isSideBarCollapsed
})};
    }

    ${cssOverrides};
  `};
`;
exports.SidebarMenuItemDropDownToggle = SidebarMenuItemDropDownToggle;
const SidebarMenuContextRibbon = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title5, '12px 12px 13px 20px')};

  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black62)};
`;
exports.SidebarMenuContextRibbon = SidebarMenuContextRibbon;
const SideBarMenuDivider = (0, _styledComponents.default)('div')`
  background: #e2e4ea;
  height: 1px;
  margin: 15px 8px 16px;
  flex-shrink: 0;
`;
exports.SideBarMenuDivider = SideBarMenuDivider;