"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useModalAnimation = useModalAnimation;
exports.BBModalContent = exports.BBModalContainer = exports.BBModalOverlay = exports.BBModalOverlayContainer = exports.BBModalFooter = exports.BBModalHeader = exports.DefaultCloseButton = exports.BBModalHeaderContainer = exports.BBModalBackground = exports.overlayCloseAnimation = exports.overlayOpenAnimation = exports.fullScreenModalCloseAnimation = exports.fullScreenModalOpenAnimation = exports.largeModalCloseAnimation = exports.largeModalOpenAnimation = exports.mediumModalCloseAnimation = exports.mediumModalOpenAnimation = exports.modalAnimationDuration = void 0;

var _react = _interopRequireWildcard(require("react"));

var _exports = require("../../helpers/exports");

var _hooks = require("../../helpers/hooks");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

var _theme = require("../../helpers/theme");

var _StyleHelpers = require("../../StyleHelpers");

var _AppIcon = require("../appIcon/AppIcon");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _Icon = require("../icon/Icon");

var _modalTypes = require("./modalTypes");

var _Search = require("../inputs/Search");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function useModalAnimation(params) {
  const {
    closingAnimationCompleted,
    isOpen
  } = params;
  const modalBackgroundRef = (0, _react.useRef)(null);
  const [isRendered, setIsRendered] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => setIsRendered(true), []);
  const eventListener = (0, _react.useCallback)(event => {
    if (modalBackgroundRef.current === event.target && !isOpen) {
      closingAnimationCompleted();
    }
  }, [closingAnimationCompleted, isOpen]);
  (0, _hooks.useEventListener)({
    eventName: 'animationend',
    eventListener,
    element: modalBackgroundRef.current
  });
  return {
    modalBackgroundRef,
    isRendered
  };
}
/*
 *
 * Modal Animation
 *
 */


const modalAnimationDuration = 100;
exports.modalAnimationDuration = modalAnimationDuration;
const mediumModalOpenAnimation = (0, _styledComponents.keyframes)`
  from {
    opacity: 0;
    transform: rotateX(15deg) translateY(16px) scale(.95)
  }

  to {
    opacity: 0.9999;
    transform: rotateX(0) translateY(0) scale(1);

  }
`;
exports.mediumModalOpenAnimation = mediumModalOpenAnimation;
const mediumModalCloseAnimation = (0, _styledComponents.keyframes)`
  from {
    opacity: 0.9999;
    transform: rotateX(0) translateY(0) scale(1);
  }

  to {
    opacity: 0;
    transform: rotateX(15deg) translateY(16px) scale(.95)
  }
`;
exports.mediumModalCloseAnimation = mediumModalCloseAnimation;
const largeModalOpenAnimation = (0, _styledComponents.keyframes)`
  from {
    opacity: 0;
    transform: rotateX(3deg) translateY(16px) scale(.98);
  }

  to {
    opacity: 0.9999;
    transform: rotateX(0) translateY(0) scale(1);

  }
`;
exports.largeModalOpenAnimation = largeModalOpenAnimation;
const largeModalCloseAnimation = (0, _styledComponents.keyframes)`
  from {
    opacity: 0.9999;
    transform: rotateX(0) translateY(0) scale(1);
  }

  to {
    opacity: 0;
    transform: rotateX(3deg) translateY(16px) scale(.98);
  }
`;
exports.largeModalCloseAnimation = largeModalCloseAnimation;
const fullScreenModalOpenAnimation = (0, _styledComponents.keyframes)`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.9999;

  }
`;
exports.fullScreenModalOpenAnimation = fullScreenModalOpenAnimation;
const fullScreenModalCloseAnimation = (0, _styledComponents.keyframes)`
  from {
    opacity: 0.9999;
  }

  to {
    opacity: 0;
  }
`;
exports.fullScreenModalCloseAnimation = fullScreenModalCloseAnimation;
const overlayOpenAnimation = (0, _styledComponents.keyframes)`
  from {
    opacity: 0;

  }

  to {
    opacity: 0.9999;
  }
`;
exports.overlayOpenAnimation = overlayOpenAnimation;
const overlayCloseAnimation = (0, _styledComponents.keyframes)`
  from {
    opacity: 0.9999;

  }

  to {
    opacity: 0;
  }
`;
/*
 *
 * Modal Background
 *
 */

/*
 * Types
 */

exports.overlayCloseAnimation = overlayCloseAnimation;

/*
 * Component
 */
