"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonsBar = exports.ToolbarsContainer = exports.ButtonsBarContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

var _theme = require("../../helpers/theme");

var _Button = require("../buttons/Button");

var _buttonTypes = require("../buttons/buttonTypes");

var _Icon = require("../icon/Icon");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const StyledButtonWrapper = _styledComponents.default.div(({
  mode,
  theme
}) => _styledComponents.css`
    position: relative;

    ${mode === _buttonTypes.ButtonsBarMode.Toolbar ? _styledComponents.css`
          ${_Button.StyledButton} {
            margin: 2px;
          }
        ` : _styledComponents.css`
          border-radius: inherit;

          &:not(:first-child) {
            ${(0, _exports.floatingOutlineStyles)((0, _exports.getColor)(_exports.Colors.Black, 0.16))};

            border-left: 1px solid ${(0, _exports.getColor)(_exports.Colors.White)};
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;

            &:before {
              border-width: 0 0 0 1px;
              left: -1px;
            }
          }

          &:not(:last-child) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }

          ${_Button.StyledButton} {
            border-radius: inherit;

            &:before {
              border-width: 0;
            }
          }
        `};

    ${_Icon.Icon} {
      ${theme.mode !== _theme.Mode.Dark && 'color: inherit;'};
    }
  `);
/**
 * Buttons Bar Props
 */


const ButtonsBarContainer = _styledComponents.default.div(({
  cssOverrides,
  mode
}) => _styledComponents.css`
    ${mode === _buttonTypes.ButtonsBarMode.Default && (0, _exports.floatingOutlineStyles)((0, _exports.getColor)(_exports.Colors.Black, 0.16))};

    ${(0, _exports.flexFlow)('row')};
    ${(0, _exports.borderRadius)()};

    overflow: hidden;
    position: relative;
    vertical-align: middle;

    ${cssOverrides};
  `);
/**
 * ToolbarsContainer
 * Use this container for displaying multiple Toolbars in a single row
 */


exports.ButtonsBarContainer = ButtonsBarContainer;
const ToolbarsContainer = _styledComponents.default.div`
  display: flex;
  vertical-align: middle;

  ${ButtonsBarContainer} {
    border-radius: 0;
    display: inline-flex;

    &:not(:first-child) {
      border-left: 1px solid ${(0, _exports.getColor)(_exports.Colors.Black, 0.16)};
      margin-left: 4px;
      padding-left: 4px;
    }
  }
`;
/**
 * Buttons Bar
 */

exports.ToolbarsContainer = ToolbarsContainer;

const ButtonsBar = ({
  children,
  size,
  mode,
  display,
  ...domProps
}) => {
  const renderBar = () => _react.default.Children.map(children, (child, index) => {
    if (_react.default.isValidElement(child)) {
      const buttonDisplay = mode === _buttonTypes.ButtonsBarMode.Toolbar ? _buttonTypes.ButtonDisplay.Toolbar : display;
      const childProps = { ...child.props,
        display: buttonDisplay,
        size,
        mode: _buttonTypes.ButtonMode.Push,
        shape: _buttonTypes.IconButtonShape.Square
      };
      return _react.default.createElement(StyledButtonWrapper, {
        mode: mode,
        pressed: childProps.pressed
      }, _react.default.cloneElement(child, childProps));
    } else {
      return false;
    }
  });

  return _react.default.createElement(ButtonsBarContainer, _extends({
    mode: mode
  }, domProps), renderBar());
};

exports.ButtonsBar = ButtonsBar;
ButtonsBar.defaultProps = {
  display: _buttonTypes.ButtonDisplay.ButtonBar,
  size: _buttonTypes.ButtonSize.Large,
  mode: _buttonTypes.ButtonsBarMode.Default
};