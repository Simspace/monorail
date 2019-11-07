"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseHyperLinkStyles = exports.baseErrorBackgroundStyles = exports.baseErrorBorderStyles = exports.baseDisabledStyles = exports.baseToolBarStyles = exports.baseButtonBarStyles = exports.basePrimaryStyles = exports.baseSecondaryStyles = exports.baseIconButtonChromelessStyles = exports.baseChromelessStyles = exports.baseOutlineStyles = exports.floatingBackgroundStyles = exports.floatingOutlineStyles = exports.baseFocusStyles = void 0;

var _animation = require("./animation");

var _color = require("./color");

var _styledComponents = require("./styled-components");

var _theme = require("./theme");

const baseFocusStyles = (addPositionToParent = true) => _styledComponents.css`
  ${addPositionToParent && _styledComponents.css`
      position: relative;
    `};

  &::after {
    ${(0, _animation.visible)(false)};

    border-radius: inherit;
    border: 1px solid
      ${({
  theme: {
    mode
  }
}) => (0, _color.getColor)(mode === _theme.Mode.Dark ? _color.Colors.White : _color.Colors.BrandLightBlue)};
    bottom: 0;
    content: '';
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
  }

  &:focus {
    opacity: 0.85;
    outline: none;

    &::after {
      ${(0, _animation.visible)(true)};
    }
  }
`;

exports.baseFocusStyles = baseFocusStyles;

