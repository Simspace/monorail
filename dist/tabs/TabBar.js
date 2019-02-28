"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabBar = exports.TabBarContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _primitiveGuards = require("../../CoreUtils/primitive-guards");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CommonStyles = require("../../CommonStyles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// TabBarIndicator is pos:abs to this element. Also we use offsetLeft on the Tab which references this position.
const TabBarContainer = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.flexFlow)('row')};

  height: ${({
  size
}) => size}px;
  padding: 0 8px;
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Grey94)};
  flex-shrink: 0;

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
exports.TabBarContainer = TabBarContainer;
const TabBarIndicator = (0, _styledComponents.default)('div')`
  ${({
  left,
  width,
  duration
}) => _styledComponents.css`
    left: ${left}px;
    width: ${width}px;
    transition-duration: ${duration * 1.4}ms;
  `};

  background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue)};
  border-radius: 3px 3px 0 0;
  bottom: 0;
  height: 3px;
  position: absolute;
  transition-property: all;
  transition-timing-function: ease-in-out;
`;
const TabBarActions = _styledComponents.default.div`
  ${(0, _CommonStyles.flexFlow)('row')};

  align-items: center;
  margin-left: auto;
  margin-right: 8px;
`;

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

    return _react.default.Children.map(children, (child, index) => !(0, _primitiveGuards.isNil)(child) && _react.default.isValidElement(child) && _react.default.cloneElement(child, {
      index,
      isActive: index === activeTabIndex,
      setIndicator: this.setIndicator,
      updateIsActive: (0, _primitiveGuards.isNil)(this.props.activeTabIndex) ? this.updateActiveTab : undefined
    }));
  }

  render() {
    const {
      css: cssOverrides,
      size,
      actions
    } = this.props;
    const {
      indicatorLeft,
      indicatorWidth,
      indicatorTransitionDuration
    } = this.state;
    return _react.default.createElement(TabBarContainer, {
      css: cssOverrides,
      size: size
    }, this.renderTabs(), !(0, _primitiveGuards.isNil)(actions) && _react.default.createElement(TabBarActions, {
      id: "tabBarActions"
    }, actions), _react.default.createElement(TabBarIndicator, {
      width: indicatorWidth,
      left: indicatorLeft,
      duration: indicatorTransitionDuration
    }));
  }

}

exports.TabBar = TabBar;
TabBar.defaultProps = {
  size: _CommonStyles.Sizes.DP24
};