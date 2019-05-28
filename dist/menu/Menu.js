"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _animation = require("../helpers/animation");

var _borderRadius = require("../helpers/borderRadius");

var _elevation = require("../helpers/elevation");

var _flex = require("../helpers/flex");

var _hooks = require("../helpers/hooks");

var _size = require("../helpers/size");

var _styledComponents2 = _interopRequireWildcard(require("../helpers/styled-components"));

var _typeGuards = require("../sharedHelpers/typeGuards");

var _Overlay = require("../toggle/Overlay");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const MenuContainer =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "Menu__MenuContainer",
  componentId: "qsgmyf-0"
})(({
  width
}) => (0, _styledComponents2.css)(["", ";", ";", ";", ";overflow:hidden;position:fixed;width:", ";min-width:", "px;"], (0, _borderRadius.borderRadius)(_borderRadius.BorderRadius.Medium), (0, _flex.flexFlow)(), (0, _elevation.getElevationShadow)(_elevation.ElevationRange.Elevation6), (0, _elevation.getElevationBackground)(_elevation.ElevationRange.Elevation6), width, _size.sizes.menu.width));

const MenuContent =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "Menu__MenuContent",
  componentId: "qsgmyf-1"
})(["", ";height:100%;overflow:auto;padding:4px 0;width:100%;"], (0, _flex.flexFlow)());

const Menu = ({
  children,
  closingAnimationCompleted,
  isOpen,
  onClick,
  position,
  togglePopOver,
  width,
  zIndex,
  ...domProps
}) => {
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
  (0, _react.useEffect)(() => setIsRendered(true), []);
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
      closingAnimationCompleted();
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
    _css: isRendered ? scaleAnimation.outSideContentStyles : ''
  }), _react.default.createElement(_StyledMenuContent, {
    _css2: isRendered ? scaleAnimation.inSideContentStyles : ''
  }, children)));
};

exports.Menu = Menu;
Menu.defaultProps = {
  zIndex: 9998
};

var _StyledMenuContainer = (0, _styledComponents.default)(MenuContainer)`${p => p._css}`;

var _StyledMenuContent = (0, _styledComponents.default)(MenuContent)`${p => p._css2}`;