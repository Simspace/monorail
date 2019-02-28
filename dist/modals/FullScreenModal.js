"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FullScreenModal = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _Modals = require("../../modals/Modals");

var _Overlay = require("../../toggle/Overlay");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class FullScreenModal extends _react.Component {
  render() {
    const {
      children,
      customCloseButton,
      escToClose,
      headerChildren,
      iconLeft,
      isOpen,
      onClick,
      title,
      togglePopOver
    } = this.props;
    return _react.default.createElement(_Overlay.Overlay, {
      escToClose: escToClose,
      isOpen: isOpen,
      onClick: onClick,
      togglePopOver: togglePopOver
    }, _react.default.createElement(_Modals.BBModalBackground, {
      css: _styledComponents.css`
            height: 100%;
            width: 100%;
            margin: 0;
            border-radius: 0;
          `
    }, _react.default.createElement(_Modals.BBModalHeader, {
      customCloseButton: customCloseButton,
      headerRowChildren: headerChildren,
      iconLeft: iconLeft,
      onClose: onClick,
      title: title
    }), children));
  }

}

exports.FullScreenModal = FullScreenModal;