"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StarFilled = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const StarFilled = props => {
  return _react.default.createElement("svg", _extends({
    width: "24",
    height: "24",
    id: "star-filled",
    viewBox: "0 0 14 13",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _react.default.createElement("path", {
    d: "M6.66667 10.18L10.7867 12.6667L9.69333 7.98L13.3333 4.82667L8.54 4.42L6.66667 0L4.79333 4.42L0 4.82667L3.64 7.98L2.54667 12.6667L6.66667 10.18Z"
  }));
};

exports.StarFilled = StarFilled;