const modalWidth = {
  [_modalTypes.ModalSize.Mini]: `${_exports.sizes.modals.mini.width}px`,
  [_modalTypes.ModalSize.Small]: `${_exports.sizes.modals.small.width}px`,
  [_modalTypes.ModalSize.Medium]: `${_exports.sizes.modals.medium.width}px`,
  [_modalTypes.ModalSize.Large]: 'calc(100vw - 32px)',
  [_modalTypes.ModalSize.FullScreen]: '100vw'
};
/* className set for customizing the modal through global styling */

const BBModalBackground = (0, _styledComponents.default)((0, _react.forwardRef)(({
  size,
  cssOverrides,
  className,
  ...otherProps
}, ref) => _react.default.createElement(_StyleHelpers.Div, _extends({
  className: `modal-${size} ${className}`,
  ref: ref
}, otherProps))))(({
  size,
  cssOverrides
}) => (0, _styledComponents.css)`
    ${size === _modalTypes.ModalSize.Mini ? (0, _styledComponents.css)`
          height: ${_exports.sizes.modals.mini.height}px;
        ` : (0, _styledComponents.css)`
          margin: 16px;
        `};

    ${size === _modalTypes.ModalSize.Large && (0, _styledComponents.css)`
        height: calc(100vh - 32px);
      `};

    ${(0, _exports.borderRadius)(_exports.BorderRadius.XLarge)};
    ${(0, _exports.flexFlow)()};
    ${(0, _exports.getElevationShadow)(_exports.ElevationRange.Elevation24)};

    background: ${(0, _exports.getColor)(_exports.Colors.White)};
    overflow: hidden;
    position: relative; /* position: relative; so that the shadow works when on the BBModalOverlay */
    width: ${modalWidth[size]};
    will-change: transform, opacity;
    transform-origin: bottom center;

    ${cssOverrides};
  `);
/*
 *
 * Modal Header
 *
 */

/*
 * Styles
 */

exports.BBModalBackground = BBModalBackground;

const BBModalHeaderContainer = _styledComponents.default.div(({
  size,
  cssOverrides
}) => (0, _styledComponents.css)`
    ${(0, _exports.flexFlow)(size === _modalTypes.ModalSize.Mini ? 'column' : 'row')};

    ${(0, _exports.getElevationShadow)(_exports.ElevationRange.Elevation2)};

    background: ${(0, _exports.getColor)(_exports.Colors.BrandDarkBlue)};
    flex-shrink: 0;
    user-select: none;
    z-index: 1;

    ${_Search.SearchContainer} {
      ${size === _modalTypes.ModalSize.Mini ? (0, _styledComponents.css)`
            margin: 8px 16px 16px;
          ` : (0, _styledComponents.css)`
            margin: auto 16px auto auto;
          `};
    }

    ${cssOverrides};
  `);

exports.BBModalHeaderContainer = BBModalHeaderContainer;

const BBModalHeaderRow = _styledComponents.default.div(({
  size
}) => (0, _styledComponents.css)`
    ${(0, _exports.flexFlow)('row')};

    align-items: center;
    height: ${size === _modalTypes.ModalSize.Mini || size === _modalTypes.ModalSize.Small ? 48 : 56}px;
    padding: 0 16px;
    width: 100%;
    overflow: hidden;
  `);

const BBModalHeaderTitle = _styledComponents.default.h1(({
  size
}) => (0, _styledComponents.css)`
    ${size === _modalTypes.ModalSize.Mini || size === _modalTypes.ModalSize.Small ? (0, _exports.typography)(700, _exports.FontSizes.Title4) : (0, _exports.typography)(700, _exports.FontSizes.Title3)};

    color: ${(0, _exports.getColor)(_exports.Colors.White)};
    white-space: nowrap;
    margin: 0;
  `);

const baseIconStyles = (0, _styledComponents.css)`
  color: ${(0, _exports.getColor)(_exports.Colors.White)};
`;
const StyledAppIconLeft = (0, _styledComponents.default)(_AppIcon.AppIcon)`
  ${baseIconStyles};
  margin-right: 16px;
`;
const StyledIconLeft = (0, _styledComponents.default)(_Icon.Icon)`
  ${baseIconStyles};
  margin-right: 16px;
`;
const StyledIconRight = (0, _styledComponents.default)(_Icon.Icon)`
  ${baseIconStyles};
  margin-left: 16px;
`;
/*
 * Types
 */

/*
 * Component
 */
