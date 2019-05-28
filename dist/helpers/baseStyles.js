"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseHyperLinkStyles = exports.baseDisabledStyles = exports.baseToolBarStyles = exports.baseButtonBarStyles = exports.basePrimaryStyles = exports.baseSecondaryStyles = exports.baseIconButtonChromelessStyles = exports.baseChromelessStyles = exports.baseOutlineStyles = exports.floatingBackgroundStyles = exports.floatingOutlineStyles = exports.baseFocusStyles = void 0;

var _animation = require("./animation");

var _color = require("./color");

var _styledComponents = require("./styled-components");

var _theme = require("./theme");

const baseFocusStyles = (addPositionToParent = true) => (0, _styledComponents.css)(["", ";&::after{", ";border-radius:inherit;border:1px solid ", ";bottom:0;content:'';left:0;pointer-events:none;position:absolute;right:0;top:0;}&:focus{opacity:0.85;outline:none;&::after{", ";}}"], addPositionToParent && (0, _styledComponents.css)(["position:relative;"]), (0, _animation.visible)(false), ({
  theme: {
    mode
  }
}) => (0, _color.getColor)(mode === _theme.Mode.Dark ? _color.Colors.White : _color.Colors.BrandLightBlue), (0, _animation.visible)(true));

exports.baseFocusStyles = baseFocusStyles;

const floatingOutlineStyles = (color = 'currentColor') => (0, _styledComponents.css)(["&:before{border-radius:inherit;border:1px solid ", ";bottom:0;content:'';left:0;position:absolute;right:0;top:0;}"], color);

exports.floatingOutlineStyles = floatingOutlineStyles;

const floatingBackgroundStyles = (color = 'currentColor') => (0, _styledComponents.css)(["&:before{background:", ";border-radius:inherit;bottom:0;content:'';left:0;position:absolute;right:0;top:0;}"], color);

exports.floatingBackgroundStyles = floatingBackgroundStyles;

const baseOutlineStyles = (color = _color.Colors.BrandLightBlue, focusColor = _color.Colors.BrandDarkBlue) => (0, _styledComponents.css)(["background:transparent;border:0;color:", ";", ";&:focus{&:after{border-color:", ";}}&:hover{background:", ";}&:active{background:", ";}"], (0, _color.getColor)(color), floatingOutlineStyles(), (0, _color.getColor)(focusColor), (0, _color.getColor)(color, 0.16), (0, _color.getColor)(color, 0.24));

exports.baseOutlineStyles = baseOutlineStyles;

const baseChromelessStyles = (color = _theme.ThemeColors.ActionSecondary) => (0, _styledComponents.css)(["background:transparent;border:0;&:hover{background:", ";}&.is-active,&:active{background:", ";}"], (0, _theme.getThemeColor)(color, 0.1), (0, _theme.getThemeColor)(color, 0.2));

exports.baseChromelessStyles = baseChromelessStyles;

const baseIconButtonChromelessStyles = (isActive = false) => (0, _styledComponents.css)(["background:", ";color:", ";border:0;&:hover{background:", ";color:", ";}&:active{background:", ";color:", ";}&.is-active{background:", ";}"], isActive ? (0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor, 0.12) : 'transparent', (0, _theme.getThemeColor)(isActive ? _theme.ThemeColors.Text900 : _theme.ThemeColors.Text600), (0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor, 0.06), (0, _theme.getThemeColor)(isActive ? _theme.ThemeColors.Text900 : _theme.ThemeColors.Text700), (0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor, 0.16), (0, _theme.getThemeColor)(isActive ? _theme.ThemeColors.Text900 : _theme.ThemeColors.Text700), (0, _theme.getThemeColor)(_theme.ThemeColors.PrimaryColor, 0.12));

exports.baseIconButtonChromelessStyles = baseIconButtonChromelessStyles;

const baseSecondaryStyles = (color = _theme.ThemeColors.ActionSecondary) => (0, _styledComponents.css)(["background:", ";border:0;color:", ";&:hover{background:", ";}&:active{background:", ";}"], (0, _theme.getThemeColor)(color, 0.12), (0, _theme.getThemeColor)(color), (0, _theme.getThemeColor)(color, 0.18), (0, _theme.getThemeColor)(color, 0.22));

exports.baseSecondaryStyles = baseSecondaryStyles;

const basePrimaryStyles = (color = _theme.ThemeColors.ActionPrimary, backgroundColor = _theme.ThemeColors.BackgroundPrimary) => (0, _styledComponents.css)(["background:", ";border:0;color:", ";position:relative;&:focus{&:after{border-color:", ";}}&:hover{", ";}&:active{", ";}"], (0, _theme.getThemeColor)(color), (0, _color.getColor)(_color.Colors.White), (0, _theme.getThemeColor)(backgroundColor, 0.3), props => floatingBackgroundStyles((0, _theme.getThemeColor)(backgroundColor, 0.15)(props)), props => floatingBackgroundStyles((0, _theme.getThemeColor)(backgroundColor, 0.3)(props)));

exports.basePrimaryStyles = basePrimaryStyles;

const baseButtonBarStyles = (color = _color.Colors.Black) => (0, _styledComponents.css)(["background:transparent;border:0;color:", ";&:hover{background:", ";color:", ";}&:active{background:", ";color:", ";}"], (0, _color.getColor)(color, 0.32), (0, _color.getColor)(color, 0.04), (0, _color.getColor)(color, 0.54), (0, _color.getColor)(color, 0.08), (0, _color.getColor)(color, 0.54));

exports.baseButtonBarStyles = baseButtonBarStyles;

const baseToolBarStyles = (color = _color.Colors.Black) => (0, _styledComponents.css)(["background-color:", ";border:0;color:", ";&:hover{background-color:", ";color:", ";}&:active{background-color:", ";color:", ";}"], (0, _color.getColor)(color, 0.14), (0, _color.getColor)(color, 0.74), (0, _color.getColor)(_color.Colors.Black, 0.2), (0, _color.getColor)(color, 0.89), (0, _color.getColor)(_color.Colors.Black, 0.12), (0, _color.getColor)(color, 0.74));

exports.baseToolBarStyles = baseToolBarStyles;
const baseDisabledStyles =
/*#__PURE__*/
(0, _styledComponents.css)(["cursor:default;opacity:0.4;pointer-events:none;"]);
exports.baseDisabledStyles = baseDisabledStyles;

const baseHyperLinkStyles = (color = _theme.ThemeColors.ActionPrimary) => (0, _styledComponents.css)(["color:", ";&:hover{color:", ";}&:active{color:", ";}&:visited{color:", ";}"], (0, _theme.getThemeColor)(color), (0, _theme.getThemeColor)(color, 0.8), (0, _theme.getThemeColor)(color, 0.7), (0, _theme.getThemeColor)(color));

exports.baseHyperLinkStyles = baseHyperLinkStyles;