"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _Modals = require("../modals/Modals");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class Overlay extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      isRendered: false
    };

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

    this.setState(() => ({
      isRendered: true
    }));
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
      children,
      isOpen,
      onClick,
      overlayProps,
      usesScaleAnimation,
      zIndex,
      modalContainerRef
    } = this.props;
    const {
      isRendered
    } = this.state;
    return _react.default.createElement(_Modals.BBModalContainer, {
      onClick: e => e.stopPropagation(),
      usesScaleAnimation: usesScaleAnimation,
      isOpen: isRendered && isOpen,
      zIndex: zIndex,
      ref: modalContainerRef
    }, _react.default.createElement(_StyledBBModalOverlay, _extends({
      isOpen: isRendered && isOpen,
      onClick: onClick
    }, overlayProps, {
      _css: isRendered ? (0, _styledComponents.css)(["animation:", " linear ", "ms forwards;"], isOpen ? _Modals.overlayOpenAnimation : _Modals.overlayCloseAnimation, _Modals.modalAnimationDuration) : ''
    })), children);
  }

}

exports.Overlay = Overlay;
Overlay.defaultProps = {
  usesScaleAnimation: false,
  escToClose: true,
  zIndex: 9998
};

var _StyledBBModalOverlay = (0, _styledComponents.default)(_Modals.BBModalOverlay)`${p => p._css}`;