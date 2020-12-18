"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipMonorail = void 0;

var _react = _interopRequireWildcard(require("react"));

var _tooltip = require("@reach/tooltip");

var _exports = require("../../helpers/exports");

var _flex = require("../../helpers/flex");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Text = require("../typography/Text");

require("@reach/tooltip/styles.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const StyledTooltip = (0, _styledComponents.default)(_tooltip.TooltipPopup)(({
  tooltipstyles,
  pointerstyles
}) => (0, _styledComponents.css)`
    && {
    ${(0, _exports.borderRadius)(_exports.BorderRadius.Medium)}
    ${(0, _flex.flexFlow)()}
    ${(0, _exports.getElevationShadow)(_exports.ElevationRange.Elevation5)}
    ${_exports.gothamFontFamily} /* Defaults to Avenir without this  */
    ${tooltipstyles}

    background: ${(0, _exports.getColor)(_exports.Colors.White)};
    border: none;
    white-space: normal;
    color: ${(0, _exports.getColor)(_exports.Colors.Black89a)};
    max-width: 256px;
    padding: 16px;
    pointer-events: none;
    position: absolute;
    z-index: ${(0, _exports.zIndexValue)(_exports.ZIndexNodeName.Tooltip)};

    &::after {
      ${pointerstyles}

      background: ${(0, _exports.getColor)(_exports.Colors.White)};
      border-radius: 2px 0 2px 0;
      content: '';
      display: block;
      height: 12px;
      position: absolute;
      transform: rotate(45deg);
      width: 12px;
    }
  }
`);
const StyledSpan = _styledComponents.default.span`
  cursor: pointer;
  ${(0, _flex.flexFlow)()};
`;
const pointerSize = 12;
const viewportBoundary = 8;

const getDirection = (location = 'center', position) => {
  switch (location) {
    case 'top-left':
      return {
        pointerStyles: (0, _styledComponents.css)`
          top: -${pointerSize / 2}px;
          left: ${position - 8}px;
        `,
        tooltipStyles: (0, _styledComponents.css)`
          margin-left: ${viewportBoundary}px;
        `
      };

    case 'top-center':
      return {
        pointerStyles: (0, _styledComponents.css)`
          left: 50%;
          top: -${pointerSize / 2}px;
          margin-left: -${pointerSize / 2}px;
        `,
        tooltipStyles: (0, _styledComponents.css)`
          margin: 0;
        `
      };

    case 'top-right':
      return {
        pointerStyles: (0, _styledComponents.css)`
          top: -${pointerSize / 2}px;
          right: ${position + viewportBoundary}px;
        `,
        tooltipStyles: (0, _styledComponents.css)`
          margin-right: ${viewportBoundary}px;
        `
      };

    case 'bottom-right':
      return {
        pointerStyles: (0, _styledComponents.css)`
          bottom: -${pointerSize / 2}px;
          right: ${position + viewportBoundary}px;
        `,
        tooltipStyles: (0, _styledComponents.css)`
          margin-right: ${viewportBoundary}px;
        `
      };

    case 'bottom-center':
      return {
        pointerStyles: (0, _styledComponents.css)`
          left: 50%;
          bottom: -${pointerSize / 2}px;
          margin-left: -${pointerSize / 2}px;
        `,
        tooltipStyles: (0, _styledComponents.css)`
          margin: 0;
        `
      };

    case 'bottom-left':
      return {
        pointerStyles: (0, _styledComponents.css)`
          left: ${position - viewportBoundary}px;
          bottom: -${pointerSize / 2}px;
        `,
        tooltipStyles: (0, _styledComponents.css)`
          margin-left: ${viewportBoundary}px;
        `
      };

    default:
      return {
        pointerStyles: '',
        tooltipStyles: ''
      };
  }
};

const TooltipMonorail = props => {
  const {
    label,
    children,
    ariaLabel
  } = props;
  const [trigger, tooltip] = (0, _tooltip.useTooltip)();
  const tooltipRef = (0, _react.useRef)(null);
  const [pointerLocation, setPointerLocation] = (0, _react.useState)('center');
  const [pointerPosition, setPointerPosition] = (0, _react.useState)(0);
  const OFFSET = 12;

  const centered = (triggerRect, tooltipRect) => {
    if ((0, _typeGuards.isNil)(triggerRect) || (0, _typeGuards.isNil)(tooltipRect)) {
      return {};
    }

    const collisions = {
      top: triggerRect.top - tooltipRect.height < 0,
      right: window.innerWidth < triggerRect.left + tooltipRect.width,
      bottom: window.innerHeight < triggerRect.bottom + tooltipRect.height + OFFSET,
      left: triggerRect.left - tooltipRect.width < 0
    };
    const directionRight = collisions.right && !collisions.left;
    const directionUp = collisions.bottom && !collisions.top;
    const directionLeft = collisions.left && !collisions.right;

    const getTriggerCenter = pointerLocationHook => {
      return pointerLocationHook.includes('right') ? triggerRect.width / 2 - pointerSize / 2 : triggerRect.right - triggerRect.width / 2 - pointerSize / 2;
    };

    const triggerDefaultPosition = triggerRect.left - tooltipRef.current.clientWidth / 2 + triggerRect.width / 2;
    setPointerPosition(getTriggerCenter(pointerLocation));

    if (directionRight && directionUp) {
      setPointerLocation('bottom-right');
      return {
        left: `${triggerRect.right - tooltipRect.width + viewportBoundary + window.pageXOffset}px`,
        top: `${triggerRect.top - OFFSET - tooltipRect.height + window.pageYOffset}px`
      };
    } else if (directionRight) {
      setPointerLocation('top-right');
      return {
        left: `${triggerRect.right - tooltipRect.width + viewportBoundary + window.pageXOffset}px`,
        top: triggerRect.bottom + OFFSET + window.scrollY
      };
    } else if (directionLeft && directionUp) {
      setPointerLocation('bottom-left');
      return {
        left: `${window.pageXOffset}px`,
        top: `${triggerRect.top - OFFSET - tooltipRect.height + window.pageYOffset}px`
      };
    } else if (directionUp) {
      setPointerLocation('bottom-center');
      return {
        left: triggerDefaultPosition + window.scrollX,
        top: `${triggerRect.top - OFFSET - tooltipRect.height + window.pageYOffset}px`
      };
    } else if (directionLeft) {
      setPointerLocation('top-left');
      return {
        left: `${window.pageXOffset}px`,
        top: triggerRect.bottom + OFFSET + window.scrollY
      };
    } else {
      setPointerLocation('top-center');
      return {
        left: triggerDefaultPosition + window.scrollX,
        top: triggerRect.bottom + OFFSET + window.scrollY
      };
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, typeof children === 'function' ? children(trigger) : /*#__PURE__*/_react.default.createElement(StyledSpan, trigger, children), /*#__PURE__*/_react.default.createElement(StyledTooltip, _extends({}, tooltip, {
    label: /*#__PURE__*/_react.default.createElement(_Text.Text, {
      fontSize: _exports.FontSizes.Title5,
      fontWeight: 400
    }, label),
    ref: tooltipRef,
    position: centered,
    "aria-label": ariaLabel // pointerstyles and tooltipstyles need to be lowercase to prevent unknown prop warning
    ,
    pointerstyles: getDirection(pointerLocation, pointerPosition).pointerStyles,
    tooltipstyles: getDirection(pointerLocation, pointerPosition).tooltipStyles
  })));
};

exports.TooltipMonorail = TooltipMonorail;