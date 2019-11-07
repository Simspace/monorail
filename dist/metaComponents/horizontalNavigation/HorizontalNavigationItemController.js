"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalNavigationItemController = void 0;

var _react = require("react");

var _reactDom = require("react-dom");

var _typeGuards = require("../../sharedHelpers/typeGuards");

class HorizontalNavigationItemController extends _react.Component {
  constructor(...args) {
    super(...args);
    this.tabRef = (0, _react.createRef)();

    this.callSetIndicator = () => {
      const {
        isActive,
        setIndicator
      } = this.props;

      if (isActive && !(0, _typeGuards.isNil)(this.tabRef.current)) {
        const tabElement = (0, _reactDom.findDOMNode)(this.tabRef.current);

        if (!(0, _typeGuards.isNil)(tabElement)) {
          const tabClientRect = tabElement.getBoundingClientRect();
          const parentClientRect = tabElement.parentElement ? tabElement.parentElement.getBoundingClientRect() : {
            left: 0
          };
          setIndicator(tabClientRect.width, tabClientRect.left - parentClientRect.left);
        }
      }
    };

    this.onClick = event => {
      const {
        updateIsActive,
        onClick,
        index
      } = this.props;

      if (!(0, _typeGuards.isNil)(updateIsActive) && !(0, _typeGuards.isNil)(index)) {
        updateIsActive(index);
      }

      if (!(0, _typeGuards.isNil)(onClick)) {
        onClick(event);
      }
    };
  }

  componentDidMount() {
    this.callSetIndicator();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isActive !== this.props.isActive) {
      this.callSetIndicator();
    }
  }

  render() {
    const {
      tab
    } = this.props;
    return tab({
      onClick: this.onClick,
      ref: this.tabRef
    });
  }

}

exports.HorizontalNavigationItemController = HorizontalNavigationItemController;
HorizontalNavigationItemController.defaultProps = {
  isActive: false
};