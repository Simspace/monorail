"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageLevelNavBar = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _theme = require("../../helpers/theme");

var _HorizontalNavigationController = require("../../metaComponents/horizontalNavigation/HorizontalNavigationController");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any
// TabBarIndicator is pos:abs to this element. Also we use offsetLeft on the Tab which references this position.
const PageLevelNavBarContainer =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "PageLevelNavBar__PageLevelNavBarContainer",
  componentId: "sc-1dgpscw-0"
})(({
  cssOverrides
}) => (0, _styledComponents2.css)(["", ";background:", ";box-sizing:border-box;flex-shrink:0;height:32px;padding:0 16px;position:relative;margin-left:0;margin-right:auto;", ";"], (0, _exports.flexFlow)('row'), (0, _theme.getThemeColor)(_theme.ThemeColors.ApplicationPrimary), cssOverrides));

const tabBarIndicatorSideWidth = 21;
const tabBarIndicatorBodyWidth = 52;
const TabBarIndicatorContainer =
/*#__PURE__*/
(0, _styledComponents2.default)(({
  left,
  width,
  duration,
  ...otherProps
}) => _react.default.createElement("div", otherProps, _react.default.createElement(TabBarIndicatorLeft, {
  width: "21",
  height: "31",
  viewBox: "0 0 21 31",
  xmlns: "http://www.w3.org/2000/svg"
}, _react.default.createElement("path", {
  d: "M15.3085 3.62473L4.26866 27.2815C4.08422 27.6767 3.992 27.8743 3.88878 28.0475C3.24043 29.1356 2.11503 29.8523 0.854831 29.9797C0.6542 30 0.436134 30 0 30V31H21V0C20.8277 0 20.7416 0 20.662 0.0021127C18.4463 0.0609255 16.4436 1.3364 15.4533 3.31931C15.4178 3.39053 15.3813 3.46858 15.3085 3.62466L15.3085 3.62473Z"
})), _react.default.createElement(TabBarIndicatorBody, {
  duration: duration,
  width: width
}), _react.default.createElement(TabBarIndicatorRight, {
  duration: duration,
  width: width,
  height: "31",
  viewBox: "0 0 21 31",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, _react.default.createElement("path", {
  d: "M5.69154 3.62473L16.7313 27.2815C16.9158 27.6767 17.008 27.8743 17.1112 28.0475C17.7596 29.1356 18.885 29.8523 20.1452 29.9797C20.3458 30 20.5639 30 21 30V31H0V0C0.172295 0 0.258442 0 0.338032 0.0021127C2.55367 0.0609255 4.55642 1.3364 5.54668 3.31931C5.58224 3.39053 5.61867 3.46858 5.69151 3.62466L5.69154 3.62473Z",
  fill: "#fff"
}))))(({
  left,
  duration
}) => (0, _styledComponents2.css)(["", ";bottom:0;height:31px;left:0;position:absolute;transition-duration:", "ms;transition-property:all;transition-timing-function:ease-in-out;transform-origin:bottom left;transform:translateX(", "px) translateY(1px);"], (0, _exports.flexFlow)('row'), duration, left));

const TabBarIndicatorLeft =
/*#__PURE__*/
_styledComponents2.default.svg.withConfig({
  displayName: "PageLevelNavBar__TabBarIndicatorLeft",
  componentId: "sc-1dgpscw-1"
})(["fill:", ";height:100%;width:", "px;position:absolute;left:0;"], (0, _exports.getColor)(_exports.Colors.White), tabBarIndicatorSideWidth + 1);

const TabBarIndicatorRight =
/*#__PURE__*/
(0, _styledComponents2.default)(({
  duration,
  width,
  ...otherProps
}) => _react.default.createElement("svg", otherProps))(({
  duration,
  width
}) => (0, _styledComponents2.css)(["fill:", ";height:100%;width:", "px;transition-duration:", "ms;transition-property:all;transition-timing-function:ease-in-out;transform-origin:bottom left;transform:translateX( ", "px );"], (0, _exports.getColor)(_exports.Colors.White), tabBarIndicatorSideWidth + 1, duration, width - tabBarIndicatorBodyWidth - tabBarIndicatorSideWidth - 1));
const TabBarIndicatorBody =
/*#__PURE__*/
(0, _styledComponents2.default)(({
  duration,
  width,
  ...otherProps
}) => _react.default.createElement("div", otherProps))(({
  duration,
  width
}) => (0, _styledComponents2.css)(["background:", ";height:100%;width:", "px;transition-duration:", "ms;transition-property:all;transition-timing-function:ease-in-out;transform-origin:bottom left;transform:translateX(", "px) scaleX( ", " );"], (0, _exports.getColor)(_exports.Colors.White), tabBarIndicatorBodyWidth, duration, tabBarIndicatorSideWidth, (width - tabBarIndicatorSideWidth * 2) / tabBarIndicatorBodyWidth));

const BookEnd =
/*#__PURE__*/
_styledComponents2.default.svg.withConfig({
  displayName: "PageLevelNavBar__BookEnd",
  componentId: "sc-1dgpscw-2"
})(["fill:", ";position:absolute;top:0;right:-21px;"], (0, _theme.getThemeColor)(_theme.ThemeColors.ApplicationPrimary));

class PageLevelNavBar extends _react.Component {
  render() {
    const {
      cssOverrides,
      actions,
      children,
      activeTabIndex,
      getActiveTabIndex,
      ...domProps
    } = this.props;
    return _react.default.createElement(_StyledDiv, {
      _css: (0, _exports.flexFlow)('row')
    }, _react.default.createElement(PageLevelNavBarContainer, _extends({
      cssOverrides: cssOverrides
    }, domProps), _react.default.createElement(BookEnd, {
      height: "31",
      viewBox: "0 0 21 31",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react.default.createElement("path", {
      d: "M5.69154 3.62473L16.7313 27.2815C16.9158 27.6767 17.008 27.8743 17.1112 28.0475C17.7596 29.1356 18.885 29.8523 20.1452 29.9797C20.3458 30 20.5639 30 21 30V31H0V0C0.172295 0 0.258442 0 0.338032 0.0021127C2.55367 0.0609255 4.55642 1.3364 5.54668 3.31931C5.58224 3.39053 5.61867 3.46858 5.69151 3.62466L5.69154 3.62473Z"
    })), _react.default.createElement(_HorizontalNavigationController.HorizontalNavigationController, {
      tabBarIndicator: props => null,
      activeTabIndex: activeTabIndex,
      getActiveTabIndex: getActiveTabIndex
    }, children)), actions);
  }

} // tslint:enable


exports.PageLevelNavBar = PageLevelNavBar;
PageLevelNavBar.defaultProps = {
  size: _exports.Sizes.DP24
};

var _StyledDiv = (0, _styledComponents.default)("div")`${p => p._css};padding-right:32px;`;