"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Unscored = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Unscored = props => _react.default.createElement("svg", _extends({
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("g", {
  clipPath: "url(#clip0)"
}, _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M4.92904 19.0711L19.0712 4.92893C15.1659 1.02369 8.83428 1.02369 4.92904 4.92893C1.02379 8.83418 1.02379 15.1658 4.92904 19.0711ZM20.4854 3.51472C25.1717 8.20101 25.1717 15.799 20.4854 20.4853C15.7991 25.1716 8.20111 25.1716 3.51482 20.4853C-1.17147 15.799 -1.17147 8.20101 3.51482 3.51472C8.20111 -1.17157 15.7991 -1.17157 20.4854 3.51472Z"
})), _react.default.createElement("defs", null, _react.default.createElement("clipPath", {
  id: "clip0"
}, _react.default.createElement("rect", {
  width: "24",
  height: "24",
  fill: "#fff"
}))));

exports.Unscored = Unscored;