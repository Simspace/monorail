"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabBar = exports.TabBarContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../../helpers/exports");

var _HorizontalNavigationController = require("../../metaComponents/horizontalNavigation/HorizontalNavigationController");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const TabBarContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "TabBar__TabBarContainer",
  componentId: "sc-11kgcy6-0"
})(({
  cssOverrides,
  size
}) => (0, _styledComponents.css)(["", ";height:", "px;padding:0 8px;position:relative;box-sizing:border-box;flex-shrink:0;&::after{background:", ";position:absolute;bottom:0;left:0;right:0;content:'';height:1px;}", ";"], (0, _exports.flexFlow)('row'), size, (0, _exports.getColor)(_exports.Colors.Grey94), cssOverrides));

exports.TabBarContainer = TabBarContainer;
const tabBarIndicatorSideWidth = 3;
const tabBarIndicatorBodyWidth = 10;
const TabBarIndicatorContainer =
/*#__PURE__*/
(0, _styledComponents.default)(({
  left,
  width,
  duration,
  ...otherProps
}) => _react.default.createElement("div", otherProps, _react.default.createElement(TabBarIndicatorLeft, null), _react.default.createElement(TabBarIndicatorBody, {
  duration: duration,
  width: width
}), _react.default.createElement(TabBarIndicatorRight, {
  duration: duration,
  width: width
}))).withConfig({
  displayName: "TabBar__TabBarIndicatorContainer",
  componentId: "sc-11kgcy6-1"
})(({
  left,
  duration
}) => (0, _styledComponents.css)(["", ";", ";bottom:0;height:3px;left:0;position:absolute;transition-duration:", "ms;transition-property:all;transition-timing-function:ease-in-out;transform-origin:bottom left;transform:translateX(", "px);"], (0, _exports.flexFlow)('row'), (0, _exports.zIndex)(_exports.ZIndexNodeName.TabBarIndicator), duration, left));

const TabBarIndicatorLeft =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "TabBar__TabBarIndicatorLeft",
  componentId: "sc-11kgcy6-2"
})(["background:", ";border-radius:3px 0 0 0;height:100%;width:", "px;position:absolute;left:0;"], (0, _exports.getColor)(_exports.Colors.BrandLightBlue), tabBarIndicatorSideWidth + 1);

const TabBarIndicatorRight =
/*#__PURE__*/
(0, _styledComponents.default)(({
  duration,
  width,
  ...otherProps
}) => _react.default.createElement("div", otherProps)).withConfig({
  displayName: "TabBar__TabBarIndicatorRight",
  componentId: "sc-11kgcy6-3"
})(({
  duration,
  width
}) => (0, _styledComponents.css)(["background:", ";border-radius:0 3px 0 0;height:100%;width:", "px;transition-duration:", "ms;transition-property:all;transition-timing-function:ease-in-out;transform-origin:bottom left;transform:translateX( ", "px );"], (0, _exports.getColor)(_exports.Colors.BrandLightBlue), tabBarIndicatorSideWidth + 1, duration, width - tabBarIndicatorBodyWidth - tabBarIndicatorSideWidth - 1));
const TabBarIndicatorBody =
/*#__PURE__*/
(0, _styledComponents.default)(({
  duration,
  width,
  ...otherProps
}) => _react.default.createElement("div", otherProps)).withConfig({
  displayName: "TabBar__TabBarIndicatorBody",
  componentId: "sc-11kgcy6-4"
})(({
  duration,
  width
}) => (0, _styledComponents.css)(["background:", ";height:100%;width:", "px;transition-duration:", "ms;transition-property:all;transition-timing-function:ease-in-out;transform-origin:bottom left;transform:translateX(", "px) scaleX( ", " );"], (0, _exports.getColor)(_exports.Colors.BrandLightBlue), tabBarIndicatorBodyWidth, duration, tabBarIndicatorSideWidth, (width - tabBarIndicatorSideWidth * 2) / tabBarIndicatorBodyWidth));

class TabBar extends _react.Component {
  render() {
    const {
      cssOverrides,
      size,
      actions,
      children,
      activeTabIndex,
      getActiveTabIndex,
      ...domProps
    } = this.props;
    return _react.default.createElement(TabBarContainer, _extends({
      cssOverrides: cssOverrides,
      size: size
    }, domProps), _react.default.createElement(_HorizontalNavigationController.HorizontalNavigationController, {
      actions: actions,
      tabBarIndicator: props => _react.default.createElement(TabBarIndicatorContainer, props),
      activeTabIndex: activeTabIndex,
      getActiveTabIndex: getActiveTabIndex
    }, children));
  }

} // tslint:enable


exports.TabBar = TabBar;
TabBar.defaultProps = {
  size: _exports.Sizes.DP24
};