"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Retry = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Retry = props => {
  return _react.default.createElement("svg", _extends({
    width: "12",
    height: "14",
    viewBox: "0 0 12 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("path", {
    d: "M5.99984 3.33341V0.666748L2.6665 4.00008L5.99984 7.33341V4.66675C8.2065 4.66675 9.99984 6.46008 9.99984 8.66675C9.99984 10.8734 8.2065 12.6667 5.99984 12.6667C3.79317 12.6667 1.99984 10.8734 1.99984 8.66675H0.666504C0.666504 11.6134 3.05317 14.0001 5.99984 14.0001C8.9465 14.0001 11.3332 11.6134 11.3332 8.66675C11.3332 5.72008 8.9465 3.33341 5.99984 3.33341Z",
    fill: "black",
    fillOpacity: "0.54"
  }));
};

exports.Retry = Retry;