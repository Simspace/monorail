"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalNavigationController = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _exports = require("../../helpers/exports");

var _HorizontalNavigationItemController = require("./HorizontalNavigationItemController");

var _typeGuards = require("../../sharedHelpers/typeGuards");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any
const TabBarActions = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "HorizontalNavigationController__TabBarActions",
  componentId: "rjggc0-0"
})(["", ";align-items:center;margin-left:auto;margin-right:0;"], (0, _exports.flexFlow)('row'));

class HorizontalNavigationController extends _react.Component {
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

    return _react.default.Children.map(children, (child, index) => !(0, _typeGuards.isNil)(child) && /*#__PURE__*/_react.default.isValidElement(child) && /*#__PURE__*/_react.default.createElement(_HorizontalNavigationItemController.HorizontalNavigationItemController, {
      key: index,
      index: index,
      isActive: index === activeTabIndex,
      setIndicator: this.setIndicator,
      updateIsActive: (0, _typeGuards.isNil)(this.props.activeTabIndex) ? this.updateActiveTab : undefined,
      onClick: child.props.onClick,
      tab: props => /*#__PURE__*/_react.default.cloneElement(child, props)
    }));
  }

  render() {
    const {
      actions,
      tabBarIndicator
    } = this.props;
    const {
      indicatorLeft,
      indicatorWidth,
      indicatorTransitionDuration
    } = this.state;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.renderTabs(), !(0, _typeGuards.isNil)(actions) && /*#__PURE__*/_react.default.createElement(TabBarActions, {
      id: "tabBarActions"
    }, actions), tabBarIndicator({
      width: indicatorWidth,
      left: indicatorLeft,
      duration: indicatorTransitionDuration
    }));
  }

} // tslint:enable


exports.HorizontalNavigationController = HorizontalNavigationController;