const floatingOutlineStyles = (color = 'currentColor') => _styledComponents.css`
  /**
  * Using inner element for border to avoid width issue when compared with other base buttons styles
  */
  &:before {
    border-radius: inherit;
    border: 1px solid ${color};
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

exports.floatingOutlineStyles = floatingOutlineStyles;

const floatingBackgroundStyles = (color = 'currentColor') => _styledComponents.css`
  /**
  * Using inner element for border to avoid width issue when compared with other base buttons styles
  */
  &:before {
    background: ${color};
    border-radius: inherit;
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

exports.floatingBackgroundStyles = floatingBackgroundStyles;

const baseOutlineStyles = (color = _color.Colors.BrandLightBlue, focusColor = _color.Colors.BrandDarkBlue) => _styledComponents.css`
  background: transparent;
  border: 0;
  color: ${(0, _color.getColor)(color)};

  ${floatingOutlineStyles()};

  &:focus {
    &:after {
      border-color: ${(0, _color.getColor)(focusColor)};
    }
  }

  &:hover {
    background: ${(0, _color.getColor)(color, 0.16)};
  }

  &:active {
    background: ${(0, _color.getColor)(color, 0.24)};
  }
`;

exports.baseOutlineStyles = baseOutlineStyles;

const baseChromelessStyles = (color = _theme.ThemeColors.ActionSecondary) => _styledComponents.css`
  background: transparent;
  border: 0;

  &:hover {
    background: ${(0, _theme.getThemeColor)(color, 0.1)};
  }

  &.is-active,
  &:active {
    background: ${(0, _theme.getThemeColor)(color, 0.2)};
  }
`;

exports.baseChromelessStyles = baseChromelessStyles;

const baseIconButtonChromelessStyles = (isActive = false) => _styledComponents.css`
  background: ${isActive ? (0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor, 0.12) : 'transparent'};
  color: ${(0, _theme.getThemeColor)(isActive ? _theme.ThemeColors.Text900 : _theme.ThemeColors.Text600)};
  border: 0;

  &:hover {
    background: ${(0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor, 0.06)};
    color: ${(0, _theme.getThemeColor)(isActive ? _theme.ThemeColors.Text900 : _theme.ThemeColors.Text700)};
  }

  &:active {
    background: ${(0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor, 0.16)};
    color: ${(0, _theme.getThemeColor)(isActive ? _theme.ThemeColors.Text900 : _theme.ThemeColors.Text700)};
  }

  &.is-active {
    background: ${(0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor, 0.12)};
  }
`;

exports.baseIconButtonChromelessStyles = baseIconButtonChromelessStyles;

const baseSecondaryStyles = (color = _theme.ThemeColors.ActionSecondary) => _styledComponents.css`
  background: ${(0, _theme.getThemeColor)(color, 0.12)};
  border: 0;
  color: ${(0, _theme.getThemeColor)(color)};

  &:hover {
    background: ${(0, _theme.getThemeColor)(color, 0.18)};
  }

  &:active {
    background: ${(0, _theme.getThemeColor)(color, 0.22)};
  }
`;

exports.baseSecondaryStyles = baseSecondaryStyles;

const basePrimaryStyles = (backgroundColor = _theme.ThemeColors.ActionPrimary, color = _theme.ThemeColors.BackgroundSecondary) => _styledComponents.css`
  background: ${(0, _theme.getThemeColor)(backgroundColor)};
  border: 0;
  color: ${(0, _theme.getThemeColor)(color)};
  position: relative;

  &:focus {
    &:after {
      border-color: ${(0, _theme.getThemeColor)(color, 0.3)};
    }
  }

  &:hover {
    ${props => floatingBackgroundStyles((0, _theme.getThemeColor)(color, 0.15)(props))};
  }

  &:active {
    ${props => floatingBackgroundStyles((0, _theme.getThemeColor)(color, 0.3)(props))};
  }
`;

exports.basePrimaryStyles = basePrimaryStyles;

const baseButtonBarStyles = (color = _color.Colors.Black) => _styledComponents.css`
  background: transparent;
  border: 0;
  color: ${(0, _color.getColor)(color, 0.32)};

  &:hover {
    background: ${(0, _color.getColor)(color, 0.04)};
    color: ${(0, _color.getColor)(color, 0.54)};
  }

  &:active {
    background: ${(0, _color.getColor)(color, 0.08)};
    color: ${(0, _color.getColor)(color, 0.54)};
  }
`;

exports.baseButtonBarStyles = baseButtonBarStyles;

const baseToolBarStyles = (color = _color.Colors.Black) => _styledComponents.css`
  background-color: ${(0, _color.getColor)(color, 0.14)};
  border: 0;
  color: ${(0, _color.getColor)(color, 0.74)};

  &:hover {
    background-color: ${(0, _color.getColor)(_color.Colors.Black, 0.2)};
    color: ${(0, _color.getColor)(color, 0.89)};
  }

  &:active {
    background-color: ${(0, _color.getColor)(_color.Colors.Black, 0.12)};
    color: ${(0, _color.getColor)(color, 0.74)};
  }
`;

exports.baseToolBarStyles = baseToolBarStyles;
const baseDisabledStyles = _styledComponents.css`
  cursor: default;
  opacity: 0.4;
  pointer-events: none;

  &:hover,
  &:focus,
  &:active {
    border-color: ${(0, _color.getColor)(_color.Colors.Black, 0.12)};
  }
`;
exports.baseDisabledStyles = baseDisabledStyles;
const baseErrorBorderStyles = _styledComponents.css`
  border-color: ${(0, _color.getColor)(_color.Colors.Red)};

  &:hover {
    border-color: ${(0, _color.getColor)(_color.Colors.Red)};
  }

  &:focus,
  &:active {
    border-color: ${(0, _color.getColor)(_color.Colors.Red)};
  }
`;
exports.baseErrorBorderStyles = baseErrorBorderStyles;
const baseErrorBackgroundStyles = _styledComponents.css`
  background: ${(0, _color.getColor)(_color.Colors.Red, 0.1)};

  &:hover,
  &:focus,
  &:active {
    background: ${(0, _color.getColor)(_color.Colors.Red, 0.1)};
  }
`;
exports.baseErrorBackgroundStyles = baseErrorBackgroundStyles;

const baseHyperLinkStyles = (color = _theme.ThemeColors.ActionPrimary) => _styledComponents.css`
  color: ${(0, _theme.getThemeColor)(color)};

  &:hover {
    color: ${(0, _theme.getThemeColor)(color, 0.8)};
  }

  &:active {
    color: ${(0, _theme.getThemeColor)(color, 0.7)};
  }

  &:visited {
    color: ${(0, _theme.getThemeColor)(color)};
  }
`;

exports.baseHyperLinkStyles = baseHyperLinkStyles;