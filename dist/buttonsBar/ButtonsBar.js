"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonsBar = exports.ToolbarsContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _typeGuards = require("../sharedHelpers/typeGuards");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../helpers/exports");

var _Button = require("../buttons/Button");

var _buttonTypes = require("../buttons/buttonTypes");

var _Icon = require("../icon/Icon");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const ButtonsBarIndicator =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "ButtonsBar__ButtonsBarIndicator",
  componentId: "sc-1qi2mcn-0"
})(({
  display,
  left,
  active,
  width,
  duration
}) => (0, _styledComponents.css)(["", ";", " left:", "px;width:", "px;transition-duration:", "ms;bottom:0;height:100%;position:absolute;transition-property:all;transition-timing-function:ease-in-out;"], _Button.buttonPressedDisplayCss[display], (0, _exports.visible)(active), left, width, duration));
/**
 * Buttons Bar - Group
 */


const StyledButtonsGroup =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "ButtonsBar__StyledButtonsGroup",
  componentId: "sc-1qi2mcn-1"
})(({
  mode
}) => (0, _styledComponents.css)(["", ";", ";border-radius:inherit;"], (0, _exports.flexFlow)('row'), mode === _buttonTypes.ButtonsBarMode.Default && (0, _exports.floatingOutlineStyles)((0, _exports.getColor)(_exports.Colors.Black, 0.16))));

const buttonBarButtonStyle = (multiple = false) => (0, _styledComponents.css)(["border-radius:inherit;&:before{border-width:0;}", ";"], !multiple && (0, _styledComponents.css)(["background:transparent;"]));

const StyledButtonWrapper =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "ButtonsBar__StyledButtonWrapper",
  componentId: "sc-1qi2mcn-2"
})(({
  mode,
  multiple
}) => (0, _styledComponents.css)(["position:relative;", ";", "{color:inherit;}"], mode === _buttonTypes.ButtonsBarMode.Toolbar ? (0, _styledComponents.css)(["", "{margin:2px;}"], _Button.StyledButton) : (0, _styledComponents.css)(["border-radius:inherit;&:not(:first-child){", ";border-left:1px solid ", ";border-top-left-radius:0;border-bottom-left-radius:0;&:before{border-width:0 0 0 1px;left:-1px;}}&:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0;}", "{", ";}"], (0, _exports.floatingOutlineStyles)((0, _exports.getColor)(_exports.Colors.Black, 0.16)), (0, _exports.getColor)(_exports.Colors.White), _Button.StyledButton, buttonBarButtonStyle(multiple)), _Icon.Icon));
/**
 * Buttons Bar Props
 */


const StyledButtonsBar =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "ButtonsBar__StyledButtonsBar",
  componentId: "sc-1qi2mcn-3"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";display:inline-block;overflow:hidden;position:relative;vertical-align:middle;", ";"], (0, _exports.borderRadius)(), cssOverrides));
/**
 * Buttons Bar State
 */


/**
 * ToolbarsContainer
 * Use this container for displaying multiple Toolbars in a single row
 */
const ToolbarsContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "ButtonsBar__ToolbarsContainer",
  componentId: "sc-1qi2mcn-4"
})(["vertical-align:middle;", "{border-radius:0;&:not(:first-child){border-left:1px solid ", ";margin-left:4px;padding-left:4px;}}"], StyledButtonsBar, (0, _exports.getColor)(_exports.Colors.Black, 0.16));
/**
 * Buttons Bar
 */


exports.ToolbarsContainer = ToolbarsContainer;

