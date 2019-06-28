"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollAnimation = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _color = require("../helpers/color");

var _elevation = require("../helpers/elevation");

var _flex = require("../helpers/flex");

var _hooks = require("../helpers/hooks");

var _typeGuards = require("../sharedHelpers/typeGuards");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ScrollAnimationContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "ScrollAnimation__ScrollAnimationContainer",
  componentId: "sc-5dljvg-0"
})(["", ";overflow:hidden;height:100%;position:relative;"], (0, _flex.flexFlow)());

const ScrollContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "ScrollAnimation__ScrollContainer",
  componentId: "sc-5dljvg-1"
})(["", ";overflow-x:hidden;overflow-y:auto;height:100%;"], (0, _flex.flexFlow)());

const Shadow =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "ScrollAnimation__Shadow",
  componentId: "sc-5dljvg-2"
})(["", ";background:", ";height:16px;left:-8px;opacity:0;pointer-events:none;position:absolute;right:-8px;top:-18px;z-index:5;"], (0, _elevation.getElevationShadow)(_elevation.ElevationRange.Elevation6), (0, _color.getColor)(_color.Colors.White));

const SCROLL_AMOUNT = 128;

const ScrollAnimation = ({
  children,
  ...domProps
}) => {
  const shadow = (0, _react.useRef)(null);
  const [scrollContainer, scrollContainerRef] = (0, _hooks.useRefCallback)();

  const handleScroll = event => {
    if (!(0, _typeGuards.isNil)(event.currentTarget) && !(0, _typeGuards.isNil)(shadow)) {
      const {
        current: shadowElement
      } = shadow;

      if (!(0, _typeGuards.isNil)(shadowElement)) {
        const scrollElement = event.currentTarget;
        /* Josh don't hate me! */

        const scrollAmount = scrollElement.scrollTop; // Only change the scroll position if the opacity isn't correct, or we are under the scroll amount.

        if (scrollAmount >= SCROLL_AMOUNT && shadowElement.style.opacity !== '0.9999' || scrollAmount < SCROLL_AMOUNT) {
          requestAnimationFrame(() => {
            shadowElement.style.cssText = calculateOpacity({
              scrollAmount,
              animationTermination: SCROLL_AMOUNT
            });
          });
        }
      }
    }
  };

  (0, _hooks.useEventListener)({
    eventName: 'scroll',
    eventListener: handleScroll,
    element: scrollContainer
  });
  return _react.default.createElement(ScrollAnimationContainer, null, _react.default.createElement(Shadow, {
    ref: shadow
  }), _react.default.createElement(ScrollContainer, _extends({
    ref: scrollContainerRef
  }, domProps), children));
};

exports.ScrollAnimation = ScrollAnimation;

const calculateOpacity = ({
  scrollAmount,
  animationTermination
}) => {
  if (scrollAmount === 0) {
    return 'opacity: 0;';
  }

  if (scrollAmount >= animationTermination) {
    return 'opacity: 0.9999;';
  }

  return `opacity: ${Math.min(0.9999 / animationTermination * scrollAmount, 0.9999)};`;
};