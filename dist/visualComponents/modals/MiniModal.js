"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MiniModal = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _exports = require("../../helpers/exports");

var _Modals = require("./Modals");

var _modalTypes = require("./modalTypes");

var _Overlay = require("../toggle/Overlay");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _StyledBBModalBackground =
/*#__PURE__*/
(0, _styledComponents.default)(_Modals.BBModalBackground).withConfig({
  displayName: "MiniModal___StyledBBModalBackground",
  componentId: "sc-1ji93dw-0"
})(["", ""], p => p._css);

var _StyledBBModalContent =
/*#__PURE__*/
(0, _styledComponents.default)(_Modals.BBModalContent).withConfig({
  displayName: "MiniModal___StyledBBModalContent",
  componentId: "sc-1ji93dw-1"
})(["", ""], p => p._css2);

const MiniModal = props => {
  const {
    children,
    closingAnimationCompleted,
    headerChildren,
    iconLeft,
    isOpen,
    modalBackgroundCss,
    modalHeaderCss,
    onClick,
    position,
    title,
    togglePopOver
  } = props;
  const scaleAnimation = (0, _react.useMemo)(() => {
    const {
      height: elementHeight,
      width: elementWidth
    } = _exports.sizes.modals.mini;
    return (0, _exports.generateScaleAnimation)({
      elementHeight,
      elementWidth,
      isOpen,
      position
    });
  }, [isOpen, position]);
  const {
    modalBackgroundRef,
    isRendered
  } = (0, _Modals.useModalAnimation)({
    closingAnimationCompleted,
    isOpen
  });
  return _react.default.createElement(_Overlay.Overlay, {
    isOpen: isOpen,
    onClick: onClick,
    overlayProps: {
      chromeless: true
    },
    togglePopOver: togglePopOver,
    usesScaleAnimation: true
  }, _react.default.createElement(_StyledBBModalBackground, {
    size: _modalTypes.ModalSize.Mini,
    ref: modalBackgroundRef,
    _css: isRendered ? (0, _styledComponents.css)(["", ";", ";"], scaleAnimation.outSideContentStyles, modalBackgroundCss) : ''
  }, _react.default.createElement(_StyledBBModalContent, {
    _css2: isRendered ? scaleAnimation.inSideContentStyles : ''
  }, _react.default.createElement(_Modals.BBModalHeader, {
    size: _modalTypes.ModalSize.Mini,
    onClose: onClick,
    title: title,
    iconLeft: iconLeft,
    cssOverrides: modalHeaderCss
  }, headerChildren), children)));
};

exports.MiniModal = MiniModal;