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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TabBarIndicator is pos:abs to this element. Also we use offsetLeft on the Tab which references this position.
const PageLevelNavBarContainer = _styledComponents.default.div(({
  theme: {
    size: {
      page
    }
  }
}) => (0, _styledComponents.css)`
    ${(0, _flex.flexFlow)('row')};

    ${page.width !== 'auto' && `max-width: ${page.width + _size.sizes.page.sideSpace * 2}px;`};

    flex-shrink: 0;
    height: ${_size.Sizes.DP40}px;
    margin-top: -4px;
    padding: 0 ${_size.sizes.page.sideSpace}px 0 ${_size.sizes.page.sideSpace - 12}px;
    position: relative;
  `);

exports.PageLevelNavBarContainer = PageLevelNavBarContainer;
const tabBarIndicatorSideWidth = 3;
const tabBarIndicatorBodyWidth = 10;
const PageLevelNavBarIndicatorContainer = (0, _styledComponents.default)(({
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
}) => (0, _styledComponents.css)`
    ${(0, _flex.flexFlow)('row')};
    bottom: 1px;
    height: 3px;
    left: 0;
    position: absolute;
    transition-duration: ${duration}ms;
    transition-property: all;
    transition-timing-function: ease-in-out;
    transform-origin: bottom left;

    transform: translateX(${left}px);
  `);
const PageLevelNavBarIndicatorLeft = _styledComponents.default.div`
  background: ${(0, _theme.getThemeColor)(_theme.ThemeColors.ApplicationPrimary)};
  border-radius: 3px 0 0 0;
  height: 100%;
  width: ${tabBarIndicatorSideWidth + 1}px;
  position: absolute;
  left: 0;
`;
const PageLevelNavBarIndicatorRight = (0, _styledComponents.default)(({
  duration,
  width,
  ...otherProps
}) => _react.default.createElement("div", otherProps))(({
  duration,
  width
}) => (0, _styledComponents.css)`
    background: ${(0, _theme.getThemeColor)(_theme.ThemeColors.ApplicationPrimary)};
    border-radius: 0 3px 0 0;
    height: 100%;
    width: ${tabBarIndicatorSideWidth + 1}px;
    transition-duration: ${duration}ms;
    transition-property: all;
    transition-timing-function: ease-in-out;
    transform-origin: bottom left;

    transform: translateX(
      ${width - tabBarIndicatorBodyWidth - tabBarIndicatorSideWidth - 1}px
    );
  `);
const PageLevelNavBarIndicatorBody = (0, _styledComponents.default)(({
  duration,
  width,
  ...otherProps
}) => _react.default.createElement("div", otherProps))(({
  duration,
  width
}) => (0, _styledComponents.css)`
    background: ${(0, _theme.getThemeColor)(_theme.ThemeColors.ApplicationPrimary)};
    height: 100%;
    width: ${tabBarIndicatorBodyWidth}px;
    transition-duration: ${duration}ms;
    transition-property: all;
    transition-timing-function: ease-in-out;
    transform-origin: bottom left;

    transform: translateX(${tabBarIndicatorSideWidth}px)
      scaleX(
        ${(width - tabBarIndicatorSideWidth * 2) / tabBarIndicatorBodyWidth}
      );
  `);

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
    tabBarIndicator: tabIndicatorProps => _react.default.Children.toArray(children).filter(child => !!child).length > 0 ? _react.default.createElement(PageLevelNavBarIndicatorContainer, tabIndicatorProps) : null,
    activeTabIndex: activeTabIndex,
    getActiveTabIndex: getActiveTabIndex
  }, children));
};

exports.PageLevelNavBar = PageLevelNavBar;