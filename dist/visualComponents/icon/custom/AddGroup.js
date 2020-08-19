"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddGroup = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const AddGroup = props => _react.default.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, props), _react.default.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18c.69 0 1.36-.087 2-.252V15h3v-3h2.748A8 8 0 1010 18zM6.667 9.583V8.75h6.666v.833H6.667zm0 .834h4.166v.833H6.667v-.833zM19 19h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z",
  clipRule: "evenodd"
}));

exports.AddGroup = AddGroup;