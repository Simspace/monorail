"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LargeModal = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Modals = require("./Modals");

var _modalTypes = require("./modalTypes");

var _Overlay = require("../toggle/Overlay");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const LargeModal = ({
  isOpen,
  onClick,
  children,
  title,
  iconLeft,
  togglePopOver,
  headerStyles,
  closingAnimationCompleted,
  zIndex,
  ...otherProps
}) => {
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
    togglePopOver: togglePopOver,
    zIndex: zIndex
  }, _react.default.createElement(_StyledBBModalBackground, _extends({
    ref: modalBackgroundRef,
    size: _modalTypes.ModalSize.Large
  }, otherProps, {
    _css: isRendered ? (0, _styledComponents.css)(["animation:", " linear ", "ms forwards;"], isOpen ? _Modals.largeModalOpenAnimation : _Modals.largeModalCloseAnimation, _Modals.modalAnimationDuration) : ''
  }), _react.default.createElement(_Modals.BBModalHeader, {
    title: title,
    iconLeft: iconLeft,
    onClose: onClick,
    cssOverrides: headerStyles,
    size: _modalTypes.ModalSize.Large
  }), children));
};

exports.LargeModal = LargeModal;
LargeModal.defaultProps = {
  zIndex: 9998
};

var _StyledBBModalBackground = (0, _styledComponents.default)(_Modals.BBModalBackground)`${p => p._css}`;