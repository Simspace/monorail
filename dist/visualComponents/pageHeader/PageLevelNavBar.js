"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageLevelNavBar = exports.PageLevelNavBarContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _flex = require("../../helpers/flex");

var _size = require("../../helpers/size");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

var _theme = require("../../helpers/theme");

var _HorizontalNavigationController = require("../../metaComponents/horizontalNavigation/HorizontalNavigationController");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TabBarIndicator is pos:abs to this element. Also we use offsetLeft on the Tab which references this position.
const PageLevelNavBarContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "PageLevelNavBar__PageLevelNavBarContainer",
  componentId: "sc-1dgpscw-0"
})(({
  theme: {
    size: {
      page
    }
  }
}) => (0, _styledComponents.css)(["", ";", ";flex-shrink:0;height:", "px;margin-top:-4px;padding:0 ", "px 0 ", "px;position:relative;"], (0, _flex.flexFlow)('row'), page.width !== 'auto' && `max-width: ${page.width + _size.sizes.page.sideSpace}px;`, _size.Sizes.DP40, _size.sizes.page.sideSpace, _size.sizes.page.sideSpace - 12));

exports.PageLevelNavBarContainer = PageLevelNavBarContainer;
const tabBarIndicatorSideWidth = 3;
const tabBarIndicatorBodyWidth = 10;
const PageLevelNavBarIndicatorContainer =
/*#__PURE__*/
(0, _styledComponents.default)(({
  left,
  width,
  duration,
  ...otherProps
}) => _react.default.createElement("div", otherProps, _react.default.createElement(PageLevelNavBarIndicatorLeft, null), _react.default.createElement(PageLevelNavBarIndicatorBody, {
  duration: duration,
  width: width
}), _react.default.createElement(PageLevelNavBarIndicatorRight, {
  duration: duration,
  width: width
})))(({
  left,
  duration
}) => (0, _styledComponents.css)(["", ";bottom:1px;height:3px;left:0;position:absolute;transition-duration:", "ms;transition-property:all;transition-timing-function:ease-in-out;transform-origin:bottom left;transform:translateX(", "px);"], (0, _flex.flexFlow)('row'), duration, left));

const PageLevelNavBarIndicatorLeft =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "PageLevelNavBar__PageLevelNavBarIndicatorLeft",
  componentId: "sc-1dgpscw-1"
})(["background:", ";border-radius:3px 0 0 0;height:100%;width:", "px;position:absolute;left:0;"], (0, _theme.getThemeColor)(_theme.ThemeColors.ApplicationPrimary), tabBarIndicatorSideWidth + 1);

const PageLevelNavBarIndicatorRight =
/*#__PURE__*/
(0, _styledComponents.default)(({
  duration,
  width,
  ...otherProps
}) => _react.default.createElement("div", otherProps))(({
  duration,
  width
}) => (0, _styledComponents.css)(["background:", ";border-radius:0 3px 0 0;height:100%;width:", "px;transition-duration:", "ms;transition-property:all;transition-timing-function:ease-in-out;transform-origin:bottom left;transform:translateX( ", "px );"], (0, _theme.getThemeColor)(_theme.ThemeColors.ApplicationPrimary), tabBarIndicatorSideWidth + 1, duration, width - tabBarIndicatorBodyWidth - tabBarIndicatorSideWidth - 1));
const PageLevelNavBarIndicatorBody =
/*#__PURE__*/
(0, _styledComponents.default)(({
  duration,
  width,
  ...otherProps
}) => _react.default.createElement("div", otherProps))(({
  duration,
  width
}) => (0, _styledComponents.css)(["background:", ";height:100%;width:", "px;transition-duration:", "ms;transition-property:all;transition-timing-function:ease-in-out;transform-origin:bottom left;transform:translateX(", "px) scaleX( ", " );"], (0, _theme.getThemeColor)(_theme.ThemeColors.ApplicationPrimary), tabBarIndicatorBodyWidth, duration, tabBarIndicatorSideWidth, (width - tabBarIndicatorSideWidth * 2) / tabBarIndicatorBodyWidth));

const PageLevelNavBar = props => {
  const {
    actions,
    children,
    activeTabIndex,
    getActiveTabIndex,
    ...domProps
  } = props;
  return _react.default.createElement(PageLevelNavBarContainer, domProps, _react.default.createElement(_HorizontalNavigationController.HorizontalNavigationController, {
    actions: actions,
    tabBarIndicator: tabIndicatorProps => _react.default.createElement(PageLevelNavBarIndicatorContainer, tabIndicatorProps),
    activeTabIndex: activeTabIndex,
    getActiveTabIndex: getActiveTabIndex
  }, children));
};

exports.PageLevelNavBar = PageLevelNavBar;