class ButtonsBar extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      indicatorLeft: 0,
      indicatorTransitionDuration: 0,
      indicatorWidth: 0,
      buttonsStatus: [],
      buttonsRef: [],
      lastActiveIndex: -1
    };

    this.getIndicatorParams = () => {
      const {
        mode,
        multiple
      } = this.props;
      const {
        buttonsRef,
        lastActiveIndex
      } = this.state;

      if (!multiple && mode === _buttonTypes.ButtonsBarMode.Default && lastActiveIndex >= 0) {
        const element = buttonsRef[lastActiveIndex].current;

        if (!(0, _typeGuards.isNil)(element)) {
          const offset = lastActiveIndex > 0 ? 1 : 0;
          return {
            indicatorWidth: element.getBoundingClientRect().width - offset,
            indicatorLeft: element.offsetLeft + offset
          };
        }
      }

      return {
        indicatorLeft: 0,
        indicatorWidth: 0
      };
    };

    this.updateActive = (index = -1) => {
      const {
        onChange,
        multiple,
        required
      } = this.props;
      const {
        lastActiveIndex
      } = this.state;
      const buttons = [...this.state.buttonsStatus];
      let activeIndex = index;

      if (multiple) {
        if (!required || !buttons[index] || buttons.filter(item => item).length > 1) {
          buttons[index] = !buttons[index];
        }
      } else {
        if (lastActiveIndex !== index) {
          buttons[index] = !buttons[index];

          if (lastActiveIndex >= 0) {
            buttons[lastActiveIndex] = false;
          }
        } else if (!required) {
          buttons[index] = !buttons[index];
        }

        if (!buttons[index]) {
          activeIndex = -1;
        }
      }

      this.setState(() => ({
        buttonsStatus: buttons,
        indicatorTransitionDuration: activeIndex < 0 || lastActiveIndex < 0 ? 0 : 150,
        lastActiveIndex: activeIndex
      }));
      onChange(index, buttons);
    };
  }

  componentDidMount() {
    const {
      mode,
      multiple,
      required
    } = this.props;
    const buttonsStatus = [];
    const buttonsRef = [];
    let someActive = false;

    _react.default.Children.map(this.props.children, child => {
      if (!(0, _typeGuards.isNil)(child) && _react.default.isValidElement(child)) {
        const pressed = (0, _typeGuards.isTrue)(child.props.pressed);
        buttonsStatus.push(pressed);

        if (mode === _buttonTypes.ButtonsBarMode.Default) {
          buttonsRef.push((0, _react.createRef)());
        }

        if (pressed) {
          someActive = true;
        }
      }
    });

    if (required && !someActive && buttonsStatus.length > 0) {
      buttonsStatus[0] = true;
    }

    if (!multiple) {
      /**
       * Reduce selected buttons for multiple default selections
       */
      let activeIndex = -1;
      buttonsStatus.map((status, index) => {
        if (status) {
          if (activeIndex >= 0) {
            buttonsStatus[activeIndex] = false;
          }

          activeIndex = index;
        }
      });
      this.setState(() => ({
        buttonsStatus,
        buttonsRef,
        lastActiveIndex: activeIndex
      }));
    } else {
      this.setState(() => ({
        buttonsStatus
      }));
    }
  }

  renderBar() {
    const {
      children,
      size,
      mode,
      multiple,
      display
    } = this.props;
    const {
      buttonsStatus,
      buttonsRef
    } = this.state;
    return _react.default.Children.map(children, (child, index) => {
      if (_react.default.isValidElement(child)) {
        const buttonDisplay = mode === _buttonTypes.ButtonsBarMode.Toolbar ? _buttonTypes.ButtonDisplay.Toolbar : display;
        const childProps = { ...child.props,
          onClick: event => {
            this.updateActive(index);
            child.props.onClick(event);
          },
          display: buttonDisplay,
          size: size || _buttonTypes.ButtonSize.Large,
          mode: _buttonTypes.ButtonMode.Push,
          pressed: buttonsStatus[index],
          shape: _buttonTypes.IconButtonShape.Square
        };
        return _react.default.createElement(StyledButtonWrapper, {
          ref: buttonsRef[index],
          mode: mode,
          pressed: buttonsStatus[index],
          multiple: multiple
        }, _react.default.cloneElement(child, childProps));
      } else {
        return false;
      }
    });
  }
  /**
   * Set indicator params positioning after the ButtonsBar have been rendered
   */


  componentDidUpdate() {
    const {
      indicatorLeft,
      indicatorWidth
    } = this.state;
    const indicatorParams = this.getIndicatorParams();

    if (indicatorParams.indicatorLeft !== indicatorLeft || indicatorParams.indicatorWidth !== indicatorWidth) {
      this.setState(() => indicatorParams);
    }
  }

  render() {
    const {
      multiple,
      mode,
      display,
      className,
      cssOverrides
    } = this.props;
    const {
      indicatorTransitionDuration,
      indicatorLeft,
      indicatorWidth,
      lastActiveIndex
    } = this.state;
    return _react.default.createElement(StyledButtonsBar, {
      className: className,
      cssOverrides: cssOverrides
    }, !multiple && mode === _buttonTypes.ButtonsBarMode.Default && _react.default.createElement(ButtonsBarIndicator, {
      display: display,
      width: indicatorWidth,
      active: lastActiveIndex >= 0,
      left: indicatorLeft,
      duration: indicatorTransitionDuration
    }), _react.default.createElement(StyledButtonsGroup, {
      mode: mode
    }, this.renderBar()));
  }

}

exports.ButtonsBar = ButtonsBar;
ButtonsBar.defaultProps = {
  display: _buttonTypes.ButtonDisplay.ButtonBar,
  size: _buttonTypes.ButtonSize.Large,
  multiple: false,
  required: false,
  mode: _buttonTypes.ButtonsBarMode.Default,
  css: ``,
  onChange: () => {}
};