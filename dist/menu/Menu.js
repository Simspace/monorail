"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../helpers/exports");

var _Overlay = require("../toggle/Overlay");

var _Option = require("fp-ts/lib/Option");

var _typeGuards = require("../sharedHelpers/typeGuards");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const CCMenu =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Menu__CCMenu",
  componentId: "qsgmyf-0"
})(({
  width,
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";", ";background:", ";overflow:hidden;position:fixed;width:", ";min-width:", "px;", ";"], (0, _exports.borderRadius)(_exports.BorderRadius.Medium), (0, _exports.flexFlow)(), (0, _exports.getElevation)(_exports.ElevationRange.Elevation6), (0, _exports.getColor)(_exports.Colors.White), width, _exports.sizes.menu.width, cssOverrides));

const MenuContent =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Menu__MenuContent",
  componentId: "qsgmyf-1"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";height:100%;overflow:auto;padding:4px 0;width:100%;", ";"], (0, _exports.flexFlow)(), cssOverrides));

class Menu extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      menuHeight: 0,
      menuWidth: 0
    };
    this.menuRef = (0, _react.createRef)();

    this.updateMenuHeight = () => {
      const {
        menuHeight,
        menuWidth
      } = this.state;
      const currentOpt = (0, _Option.fromNullable)(this.menuRef.current);
      const newMenuHeight = currentOpt.fold(0, ({
        offsetHeight
      }) => offsetHeight);
      const newMenuWidth = currentOpt.fold(0, ({
        offsetWidth
      }) => offsetWidth);

      if (menuHeight !== newMenuHeight || menuWidth !== newMenuWidth) {
        this.setState(() => ({
          menuHeight: newMenuHeight,
          menuWidth: newMenuWidth
        }));
      }
    };
  }

  componentDidMount() {
    this.updateMenuHeight();
  }

  componentDidUpdate() {
    this.updateMenuHeight();
  }

  render() {
    const {
      isOpen,
      position,
      onClick,
      children,
      width,
      togglePopOver,
      zIndex
    } = this.props;
    const {
      menuHeight,
      menuWidth
    } = this.state;
    const scaleAnimation = (0, _exports.generateScaleAnimation)({
      elementHeight: menuHeight,
      elementWidth: Math.max((0, _typeGuards.isNil)(width) ? menuWidth : width, _exports.sizes.menu.width),
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
      zIndex: zIndex
    }, _react.default.createElement(CCMenu, {
      width: (0, _typeGuards.isNil)(width) ? 'auto' : `${width}px`,
      ref: this.menuRef,
      cssOverrides: scaleAnimation.outSideContentStyles
    }, _react.default.createElement(MenuContent, {
      cssOverrides: scaleAnimation.inSideContentStyles
    }, children)));
  }

}

exports.Menu = Menu;
Menu.defaultProps = {
  zIndex: 9998
};