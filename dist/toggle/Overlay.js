"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Modals = require("../modals/Modals");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class Overlay extends _react.Component {
  constructor(...args) {
    super(...args);

    this.escFunction = event => {
      const {
        escToClose,
        isOpen,
        togglePopOver
      } = this.props;

      if (escToClose) {
        if (event.keyCode === 27 && isOpen) {
          togglePopOver();
        }
      }

      return null;
    };
  }

  componentDidMount() {
    const {
      escToClose
    } = this.props;

    if (escToClose) {
      document.addEventListener('keydown', this.escFunction, false);
    }
  }

  componentWillUnmount() {
    const {
      escToClose
    } = this.props;

    if (escToClose) {
      document.removeEventListener('keydown', this.escFunction, false);
    }
  }

  render() {
    const {
      isOpen,
      onClick,
      children,
      overlayProps,
      usesScaleAnimation
    } = this.props;
    return _react.default.createElement(_Modals.BBModalContainer, {
      onClick: e => e.stopPropagation(),
      usesScaleAnimation: usesScaleAnimation,
      isOpen: isOpen
    }, _react.default.createElement(_Modals.BBModalOverlay, _extends({
      isOpen: isOpen,
      onClick: onClick
    }, overlayProps)), children);
  }

}

exports.Overlay = Overlay;
Overlay.defaultProps = {
  usesScaleAnimation: false,
  escToClose: true
};