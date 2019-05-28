"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MiniModal = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _exports = require("../helpers/exports");

var _Modals = require("./Modals");

var _modalTypes = require("./modalTypes");

var _Overlay = require("../toggle/Overlay");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const MiniModal = ({
  children,
  closingAnimationCompleted,
  headerChildren,
  iconLeft,
  isOpen,
  modalBackgroundCss,
  onClick,
  position,
  title,
  togglePopOver
}) => {
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
    iconLeft: iconLeft
  }, headerChildren), children)));
};

exports.MiniModal = MiniModal;

var _StyledBBModalBackground = (0, _styledComponents.default)(_Modals.BBModalBackground)`${p => p._css}`;

var _StyledBBModalContent = (0, _styledComponents.default)(_Modals.BBModalContent)`${p => p._css2}`;