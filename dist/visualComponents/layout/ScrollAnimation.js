"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollAnimation = void 0;

var _react = _interopRequireWildcard(require("react"));

var _color = require("../../helpers/color");

var _elevation = require("../../helpers/elevation");

var _flex = require("../../helpers/flex");

var _hooks = require("../../helpers/hooks");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

var _typeGuards = require("../../sharedHelpers/typeGuards");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ScrollAnimationContainer = _styledComponents.default.div(({
  containerCssOverrides
}) => (0, _styledComponents.css)`
    ${(0, _flex.flexFlow)()};

    overflow: hidden;
    height: 100%;

    position: relative;

    ${containerCssOverrides};
  `);

const ScrollContainer = _styledComponents.default.div`
  flex: 1;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  transform: translateZ(0);
`;
const Shadow = _styledComponents.default.div`
  ${(0, _elevation.getElevationShadow)(_elevation.ElevationRange.Elevation6)};

  background: ${(0, _color.getColor)(_color.Colors.White)};
  height: 16px;
  left: -8px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: -8px;
  top: -18px;
  z-index: 5;
`;
const SCROLL_AMOUNT = 128;
const ScrollAnimation = /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  containerCssOverrides,
  ...domProps
}, ref) => {
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
  return /*#__PURE__*/_react.default.createElement(ScrollAnimationContainer, {
    containerCssOverrides: containerCssOverrides,
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(Shadow, {
    ref: shadow
  }), /*#__PURE__*/_react.default.createElement(ScrollContainer, _extends({
    ref: scrollContainerRef
  }, domProps), children));
});
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