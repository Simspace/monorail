"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortDescending = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SortDescending = props => /*#__PURE__*/_react.default.createElement("svg", _extends({
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/_react.default.createElement("path", {
  d: "M10 13V11H18V13H10ZM10 19V17H14V19H10ZM10 7V5H22V7H10ZM6 17H8.5L5 20.5L1.5 17H4V4H6V17Z"
}));

exports.SortDescending = SortDescending;