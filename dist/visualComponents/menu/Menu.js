"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = exports.MenuContent = exports.MenuContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _animation = require("../../helpers/animation");

var _borderRadius = require("../../helpers/borderRadius");

var _elevation = require("../../helpers/elevation");

var _flex = require("../../helpers/flex");

var _hooks = require("../../helpers/hooks");

var _size = require("../../helpers/size");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Overlay = require("../toggle/Overlay");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const MenuContainer = _styledComponents2.default.div(({
  width
}) => _styledComponents2.css`
    ${(0, _borderRadius.borderRadius)(_borderRadius.BorderRadius.Medium)};
    ${(0, _flex.flexFlow)()};
    ${(0, _elevation.getElevationShadow)(_elevation.ElevationRange.Elevation6)};
    ${(0, _elevation.getElevationBackground)(_elevation.ElevationRange.Elevation6)};

    overflow: hidden;
    position: fixed;
    width: ${width};
    min-width: ${_size.sizes.menu.width}px;
  `);

exports.MenuContainer = MenuContainer;

var _StyledMenuContainer =
/*#__PURE__*/
(0, _styledComponents.default)(MenuContainer).withConfig({
  displayName: "Menu___StyledMenuContainer",
  componentId: "sc-2wfm6w-0"
})(["", " visibility:", ";", ""], p => p._css, p => p._css2, p => p._css3);

const MenuContent = _styledComponents2.default.div`
  ${(0, _flex.flexFlow)()};

  height: 100%;
  overflow: auto;
  padding: 4px 0;
  width: 100%;
`;
exports.MenuContent = MenuContent;

var _StyledMenuContent =
/*#__PURE__*/
(0, _styledComponents.default)(MenuContent).withConfig({
  displayName: "Menu___StyledMenuContent",
  componentId: "sc-2wfm6w-1"
})(["", ""], p => p._css4);

const Menu = props => {
  const {
    children,
    closingAnimationCompleted,
    isOpen,
    onClick,
    position,
    togglePopOver,
    width,
    zIndex = 9990,
    cssOverrides,
    ...domProps
  } = props;
  const menuRef = (0, _react.useRef)(null);
  const [menuHeight, setMenuHeight] = (0, _react.useState)(0);
  const [menuWidth, setMenuWidth] = (0, _react.useState)(0);
  const [isRendered, setIsRendered] = (0, _react.useState)(false);
  const scaleAnimation = (0, _react.useMemo)(() => {
    const elementHeight = menuHeight;
    const elementWidth = Math.max((0, _typeGuards.isNil)(width) ? menuWidth : width, _size.sizes.menu.width);
    return (0, _animation.generateScaleAnimation)({
      elementHeight,
      elementWidth,
      isOpen,
      position
    });
  }, [isOpen, menuHeight, menuWidth, position, width]);
  (0, _react.useEffect)(() => {
    if (isOpen) {
      setIsRendered(true);
    }
  }, [isOpen, setIsRendered]);
  /* eslint-disable react-hooks/exhaustive-deps */

  (0, _react.useLayoutEffect)(() => {
    const menuElement = menuRef.current;

    if (menuElement) {
      setMenuHeight(menuElement.offsetHeight);
      setMenuWidth(menuElement.offsetWidth);
    }
  }, [menuRef.current]);
  /* eslint-enable react-hooks/exhaustive-deps */

  const eventListener = (0, _react.useCallback)(event => {
    if (menuRef.current === event.target && !isOpen) {
      setIsRendered(false);
      closingAnimationCompleted && closingAnimationCompleted();
    }
  }, [closingAnimationCompleted, isOpen]);
  (0, _hooks.useEventListener)({
    eventName: 'animationend',
    eventListener,
    element: menuRef.current
  });
  return _react.default.createElement(_Overlay.Overlay, {
    isOpen: isOpen,
    onClick: onClick,
    overlayProps: {
      chromeless: true
    },
    togglePopOver: togglePopOver,
    zIndex: zIndex
  }, _react.default.createElement(_StyledMenuContainer, _extends({
    ref: menuRef,
    width: (0, _typeGuards.isNil)(width) ? 'auto' : `${width}px`
  }, domProps, {
    _css: scaleAnimation.outSideContentStyles,
    _css2: isRendered ? 'visible' : 'hidden',
    _css3: cssOverrides
  }), _react.default.createElement(_StyledMenuContent, {
    _css4: scaleAnimation.inSideContentStyles
  }, children)));
};

exports.Menu = Menu;