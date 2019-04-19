"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _hooks = require("../helpers/hooks");

var _react = _interopRequireWildcard(require("react"));

var _exports = require("../helpers/exports");

var _Overlay = require("../toggle/Overlay");

var _typeGuards = require("../sharedHelpers/typeGuards");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const MenuContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Menu__MenuContainer",
  componentId: "qsgmyf-0"
})(({
  width
}) => (0, _styledComponents.css)(["", ";", ";", ";background:", ";overflow:hidden;position:fixed;width:", ";min-width:", "px;"], (0, _exports.borderRadius)(_exports.BorderRadius.Medium), (0, _exports.flexFlow)(), (0, _exports.getElevation)(_exports.ElevationRange.Elevation6), (0, _exports.getColor)(_exports.Colors.White), width, _exports.sizes.menu.width));

const MenuContent =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Menu__MenuContent",
  componentId: "qsgmyf-1"
})(["", ";height:100%;overflow:auto;padding:4px 0;width:100%;"], (0, _exports.flexFlow)());

const Menu = ({
  children,
  closingAnimationCompleted,
  isOpen,
  onClick,
  position,
  togglePopOver,
  width,
  zIndex
}) => {
  const menuRef = (0, _react.useRef)(null);
  const [menuHeight, setMenuHeight] = (0, _react.useState)(0);
  const [menuWidth, setMenuWidth] = (0, _react.useState)(0);
  const [isRendered, setIsRendered] = (0, _react.useState)(false);
  const scaleAnimation = (0, _react.useMemo)(() => {
    const elementHeight = menuHeight;
    const elementWidth = Math.max((0, _typeGuards.isNil)(width) ? menuWidth : width, _exports.sizes.menu.width);
    return (0, _exports.generateScaleAnimation)({
      elementHeight,
      elementWidth,
      isOpen,
      position
    });
  }, [isOpen, menuHeight, menuWidth, position, width]);
  (0, _react.useEffect)(() => setIsRendered(true), []);
  (0, _react.useLayoutEffect)(() => {
    const menuElement = menuRef.current;

    if (menuElement) {
      setMenuHeight(menuElement.offsetHeight);
      setMenuWidth(menuElement.offsetWidth);
    }
  }, [menuRef.current]);
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
  }, _react.default.createElement(_StyledMenuContainer, {
    ref: menuRef,
    width: (0, _typeGuards.isNil)(width) ? 'auto' : `${width}px`,
    _css: isRendered ? scaleAnimation.outSideContentStyles : ''
  }, _react.default.createElement(_StyledMenuContent, {
    _css2: isRendered ? scaleAnimation.inSideContentStyles : ''
  }, children)));
};

exports.Menu = Menu;
Menu.defaultProps = {
  zIndex: 9998
};

var _StyledMenuContainer = (0, _styledComponents.default)(MenuContainer)`${p => p._css}`;

var _StyledMenuContent = (0, _styledComponents.default)(MenuContent)`${p => p._css2}`;