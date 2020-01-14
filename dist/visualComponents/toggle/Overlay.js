"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _color = require("../../helpers/color");

var _styledComponents2 = require("../../helpers/styled-components");

var _theme = require("../../helpers/theme");

var _zIndex = require("../../helpers/zIndex");

var _Modals = require("../modals/Modals");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _StyledBBModalOverlay =
/*#__PURE__*/
(0, _styledComponents.default)(_Modals.BBModalOverlay).withConfig({
  displayName: "Overlay___StyledBBModalOverlay",
  componentId: "h9f2a9-0"
})(["", ""], p => p._css);

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
    return _react.default.createElement(_styledComponents2.ThemeProvider, {
      theme: theme => ({ ...theme,
        [_theme.Mode.Light]: { ...theme[_theme.Mode.Light],
          [_theme.ThemeColors.ActionPrimary]: _color.Colors.BrandLightBlue,
          [_theme.ThemeColors.ActionSecondary]: _color.Colors.BrandLightBlue
        }
      })
    }, _react.default.createElement(_Modals.BBModalContainer, {
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
    })), children));
  }

}

exports.Overlay = Overlay;
Overlay.defaultProps = {
  usesScaleAnimation: false,
  escToClose: true,
  zIndex: (0, _zIndex.zIndexValue)(_zIndex.ZIndexNodeName.Overlay)
};