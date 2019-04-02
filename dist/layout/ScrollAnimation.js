"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollAnimation = void 0;

var _react = require("react");

var _typeGuards = require("../sharedHelpers/typeGuards");

class ScrollAnimation extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      hasEventHandler: false
    };

    this.handleScroll = event => {
      const {
        animationTermination,
        animatingElement: {
          current: animatingElement
        },
        animationFunction
      } = this.props;

      if (!(0, _typeGuards.isNil)(event.currentTarget) && !(0, _typeGuards.isNil)(animatingElement)) {
        const scrollElement = event.currentTarget;
        /* Josh don't hate me! */

        const scrollAmount = scrollElement.scrollTop;
        requestAnimationFrame(() => {
          if (scrollAmount <= animationTermination) {
            animatingElement.style.cssText = animationFunction({
              scrollAmount,
              animationTermination
            });
          }
        });
      }
    };
  }

  componentDidMount() {
    const {
      scrollContainer
    } = this.props;
    const {
      hasEventHandler
    } = this.state;

    if (!hasEventHandler && !(0, _typeGuards.isNil)(scrollContainer.current)) {
      this.setState(() => ({
        hasEventHandler: true
      }));
      scrollContainer.current.addEventListener('scroll', this.handleScroll);
    }
  }

  componentDidUpdate() {
    const {
      scrollContainer: {
        current: scrollContainer
      }
    } = this.props;
    const {
      hasEventHandler
    } = this.state;

    if (!hasEventHandler && !(0, _typeGuards.isNil)(scrollContainer)) {
      this.setState(() => ({
        hasEventHandler: true
      }));
      scrollContainer.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    const {
      scrollContainer: {
        current: scrollContainer
      }
    } = this.props;

    if (!(0, _typeGuards.isNil)(scrollContainer)) {
      scrollContainer.removeEventListener('scroll', this.handleScroll);
    }
  }

  render() {
    const {
      children
    } = this.props;
    return children;
  }

}

exports.ScrollAnimation = ScrollAnimation;