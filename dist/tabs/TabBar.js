"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabBar = exports.TabBarContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _typeGuards = require("../sharedHelpers/typeGuards");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../helpers/exports");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any
// TabBarIndicator is pos:abs to this element. Also we use offsetLeft on the Tab which references this position.
const TabBarContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "TabBar__TabBarContainer",
  componentId: "sc-1hr19pz-0"
})(({
  cssOverrides,
  size
}) => (0, _styledComponents.css)(["", ";height:", "px;padding:0 8px;position:relative;box-sizing:border-box;border-bottom:1px solid ", ";flex-shrink:0;", ";"], (0, _exports.flexFlow)('row'), size, (0, _exports.getColor)(_exports.Colors.Grey94), cssOverrides));

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
})))(({
  left,
  duration
}) => (0, _styledComponents.css)(["", ";bottom:0;height:3px;left:0;position:absolute;transition-duration:", "ms;transition-property:all;transition-timing-function:ease-in-out;transform-origin:bottom left;transform:translateX(", "px);"], (0, _exports.flexFlow)('row'), duration, left));

const TabBarIndicatorLeft =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "TabBar__TabBarIndicatorLeft",
  componentId: "sc-1hr19pz-1"
})(["background:", ";border-radius:3px 0 0 0;height:100%;width:", "px;position:absolute;left:0;"], (0, _exports.getColor)(_exports.Colors.BrandLightBlue), tabBarIndicatorSideWidth + 1);

const TabBarIndicatorRight =
/*#__PURE__*/
(0, _styledComponents.default)(({
  duration,
  width,
  ...otherProps
}) => _react.default.createElement("div", otherProps))(({
  duration,
  width
}) => (0, _styledComponents.css)(["background:", ";border-radius:0 3px 0 0;height:100%;width:", "px;transition-duration:", "ms;transition-property:all;transition-timing-function:ease-in-out;transform-origin:bottom left;transform:translateX( ", "px );"], (0, _exports.getColor)(_exports.Colors.BrandLightBlue), tabBarIndicatorSideWidth + 1, duration, width - tabBarIndicatorBodyWidth - tabBarIndicatorSideWidth - 1));
const TabBarIndicatorBody =
/*#__PURE__*/
(0, _styledComponents.default)(({
  duration,
  width,
  ...otherProps
}) => _react.default.createElement("div", otherProps))(({
  duration,
  width
}) => (0, _styledComponents.css)(["background:", ";height:100%;width:", "px;transition-duration:", "ms;transition-property:all;transition-timing-function:ease-in-out;transform-origin:bottom left;transform:translateX(", "px) scaleX( ", " );"], (0, _exports.getColor)(_exports.Colors.BrandLightBlue), tabBarIndicatorBodyWidth, duration, tabBarIndicatorSideWidth, (width - tabBarIndicatorSideWidth * 2) / tabBarIndicatorBodyWidth));

const TabBarActions =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "TabBar__TabBarActions",
  componentId: "sc-1hr19pz-2"
})(["", ";align-items:center;margin-left:auto;margin-right:8px;"], (0, _exports.flexFlow)('row'));

class TabBar extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      activeTabIndex: this.props.activeTabIndex || 0,
      indicatorLeft: 0,
      indicatorTransitionDuration: 0,
      indicatorWidth: 0
    };

    this.setIndicator = (width, left) => this.setState(() => ({
      indicatorWidth: width,
      indicatorLeft: left
    }));

    this.updateActiveTab = index => {
      const {
        getActiveTabIndex
      } = this.props;
      this.setState(() => ({
        activeTabIndex: index
      }));
      getActiveTabIndex && getActiveTabIndex(index);
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // Check if the indicator needs to move, if it does set the distance of the move as the transition duration.
    if (prevState.indicatorLeft !== this.state.indicatorLeft) {
      this.setState(() => ({
        indicatorTransitionDuration: Math.abs(prevState.indicatorLeft - this.state.indicatorLeft)
      }));
    } // Check if the activeTabIndex needs to change


    if (prevProps.activeTabIndex !== this.props.activeTabIndex) {
      this.setState(() => ({
        activeTabIndex: this.props.activeTabIndex || 0
      }));
    }
  }

  renderTabs() {
    const {
      children
    } = this.props;
    const {
      activeTabIndex
    } = this.state;
    /**
     * If we're controlling the activeTabIndex with a prop,
     * then we set updateIsActive to undefined to prevent
     * automatic updates on Tab click.
     */

    return _react.default.Children.map(children, (child, index) => !(0, _typeGuards.isNil)(child) && _react.default.isValidElement(child) && _react.default.cloneElement(child, {
      index,
      isActive: index === activeTabIndex,
      setIndicator: this.setIndicator,
      updateIsActive: (0, _typeGuards.isNil)(this.props.activeTabIndex) ? this.updateActiveTab : undefined
    }));
  }

  render() {
    const {
      cssOverrides,
      size,
      actions
    } = this.props;
    const {
      indicatorLeft,
      indicatorWidth,
      indicatorTransitionDuration
    } = this.state;
    return _react.default.createElement(TabBarContainer, {
      cssOverrides: cssOverrides,
      size: size
    }, this.renderTabs(), !(0, _typeGuards.isNil)(actions) && _react.default.createElement(TabBarActions, {
      id: "tabBarActions"
    }, actions), _react.default.createElement(TabBarIndicatorContainer, {
      width: indicatorWidth,
      left: indicatorLeft,
      duration: indicatorTransitionDuration
    }));
  }

} // tslint:enable


exports.TabBar = TabBar;
TabBar.defaultProps = {
  size: _exports.Sizes.DP24
};