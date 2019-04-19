"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FullScreenModal = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _Modals = require("./Modals");

var _Overlay = require("../toggle/Overlay");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const FullScreenModal = ({
  children,
  customCloseButton,
  escToClose,
  headerChildren,
  iconLeft,
  isOpen,
  noHeader,
  onClick,
  title,
  togglePopOver,
  closingAnimationCompleted,
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
    escToClose: escToClose,
    isOpen: isOpen,
    onClick: onClick,
    togglePopOver: togglePopOver
  }, _react.default.createElement(_StyledBBModalBackground, _extends({
    ref: modalBackgroundRef
  }, otherProps, {
    _css: isRendered ? (0, _styledComponents.css)(["height:100%;width:100%;margin:0;border-radius:0;animation:", " linear ", "ms forwards;"], isOpen ? _Modals.fullScreenModalOpenAnimation : _Modals.fullScreenModalCloseAnimation, _Modals.modalAnimationDuration) : ''
  }), !noHeader && _react.default.createElement(_Modals.BBModalHeader, {
    customCloseButton: customCloseButton,
    headerRowChildren: headerChildren,
    iconLeft: iconLeft,
    onClose: onClick,
    title: title
  }), children));
};

exports.FullScreenModal = FullScreenModal;
FullScreenModal.defaultProps = {
  escToClose: true,
  iconLeft: '',
  noHeader: false
};

var _StyledBBModalBackground = (0, _styledComponents.default)(_Modals.BBModalBackground)`${p => p._css}`;