const DefaultCloseButton = ({
  headerRowChildren,
  onClose
}) => _react.default.createElement(_IconButton.IconButton, {
  cssOverrides: headerRowChildren ? (0, _styledComponents.css)`` : (0, _styledComponents.css)`
            margin-left: auto;
          `,
  icon: "close",
  onClick: onClose,
  shape: _buttonTypes.IconButtonShape.Square,
  display: _buttonTypes.ButtonDisplay.Chromeless
});

exports.DefaultCloseButton = DefaultCloseButton;

const BBModalHeader = ({
  appIcon,
  children,
  customCloseButton,
  headerRowChildren,
  iconLeft,
  iconRight,
  size,
  onClose,
  title,
  cssOverrides
}) => _react.default.createElement(_styledComponents.ThemeProvider, {
  theme: theme => ({ ...theme,
    mode: _theme.Mode.Dark
  })
}, _react.default.createElement(BBModalHeaderContainer, {
  size: size,
  cssOverrides: cssOverrides
}, _react.default.createElement(BBModalHeaderRow, {
  size: size
}, appIcon && _react.default.createElement(StyledAppIconLeft, {
  appName: appIcon
}), iconLeft && _react.default.createElement(StyledIconLeft, {
  icon: iconLeft
}), _react.default.createElement(BBModalHeaderTitle, {
  size: size,
  "data-test-id": "modal-header-title"
}, title), headerRowChildren, iconRight && _react.default.createElement(StyledIconRight, {
  icon: iconRight
}), size !== _modalTypes.ModalSize.Mini && onClose && customCloseButton !== undefined ? customCloseButton : _react.default.createElement(DefaultCloseButton, {
  headerRowChildren: headerRowChildren,
  onClose: onClose
})), children));
/*
 *
 * Modal Footer
 *
 */

/*
 * Styles
 */


exports.BBModalHeader = BBModalHeader;
const BBModalFooter = _styledComponents.default.div`
  ${(0, _exports.flexFlow)('row')};
  ${(0, _exports.getElevationShadow)(_exports.ElevationRange.Elevation6)};

  align-items: center;
  background: ${(0, _exports.getColor)(_exports.Colors.Grey98)};
  height: 48px;
  justify-content: flex-end;
  margin: auto 0 0;
  padding: 0 16px;
  flex-shrink: 0;
`;
/*
 *
 * Modal Overlay
 *
 */

/*
 * Styles
 */

exports.BBModalFooter = BBModalFooter;

const BBModalOverlayContainer = _styledComponents.default.div(({
  isOpen,
  chromeless,
  cssOverrides
}) => (0, _styledComponents.css)`
    ${!chromeless && (0, _styledComponents.css)`
        background: ${(0, _exports.getColor)(_exports.Colors.Black, 0.36)};
      `};

    bottom: 0;
    cursor: pointer;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;

    ${cssOverrides};
  `);
/*
 * Types
 */


exports.BBModalOverlayContainer = BBModalOverlayContainer;

/*
 * Component
 */
const BBModalOverlay = ({
  children,
  chromeless,
  isOpen,
  onClick,
  cssOverrides,
  ...otherProps
}) => _react.default.createElement(BBModalOverlayContainer, _extends({
  isOpen: isOpen,
  chromeless: chromeless,
  cssOverrides: cssOverrides,
  onClick: onClick ? event => {
    if (event.target === event.currentTarget) {
      onClick(event);
    }
  } : undefined
}, otherProps), children);
/*
 *
 * Modal Container
 *
 */

/*
 * Styles
 */


exports.BBModalOverlay = BBModalOverlay;

const BBModalContainer = _styledComponents.default.div(({
  isOpen,
  cssOverrides,
  zIndex
}) => (0, _styledComponents.css)`
    ${isOpen ? (0, _styledComponents.css)`
          pointer-events: all;
        ` : (0, _styledComponents.css)`
          pointer-events: none;
        `};

    ${(0, _exports.flexFlow)()};
    ${_exports.gothamFontFamily};

    align-items: center;
    bottom: 0;
    justify-content: center;
    left: 0;
    perspective: 1500px;
    position: fixed;
    right: 0;
    top: 0;
    z-index: ${zIndex};

    ${cssOverrides};
  `);
/*
 *
 * Modal Content
 *
 */

/*
 * Styles
 */


exports.BBModalContainer = BBModalContainer;

const BBModalContent = _styledComponents.default.div(({
  cssOverrides
}) => (0, _styledComponents.css)`
    ${(0, _exports.flexFlow)()};
    height: 100%;
    max-height: 100%;
    overflow: auto;

    ${cssOverrides};
  `);

exports.BBModalContent = BBModalContent;