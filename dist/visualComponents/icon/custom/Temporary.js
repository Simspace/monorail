"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Temporary = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Temporary = props => _react.default.createElement("svg", _extends({
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, props), _react.default.createElement("path", {
  d: "M13.8531 12.1577L12.9568 12.6763V22L21.0273 17.3402V8.0166L13.8531 12.1577Z"
}), _react.default.createElement("path", {
  d: "M15.3136 3.79668L12.2099 2L3.91528 6.78838L7.02317 8.58506L15.3136 3.79668Z"
}), _react.default.createElement("path", {
  d: "M20.5004 6.78839L16.9236 4.75105L8.63318 9.53942L9.10621 9.78424L12.2099 11.5768L15.2971 9.79669L20.5004 6.78839Z"
}), _react.default.createElement("path", {
  d: "M8.00658 12.9668L6.5211 12.2033V9.82986L3.45886 8.06638V17.3236L11.4713 21.9502V12.6929L8.00658 10.6971V12.9668Z"
}));

exports.Temporary = Temporary;