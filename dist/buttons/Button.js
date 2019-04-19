"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.buttonDefaultProps = exports.StyledButton = exports.buttonSizeCss = exports.buttonPressedDisplayCss = exports.buttonDisplayCss = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../helpers/exports");

var _buttonTypes = require("./buttonTypes");

var _Icon = require("../icon/Icon");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const buttonDisplayCss = {
  [_buttonTypes.ButtonDisplay.Primary]: (0, _exports.basePrimaryStyles)(),
  [_buttonTypes.ButtonDisplay.Secondary]: (0, _exports.baseSecondaryStyles)(),
  [_buttonTypes.ButtonDisplay.Outline]: (0, _exports.baseOutlineStyles)(),
  [_buttonTypes.ButtonDisplay.Chromeless]: (0, _styledComponents.css)(["", ";color:", ";line-height:25px;"], (0, _exports.baseChromelessStyles)(), (0, _exports.getColor)(_exports.Colors.BrandLightBlue)),
  [_buttonTypes.ButtonDisplay.ButtonBar]: (0, _styledComponents.css)(["", ";", ";"], (0, _exports.floatingOutlineStyles)(), (0, _exports.baseButtonBarStyles)()),
  [_buttonTypes.ButtonDisplay.Toolbar]: (0, _styledComponents.css)(["", ";"], (0, _exports.baseButtonBarStyles)())
};
exports.buttonDisplayCss = buttonDisplayCss;
const buttonPressedDisplayCss = {
  [_buttonTypes.ButtonDisplay.Primary]: (0, _exports.basePrimaryStyles)(_exports.Colors.BrandDarkBlue),
  [_buttonTypes.ButtonDisplay.Secondary]: (0, _exports.basePrimaryStyles)(),
  [_buttonTypes.ButtonDisplay.Outline]: (0, _exports.basePrimaryStyles)(),
  [_buttonTypes.ButtonDisplay.Chromeless]: (0, _exports.basePrimaryStyles)(),
  [_buttonTypes.ButtonDisplay.ButtonBar]: (0, _styledComponents.css)(["", ";color:", ";&:active{color:", ";}&:hover{color:", ";}"], (0, _exports.basePrimaryStyles)(), (0, _exports.getColor)(_exports.Colors.White), (0, _exports.getColor)(_exports.Colors.White), (0, _exports.getColor)(_exports.Colors.White)),
  [_buttonTypes.ButtonDisplay.Toolbar]: (0, _exports.baseToolBarStyles)()
};
exports.buttonPressedDisplayCss = buttonPressedDisplayCss;
const buttonSizeCss = {
  [_buttonTypes.ButtonSize.Dense]: (0, _styledComponents.css)(["height:16px;padding:0 7px;"]),
  [_buttonTypes.ButtonSize.Compact]: (0, _styledComponents.css)(["height:24px;padding:0 7px;"]),
  [_buttonTypes.ButtonSize.Default]: (0, _styledComponents.css)(["height:24px;padding:0 11px;"]),
  [_buttonTypes.ButtonSize.Large]: (0, _styledComponents.css)(["height:32px;padding:0 15px;"])
};
exports.buttonSizeCss = buttonSizeCss;

const StyledButton =
/*#__PURE__*/
_styledComponents.default.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-1yaavbq-0"
})(({
  disabled,
  size,
  display,
  mode,
  pressed,
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";", ";", ";", ";", ";cursor:pointer;flex-shrink:0;outline:none;text-transform:uppercase;user-select:none;box-sizing:border-box;align-items:center;justify-content:center;margin:0;overflow:hidden;", ";", "{color:currentColor;margin:auto 4px auto - 4px;}", ";", ";"], mode === _buttonTypes.ButtonMode.Push && pressed ? buttonPressedDisplayCss[display] : buttonDisplayCss[display], buttonSizeCss[size], disabled && _exports.baseDisabledStyles, (0, _exports.typography)(700, _exports.FontSizes.Title5), (0, _exports.borderRadius)(), (0, _exports.flexFlow)('row'), _exports.buttonTransition, _Icon.Icon, (0, _exports.baseFocusStyles)(), cssOverrides));

exports.StyledButton = StyledButton;
const buttonDefaultProps = {
  display: _buttonTypes.ButtonDisplay.Primary,
  size: _buttonTypes.ButtonSize.Default,
  type: 'button',
  onClick: () => {},
  disabled: false,
  pressed: false,
  mode: _buttonTypes.ButtonMode.Default
};
exports.buttonDefaultProps = buttonDefaultProps;

class Button extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      initial: false,
      previous: false,
      pressed: false
      /**
       * Keep initial pressed state to compare when new props arrive
       */

    };

    this.onClickHandler = event => {
      const {
        onClick
      } = this.props;
      const {
        pressed
      } = this.state;
      this.setState(() => ({
        pressed: !pressed
      }));
      onClick(event);
    };
  }

  componentDidMount() {
    const {
      mode,
      pressed
    } = this.props;

    if (mode === _buttonTypes.ButtonMode.Push) {
      this.setState(() => ({
        pressed,
        initial: pressed,
        previous: pressed
      }));
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { ...prevState,
      previous: nextProps.pressed,
      pressed: nextProps.mode === _buttonTypes.ButtonMode.Push && // Use prev button pressed state if prop has not changed
      nextProps.pressed === prevState.initial && nextProps.pressed === prevState.previous ? prevState.pressed : nextProps.pressed
    };
  }
  /**
   * Click event handler for Push buttons
   */


  render() {
    const {
      children,
      className,
      mode,
      onClick,
      ...otherProps
    } = this.props;
    const {
      pressed
    } = this.state;
    return _react.default.createElement(StyledButton, _extends({}, otherProps, {
      className: `new-button ${className}`,
      mode: mode,
      onClick: mode === _buttonTypes.ButtonMode.Push ? this.onClickHandler : onClick,
      pressed: pressed
    }), children);
  }

}

exports.Button = Button;
Button.defaultProps = buttonDefaultProps;