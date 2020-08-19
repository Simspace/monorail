"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sword = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Sword = props => _react.default.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, props), _react.default.createElement("path", {
  d: "M5.748 17.08V19l9-9-.94-1-8.06 8.08zm14.12-13.04l.84.84c.39.39.39 1.02 0 1.41l-3.12 3.12 2.66 2.68-1.41 1.41-1.42-1.42L8.498 21h-4.75v-4.75l8.92-8.92-1.42-1.42 1.41-1.41 2.67 2.67 3.12-3.12c.4-.4 1.03-.4 1.42-.01z"
}));

exports.Sword = Sword;