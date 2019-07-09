"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarHalf = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const StarHalf = props => {
  return _react.default.createElement("svg", _extends({
    width: "24",
    height: "24",
    viewBox: "0 0 16 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.1075 5.465L15.5 5.93L11.4125 9.4775L12.635 14.75L8 11.9525L3.365 14.75L4.595 9.4775L0.5 5.93L5.8925 5.4725L8 0.5L10.1075 5.465ZM8 3.575V10.55L10.8275 12.26L10.0775 9.05L12.5675 6.89L9.2825 6.605L8 3.575Z",
    fill: "#000000"
  }));
};

exports.StarHalf = StarHalf;