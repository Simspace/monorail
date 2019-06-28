"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalController = void 0;

var _react = _interopRequireWildcard(require("react"));

var _PopOver = require("../popOver/PopOver");

var _PortalController = require("../portal/PortalController");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const ModalController = ({
  children,
  toggleIsOpen,
  isOpen
}) => {
  const [isRendered, setIsRendered] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (isOpen) {
      setIsRendered(true);
    }
  }, [isOpen]);
  return _react.default.createElement(_PortalController.PortalController, {
    isRendered: isRendered
  }, children({
    isOpen,
    position: _PopOver.defaultPopOverPosition,
    onClick: toggleIsOpen,
    togglePopOver: toggleIsOpen,
    closingAnimationCompleted: () => setIsRendered(!isRendered)
  }));
};

exports.ModalController = ModalController;