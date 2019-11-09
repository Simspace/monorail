"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FullScreenModal = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _zIndex = require("../../helpers/zIndex");

var _Modals = require("./Modals");

var _modalTypes = require("./modalTypes");

var _Overlay = require("../toggle/Overlay");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _StyledBBModalBackground =
/*#__PURE__*/
(0, _styledComponents.default)(_Modals.BBModalBackground).withConfig({
  displayName: "FullScreenModal___StyledBBModalBackground",
  componentId: "jmmt8t-0"
})(["", ""], p => p._css);

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
    escToClose: escToClose,
    isOpen: isOpen,
    onClick: onClick,
    togglePopOver: togglePopOver,
    zIndex: zIndex
  }, _react.default.createElement(_StyledBBModalBackground, _extends({
    ref: modalBackgroundRef,
    size: _modalTypes.ModalSize.FullScreen
  }, otherProps, {
    _css: isRendered ? (0, _styledComponents.css)(["height:100%;width:100%;margin:0;border-radius:0;animation:", " linear ", "ms forwards;"], isOpen ? _Modals.fullScreenModalOpenAnimation : _Modals.fullScreenModalCloseAnimation, _Modals.modalAnimationDuration) : ''
  }), !noHeader && _react.default.createElement(_Modals.BBModalHeader, {
    customCloseButton: customCloseButton,
    headerRowChildren: headerChildren,
    iconLeft: iconLeft,
    onClose: onClick,
    title: title,
    size: _modalTypes.ModalSize.FullScreen
  }), children));
};

exports.FullScreenModal = FullScreenModal;
FullScreenModal.defaultProps = {
  escToClose: true,
  iconLeft: '',
  noHeader: false,
  zIndex: (0, _zIndex.zIndexValue)(_zIndex.ZIndexNodeName.Overlay)
};