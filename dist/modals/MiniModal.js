"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MiniModal = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Modals = require("./Modals");

var _exports = require("../helpers/exports");

var _Overlay = require("../toggle/Overlay");

var _styledComponents = require("styled-components");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class MiniModal extends _react.Component {
  render() {
    const {
      children,
      headerChildren,
      iconLeft,
      isOpen,
      modalBackgroundCss,
      onClick,
      position,
      title,
      togglePopOver
    } = this.props;
    const scaleAnimation = (0, _exports.generateScaleAnimation)({
      elementHeight: _exports.sizes.modals.mini.height,
      elementWidth: _exports.sizes.modals.mini.width,
      isOpen,
      position
    });
    return _react.default.createElement(_Overlay.Overlay, {
      isOpen: isOpen,
      onClick: onClick,
      overlayProps: {
        chromeless: true
      },
      togglePopOver: togglePopOver,
      usesScaleAnimation: true
    }, _react.default.createElement(_Modals.BBModalBackground, {
      mini: true,
      cssOverrides: (0, _styledComponents.css)(["", " ", ";"], scaleAnimation.outSideContentStyles, modalBackgroundCss)
    }, _react.default.createElement(_Modals.BBModalContent, {
      cssOverrides: scaleAnimation.inSideContentStyles
    }, _react.default.createElement(_Modals.BBModalHeader, {
      mini: true,
      onClose: onClick,
      title: title,
      iconLeft: iconLeft
    }, headerChildren), children)));
  }

}

exports.MiniModal = MiniModal;