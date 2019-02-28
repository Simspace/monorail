"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediumModal = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Modals = require("./Modals");

var _Overlay = require("../toggle/Overlay");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class MediumModal extends _react.Component {
  render() {
    const {
      isOpen,
      onClick,
      children,
      title,
      iconLeft,
      togglePopOver
    } = this.props;
    return _react.default.createElement(_Overlay.Overlay, {
      isOpen: isOpen,
      onClick: onClick,
      togglePopOver: togglePopOver
    }, _react.default.createElement(_Modals.BBModalBackground, null, _react.default.createElement(_Modals.BBModalHeader, {
      title: title,
      iconLeft: iconLeft,
      onClose: onClick
    }), children));
  }

}

exports.MediumModal = MediumModal;