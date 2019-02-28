"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CommonStyles = require("../../CommonStyles");

var _Overlay = require("../../toggle/Overlay");

var _Option = require("fp-ts/lib/Option");

var _primitiveGuards = require("../../CoreUtils/primitive-guards");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const CCMenu = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.borderRadius)(_CommonStyles.BorderRadius.Medium)};
  ${(0, _CommonStyles.flexFlow)()};
  ${(0, _CommonStyles.getElevation)(_CommonStyles.ElevationRange.Elevation6)};

  background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
  overflow: hidden;
  position: fixed;
  width: ${({
  width
}) => width};
  min-width: ${_CommonStyles.sizes.menu.width}px;

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
const MenuContent = (0, _styledComponents.default)('div')`
  ${({
  css: cssOverride
}) => _styledComponents.css`
    ${(0, _CommonStyles.flexFlow)()};

    height: 100%;
    overflow: auto;
    padding: 4px 0;
    width: 100%;

    ${cssOverride};
  `};
`;

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
      togglePopOver
    } = this.props;
    const {
      menuHeight,
      menuWidth
    } = this.state;
    const scaleAnimation = (0, _CommonStyles.generateScaleAnimation)({
      elementHeight: menuHeight,
      elementWidth: Math.max((0, _primitiveGuards.isNil)(width) ? menuWidth : width, _CommonStyles.sizes.menu.width),
      isOpen,
      position
    });
    return _react.default.createElement(_Overlay.Overlay, {
      isOpen: isOpen,
      onClick: onClick,
      overlayProps: {
        chromeless: true
      },
      togglePopOver: togglePopOver
    }, _react.default.createElement(CCMenu, {
      width: (0, _primitiveGuards.isNil)(width) ? 'auto' : `${width}px`,
      ref: this.menuRef,
      css: scaleAnimation.outSideContentStyles
    }, _react.default.createElement(MenuContent, {
      css: scaleAnimation.inSideContentStyles
    }, children)));
  }

}

exports.Menu = Menu;