"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseDisabledStyles = exports.baseToolBarStyles = exports.baseButtonBarStyles = exports.basePrimaryStyles = exports.baseSecondaryStyles = exports.baseChromelessStyles = exports.baseOutlineStyles = exports.floatingBackgroundStyles = exports.floatingOutlineStyles = exports.baseFocusStyles = void 0;

var _animation = require("./animation");

var _color = require("./color");

var _styledComponents = require("styled-components");

const baseFocusStyles = (addPositionToParent = true) => (0, _styledComponents.css)(["", ";&::after{", ";border-radius:inherit;border:1px solid ", ";bottom:0;content:'';left:0;pointer-events:none;position:absolute;right:0;top:0;}&:focus{opacity:0.85;outline:none;&::after{", ";}}"], addPositionToParent && (0, _styledComponents.css)(["position:relative;"]), (0, _animation.visible)(false), (0, _color.getColor)(_color.Colors.BrandLightBlue), (0, _animation.visible)(true));

exports.baseFocusStyles = baseFocusStyles;

const floatingOutlineStyles = (color = 'currentColor') => (0, _styledComponents.css)(["&:before{border-radius:inherit;border:1px solid ", ";bottom:0;content:'';left:0;position:absolute;right:0;top:0;}"], color);

exports.floatingOutlineStyles = floatingOutlineStyles;

const floatingBackgroundStyles = (color = 'currentColor') => (0, _styledComponents.css)(["&:before{background:", ";border-radius:inherit;bottom:0;content:'';left:0;position:absolute;right:0;top:0;}"], color);

exports.floatingBackgroundStyles = floatingBackgroundStyles;

const baseOutlineStyles = (color = _color.Colors.BrandLightBlue, focusColor = _color.Colors.BrandDarkBlue) => (0, _styledComponents.css)(["background:transparent;border:0;color:", ";", ";&:focus{&:after{border-color:", ";}}&:hover{background:", ";}&:active{background:", ";}"], (0, _color.getColor)(color), floatingOutlineStyles(), (0, _color.getColor)(focusColor), (0, _color.getColor)(color, 0.16), (0, _color.getColor)(color, 0.24));

exports.baseOutlineStyles = baseOutlineStyles;

const baseChromelessStyles = (color = _color.Colors.BrandLightBlue) => (0, _styledComponents.css)(["background:transparent;border:0;&:hover{background:", ";}&.is-active,&:active{background:", ";}"], (0, _color.getColor)(color, 0.1), (0, _color.getColor)(color, 0.2));

exports.baseChromelessStyles = baseChromelessStyles;

const baseSecondaryStyles = (color = _color.Colors.BrandLightBlue) => (0, _styledComponents.css)(["background:", ";border:0;color:", ";&:hover{background:", ";}&:active{background:", ";}"], (0, _color.getColor)(color, 0.08), (0, _color.getColor)(color), (0, _color.getColor)(color, 0.16), (0, _color.getColor)(color, 0.24));

exports.baseSecondaryStyles = baseSecondaryStyles;

const basePrimaryStyles = (color = _color.Colors.BrandLightBlue, backgroundColor = _color.Colors.White) => (0, _styledComponents.css)(["background:", ";border:0;color:", ";position:relative;&:focus{&:after{border-color:", ";}}&:hover{", ";}&:active{", ";}"], (0, _color.getColor)(color), (0, _color.getColor)(_color.Colors.White), (0, _color.getColor)(backgroundColor, 0.3), floatingBackgroundStyles((0, _color.getColor)(backgroundColor, 0.15)), floatingBackgroundStyles((0, _color.getColor)(backgroundColor, 0.3)));

exports.basePrimaryStyles = basePrimaryStyles;

const baseButtonBarStyles = (color = _color.Colors.Black) => (0, _styledComponents.css)(["background:transparent;border:0;color:", ";&:hover{background:", ";color:", ";}&:active{background:", ";color:", ";}"], (0, _color.getColor)(color, 0.32), (0, _color.getColor)(color, 0.04), (0, _color.getColor)(color, 0.54), (0, _color.getColor)(color, 0.08), (0, _color.getColor)(color, 0.54));

exports.baseButtonBarStyles = baseButtonBarStyles;

const baseToolBarStyles = (color = _color.Colors.Black) => (0, _styledComponents.css)(["background-color:", ";border:0;color:", ";&:hover{background-color:", ";color:", ";}&:active{background-color:", ";color:", ";}"], (0, _color.getColor)(color, 0.14), (0, _color.getColor)(color, 0.74), (0, _color.getColor)(_color.Colors.Black, 0.2), (0, _color.getColor)(color, 0.89), (0, _color.getColor)(_color.Colors.Black, 0.12), (0, _color.getColor)(color, 0.74));

exports.baseToolBarStyles = baseToolBarStyles;
const baseDisabledStyles =
/*#__PURE__*/
(0, _styledComponents.css)(["cursor:default;opacity:0.4;pointer-events:none;"]);
exports.baseDisabledStyles = baseDisabledStyles;