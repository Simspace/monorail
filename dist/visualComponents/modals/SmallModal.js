"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmallModal = void 0;

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

var _StyledBBModalBackground = /*#__PURE__*/(0, _styledComponents.default)(_Modals.BBModalBackground).withConfig({
  displayName: "SmallModal___StyledBBModalBackground",
  componentId: "oca2ep-0"
})(["", ""], p => p._css);

const SmallModal = props => {
  const {
    isOpen,
    onClick,
    children,
    title,
    iconLeft,
    togglePopOver,
    headerChildren,
    customCloseButton,
    headerStyles,
    closingAnimationCompleted,
    zIndex = (0, _zIndex.zIndexValue)(_zIndex.ZIndexNodeName.Modal),
    ...otherProps
  } = props;
  const {
    modalBackgroundRef,
    isRendered
  } = (0, _Modals.useModalAnimation)({
    closingAnimationCompleted,
    isOpen
  });
  return /*#__PURE__*/_react.default.createElement(_Overlay.Overlay, {
    isOpen: isOpen,
    onClick: onClick,
    togglePopOver: togglePopOver,
    zIndex: zIndex
  }, /*#__PURE__*/_react.default.createElement(_StyledBBModalBackground, _extends({
    ref: modalBackgroundRef,
    size: _modalTypes.ModalSize.Small
  }, otherProps, {
    _css: isRendered ? (0, _styledComponents.css)(["animation:", " linear ", "ms forwards;"], isOpen ? _Modals.mediumModalOpenAnimation : _Modals.mediumModalCloseAnimation, _Modals.modalAnimationDuration) : ''
  }), /*#__PURE__*/_react.default.createElement(_Modals.BBModalHeader, {
    title: title,
    iconLeft: iconLeft,
    onClose: onClick,
    customCloseButton: customCloseButton,
    headerRowChildren: headerChildren,
    cssOverrides: headerStyles,
    size: _modalTypes.ModalSize.Small
  }), children));
};

exports.SmallModal = SmallModal;